export interface Show {
  date: string;        // e.g. "March 28, 2025"
  day?: string;        // e.g. "Friday"
  time: string;        // e.g. "7:30 PM"
  venue: string;
  location: string;    // City, State
  description?: string;
  ticketUrl?: string;  // Link to purchase tickets — omit if no tickets/sold out
  soldOut?: boolean;
}

// ─────────────────────────────────────────────────────────────
//  ADD / REMOVE SHOWS HERE
//  Leave the array empty ([]) to hide the section entirely.
// ─────────────────────────────────────────────────────────────
export const upcomingShows: Show[] = [
  {
    date: 'April 17, 2026',
    day: 'Friday',
    time: '7:00 PM',
    venue: 'Put a Cork In It',
    location: 'Oklahoma City, OK',
    description: 'Close-Up Conjuring & Cabernet - A Tableside Magic Experience',
    ticketUrl: 'https://www.eventbrite.com/e/close-up-conjuring-cabernet-a-tableside-magic-experience-tickets-1986109758753?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl',
  },
  // Add more shows here...
];
