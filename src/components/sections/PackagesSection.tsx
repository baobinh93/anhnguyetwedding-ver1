import React from "react";

export default function PackagesSection() {
  return (
    <>
    {/* laptop */}
      <section
        id="goi-tiec"
        className="w-full py-20 lg:py-28 bg-surface-container-low hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
              CÁC GÓI TIỆC
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
              Chọn cách bạn muốn tổ chức ngày vui
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ba phương án được thiết kế cân bằng giữa ngân sách thực tế, chất
              lượng thực đơn và chiều sâu trải nghiệm.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    GÓI 01
                  </span>
                  <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                    Tiết kiệm & Tinh gọn
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  GỌN GÀNG
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Dành cho các cặp đôi ưu tiên sự tinh giản, ấm cúng và tập
                  trung vào ẩm thực ngon miệng.
                </p>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display-hero text-[38px] leading-none text-primary font-serif">
                      2.090.000
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      đ / bàn (10 khách)
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      flare
                    </span>
                    <span>
                      Thực đơn <strong>5 món</strong> chuẩn mực no nê
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Gỏi ngó sen tôm thịt + bánh phồng</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Gà ta hấp lá chanh + xôi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span> Bê tươi hấp hành gừng</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Lẩu thái hải sản + bún</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Rau câu thanh nhiệt</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t-0">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg transition-colors"
                  href="#menu-builder"
                >
                  <span>Xem chi tiết gói</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="relative bg-surface-bright p-8 rounded-2xl flex flex-col justify-between shadow-xl ring-2 ring-primary-container/20">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm">
                Được chọn nhiều nhất
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-3 mt-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-semibold">
                    GÓI 02
                  </span>
                  <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-medium">
                    Hài hòa trọn vẹn
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  TRỌN VẸN
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Lựa chọn lý tưởng được 75% khách hàng lựa chọn, đủ đầy từ hoa
                  nến đến các món ăn tinh túy.
                </p>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display-hero text-[38px] leading-none text-primary font-serif">
                      2.350.000
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      đ / bàn (10 khách)
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      flare
                    </span>
                    <span>
                      Thực đơn <strong>6 món</strong> đầy đặn (Khai vị kép)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Gỏi bò thái + bánh đa vừng</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Chả đùm ngũ vị</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Gà ta hấp lá chanh + xôi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Tôm hấp bia tươi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Lẩu thái hải sản + bún</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Trái cây theo mùa</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors shadow-sm"
                  href="#menu-builder"
                >
                  <span>Tùy biến gói Trọn Vẹn</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    GÓI 03
                  </span>
                  <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                    Đẳng cấp bespoke
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  CHỈN CHU
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Trải nghiệm thượng lưu với hải sản thượng hạng, bàn VIP có
                  người phục vụ riêng.
                </p>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display-hero text-[38px] leading-none text-primary font-serif">
                      3.200.000
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      đ / bàn (10 khách)
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      flare
                    </span>
                    <span>
                      Thực đơn <strong>7 món</strong> đỉnh cao mỹ vị
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Gỏi bao tử chua cay</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Chả giò Ánh Nguyệt</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Mực nhồi trứng muối</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Tôm hấp bia tươi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Gà ta hấp lá chanh + xôi lá sen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Lẩu nấm hải sản bào ngư + mì thượng hạng</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      check_circle
                    </span>
                    <span>Bưởi da xanh Biên Hòa</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg transition-colors"
                  href="#menu-builder"
                >
                  <span>Xem chi tiết gói</span>
                  <span className="material-symbols-outlined text-[16px]">
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
            GÓI TRỌN GÓI LINH HOẠT
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            Chọn phong cách tiệc bạn mong muốn
          </h2>
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                GÓI CƠ BẢN
              </span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                5 Món
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
              Gọn Gàng
            </h3>
            <div className="flex items-baseline gap-1 mt-1 mb-3">
              <span className="font-headline-md text-headline-md font-semibold text-primary">
                2.090.000
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                đ / bàn (10 khách)
              </span>
            </div>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  flare
                </span>
                <span>
                  Thực đơn <strong>5 món</strong> chuẩn mực no nê
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Gỏi ngó sen tôm thịt + bánh phồng</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Gà ta hấp lá chanh + xôi</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span> Bê tươi hấp hành gừng</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Lẩu thái hải sản + bún</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Rau câu thanh nhiệt</span>
              </li>
            </ul>
            <button className="w-full h-11 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg active:scale-95 transition-transform">
              Xem chi tiết gói
            </button>
          </div>

          <div className="relative p-space-md rounded-xl bg-primary text-on-primary shadow-md flex flex-col overflow-hidden">
            <div className="absolute top-3 right-3 bg-primary-container text-on-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
              Được chọn nhiều nhất
            </div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container">
              ĐẶC QUYỀN TINH TẾ
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-primary mt-1">
              Trọn Vẹn
            </h3>
            <div className="flex items-baseline gap-1 mt-1 mb-3">
              <span className="font-headline-md text-headline-md font-semibold text-on-primary">
                2.350.000
              </span>
              <span className="font-body-sm text-body-sm text-surface-container-highest">
                đ / bàn (10 khách)
              </span>
            </div>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-surface-container-highest mb-space-md">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-white">
                  flare
                </span>
                <span>
                  Thực đơn <strong>6 món</strong> đầy đặn (Khai vị kép)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-white">
                  check_circle
                </span>
                <span>Gỏi bò thái + bánh đa vừng</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-white">
                  check_circle
                </span>
                <span>Chả đùm ngũ vị</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-white">
                  check_circle
                </span>
                <span>Gà ta hấp lá chanh + xôi</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-white">
                  check_circle
                </span>
                <span>Tôm hấp bia tươi</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-white">
                  check_circle
                </span>
                <span>Lẩu thái hải sản + bún</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-white">
                  check_circle
                </span>
                <span>Trái cây theo mùa</span>
              </li>
            </ul>
            <button className="w-full h-12 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-2">
              <span className="">Chọn gói Trọn Vẹn</span>
              <span className="material-symbols-outlined text-[18px]">
                done
              </span>
            </button>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                ĐỈNH CAO ẨM THỰC
              </span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                7 Món Đặc Sắc
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
              Chỉn Chu
            </h3>
            <div className="flex items-baseline gap-1 mt-1 mb-3">
              <span className="font-headline-md text-headline-md font-semibold text-primary">
                3.200.000
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                đ / bàn (10 khách)
              </span>
            </div>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  flare
                </span>
                <span>
                  Thực đơn <strong>7 món</strong> đỉnh cao mỹ vị
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Gỏi bao tử chua cay</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Chả giò Ánh Nguyệt</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Mực nhồi trứng muối</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Tôm hấp bia tươi</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Gà ta hấp lá chanh + xôi lá sen</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Lẩu nấm hải sản bào ngư + mì thượng hạng</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span>Bưởi da xanh Biên Hòa</span>
              </li>
            </ul>
            <button className="w-full h-11 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg active:scale-95 transition-transform">
              Xem chi tiết gói
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
