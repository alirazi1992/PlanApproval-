import axios from "axios";

export const api = axios.create({ withCredentials: true });

export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}
