/** Names and photos for key leadership roles. Images live under `public/assets/` (served as `/assets/…`). */
export type LeadershipProfile = {
  role: string;
  name: string;
  /** Square or portrait image; shown in org chart and home Leadership section */
  photoUrl: string;
  blurb: string;
};

export const leadershipProfiles = {
  ceo: {
    role: "CEO",
    name: "Chrisant K. Mzumbwe",
    photoUrl: "/assets/CEO.png",
    blurb:
      "Leads the organisation’s vision, partnerships, and accountability across programs and operations.",
  },
  deputyCeo: {
    role: "Deputy CEO",
    name: "Iddi Mwarami",
    photoUrl: "/assets/Deputy_CEO.png",
    blurb: "Supports executive leadership, coordination, and implementation across departments.",
  },
  operationManager: {
    role: "Operation Manager",
    name: "Hasitu Chakachaka",
    photoUrl: "/assets/Operational_Manager.png",
    blurb: "Leads operational delivery, workflows, and cross-functional execution.",
  },
} satisfies Record<string, LeadershipProfile>;

/** Order used on the home page Leadership section */
export const leadershipTeam: LeadershipProfile[] = [
  leadershipProfiles.ceo,
  leadershipProfiles.deputyCeo,
  leadershipProfiles.operationManager,
];
