// import type { MenuItem } from "../../types/menu";

// interface Props {
//   item: MenuItem;
//   selected: boolean;
//   onToggle: () => void;
// }

// export default function MenuItemCard({ item, selected, onToggle }: Props) {
//   return (
//     <button
//       type="button"
//       onClick={onToggle}
//       className={`w-full text-left rounded-xl border p-4 transition-all ${
//         selected
//           ? "border-primary bg-primary/5 shadow-sm"
//           : "border-outline-variant/30 bg-surface-container-lowest hover:border-primary/40"
//       }`}
//     >
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <div className="flex items-center gap-2 mb-1">
//             {item.featured && (
//               <span className="text-[10px] uppercase tracking-wider text-secondary font-semibold">
//                 Signature
//               </span>
//             )}
//           </div>
//           <h3 className="font-headline-sm text-headline-sm text-primary">{item.name}</h3>
//           {item.description && (
//             <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.description}</p>
//           )}
//         </div>
//         <div className="shrink-0 text-right">
//           <div className="font-label-lg text-label-lg text-primary font-semibold">
//             {item.price.toLocaleString("vi-VN")}đ
//           </div>
//           <span className="material-symbols-outlined text-[18px] mt-2">
//             {selected ? "check_circle" : "add_circle"}
//           </span>
//         </div>
//       </div>
//     </button>
//   );
// }
import type { MenuItem } from "../../types/menu";

interface Props {
  item: MenuItem;
  selected: boolean;
  onToggle: () => void;
}

export default function MenuItemCard({
  item,
  selected,
  onToggle,
}: Props) {
  const isPriceByMarket =
    String(item.price).trim().toLowerCase() === "theo thời giá";

  const formattedPrice = isPriceByMarket
    ? "Theo thời giá"
    : `${Number(item.price).toLocaleString("vi-VN")}đ`;

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full text-left rounded-xl border p-4 transition-all ${
        selected
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-outline-variant/30 bg-surface-container-lowest hover:border-primary/40"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Tên món */}
        <div className="min-w-0">
          <h3 className="font-headline-sm text-headline-sm text-primary flex items-start gap-1.5">
            {item.signature && (
              <span
                className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-[2px]"
                aria-label="Món signature"
              >
                star
              </span>
            )}

            <span>{item.name}</span>
          </h3>

          {item.description && (
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              {item.description}
            </p>
          )}
        </div>

        {/* Giá + nút chọn */}
        <div className="shrink-0 text-right">
          <div
            className={`font-label-lg text-label-lg text-primary font-semibold ${
              isPriceByMarket ? "text-sm" : ""
            }`}
          >
            {formattedPrice}
          </div>

          <span className="material-symbols-outlined text-[18px] mt-2">
            {selected ? "check_circle" : "add_circle"}
          </span>
        </div>
      </div>
    </button>
  );
}