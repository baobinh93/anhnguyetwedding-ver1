import React from "react";

export default function TransparencySection() {
  return (
    <>
    {/* laptop */}
      <section
        id="minh-bach"
        className="w-full py-20 lg:py-28 bg-surface-container-low hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                CAM KẾT TRUNG THỰC
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Bạn sẽ luôn biết mình đang trả tiền cho điều gì.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Chúng tôi hiểu ngân sách cưới cần được hoạch định chính xác.
                Ánh Nguyệt cam kết bảng báo giá minh bạch ngay từ ngày tư vấn đầu
                tiên — không phụ thu bia rượu, không phí phục vụ ẩn.
              </p>
              <div className="pt-4">
                <a
                  className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-lg hover:bg-primary-container transition-colors shadow-sm"
                  href="#quote-builder"
                >
                  <span>Nhận bảng dự toán chi tiết</span>
                  <span className="material-symbols-outlined text-[18px]">
                    receipt_long
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    check_circle
                  </span>
                  <span className="font-label-lg text-label-lg font-medium text-on-surface">
                    Thực đơn đầy đủ 5 - 8 món định lượng chuẩn
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                  Đã bao gồm
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    check_circle
                  </span>
                  <span className="font-label-lg text-label-lg font-medium text-on-surface">
                    Bàn ghế phủ, khăn trải bàn & bộ đồ ăn sạch đẹp
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                  Đã bao gồm
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    check_circle
                  </span>
                  <span className="font-label-lg text-label-lg font-medium text-on-surface">
                    Đội ngũ nhân viên phục vụ cố định theo khu vực
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                  Đã bao gồm
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    check_circle
                  </span>
                  <span className="font-label-lg text-label-lg font-medium text-on-surface">
                    Âm thanh đón khách, ánh sáng sân khấu & màn hình LED
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                  Đã bao gồm
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    check_circle
                  </span>
                  <span className="font-label-lg text-label-lg font-medium text-on-surface">
                    Các nghi thức lễ cưới sang trọng
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                  Đã bao gồm
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary-container/40 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    add_circle
                  </span>
                  <span className="font-label-lg text-label-lg font-medium text-on-secondary-container">
                    Nâng cấp dịch vụ trong tiệc
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-medium">
                  Tùy chọn thêm
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mobile */}
      <div className="block md:hidden p-margin-mobile py-space-md mb-space-lg">
        <div className="flex flex-col mb-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            CAM KẾT AN TÂM
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            Minh bạch trong từng khoản đầu tư
          </h2>
        </div>
        <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-3">
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
              check_circle
            </span>
            <span className="font-body-md text-body-md text-on-surface">
              Giá niêm yết đã bao gồm trọn gói đồ ăn, đồ uống tiêu chuẩn và phục
              vụ.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
              check_circle
            </span>
            <span className="font-body-md text-body-md text-on-surface">
              Không phụ thu phí mang đồ uống vào (đối với rượu vang & vang nổ
              gia đình).
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
              check_circle
            </span>
            <span className="font-body-md text-body-md text-on-surface">
              Dự phòng 02 bàn phát sinh cùng mức giá ban đầu mà không hề đội chi
              phí.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
              check_circle
            </span>
            <span className="font-body-md text-body-md text-on-surface">
              Hợp đồng chi tiết từng loại nguyên liệu, giờ giấc và người chịu
              trách nhiệm trực tiếp.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
