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
    date: 'April 12, 2025',
    day: 'Saturday',
    time: '8:00 PM',
    venue: 'Venue Name',
    location: 'Oklahoma City, OK',
    description: 'An evening of mentalism and storytelling.',
    ticketUrl: 'https://example.com/tickets',
  },
  // Add more shows here...
];
