import { useState } from "react";

const navItems = [
  { label: "Hành Trình", href: "#hanh-trinh" },
  { label: "Gói Tiệc", href: "#goi-tiec" },
  { label: "Tự Chọn Menu", href: "#tu-chon-menu" },
  { label: "Ẩm Thực", href: "#am-thuc" },
  { label: "Không Gian", href: "#khong-gian" },
  { label: "Báo Giá Nhanh", href: "#bao-gia-nhanh" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8 xl:px-12">
        <a
          href="#trang-chu"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center gap-2.5 lg:gap-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary lg:h-9 lg:w-9">
            <span className="material-symbols-outlined text-[17px] lg:text-[18px]">
              favorite
            </span>
          </div>
          <div className="flex min-w-0 flex-col text-left">
            <span className="font-label-sm text-label-sm hidden truncate uppercase tracking-widest text-on-surface-variant sm:block">
              NHÀ HÀNG TIỆC CƯỚI
            </span>
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-tight">
              Ánh Nguyệt
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap py-2 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <a
            href="tel:0984515516"
            className="hidden 2xl:inline-flex rounded-lg px-2 py-2 font-label-lg text-label-lg tracking-wider text-on-surface transition-colors hover:text-primary"
          >
            0984 515 516
          </a>
          <a
            href="#bao-gia-nhanh"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-primary-container px-4 py-2.5 font-label-lg text-label-lg text-on-primary shadow-sm transition-opacity hover:opacity-90 xl:px-space-md"
          >
            Nhận Báo Giá
          </a>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="material-symbols-outlined text-[18px] text-on-primary">
              person
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:0984515516"
            aria-label="Gọi Ánh Nguyệt"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-on-primary sm:h-10 sm:w-10"
          >
            <span className="material-symbols-outlined text-[19px]">call</span>
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container text-primary transition-colors hover:bg-surface-container-high active:scale-95 sm:h-10 sm:w-10"
          >
            <span className="material-symbols-outlined text-[22px]">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-outline-variant/40 bg-surface/98 px-4 pb-4 pt-2 shadow-lg backdrop-blur-xl lg:hidden">
          <nav className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-surface-container-low">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-between border-b border-outline-variant/30 px-4 py-3 font-label-lg text-label-lg text-on-surface transition-colors last:border-b-0 hover:bg-surface-container hover:text-primary"
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                  chevron_right
                </span>
              </a>
            ))}
            <a
              href="#bao-gia-nhanh"
              onClick={closeMenu}
              className="m-3 flex min-h-12 items-center justify-center rounded-lg bg-primary px-4 py-3 font-label-lg text-label-lg text-on-primary shadow-sm active:scale-[0.99]"
            >
              Nhận báo giá nhanh
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
