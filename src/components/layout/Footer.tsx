export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-space-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight">Nhà hàng Ánh Nguyệt</span>
            </div>
            <p className="font-subheading text-subheading text-on-surface-variant italic">
              Một ngày trọng đại. Một lựa chọn hợp lý.
            </p>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <p>Địa chỉ: 383 Bùi Văn Hòa, Long Bình, Đồng Nai</p>
              <p>Hotline tư vấn: 0984 515 516</p>
              <p>Giờ đón tiếp: 08:30 – 21:00 hàng ngày</p>
            </div>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-semibold">Tiệc Cưới</h4>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <li><a href="#tu-chon-menu" className="hover:text-primary transition-colors">Thực đơn</a></li>
              <li><a href="#goi-tiec" className="hover:text-primary transition-colors">Các gói tiệc</a></li>
              <li><a href="#khong-gian" className="hover:text-primary transition-colors">Không gian sảnh</a></li>
              <li><a href="#bao-gia-nhanh" className="hover:text-primary transition-colors">Dự toán chi phí</a></li>
            </ul>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-semibold">Về Chúng Tôi</h4>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <li><a href="#hanh-trinh" className="hover:text-primary transition-colors">Triết lý phục vụ</a></li>
              <li><a href="#hanh-trinh" className="hover:text-primary transition-colors">Câu chuyện ngày vui</a></li>
              <li><a href="#am-thuc" className="hover:text-primary transition-colors">Tiêu chuẩn an toàn ẩm thực</a></li>
              <li><a href="#bao-gia-nhanh" className="hover:text-primary transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-semibold">Theo Dõi &amp; Tư Vấn</h4>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
              <li>
                <a href="#bao-gia-nhanh" className="inline-flex items-center gap-1.5 text-primary font-medium hover:opacity-80 transition-opacity">
                  <span>Đặt lịch ghé thăm sảnh</span>
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-space-xl pt-space-md flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
          <p>© 2026 Ánh Nguyệt Wedding &amp; Banquet. All rights reserved.</p>
          <p className="font-label-sm text-label-sm tracking-wide text-secondary">Báo giá minh bạch, không phí ẩn.</p>
        </div>
      </div>
    </footer>
  );
}
