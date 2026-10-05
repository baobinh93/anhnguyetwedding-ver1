import { menuItems } from "../data/menu.mock";
import type { MenuItem } from "../types/menu";

export async function getMenuItems(): Promise<MenuItem[]> {
  // Sau này chỉ cần thay phần này bằng Google Sheet API.
  // Ví dụ:
  // const response = await fetch(import.meta.env.VITE_GOOGLE_SHEET_API_URL);
  // return response.json();
  return Promise.resolve(menuItems);
}
