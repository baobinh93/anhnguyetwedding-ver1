import React from "react";

export default function JourneySection() {
  return (
    <>
    {/* Laptop */}
      <section
        id="hanh-trinh"
        className="w-full py-20 lg:py-28 bg-surface-container-lowest hidden md:block "
      >
       
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
                  HÀNH TRÌNH NGÀY CƯỚI
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Từ lúc đón khách đến khi nâng ly tạm biệt.
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Một buổi tiệc được định hình chuẩn xác từng cột mốc, giúp cô dâu
                chú rể thong thả tận hưởng từng cung bậc xúc cảm.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-4" id="timelineContainer">
                <div
                  className="timeline-step group p-5 rounded-xl bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container"
                  data-time="16:30"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-label-lg text-label-lg font-semibold text-primary-container px-3 py-1 bg-surface-container-lowest rounded-md">
                     10:00
                    </span>
                    <div className="flex-1">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                        Đón khách & chụp ảnh
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Khách mời chụp ảnh kỷ niệm cùng cô dâu & chú rể tại không gian đón khách của nhà hàng. Giữ lại những khoảng khắc mọi người đến chung vui.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="timeline-step group p-5 rounded-xl bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container"
                  data-time="17:30"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-label-lg text-label-lg font-semibold text-primary-container px-3 py-1 bg-surface-container-lowest rounded-md">
                     12:00
                    </span>
                    <div className="flex-1">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                        Lễ thành hôn thiêng liêng
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Âm nhạc du dương nhẹ nhàng vang lên. Cô dâu chú rể bước vào
                        khán phòng ngập tràn ánh sáng và ánh nhìn tự hào từ gia
                        đình.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="timeline-step group p-5 rounded-xl bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container"
                  data-time="18:00"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-label-lg text-label-lg font-semibold text-primary-container px-3 py-1 bg-surface-container-lowest rounded-md">
                      12:15
                    </span>
                    <div className="flex-1">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                        Khai tiệc & Trình diễn ẩm thực
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Nâng ly chúc mừng hạnh phúc. Màn dọn tiệc đồng bộ nhịp
                        nhàng mở đầu bằng món súp ấm nóng hoặc món gỏi chua thanh đánh thức mọi vị giác của thực khách.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="timeline-step group p-5 rounded-xl bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container"
                  data-time="18:45"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-label-lg text-label-lg font-semibold text-primary-container px-3 py-1 bg-surface-container-lowest rounded-md">
                      12:30
                    </span>
                    <div className="flex-1">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                        Món chính đậm đà hương vị
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Được dọn tuần tự theo quy chuẩn của nhà hàng. Nhân viên liên
                        tục lên xuống món nhịp nhàng tùy theo yêu cầu của bàn tiệc.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="timeline-step group p-5 rounded-xl bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container"
                  data-time="20:15"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-label-lg text-label-lg font-semibold text-primary-container px-3 py-1 bg-surface-container-lowest rounded-md">
                     13:15
                    </span>
                    <div className="flex-1">
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                        Nâng ly tri ân & Tiễn khách
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Đôi trẻ đến từng bàn cảm tạ thân hữu. Trao gửi lời cảm ơn chân thành đến quan khách. Hòa cùng những giai điệu sôi động để tạo nên một ngày vui trọn vẹn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-surface-container">
                  <img
                    alt="Khoảnh khắc cô dâu chú rể rạng ngời hạnh phúc nâng ly bên gia đình tại Ánh Nguyệt"
                    className="w-full h-[520px] object-cover transition-all duration-700"
                    id="journeyImage"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6t7tTU7apkQnFr2m0FYLC2IvGX_kiPm5niYBm-6_G5WzXI6qckTeNMtd2XalW-0-9pWXdPBYnBX2RxacaSNncRcwrOqh2WyuHr32xumOPWELP_riiu81AMY4b7mjs3GZLb-IBK0X2ODvhYV-xgSP_3gtUSRYrpZ8SPVroYiNaZwRZWHikLIAUh840mUt17RuykAfiaN1-Znq6TmK3HSCixDwuJ7qHINco1YFXGSY3ZOklzhHPBwQA"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent text-inverse-on-surface">
                    <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed-dim">
                      Ghi dấu trọn vẹn
                    </span>
                    <p className="font-headline-sm text-headline-sm mt-1">
                      Nụ cười hạnh phúc của cô dâu chú rể
                    </p>
                    <p className="font-body-sm text-body-sm text-surface-variant/80 mt-1">
                      Đám cưới Minh & Linh · Không gian bàn dài thân mật
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
      </section>
      {/* Mobile */}
      <div className="block md:hidden p-margin-mobile py-space-md mb-space-lg">
        <div className="flex flex-col mb-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            TIẾN TRÌNH TRỌN VẸN
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            Từ lúc đón khách đến khi nâng ly tạm biệt
          </h2>
        </div>

        <div className="w-full h-56 rounded-xl overflow-hidden shadow-sm mb-space-md relative">
          <img
            className="w-full h-full object-cover"
            data-alt="Modern Vietnamese bride in graceful embroidered white Ao Dai laughing warmly with groom in navy suit during wedding banquet, surrounded by joyous family and candlelight at dinner table."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqRENi-xA2LZhXycDkY29clvPEXhGC1iblt-c_bvbbjm9KQ43ilLANa6yopdOr_JNFTD6ZAJGIK4S2HTBQxMJM2yxAe6sVzq2TdRk9Y23OlK_UD6-KcvLd7tfkZTtp4CcRf-k6pdVJUjgyLExl5YjJoFRFfGVVp9P3Zzdx4KtkFCqdDPQjpIWmk0KWOGmBdwrzcwV2qjR3xnn6mT1ad9BNhOEXwkeNh5PX1C4vexTtb_6iiSEGrSzo"
          />
          <div className="absolute bottom-3 left-3 bg-inverse-surface/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-inverse-on-surface">
            <span className="font-label-sm text-label-sm flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">
                favorite
              </span>
              Khoảnh khắc chân thật & gắn kết
            </span>
          </div>
        </div>

        <div className="relative pl-6 flex flex-col gap-6">
          <div className="absolute left-2.5 top-2 bottom-2 w-[2px] bg-surface-container-highest"></div>

          <div className="relative flex flex-col">
            <div className="absolute -left-[1.85rem] top-1 w-4 h-4 rounded-full bg-primary-container shadow-sm"></div>
            <span className="font-label-sm text-label-sm text-primary-container font-semibold">
              10:00 — ĐÓN TIẾP
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
              Tiếp đón thân tình tại sảnh chờ
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Quan khách chụp hình cùng gia đình tại sảnh tiệc, dùng thức uống
              và đồ ăn nhẹ trên bàn tiệc
            </p>
          </div>

          <div className="relative flex flex-col">
            <div className="absolute -left-[1.85rem] top-1 w-4 h-4 rounded-full bg-surface-container-highest shadow-sm"></div>
            <span className="font-label-sm text-label-sm text-secondary font-semibold">
              12:00 — LỄ THÀNH HÔN
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
              Nghi thức trang trọng, lắng đọng
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Lời cảm tạ cha mẹ hai bên, trao nhẫn và chia sẻ xúc cảm trong
              tiếng nhạc du dương.
            </p>
          </div>

          <div className="relative flex flex-col">
            <div className="absolute -left-[1.85rem] top-1 w-4 h-4 rounded-full bg-surface-container-highest shadow-sm"></div>
            <span className="font-label-sm text-label-sm text-secondary font-semibold">
              12:15 — KHAI VỊ TINH TẾ
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
              Bàn tiệc đượm vị mở đầu
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Món súp cua thanh tao cùng gỏi củ hũ dừa tôm thịt tươi giòn kích
              thích vị giác.
            </p>
          </div>

          <div className="relative flex flex-col">
            <div className="absolute -left-[1.85rem] top-1 w-4 h-4 rounded-full bg-primary-container shadow-sm"></div>
            <span className="font-label-sm text-label-sm text-primary-container font-semibold">
              12:30 — MÓN CHÍNH TRANG TRỌNG
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
              Bản giao hưởng ẩm thực gia đình
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Cá chẽm sốt chanh leo chua ngọt, gà bó xôi với lớp vỏ giòn rụm
              cùng thịt gà mềm mọng khó quên
            </p>
          </div>

          <div className="relative flex flex-col">
            <div className="absolute -left-[1.85rem] top-1 w-4 h-4 rounded-full bg-surface-container-highest shadow-sm"></div>
            <span className="font-label-sm text-label-sm text-secondary font-semibold">
              13:30 — LỜI CẢM TẠ & TIỄN KHÁCH
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
              Những giai điệu sôi động
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Tráng miệng trái cây tươi ngon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
