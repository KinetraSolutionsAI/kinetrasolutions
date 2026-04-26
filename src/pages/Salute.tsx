import { useEffect } from "react";
import SectorPage from "@/components/SectorPage";

const Salute = () => {
  useEffect(() => {
    document.title = "Professionisti della Salute | Kinetra Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectorPage
      eyebrow="Professionisti della Salute"
      title="L'AI al servizio del"
      highlight="tuo studio"
      intro={[
        "Ecosistema digitale potenziato dall'AI.",
        "Sistema proprietario che gestisce appuntamenti e pazienti h24.",
        "Più efficienza, più tempo libero.",
      ]}
      audience={[
        "Medici di base",
        "Chirurghi",
        "Dentisti",
        "Fisioterapisti",
        "Nutrizionisti",
        "Psicologi",
      ]}
      problems={[
        {
          title: "Telefono durante le visite",
          subtitle: "Interruzioni continue",
          description:
            "Devi interrompere la visita per rispondere. Altre chiamate vanno in segreteria e i pazienti non richiamano.",
          bullets: [
            "Interruzioni continue durante le visite",
            "Chiamate perse = pazienti persi",
            "Gestione manuale inefficiente",
          ],
        },
        {
          title: "Tempo in attività ripetitive",
          subtitle: "Conferme e promemoria manuali",
          description:
            "Ore a confermare appuntamenti e rispondere alle stesse domande di sempre.",
          bullets: [
            "Conferme e promemoria fatti a mano",
            "Risposte ripetitive a domande frequenti",
            "Follow-up dimenticati",
          ],
        },
        {
          title: "No-show e slot vuoti",
          subtitle: "No-show 15-30%",
          description:
            "Ogni slot vuoto è un'opportunità persa. Le cancellazioni dell'ultimo minuto sono irrecuperabili.",
          bullets: [
            "Tasso di no-show tra il 15 e il 30%",
            "Slot impossibili da recuperare in tempo",
            "Mancato guadagno strutturale",
          ],
        },
      ]}
      solutions={[
        {
          title: "Agente AI WhatsApp/Voce",
          subtitle: "La tua segreteria h24",
          description:
            "Assistente intelligente che risponde ai pazienti in tempo reale, gestisce prenotazioni e fa triage. Disponibile 24/7.",
          bullets: [
            "Risponde istantaneamente",
            "Gestisce l'agenda in autonomia",
            "Triage intelligente delle richieste",
            "Promemoria automatici",
            "FAQ automatiche",
          ],
          closer: "Tu lavori. L'AI gestisce tutto il resto.",
        },
        {
          title: "App Gestionale Custom",
          subtitle: "Database clinico e CRM integrato",
          description:
            "Applicazione su misura: gestione pazienti, storico clinico, agenda sincronizzata, sistema anti-noshow.",
          bullets: [
            "Database GDPR-compliant",
            "Agenda intelligente",
            "Sistema anti-noshow",
            "Dashboard performance",
            "Follow-up automatici",
          ],
          closer: "Infrastruttura digitale di tua proprietà.",
        },
        {
          title: "Fatturazione Automatica",
          subtitle: "Zero lavoro manuale",
          description:
            "Generazione automatica fatture a fine visita, invio diretto e archiviazione conforme.",
          bullets: [
            "Generazione automatica post-visita",
            "Invio diretto via email",
            "Archiviazione digitale conforme",
            "Integrazione gestionale",
            "Report fiscali periodici",
          ],
          closer: "Zero lavoro amministrativo.",
        },
      ]}
      advantages={[
        {
          title: "Indipendenza Totale",
          subtitle: "Zero vincoli",
          text: "Investimento one-time. Nessun canone, nessuna commissione. Sistema tuo.",
        },
        {
          title: "Efficienza h24",
          subtitle: "Mai più chiamate perse",
          text: "L'AI risponde in 30 secondi, giorno e notte. Tasso di risposta 100%.",
        },
        {
          title: "Dati Intelligenti",
          subtitle: "Tutto sotto controllo",
          text: "Informazioni cliniche centralizzate, sicure, accessibili. Storico completo.",
        },
      ]}
      comparisons={[
        { label: "No-show", before: "20-30%", after: "< 5%" },
        { label: "Tempo agenda", before: "10-15h/sett", after: "< 1h/sett" },
        { label: "Risposta", before: "40-60%", after: "100%" },
        { label: "Occupazione", before: "65-75%", after: "90-95%" },
      ]}
      ctaTitle="Pronto a trasformare il tuo studio?"
    />
  );
};

export default Salute;
