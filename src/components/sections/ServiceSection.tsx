import React from "react";

export default function ServiceSection() {
  return (
    <>
    {/* laptop */}
      <section
        id="dich-vu"
        className="w-full py-20 lg:py-28 bg-primary text-on-primary  hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim font-semibold block mb-2">
              TIÊU CHUẨN ĐÓN TIẾP
            </span>
            <h2 className="font-headline-lg text-headline-lg text-surface-bright tracking-tight mb-4">
              Giá hợp lý không có nghĩa là ít chu đáo.
            </h2>
            <p className="font-body-lg text-body-lg text-surface-variant font-light">
              Đằng sau một buổi tiệc diễn ra nhẹ nhàng là hàng trăm chi tiết kỹ
              thuật đã được đội ngũ chuẩn bị kỹ lưỡng từ nhiều tuần trước.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-primary-container/40 p-6 rounded-xl hover:bg-primary-container/60 transition-colors">
              <span className="font-headline-md text-[36px] text-primary-fixed-dim font-serif block mb-3">
                01
              </span>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-2">
                Tư vấn thực đơn
              </h3>
              <p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                Lắng nghe sở thích vùng miền của hai họ để cân đối menu, tránh
                trùng lặp nguyên liệu và đảm bảo định lượng trọn vẹn.
              </p>
            </div>
            <div className="bg-primary-container/40 p-6 rounded-xl hover:bg-primary-container/60 transition-colors">
              <span className="font-headline-md text-[36px] text-primary-fixed-dim font-serif block mb-3">
                02
              </span>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-2">
                Chuẩn bị trước tiệc
              </h3>
              <p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                Setup bàn mẫu kiểm tra khăn hoa, test toàn diện âm thanh micro
                và tổng duyệt quy trình đón khách cùng MC.
              </p>
            </div>
            <div className="bg-primary-container/40 p-6 rounded-xl hover:bg-primary-container/60 transition-colors">
              <span className="font-headline-md text-[36px] text-primary-fixed-dim font-serif block mb-3">
                03
              </span>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-2">
                Phục vụ trong tiệc
              </h3>
              <p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                Đảm bảo tỉ lệ nhân sự cố định, liên tục rót bia, thay đá, lên
                món tinh tế mà không làm gián đoạn câu chuyện của khách mời.
              </p>
            </div>
            <div className="bg-primary-container/40 p-6 rounded-xl hover:bg-primary-container/60 transition-colors">
              <span className="font-headline-md text-[36px] text-primary-fixed-dim font-serif block mb-3">
                04
              </span>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-2">
                Xử lý linh hoạt
              </h3>
              <p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                Quản lý sảnh luôn túc trực hỗ trợ khách phát sinh bàn ngoài kế
                hoạch, bảo quản tiệc cưới chu đáo đến phút cuối cùng.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* mobile */}
      <div className="block md:hidden p-margin-mobile py-space-md mb-space-lg">
        <div className="p-space-md rounded-xl bg-primary-container text-on-primary shadow-sm flex flex-col">
        <div className="flex items-center gap-2 mb-1 text-on-primary-container">
          <span className="w-2 h-2 rounded-full bg-on-primary-container"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container">
            CHU ĐÁO TỪNG CHI TIẾT
          </span>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-primary  leading-tight mb-space-sm">
          4 Bước đồng hành cùng ngày vui của bạn
        </h2>
        <div className="flex flex-col gap-4 mt-1">
          <div className="flex items-start gap-3">
            <span className="font-headline-sm text-headline-sm text-on-primary-container font-semibold">
              01
            </span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg font-medium text-on-primary">
                Lắng nghe & Khảo sát khẩu vị
              </span>
              <p className="font-body-sm text-body-sm text-on-primary mt-0.5">
                Hiểu rõ danh sách khách mời, tôn giáo, thói quen ăn uống để tinh
                chỉnh thực đơn hợp lý.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-headline-sm text-headline-sm text-on-primary-container font-semibold">
              02
            </span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg font-medium text-on-primary">
                Buổi nếm thử bàn tiệc mẫu
              </span>
              <p className="font-body-sm text-body-sm text-on-primary mt-0.5">
                Cô dâu chú rể và bố mẹ trải nghiệm trực tiếp khẩu vị chuẩn trước
                ngày đại sự 3 tuần.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-headline-sm text-headline-sm text-on-primary-container font-semibold">
              03
            </span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg font-medium text-on-primary">
                Tỉ mỉ điều phối giờ G
              </span>
              <p className="font-body-sm text-body-sm text-on-primary mt-0.5">
                Quản lý tiệc túc trực toàn thời gian, phối hợp mượt mà giữa âm
                thanh, ánh sáng và nhịp lên món.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-headline-sm text-headline-sm text-on-primary-container font-semibold">
              04
            </span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg font-medium text-on-primary">
                Linh hoạt và đồng hành
              </span>
              <p className="font-body-sm text-body-sm text-on-primary mt-0.5">
                Dự phòng bàn phát sinh không phụ phí cắt cổ, hỗ trợ bảo quản quà
                mừng cẩn trọng.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
