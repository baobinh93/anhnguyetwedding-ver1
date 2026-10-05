// import { useEffect, useMemo, useState } from "react";
// import { getMenuItems } from "../services/menuService";
// import type { MenuCategory, MenuItem } from "../types/menu";

// const categories: Array<MenuCategory | "Tất cả món"> = [
//   "Tất cả món",
//   "Khai vị",
//   "Signature",
//   "Món chính",
//   "Món no",
//   "Tráng miệng",
// ];

// const money = new Intl.NumberFormat("vi-VN");

// export default function MenuBuilder() {
//   const [items, setItems] = useState<MenuItem[]>([]);
//   const [category, setCategory] = useState<MenuCategory | "Tất cả món">("Tất cả món");
//   const [selected, setSelected] = useState<number[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getMenuItems().then((data) => {
//       setItems(data);
//       setLoading(false);
//     });
//   }, []);

//   const visibleItems = useMemo(
//     () => category === "Tất cả món" ? items : items.filter((item) => item.category === category),
//     [category, items],
//   );

//   const selectedItems = items.filter((item) => selected.includes(item.id));
//   const total = selectedItems.reduce((sum, item) => sum + item.price, 0);

//   const toggle = (id: number) =>
//     setSelected((current) =>
//       current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
//     );

//   if (loading) {
//     return <div className="py-16 text-center text-on-surface-variant">Đang tải thực đơn…</div>;
//   }

//   return (
//     <div className="w-full">
//       <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
//         {categories.map((item) => (
//           <button
//             key={item}
//             type="button"
//             onClick={() => setCategory(item)}
//             className={
//               category === item
//                 ? "shrink-0 rounded-lg bg-primary px-4 py-2 font-label-lg text-label-lg text-on-primary shadow-sm"
//                 : "shrink-0 rounded-lg bg-surface-container-high px-4 py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
//             }
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       <div className="grid gap-3 lg:grid-cols-2">
//         {visibleItems.map((item) => {
//           const isSelected = selected.includes(item.id);
//           return (
//             <button
//               key={item.id}
//               type="button"
//               onClick={() => toggle(item.id)}
//               className={`group flex items-center justify-between rounded-xl p-4 text-left shadow-sm transition-all ${
//                 isSelected
//                   ? "bg-primary text-on-primary ring-1 ring-primary-container"
//                   : "bg-surface-container-low hover:bg-surface-container"
//               }`}
//             >
//               <span className="flex min-w-0 items-center gap-3 pr-3">
//                 <span
//                   className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${
//                     isSelected ? "bg-on-primary text-primary" : "bg-surface-container-high text-transparent"
//                   }`}
//                 >
//                   <span className="material-symbols-outlined text-[16px]">check</span>
//                 </span>
//                 <span className="min-w-0">
//                   <span className="block truncate font-label-lg text-label-lg font-medium">{item.name}</span>
//                   <span className={`mt-0.5 block text-xs leading-5 ${isSelected ? "text-on-primary/75" : "text-on-surface-variant"}`}>
//                     {item.description}
//                   </span>
//                 </span>
//               </span>
//               <span className={`shrink-0 text-sm font-semibold ${isSelected ? "text-on-primary" : "text-primary"}`}>
//                 +{money.format(item.price)}đ
//               </span>
//             </button>
//           );
//         })}
//       </div>

//       <div className="sticky bottom-4 z-20 mt-8 rounded-2xl bg-primary p-5 text-on-primary shadow-xl lg:flex lg:items-center lg:justify-between lg:gap-8">
//         <div>
//           <div className="font-label-sm uppercase tracking-widest text-on-primary-container">Thực đơn bạn đã chọn</div>
//           <div className="mt-1 font-headline-sm text-headline-sm">
//             {selectedItems.length} món
//           </div>
//         </div>
//         <div className="mt-3 lg:mt-0 lg:text-right">
//           <div className="text-xs text-on-primary-container">Dự toán món ăn</div>
//           <div className="font-headline-md text-headline-md font-semibold">{money.format(total)}đ</div>
//         </div>
//       </div>
//     </div>
//   );
// }
