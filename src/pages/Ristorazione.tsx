import { useEffect } from "react";
import SectorPage from "@/components/SectorPage";

const Ristorazione = () => {
  useEffect(() => {
    document.title = "Ristorazione | Kinetra Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectorPage
      eyebrow="Ristorazione"
      title="L'AI che rivoluziona prenotazioni e"
      highlight="servizio"
      intro={[
        "Basta telefoni occupati.",
        "Basta no-show.",
        "Sistema proprietario per gestire tavoli e asporto h24, riducendo i costi operativi.",
      ]}
      problems={[
        {
          title: "Telefono sempre occupato",
          subtitle: "Chiamate perse = tavoli vuoti",
          description:
            "Durante il servizio è impossibile rispondere a tutti. Ogni chiamata persa è un tavolo regalato alla concorrenza.",
          bullets: [
            "Telefono che squilla mentre servi",
            "Chiamate perse = tavoli vuoti",
            "Staff distratto durante il servizio",
          ],
        },
        {
          title: "Il danno dei No-Show",
          subtitle: "Tavoli vuoti all'ultimo minuto",
          description:
            "Clienti che prenotano e non si presentano. Tavoli vuoti che pesano sul tuo incasso.",
          bullets: [
            "Tavoli vuoti all'ultimo minuto",
            "Cibo preparato e sprecato",
            "Nessun sistema di recupero",
          ],
        },
        {
          title: "Dipendenza dalle piattaforme",
          subtitle: "Commissioni del 25-30%",
          description:
            "Commissioni su ogni cliente che prenota online mangiano i tuoi margini.",
          bullets: [
            "Commissioni del 25-30%",
            "Clienti del portale, non tuoi",
            "Nessun controllo sui dati",
          ],
        },
        {
          title: "Caos ordini e asporto",
          subtitle: "Errori e ritardi",
          description:
            "Gestire comande, telefonate e sala contemporaneamente è un incubo operativo.",
          bullets: [
            "Errori nelle comande",
            "Personale bloccato al telefono",
            "Ritardi e recensioni negative",
          ],
        },
      ]}
      solutions={[
        {
          title: "Prenotazioni Tavoli e Asporto",
          subtitle: "Zero stress, massima efficienza",
          description:
            "L'AI gestisce l'intero flusso dell'asporto e delle prenotazioni su WhatsApp e telefono. Zero errori, zero tempi morti.",
          bullets: [
            "Risponde istantaneamente",
            "Gestisce prenotazioni in autonomia",
            "Ordini e orari in autopilota",
            "Multilingue",
          ],
          closer: "Tu servi i clienti. L'AI gestisce tutto il resto.",
        },
        {
          title: "Recupero No-Show",
          subtitle: "Ogni tavolo diventa incasso",
          description:
            "L'AI trasforma l'incertezza in incasso garantito: promemoria automatici e recupero istantaneo dei buchi.",
          bullets: [
            "Notifiche anti-dimenticanza",
            "Conferma istantanea",
            "Recupero coperti h24",
            "Protezione del fatturato",
          ],
          closer: "Zero tavoli vuoti, 100% incasso.",
        },
        {
          title: "Controllo Totale",
          subtitle: "Zero commissioni, clienti tuoi",
          description:
            "Smetti di regalare il 25-30% alle piattaforme. Un sistema di proprietà che elimina le commissioni.",
          bullets: [
            "Azzeramento commissioni",
            "Database clienti blindato",
            "Menu digitale intelligente",
            "Fidelizzazione automatica",
          ],
          closer: "Margini pieni, zero intermediari.",
        },
      ]}
      advantages={[
        {
          title: "Indipendenza Totale",
          subtitle: "Zero commissioni, zero vincoli",
          text: "Non paghi commissioni. Il sistema è tuo, i clienti sono tuoi, i margini sono tuoi.",
        },
        {
          title: "Efficienza h24",
          subtitle: "Mai più chiamate perse",
          text: "L'AI risponde in 30 secondi, giorno e notte. Mentre cucini, il sistema riempie la sala.",
        },
        {
          title: "Clienti Fidelizzati",
          subtitle: "Dati che fanno tornare",
          text: "Conosci cosa ordinano, quando vengono, le preferenze. Offerte mirate che funzionano.",
        },
      ]}
      comparisons={[
        { label: "No-show", before: "20-25%", after: "< 5%" },
        { label: "Ordini", before: "Caos", after: "Auto" },
        { label: "Risposta", before: "5-10 min", after: "< 30 sec" },
        { label: "Coperti", before: "Manuale", after: "Auto" },
      ]}
      ctaTitle="Pronto a rivoluzionare il tuo locale?"
    />
  );
};

export default Ristorazione;
