// Define canonical role keys
export const roles = [
  "client",
  "engineer",
  "technicalManager",
  "unitManager",
  "qa",
  "auditor",
  "admin"
] as const;

export type RoleKey = typeof roles[number];

export type Action =
  | "review"
  | "comment"
  | "approve_stage_1"
  | "approve_stage_2"
  | "issue_certificate"
  | "manage_roles"
  | "system_settings";

// Strong, explicit typing removes the `never` issue
export const permissions: Record<RoleKey, Action[]> = {
  client: ["comment"],
  engineer: ["review", "comment"],
  technicalManager: ["review", "comment", "approve_stage_1"],
  unitManager: ["approve_stage_2", "issue_certificate"],
  qa: ["review"],
  auditor: ["review"],
  admin: [
    "manage_roles",
    "system_settings",
    "review",
    "comment",
    "approve_stage_1",
    "approve_stage_2",
    "issue_certificate"
  ]
};
