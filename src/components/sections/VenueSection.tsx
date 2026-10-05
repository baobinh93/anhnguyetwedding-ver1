import React from "react";

export default function VenueSection() {
  return (
    <>
    {/* laptop */}
      <section
        id="khong-gian"
        className="w-full py-20 lg:py-28 bg-surface hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
                KHÔNG GIAN SẢNH
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Một không gian, nhiều cách tổ chức.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Thiết kế kiến trúc tôn vinh ánh sáng tự nhiên ban ngày và biến hóa
              ấm áp, rực rỡ khi thành phố lên đèn.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-72 overflow-hidden">
                <img
                  alt="Sảnh tiệc An Nhiên ấm cúng với tông gỗ sồi và bàn tiệc bài trí trang nhã"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkhNRjr9o3HQh76cLPQl-j_8nR11MRlrGm4-37s967YrParimFmWBaY4Umvx5YOFie8e0GucfOaApGCkDd_DElUnE6KX1bozb-wdH8WAERpZ3RIWIYYawbrSC5K0qt504JLAT_fheHLEL-e1nntGZfF-4M_g4aTP-4O1ifs6FrR9Or1GJkVYURdqzeyak2MQqjYtqTzd16-7KE3hM__tMJ7_RJFnp9xW3KyLogRXKAqG4vWsWer6Yv"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-surface/90 font-label-sm text-label-sm font-semibold text-primary">
                  SẢNH AN NHIÊN
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      groups
                    </span>{" "}
                    100 - 150 Khách
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      table_bar
                    </span>{" "}
                    10 - 15 Bàn
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Không gian thân mật, mộc mạc
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Trang bị bàn dài bằng gỗ tần bì tự nhiên, rèm thô mỏng đón gió
                  trời, thích hợp cho tiệc báo hỷ, lễ đính hôn và đám cưới phong
                  cách tối giản.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-primary-container font-medium"
                  href="#quote-builder"
                >
                  <span>Đăng ký tham quan sảnh này</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-72 overflow-hidden">
                <img
                  alt="Sảnh tiệc Hạnh Phúc lung linh đèn chùm ấm áp trong ngày cưới rộn ràng"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6t7tTU7apkQnFr2m0FYLC2IvGX_kiPm5niYBm-6_G5WzXI6qckTeNMtd2XalW-0-9pWXdPBYnBX2RxacaSNncRcwrOqh2WyuHr32xumOPWELP_riiu81AMY4b7mjs3GZLb-IBK0X2ODvhYV-xgSP_3gtUSRYrpZ8SPVroYiNaZwRZWHikLIAUh840mUt17RuykAfiaN1-Znq6TmK3HSCixDwuJ7qHINco1YFXGSY3ZOklzhHPBwQA"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-surface/90 font-label-sm text-label-sm font-semibold text-primary">
                  SẢNH HẠNH PHÚC
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      groups
                    </span>{" "}
                    180 - 250 Khách
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      table_bar
                    </span>{" "}
                    18 - 25 Bàn
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Trang trọng, rộng mở và trọn vẹn
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Trần vòm cao 5m khoáng đạt, hệ thống âm thanh tiêu chuẩn phòng
                  hòa nhạc và màn hình LED viền ẩn hiện đại phục vụ trình chiếu
                  kỷ niệm.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-primary-container font-medium"
                  href="#quote-builder"
                >
                  <span>Đăng ký tham quan sảnh này</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mobile */}
      <div className="block md:hidden p-margin-mobile py-space-md mb-space-lg">
        <div className="flex flex-col mb-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            KHÔNG GIAN TIỆC THÂN MẬT
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            Nơi lưu giữ từng khoảnh khắc sẻ chia
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-sm flex flex-col">
            <div
              className="w-full h-48 bg-cover bg-center"
              data-alt="Intimate cozy wedding hall interior with exposed warm wooden beams, fairy lights hanging from ceiling, warm ivory fabric drape accents and round wooden banquet tables."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9zMjAE1e0_oO7ugc3lW1n_A-v4922VI0x-eKth3NqFHEh0CEGJtLPA8eclsRZskcqWBPk0qzBo_7nLlWlXb48mRMW075o31L69acAmKTzhOXdDlV-EJbUpfcVOoDBgtTF0UN0vHgrsPzLc5sqnTW-WKa04CE3OrkCbEM5c8odS1cjVmQAaf0eVZnRmEUyWdQg_Jg7_mO3t99XbUpzuApUr3zHt6L_LyCaXXfrOuGt7BWxvptFBnjc')",
              }}
            ></div>
            <div className="p-space-md flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Sảnh An Nhiên
                </h3>
                <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container">
                  8 - 15 Bàn
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Phù hợp cho tiệc gia đình, lễ đính hôn và những buổi gặp mặt gần
                gũi với phong cách mộc tự nhiên.
              </p>
              <div className="flex items-center gap-4 mt-3 text-secondary font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    groups
                  </span>{" "}
                  80 - 150 Khách
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    wb_sunny
                  </span>{" "}
                  Ánh sáng ấm 3000K
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-sm flex flex-col">
            <div
              className="w-full h-48 bg-cover bg-center"
              data-alt="Elegant contemporary wedding reception hall decorated with soft peach and ivory floral arrangements, crystal wine glasses on long family tables, welcoming ambiance."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjAqryH4XT6CaVzQ-Nv463grgKKSIVNjmnxuq_lFsaz4YDCrGfjHPoE6yet_XZW-ATI-T-ffpiXhg6vHa4L8SPmItux0yTilyodivyTaousCGjyt4DzEnynr2D_WZWDyinkGfy6jXfOpD3SjE7NeJ6ZE8gWyTQuzxb0in1rABNKoYZoeRMl5-SGG_zyeAk08mx9L1ZX1dX6zkOC5YrvIizGnkkSDwEfuOf2GHZG-70EpcD_Aqe-nHi')",
              }}
            ></div>
            <div className="p-space-md flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Sảnh Hạnh Phúc
                </h3>
                <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-primary-fixed text-on-primary-fixed-variant">
                  15 - 25 Bàn
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Trang trọng, ấm áp với hệ thống âm thanh vòm acoustic cao cấp và
                sân khấu tối giản tinh tế.
              </p>
              <div className="flex items-center gap-4 mt-3 text-secondary font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    groups
                  </span>{" "}
                  150 - 260 Khách
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    speaker
                  </span>{" "}
                  Dàn âm thanh mộc
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
