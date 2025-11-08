export type Project = {
  id: string;
  title: string;
  department: "Marine" | "Industrial" | "Offshore" | string;
  status: "pending" | "in_review" | "approved" | "rejected" | string;
};
