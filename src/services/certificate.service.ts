import { api } from "@/lib/axios";

export async function getCertificate(projectId: string) {
  const { data } = await api.get(`/api/certificates/${projectId}`);
  return data;
}
