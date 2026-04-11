export type GalleryCategory = "events" | "field-work" | "meetings";

export const categoryLabels: Record<GalleryCategory, string> = {
  events: "Events",
  "field-work": "Field Work",
  meetings: "Meetings",
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
};

export const galleryCategories: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "field-work", label: "Field Work" },
  { id: "meetings", label: "Meetings" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    alt: "Community workshop and learning session",
    caption: "Youth-led workshop on health literacy and peer support.",
    category: "events",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    alt: "Team meeting in a bright room",
    caption: "Quarterly planning session with partners and volunteers.",
    category: "meetings",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200",
    alt: "Field visit in a rural community",
    caption: "Field outreach: listening sessions with young people in rural areas.",
    category: "field-work",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200",
    alt: "Outdoor community event",
    caption: "Community day: games, health booths, and storytelling.",
    category: "events",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    alt: "Small group discussion",
    caption: "Facilitators debrief after a district coordination meeting.",
    category: "meetings",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200",
    alt: "Volunteers distributing supplies",
    caption: "Field team distributing hygiene kits and information packs.",
    category: "field-work",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    alt: "Conference-style event",
    caption: "Annual gathering: celebrating milestones with stakeholders.",
    category: "events",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    alt: "Collaborative meeting at a table",
    caption: "Cross-team sync on program metrics and next steps.",
    category: "meetings",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200",
    alt: "Community walking and engagement",
    caption: "Walking interviews during a field assessment in a new ward.",
    category: "field-work",
  },
];
