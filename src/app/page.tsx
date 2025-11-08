import { redirect } from "next/navigation";

export default function Home() {
  // Always send "/" to the dashboard.
  // If the user is not authenticated, your middleware will redirect /dashboard -> /login.
  redirect("/dashboard");
}
