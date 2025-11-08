"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProjects } from "@/services/projects.service";
import { Project } from "@/models/project";
import { Table, THead, TBody, TR, TH, TD } from "@/components/common/table";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/common/empty-state";

export function ProjectList() {
  const [items, setItems] = useState<Project[]>([]);
  useEffect(() => {
    getProjects().then(setItems);
  }, []);

  if (!items.length)
    return <EmptyState title="پروژه‌ای یافت نشد" description="برای شروع، پروژه جدید ایجاد کنید." />;

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <THead>
          <TR>
            <TH>شناسه</TH>
            <TH>عنوان</TH>
            <TH>دپارتمان</TH>
            <TH>وضعیت</TH>
            <TH>عملیات</TH>
          </TR>
        </THead>
        <TBody>
          {items.map((p) => (
            <TR key={p.id}>
              <TD>{p.id}</TD>
              <TD>{p.title}</TD>
              <TD>{p.department}</TD>
              <TD>
                <Badge>{p.status}</Badge>
              </TD>
              <TD>
                <Link className="underline" href={`/projects/${p.id}`}>
                  ورود
                </Link>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </div>
  );
}
