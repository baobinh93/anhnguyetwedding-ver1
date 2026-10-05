import React from "react";

export default function TestimonialSection() {
  return (
    <>
    {/* laptop */}
      <div className="hidden md:block py-20 lg:py-28" id="cam-nhan">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <span className="material-symbols-outlined text-[48px] text-primary-container/30 mb-6">
            format_quote
          </span>
          <blockquote className="font-subheading text-headline-lg text-primary tracking-tight italic font-serif leading-relaxed mb-6">
            “Điều mình thích nhất là các bạn nhân viên rất chủ động. Mình không
            phải tất bật chạy đi xử lý từng việc lặt vặt, mà có thể trọn vẹn
            ngồi ăn ngon và hàn huyên với những người bạn thân.”
          </blockquote>
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-secondary"></span>
            <span className="font-label-lg text-label-lg font-semibold text-on-surface">
              Minh & Linh
            </span>
            <span className="text-on-surface-variant font-body-sm text-body-sm">
              · Tiệc cưới 120 khách · Tháng 10
            </span>
            <span className="w-6 h-px bg-secondary"></span>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="block md:hidden p-margin-mobile py-space-md mb-space-lg">
        <span className="material-symbols-outlined text-[32px] text-primary-container">
          format_quote
        </span>
        <blockquote className="font-subheading text-subheading text-primary italic font-normal leading-relaxed mt-2 mb-3">
          "Điều hai đứa mình yêu thích nhất tại Ánh Nguyệt là sự chủ động. Từ
          việc châm trà nóng cho các cô bác lớn tuổi, đến chuẩn bị góc chơi cho
          mấy bé nhỏ, mọi thứ đều diễn ra tự nhiên như tình thân trong nhà."
        </blockquote>
        <span className="font-label-lg text-label-lg font-medium text-on-surface">
          Phương Thảo & Minh Trí
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Lễ cưới tháng 11/2024
        </span>
      </div>
    </>
  );
}
