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
    question: "How do I redeem a voucher?",
    answer:
      "Go to the hamburger menu → Membership → Redeem tab. Enter your voucher code and tap Redeem. Your ad-free period will activate immediately.",
  },
  {
    id: 3,
    question: "Why can't I see any surge circles on the map?",
    answer:
      "Surge circles only appear 15 minutes before an event ends and disappear 1 hour after. If no circles are showing, there are no events currently in their surge window.",
  },
  {
    id: 4,
    question: "Where can I buy a PeakDrive voucher?",
    answer:
      "You can buy vouchers at Shoprite, Checkers, Pick n Pay, SPAR, Boxer, PEP and most spaza shops. You can also buy through Capitec and other major banking apps using 1Voucher, Kazang, Flash and other supported vouchers.",
  },
  {
    id: 5,
    question: "How long is the free trial?",
    answer:
      "PeakDrive offers a 7-day free trial with no card required. After the trial you can continue using the app with ads or redeem a voucher for an ad-free experience.",
  },
  {
    id: 6,
    question: "What do the circle colors mean?",
    answer:
      "The circle colors show expected demand. Yellow means low demand, orange means medium demand, red-orange means high demand and bright red means very high demand. The brighter and larger the circle, the more rides you can expect.",
  },
  {
    id: 7,
    question: "Does PeakDrive work outside Durban?",
    answer:
      "PeakDrive currently covers Durban. We are working on expanding to Johannesburg, Cape Town and Pretoria soon. Stay tuned for updates.",
  },
  {
    id: 8,
    question: "Why does the app need my location?",
    answer:
      "PeakDrive uses your location to center the map on you so you can see nearby events and surge zones. Your location is never stored or shared.",
  },
  {
    id: 9,
    question: "How do I report an incorrect event?",
    answer:
      "If you spot an incorrect event, use Contact Support at the bottom of this Help screen (WhatsApp or Email) and describe the issue. Our team will review and correct it as soon as possible.",
  },
  {
    id: 10,
    question: "How do I delete my account?",
    answer:
      "Go to the hamburger menu → Settings → Delete Account. You will be asked to confirm before your account and all associated data is permanently deleted in line with POPIA regulations.",
  },
];
