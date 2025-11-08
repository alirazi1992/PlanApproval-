export type User = {
  id: string;
  username: string;
  fullName: string;
  email: string;
  roles: string[]; // Role keys like: "engineer", "admin", ...
};
