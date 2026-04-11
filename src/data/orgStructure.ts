import { leadershipProfiles } from "./leadership";

const { ceo: ceoProfile, deputyCeo: deputyProfile, operationManager: opsProfile } = leadershipProfiles;

export type OrgNodeData = {
  id: string;
  title: string;
  summary: string;
  /** Person’s name when this node represents a named role */
  name?: string;
  /** Portrait for named roles (org chart + detail modal) */
  photoUrl?: string;
  children?: OrgNodeData[];
};

/** Lateral advisory body (shown beside CEO, not in the main reporting chain). */
export const boardOfAdvisors: OrgNodeData = {
  id: "board-of-advisors",
  title: "Board of Advisors",
  summary:
    "Provides strategic guidance, oversight, and independent perspective to strengthen governance and long-term impact.",
};

/** Main reporting tree under the CEO. */
export const ceoBranchTree: OrgNodeData = {
  id: "ceo",
  title: "CEO",
  name: ceoProfile.name,
  photoUrl: ceoProfile.photoUrl,
  summary: ceoProfile.blurb,
  children: [
    {
      id: "deputy-ceo",
      title: "Deputy CEO",
      name: deputyProfile.name,
      photoUrl: deputyProfile.photoUrl,
      summary: deputyProfile.blurb,
      children: [
        {
          id: "admin-manager",
          title: "ADMINISTRATIVE MANAGER",
          summary: "Oversees administrative systems, compliance, and internal coordination.",
          children: [
            {
              id: "financial-officer",
              title: "Financial officer",
              summary: "Manages budgeting, reporting, and financial controls.",
              children: [
                {
                  id: "financial-assistant",
                  title: "Financial assistant",
                  summary: "Supports day-to-day finance tasks, records, and documentation.",
                  children: [
                    {
                      id: "membership-coordinator",
                      title: "membership coordinator",
                      summary: "Coordinates member engagement, records, and community linkage.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "operation-manager",
      title: "Operation Manager",
      name: opsProfile.name,
      photoUrl: opsProfile.photoUrl,
      summary: opsProfile.blurb,
      children: [
        {
          id: "comm-info-manager",
          title: "Communication and Information manager",
          summary: "Owns communications, information management, and public-facing channels.",
          children: [
            {
              id: "project-assistant",
              title: "Project assistant",
              summary: "Supports project planning, tracking, and field coordination.",
              children: [
                {
                  id: "training-assistant",
                  title: "Training assistant",
                  summary: "Coordinates training logistics, materials, and participant follow-up.",
                  children: [
                    {
                      id: "pr-assistant",
                      title: "Public relations assistant",
                      summary: "Supports media relations, storytelling, and stakeholder updates.",
                      children: [
                        {
                          id: "publication-assistant",
                          title: "Publication Assistant",
                          summary: "Produces and distributes publications, newsletters, and digital content.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
