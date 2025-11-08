import { api } from "@/lib/axios";
import { Project } from "@/models/project";

export async function getProjects(): Promise<Project[]> {
  const { data } = await api.get("/api/projects");
  return data.items;
}

export async function getProject(id: string): Promise<any> {
  const { data } = await api.get(`/api/projects/${id}`);
  return data;
}
