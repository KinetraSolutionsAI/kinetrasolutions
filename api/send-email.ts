import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Gestione CORS per permettere le chiamate dal frontend
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!process.env.RESEND_API_KEY) {
      console.error("ERRORE: RESEND_API_KEY non trovata nelle variabili d'ambiente.");
      return res.status(500).json({ error: 'Configurazione server mancante (API Key)' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Kinetra Solutions <info@kinetrasolutions.com>',
      to: ['info@kinetrasolutions.com'],
      subject: `Nuovo Contatto da Landing: ${name}`,
      replyTo: email, // Formato camelCase
      reply_to: email, // Formato snake_case (per sicurezza)
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">Nuovo Messaggio da Kinetra Solutions</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone || 'Non fornito'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Messaggio:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Errore Resend:", error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error("Errore generico API:", err);
    return res.status(500).json({ error: err.message });
  }
}
