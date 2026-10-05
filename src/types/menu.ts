export type MenuCategory =
  | "Khai vị"
  | "Món chính"
  | "Món no"
  | "Tráng miệng";

export type AppetizerSubcategory =
  | "Súp"
  | "Chả, chiên & món phụ"
  | "Gỏi";

export type MainDishSubcategory =
  | "Heo"
  | "Bò + Bê"
  | "Gà"
  | "Tôm"
  | "Mực"
  | "Hải sâm"
  | "Cua"
  | "Cá"
  | "Vịt"
  | "Đà điểu"
  | "Nai"
  | "Thỏ"
  | "Lẩu";

export type RiceSubcategory =
  | "Cơm"
  | "Xôi";

export type MenuSubcategory =
  | AppetizerSubcategory
  | MainDishSubcategory
  | RiceSubcategory;

export interface MenuItem {
  id: number;
  name: string;
  category: MenuCategory;
  subcategory?: MenuSubcategory;
  price: number | string;
  description?: string;
  image?: string;
  signature?: boolean;
}