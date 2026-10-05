import React from "react";

export default function CulinarySection() {
  return (
    <>
    {/* laptop */}
      <section
        id="am-thuc"
        className="w-full py-20 lg:py-28 bg-surface-container-low hidden md:block"
      >
        <div className="">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container">
                  <img
                    alt="Món cá phi lê sốt chanh dây thanh vị nghệ thuật trên bàn tiệc gốm sứ mộc"
                    className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXKo13L-M1BE7Vw1YwCS_SpT_yvlP0Q3PIGXbDSGTquNONx06RPkT3wTP_hy4EHNqa3y-ss2AVTkbVOpOgzmWTDqSNn3LIgfSii2I6qyI_8fLUOK2kzAOgO2wGipCjoetxjgCCT9TnZX_1CLhbXx2S1sRiopHkl5JhVpiHRjAQu1RUW8nRO4cDj6Nubj8VSVXaesG_Lmt_01fXJbTPbntDiwVcvUkKu8azoYOryCF1_bvo6hLUcYlC"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-5 rounded-xl bg-surface/90 backdrop-blur-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-semibold">
                          TINH HOA ẨM THỰC ÁNH NGUYỆT
                        </span>
                        <h4 className="font-headline-sm text-headline-sm text-primary">
                          Cá phi lê sốt chanh dây
                        </h4>
                      </div>
                      <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container">
                        Thanh vị · Nhẹ · Dễ ăn
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  TRIẾT LÝ BÀN TIỆC
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Món ăn được chuẩn bị để bàn tiệc không chỉ đẹp.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Chúng tôi tin rằng ký ức đậm sâu nhất sau một đám cưới thường
                  nằm ở dư vị món ăn. Món ăn phải dọn nóng sốt, đầy đặn để khách
                  quý cảm nhận sự hiếu khách chu toàn.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px] text-on-primary-fixed">
                        family_restroom
                      </span>
                    </div>
                    <div>
                      <h5 className="font-headline-sm text-[18px] text-primary">
                        Hài hòa khẩu vị ba thế hệ
                      </h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Gia vị nêm nếm thanh nhã, tôn vinh độ ngọt tự nhiên của
                        thịt cá tươi, chiều lòng cả ông bà lớn tuổi lẫn bạn bè
                        trẻ trung.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px] text-on-secondary-container">
                        local_shipping
                      </span>
                    </div>
                    <div>
                      <h5 className="font-headline-sm text-[18px] text-primary">
                        Nguồn gốc nông trại minh bạch
                      </h5>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Rau củ hữu cơ Đà Lạt, gia cầm thả vườn được kiểm định
                        khắt khe mỗi sáng theo tiêu chuẩn an toàn thực phẩm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mobile*/}
      <div className="block md:hidden p-margin-mobile py-space-md mb-space-lg">
        <div className="flex flex-col mb-3">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            TRIẾT LÝ BẾP ÁNH NGUYỆT
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            Đậm đà hương vị ký ức, thanh nhẹ khẩu vị đương thời
          </h2>
        </div>

        <div className="w-full h-64 rounded-xl overflow-hidden shadow-sm relative mb-space-sm">
          <img
            className="w-full h-full object-cover"
            data-alt="Close up editorial culinary photography of delicate pan-seared sea bass with golden passionfruit sauce, dill sprigs, and toasted sesame on an earthy warm ceramic plate resting on textured natural linen fabric under natural soft daylight."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSj5PVid8COKantdbS0M0ZTwn4ZHVT_z4DIYlebFAr48JDSANRWFhWC5Lxwfe3Y17oAJ1L7tz3QgVaamcdPcATen2Cr3-GFznNziJsEodyos4tkRxniSzzYuWsu2RupBZUWyu-mO9NNKQe4JUPqSDq-VGAifyLAtXnXcAxnkyi0Y-aZBxGfXibIWHiRUsroLmMF1ibJLsmRSV8R-keEyWinSm3HODRvQyJo67M9OwoBOceGnQWUOxf"
          />
          <div className="absolute bottom-3 left-3 right-3 bg-surface/90 backdrop-blur-md p-3 rounded-lg flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary">
                Cá Phi Lê Sốt Chanh Leo
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Món ăn biểu tượng được 98% cặp đôi lựa chọn
              </span>
            </div>
            <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">eco</span>
            </div>
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
          Chúng tôi hiểu rằng trong một tiệc cưới, có cả người lớn tuổi trân quý
          khẩu vị mộc mạc và bạn bè trẻ thích sự sáng tạo. Thực đơn tại Ánh Nguyệt giảm bớt dầu mỡ, tôn vinh độ ngọt tự nhiên từ rau củ hữu cơ và
          nước dùng ninh chậm 12 giờ.
        </p>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="p-3 rounded-lg bg-surface-container-low flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">
              verified
            </span>
            <span className="font-label-sm text-label-sm text-on-surface">
              100% Nguyên liệu sạch
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
}
