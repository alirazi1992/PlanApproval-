import { api } from "@/lib/axios";

export async function listComments(projectId: string) {
  const { data } = await api.get(`/api/comments?projectId=${projectId}`);
  return data.items as Array<any>;
}

export async function addComment(projectId: string, text: string, by: string) {
  const { data } = await api.post(`/api/comments`, { projectId, text, by });
  return data.item;
}
