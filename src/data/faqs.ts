// Copied verbatim from the app (PeakDrive/data/faqs.ts) so the website's Help/FAQ
// stays identical to what drivers see in-app. Keep the two in sync.
//
// "Verbatim" is load-bearing and was not honoured before: this file had drifted
// to 7 entries against the app's 14, with every shared answer rewritten. It is
// also published as FAQPage JSON-LD from the Support page, so a stale answer
// here is stale structured data served to Google. Re-synced 2026-08-10.
//
// The app is the source of truth. Edit there, then copy the whole array across —
// do not edit answers here.

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
      "We track events across your city and work out when each one lets out. That moment — a stadium emptying, a flight landing, a club closing — is when a crowd needs rides all at once. The map shows you where those moments are about to happen so you can already be there, instead of driving towards a surge that's over by the time you arrive.",
  },
  {
    id: 2,
    question: "Why can't I see any surge circles on the map?",
    answer:
      "A circle only appears during an event's surge window: from 15 minutes before it ends until an hour after. If nothing is showing, nothing is in that window right now. Drag the events sheet up from the bottom to see what's coming later today.",
  },
  {
    id: 3,
    question: "What do the circle's colour and size mean?",
    answer:
      "Colour is expected demand — yellow is low, orange medium, deep orange high, red very high. Size is the actual ground the surge covers, measured from the venue: an airport's circle is genuinely wide, a small bar's is tight. The circle also shrinks as the hour passes, so what you see is how much of the surge is left.",
  },
  {
    id: 4,
    question: 'What does "I\'m going" do?',
    answer:
      "It adds you to the count on that event, and every other driver sees it. That's deliberate. If twelve drivers have already said they're heading to one venue, you're joining a queue, not a surge — and you'll usually earn more at the quieter event three kilometres away. Tap it again to remove yourself.",
  },
  {
    id: 5,
    question: "When do surge alerts arrive?",
    answer:
      "There are two, and you can switch either off under Settings → Alert preferences. The first comes about an hour ahead, wherever you are in the city, so you have time to move. The second comes roughly 15 minutes before, and only if you're already close by — that one needs Location switched on.",
  },
  {
    id: 6,
    question: "I'm getting too many alerts.",
    answer:
      "Settings → Alert preferences. Raise the busyness floor so we only tell you about events worth the drive, and deselect the categories you never work — airport arrivals without the nightlife, say. Changes take effect immediately.",
  },
  {
    id: 7,
    question: "Why does the app ask how busy it was?",
    answer:
      'Because our estimate for a venue is only a guess until a driver who was there tells us otherwise. The questions appear an hour after a surge ends, never during it, and you can always tap "Not now". Answers feed straight back into what that venue is rated next week, so the map gets more accurate the more drivers answer.',
  },
  {
    id: 8,
    question: "How do I add an event we've missed?",
    answer:
      "Tap \"Add event\" on the map. The end time is the important field — a surge happens when an event lets out, not when it starts — and if you don't know it, leave it blank and we'll estimate. Once three other drivers confirm it's real, it goes live for everyone and you earn contributor points.",
  },
  {
    id: 9,
    question: "How do I report an event that's wrong or isn't real?",
    answer:
      "Open the menu → Verify Events and tap \"Not real\" on it. That flags it for review rather than deleting it, so one tap can't remove a real event. For an event that's real but has the wrong time or place, use WhatsApp Support at the bottom of this screen.",
  },
  {
    id: 10,
    question: "What are contributor points for?",
    answer:
      "They track what you've added to the map — events you submitted that turned out to be real, and other drivers' events you helped verify. You can see where you stand under Profile → Contributor points.",
  },
  {
    id: 11,
    question: "Which cities does PeakDrive cover?",
    answer:
      "Durban and surrounding areas for now — including Umhlanga, Ballito, Pinetown, Westville and Amanzimtoti. Johannesburg, Cape Town and Pretoria are coming soon; you'll see them in the menu, marked as such, until they go live.",
  },
  {
    id: 12,
    question: "Why does the app need my location?",
    answer:
      "For two things: centring the map on you, and timing the 15-minute alert to where you actually are rather than blasting it city-wide. We store an approximate position only, we never sell it, and switching Location off in Settings deletes what we've stored straight away. If you pin an event when submitting it, that pin is saved with the event so other drivers can find it.",
  },
  {
    id: 13,
    question: "Can I see the tips again?",
    answer:
      "Settings → Show tips again. That replays the short walkthrough on each screen the next time you open it.",
  },
  {
    id: 14,
    question: "How do I delete my account?",
    answer:
      "Menu → Settings → Delete Account. You'll be asked to confirm, and then your account and everything associated with it is permanently deleted, in line with POPIA.",
  },
  {
    id: 15,
    question: "I organise events. Can I list them?",
    answer:
      "Yes. Choose 'I organise events' when you sign up in the app, or switch in Settings. Fill in your organiser profile and we'll verify you once; after that your events go live on drivers' maps as soon as you add them, and you can change times or cancel. Drivers only see your organisation name.",
  },
];

export default faqs;
