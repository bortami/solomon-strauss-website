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
    date: 'October 30, 2026',
    day: 'Friday',
    time: '7:30 PM',
    venue: 'The Ritz of Shawnee',
    location: 'Shawnee, OK',
    description: 'MURDER AT THE RITZ - A Magic Murder Mystery Show',
    ticketUrl: 'https://www.ticketstorm.com/event/johnshackmurderattheritzamagicmurdermysteryshow/theritzofshawnee/shawnee/33210/',
  },
  // Add more shows here...
];
