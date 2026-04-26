import { useEffect } from "react";
import SectorPage from "@/components/SectorPage";

const Estetica = () => {
  useEffect(() => {
    document.title = "Estetica e Parrucchieri | Kinetra Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectorPage
      eyebrow="Estetica e Parrucchieri"
      title="L'AI che rivoluziona la gestione del"
      highlight="tuo salone"
      intro={[
        "Prenotazioni h24, agenda intelligente.",
        "Richiami automatici e recupero no-show.",
        "Trasforma il tempo in pura arte.",
      ]}
      problems={[
        {
          title: "Mani impegnate, chiamate perse",
          subtitle: "Interruzioni durante i trattamenti",
          description:
            "Mentre lavori non puoi rispondere: ogni squillo è un cliente che va altrove.",
          bullets: [
            "Interruzioni durante i trattamenti",
            "Chiamate perse = agenda vuota",
            "Impossibile rispondere con mani occupate",
          ],
        },
        {
          title: "Il costo dei buchi in agenda",
          subtitle: "No-show del 15-25%",
          description:
            "Un appuntamento saltato è un'ora persa per sempre. Ogni slot vuoto costa soldi.",
          bullets: [
            "No-show del 15-25%",
            "Cancellazioni last-minute",
            "Mancato guadagno irrecuperabile",
          ],
        },
        {
          title: "Clienti che non tornano",
          subtitle: "Nessun richiamo automatico",
          description:
            "Senza richiami costanti, il cliente si dimentica. Devi richiamare manualmente uno per uno.",
          bullets: [
            "Clienti che scompaiono",
            "Nessun richiamo automatico",
            "Tempo sprecato a rincorrere",
          ],
        },
        {
          title: "Scontrino medio basso",
          subtitle: "Potenziale inespresso",
          description:
            "Difficoltà nell'upselling. Opportunità perse per trattamenti aggiuntivi.",
          bullets: [
            "Solo servizio base venduto",
            "Nessun suggerimento automatico",
            "Potenziale inespresso",
          ],
        },
      ]}
      solutions={[
        {
          title: "Receptionist AI h24",
          subtitle: "Tu lavori. L'AI riempie l'agenda.",
          description:
            "Gestisce prenotazioni su WhatsApp in tempo reale, senza distrazioni. Non perdi più clienti.",
          bullets: [
            "Risponde h24 in 30 secondi",
            "Disponibilità real-time",
            "Gestisce liste d'attesa",
            "Zero distrazioni durante il lavoro",
          ],
          closer: "Tu lavori. L'AI riempie l'agenda.",
        },
        {
          title: "Recupero No-Show",
          subtitle: "Ogni appuntamento diventa incasso",
          description:
            "L'AI gestisce promemoria, filtra clienti inaffidabili e riempie i buchi in agenda.",
          bullets: [
            "Reminder anti-dimenticanza",
            "Conferma istantanea",
            "Gestione last-minute",
            "Blocco no-show seriali",
          ],
          closer: "Zero buchi, 100% produttività.",
        },
        {
          title: "Marketing Automatico",
          subtitle: "Frequenza +40%, scontrino +25%",
          description:
            "Messaggi personalizzati al momento giusto. Richiami, upselling, recupero clienti.",
          bullets: [
            "Richiami personalizzati",
            "Upselling intelligente",
            "Recupero clienti dormienti",
            "Offerte mirate",
          ],
          closer: "Frequenza +40%. Scontrino +25%.",
        },
      ]}
      advantages={[
        {
          title: "Database Proprietario",
          subtitle: "Zero commissioni",
          text: "I tuoi clienti restano tuoi. Storico completo per marketing efficace.",
        },
        {
          title: "Automazione Totale",
          subtitle: "10+ ore risparmiate/sett",
          text: "L'AI lavora per te. Prenotazioni, promemoria, richiami in autopilota.",
        },
        {
          title: "Aumento Valore Cliente",
          subtitle: "+20-30% scontrino",
          text: "Suggerimenti intelligenti e upselling automatico al momento giusto.",
        },
      ]}
      comparisons={[
        { label: "No-show", before: "20-25%", after: "< 5%" },
        { label: "Gestione", before: "12-18h/sett", after: "< 2h/sett" },
        { label: "Risposta", before: "40-60%", after: "100%" },
        { label: "Occupazione", before: "70-75%", after: "90-95%" },
      ]}
      ctaTitle="Pronto a rivoluzionare il tuo salone?"
    />
  );
};

export default Estetica;
