import { api } from "@/lib/axios";

export async function updateDocumentStatus(docId: string, status: string) {
  await api.patch(`/api/documents/${docId}`, { status });
}
