// Copied verbatim from the app (PeakDrive/data/faqs.ts) so the website's Help/FAQ
// stays identical to what drivers see in-app. Keep the two in sync.

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: 1,
    question: "How does PeakDrive work?",
    answer:
      "PeakDrive tracks local events in your city and shows you surge zones on the map. Position yourself near these zones before events end to maximise your ride requests.",
  },
  {
    id: 2,
    question: "Why can't I see any surge circles on the map?",
    answer:
      "Surge circles only appear 15 minutes before an event ends and disappear 1 hour after. If no circles are showing, there are no events currently in their surge window.",
  },
  {
    id: 3,
    question: "What do the circle colors mean?",
    answer:
      "The circle colors show expected demand. Yellow means low demand, orange means medium demand, red-orange means high demand and bright red means very high demand. The brighter and larger the circle, the more rides you can expect.",
  },
  {
    id: 4,
    question: "Which cities does PeakDrive cover?",
    answer:
      "PeakDrive covers a growing list of South African cities, and the app automatically shows events for the city you're in. We're adding more cities over time, so check back for updates.",
  },
  {
    id: 5,
    question: "Why does the app need my location?",
    answer:
      "PeakDrive uses your location to center the map on you and show nearby surge zones. We don't sell your location or use it for advertising. If you submit an event, the spot you pin is saved with that event so other drivers can find it, and address lookups are handled by Google's mapping service.",
  },
  {
    id: 6,
    question: "How do I report an incorrect event?",
    answer:
      "If you spot an incorrect event, use WhatsApp Support at the bottom of this Help screen and describe the issue. Our team will review and correct it as soon as possible.",
  },
  {
    id: 7,
    question: "How do I delete my account?",
    answer:
      "Go to the hamburger menu → Settings → Delete Account. You will be asked to confirm before your account and all associated data is permanently deleted in line with POPIA regulations.",
  },
];
