import React from "react";

export default function FinalSection() {
  return (
    <>
    {/* laptop */}
      <div className="hidden md:block relative py-20 lg:py-28" id="lien-he">
        <div className="absolute inset-0 z-0">
          <img
            alt="Khoảnh khắc sum vầy gia đình ấm cúng tại Ánh Nguyệt"
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkhNRjr9o3HQh76cLPQl-j_8nR11MRlrGm4-37s967YrParimFmWBaY4Umvx5YOFie8e0GucfOaApGCkDd_DElUnE6KX1bozb-wdH8WAERpZ3RIWIYYawbrSC5K0qt504JLAT_fheHLEL-e1nntGZfF-4M_g4aTP-4O1ifs6FrR9Or1GJkVYURdqzeyak2MQqjYtqTzd16-7KE3hM__tMJ7_RJFnp9xW3KyLogRXKAqG4vWsWer6Yv"
          />
          <div className="absolute inset-0 bg-surface/85 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-semibold block mb-3">
            CHÀO ĐÓN BẠN ĐẾN THĂM QUAN
          </span>
          <h2 className="font-display-hero text-display-hero text-primary tracking-tight mb-4">
            Ngày này chỉ có một lần.
          </h2>
          <p className="font-subheading text-subheading text-on-surface-variant max-w-2xl mx-auto mb-8 font-light">
            Hãy để chúng tôi đồng hành lo chu toàn bàn tiệc, để bạn thảnh thơi
            tận hưởng trọn vẹn từng khoảnh khắc đáng nhớ nhất của cuộc đời.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg shadow-md transition-all"
              href="#quote-builder"
            >
              <span>Đặt hẹn tham quan sảnh</span>
              <span className="material-symbols-outlined text-[18px]">
                calendar_month
              </span>
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-lg text-label-lg px-8 py-3.5 rounded-lg shadow-sm transition-colors"
              href="tel:0984515516"
            >
              <span className="material-symbols-outlined text-[18px]">
                call
              </span>
              <span>Hotline: 0984 515 516</span>
            </a>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="block md:hidden p-margin-mobile py-space-md mb-space-lg text-center">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary mb-3 shadow-sm mx-auto">
          <span className="material-symbols-outlined text-[24px]">
            favorite
          </span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary mb-2">
          Ngày này chỉ có một lần trong đời
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-md">
          Hãy để Ánh Nguyêt đồng hành kiến tạo một ngày hạnh phúc ấm áp, chỉn chu
          và đong đầy kỷ niệm đẹp cho hai bạn cùng người thân.
        </p>
        <div className="w-full flex flex-col gap-2.5 mb-space-lg">
          <a
            className="w-full h-12 px-space-md rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
            href="tel:0984515516"
          >
            <span className="material-symbols-outlined text-[20px]">
              calendar_add_on
            </span>
            <span className="">Đặt lịch xem sảnh</span>
          </a>
          <a
            className="w-full h-12 px-space-md rounded-lg bg-surface-container-high text-primary font-label-lg text-label-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
            href="tel:0984515516"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span className="">Hotline: 0984 515 516</span>
          </a>
        </div>

        <div className="w-full p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col text-left gap-2 text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-headline-sm text-primary font-semibold">
              Ánh Nguyệt
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              | Nhà hàng tiệc cưới
            </span>
          </div>
          <p className="font-body-sm text-body-sm">
            Địa chỉ: 383 Bùi Văn Hòa, Long Bình, Đồng Nai
          </p>
          <p className="font-body-sm text-body-sm">
            Thời gian đón tiếp: 08:30 - 21:00 hàng ngày
          </p>
          <div className="pt-2 flex items-center justify-between text-[11px] text-on-surface-variant/80">
            <span className="">© 2025 Ánh Nguyệt Hospitality</span>
            <span className="">Ấm áp • Chỉn chu • Vừa vặn</span>
          </div>
        </div>
      </div>
    </>
  );
}
