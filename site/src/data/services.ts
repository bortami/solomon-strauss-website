export interface Service {
  glyph: string;
  title: string;
  eventType: string; // matches an event_type <option> in the booking form
  body: string;
}

export const services: Service[] = [
  {
    glyph: '⬡',
    title: 'Private Parties',
    eventType: 'private',
    body: 'Your living room becomes the front row. Close-up magic and mind reading for groups of 5 or more, performed inches from your guests, with everyone pulled into the act.',
  },
  {
    glyph: '❖',
    title: 'Corporate & Stage Shows',
    eventType: 'corporate',
    body: 'A full show for rooms that came to be entertained. Guests have their minds read, their choices predicted, and their certainty politely dismantled. Don’t worry, I only reveal the good things I see.',
  },
  {
    glyph: '◈',
    title: 'Séance & Spiritualism Show',
    eventType: 'seance',
    body: 'An evening for small groups brave enough to sit in the dark with something otherworldly. Ghost stories, strange magic, and an attempt to reach the spirits, who may just answer back. Not for the faint of heart.',
  },
];
