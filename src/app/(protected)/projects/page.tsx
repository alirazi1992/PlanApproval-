"use client";

import { ProjectList } from "@/features/projects/ProjectList";
import { ProjectHeader } from "@/features/projects/ProjectHeader";

export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <ProjectHeader />
      <ProjectList />
    </div>
  );
}
