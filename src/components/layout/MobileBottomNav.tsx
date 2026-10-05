const items = [
  ["trang-chu", "home", "Tổng quan"],
  ["khong-gian", "domain", "Sảnh tiệc"],
  ["tu-chon-menu", "restaurant_menu", "Thực đơn"],
  ["bao-gia-nhanh", "request_quote", "Báo giá"],
] as const;

export default function MobileBottomNav() {
  return (
    <nav className=" fixed bottom-0 left-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.04)] xl:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {items.map(([href, icon, label], index) => (
          <a
            key={href}
            href={`#${href}`}
            className={`flex flex-col items-center justify-center w-14 h-12 transition-colors ${
              index === 0 ? "text-primary-container font-medium" : "text-on-surface-variant"
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">{icon}</span>
            <span className="font-label-sm text-label-sm tracking-normal mt-0.5">{label}</span>
          </a>
        ))}

        <a
          href="#bao-gia-nhanh"
          className="flex items-center gap-1.5 px-3 py-2 bg-primary-container text-on-primary rounded-lg transition-transform active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          <span className="font-label-sm text-label-sm tracking-normal">Đặt hẹn</span>
        </a>
      </div>
    </nav>
  );
}
