import type { ReactNode } from "react";

// One drawn set, because emoji look different on every phone. Colour comes from
// the surrounding text.
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const MapIcon = () => (
  <Icon>
    <path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z" />
    <path d="M9 4v13.5M15 6.5V20" />
  </Icon>
);

export const CalendarIcon = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Icon>
);

export const PeopleIcon = () => (
  <Icon>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
    <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.4c1.9.9 3 2.9 3 5.6" />
  </Icon>
);

export const BellIcon = () => (
  <Icon>
    <path d="M6 9a6 6 0 1 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </Icon>
);

export const WalletIcon = () => (
  <Icon>
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3" />
    <rect x="4" y="8" width="17" height="12" rx="2" />
    <path d="M16.5 14h.01" />
  </Icon>
);

export const OfflineIcon = () => (
  <Icon>
    <path d="m3 3 18 18" />
    <path d="M2 8.8a15 15 0 0 1 4.5-3M10.5 5.1A15 15 0 0 1 22 8.8" />
    <path d="M5 12.5a10 10 0 0 1 4-2.6M14.5 10.4a10 10 0 0 1 4.5 2.1" />
    <path d="M8.5 16a5 5 0 0 1 7 0M12 19.5h.01" />
  </Icon>
);
