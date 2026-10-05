import React from "react";

export default function BrandSection() {
  return (
    <>
    {/* laptop */}
      <section
        id="gioi-thieu"
        className="w-full py-20 lg:py-28 bg-surface hidden md:block"
      >
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-3">
              KHÔNG CHỈ LÀ MỘT BÀN TIỆC
            </p>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
              Bạn lo chuyện hạnh phúc.
              <br />
              Chúng tôi lo vẹn tròn ngày vui.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Chúng tôi chuẩn bị từng chi tiết một cách tỉ mỉ, để bạn có thể
              trọn vẹn dành thời gian cho những cái ôm và nụ cười cùng người
              quan trọng nhất.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="font-headline-md text-headline-md text-primary-container/40 block mb-4">
                  01
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                  Món ăn chỉn chu
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Hương vị chuẩn mực thuần Việt giao thoa kỹ thuật hiện đại.
                  Nguyên liệu tươi mới chọn lọc mỗi sáng, khẩu phần hào phóng,
                  ấm nóng khi dọn lên.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wide">
                <span className="material-symbols-outlined text-[18px]">
                  restaurant
                </span>
                <span>Bếp trưởng kinh nghiệm 15 năm</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="font-headline-md text-headline-md text-primary-container/40 block mb-4">
                  02
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                  Không gian phù hợp
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Sảnh tiệc ấm cúng, thiết kế tôn trọng sự kết nối gần gũi. Ánh
                  sáng ấm dịu mắt, chất liệu không gian nhẹ nhàng, ấm áp nhã.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wide">
                <span className="material-symbols-outlined text-[18px]">
                  nest_multi_room
                </span>
                <span>Quy mô 100 – 300 khách</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="font-headline-md text-headline-md text-primary-container/40 block mb-4">
                  03
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                  Phục vụ tận tâm
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Đội ngũ trẻ trung, được đào tạo phong cách đón tiếp trang
                  trọng mà tự nhiên. Nhịp tiệc mượt mà không dồn dập, chăm sóc
                  chu đáo từng vị khách mọi lứa tuổi.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wide">
                <span className="material-symbols-outlined text-[18px]">
                  volunteer_activism
                </span>
                <span>1 Nhân viên cho 2-3 bàn</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mobile */}
      <div className="block md:hidden p-margin-mobile py-space-md mb-space-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-primary-container"></span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            KHÔNG CHỈ LÀ MỘT BÀN TIỆC
          </span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary leading-snug tracking-tight mb-space-sm">
          Bạn lo chuyện hạnh phúc.
          <br />
          Chúng tôi lo vẹn tròn ngày vui.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-space-md">
          Không phô trương rườm rà, Ánh Nguyệt tập trung vào những giá trị cốt
          lõi: món ăn ngon miệng vừa khẩu vị, không gian ấm cúng gắn kết gia
          đình và sự phục vụ chu đáo như đón người thân về nhà.
        </p>

        <div className="flex flex-col gap-3">
          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-start gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary-container">
              <span className="material-symbols-outlined text-[22px]">
                restaurant
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Món ăn chỉn chu
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  01
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-normal">
                Nguyên liệu tươi mới trong ngày, kỹ thuật chế biến thanh nhã,
                giữ trọn mỹ vị truyền thống kết hợp tinh hoa đương đại.
              </p>
            </div>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-start gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-secondary">
              <span className="material-symbols-outlined text-[22px]">
                nest_multi_room
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Không gian phù hợp
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  02
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-normal">
                Quy mô từ 8 đến 30 bàn thân mật, thiết kế ánh sáng ấm dịu và
                không gian ấm áp lưu giữ từng tiếng cười.
              </p>
            </div>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-start gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary-container">
              <span className="material-symbols-outlined text-[22px]">
                volunteer_activism
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Phục vụ tận tâm
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  03
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-normal">
                Đội ngũ quản lý tiệc đồng hành 1-1, lắng nghe từng yêu cầu riêng
                biệt  của quan khách và hai họ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
