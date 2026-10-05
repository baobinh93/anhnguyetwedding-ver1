import React from "react";

export default function QuoteBuilderSection() {
  return (
    <>
      <section
        id="bao-gia-nhanh"
        className="w-full py-20 lg:py-28 bg-surface hidden md:block"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-semibold block mb-2">
              DỰ TOÁN CHI PHÍ 3 BƯỚC
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
              Đã hình dung được buổi tiệc của mình?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Cho chúng tôi vài thông tin cơ bản. Chuyên viên sự kiện sẽ chuẩn
              bị phương án hoàn chỉnh và phản hồi trong vòng 30 phút.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-2xl shadow-lg">
            <form className="space-y-10" id="quoteForm">
              <div>
                <label className="font-label-lg text-label-lg text-primary font-semibold block mb-4">
                  BƯỚC 01: BẠN DỰ KIẾN KHOẢNG BAO NHIÊU KHÁCH MỜI?
                </label>
                <div
                  className="grid grid-cols-2 sm:grid-cols-5 gap-3"
                  id="guestPills"
                >
                  <button
                    className="quote-pill px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-all active:scale-95"
                    data-val="50"
                    type="button"
                  >
                    50 khách
                  </button>
                  <button
                    className="quote-pill px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-all active:scale-95"
                    data-val="100"
                    type="button"
                  >
                    100 khách
                  </button>
                  <button
                    className="quote-pill active px-4 py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-sm"
                    data-val="150"
                    type="button"
                  >
                    150 khách
                  </button>
                  <button
                    className="quote-pill px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-all active:scale-95"
                    data-val="200"
                    type="button"
                  >
                    200 khách
                  </button>
                  <button
                    className="quote-pill px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-all active:scale-95"
                    data-val="300"
                    type="button"
                  >
                    300+ khách
                  </button>
                </div>
              </div>

              <div>
                <label className="font-label-lg text-label-lg text-primary font-semibold block mb-4">
                  BƯỚC 02: DỰ KIẾN NGÂN SÁCH MỖI BÀN CỦA GIA ĐÌNH?
                </label>
                <div
                  className="grid grid-cols-1 sm:grid-cols-4 gap-3"
                  id="budgetPills"
                >
                  <button
                    className="quote-pill px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-all active:scale-95"
                    data-val="under5"
                    type="button"
                  >
                    &lt; 2.000.000đ / bàn
                  </button>
                  <button
                    className="quote-pill active px-4 py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-sm"
                    data-val="6to8"
                    type="button"
                  >
                    2.500.000đ – 3.000.000đ
                  </button>
                  <button
                    className="quote-pill px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-all active:scale-95"
                    data-val="over8"
                    type="button"
                  >
                    &gt; 3.500.000đ / bàn
                  </button>
                  <button
                    className="quote-pill px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-all active:scale-95"
                    data-val="custom"
                    type="button"
                  >
                    Cần tư vấn thêm
                  </button>
                </div>
              </div>

              <div>
                <label className="font-label-lg text-label-lg text-primary font-semibold block mb-4">
                  BƯỚC 03: THÔNG TIN ĐỂ CHÚNG TÔI GỬI THỰC ĐƠN & BÁO GIÁ
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none transition-colors"
                      id="custName"
                      placeholder="Họ tên của bạn *"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 focus:bg-surface-container-lowest focus:outline-none transition-colors"
                      id="custPhone"
                      placeholder="Số điện thoại / Zalo *"
                      required
                      type="tel"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors"
                      id="custDate"
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">
                    lock
                  </span>
                  <span>Thông tin được bảo mật 100% cho việc tư vấn cưới.</span>
                </div>
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-lg shadow-md transition-all"
                  type="submit"
                >
                  <span>NHẬN BÁO GIÁ & THỰC ĐƠN MẪU</span>
                  <span className="material-symbols-outlined text-[18px]">
                    send
                  </span>
                </button>
              </div>
            </form>
            <div
              className="hidden mt-6 p-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-start gap-3"
              id="quoteSuccessAlert"
            >
              <span className="material-symbols-outlined text-[24px]">
                verified
              </span>
              <div>
                <h5 className="font-headline-sm text-[18px] font-semibold">
                  Cảm ơn bạn! Thông tin đã được gửi thành công.
                </h5>
                <p className="font-body-sm text-body-sm mt-1">
                  Quản lý sảnh Ánh Nguyệt sẽ liên hệ qua Zalo/Điện thoại kèm file
                  dự toán thực đơn chi tiết trong 30 phút tới.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="block md:hidden p-margin-mobile py-space-md mb-space-lg">
        <div className="flex flex-col mb-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
            DỰ TOÁN NGÂN SÁCH
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            Nhận báo giá chi tiết qua Zalo sau 30 phút
          </h2>
        </div>
        <form className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
              1. Quy mô dự kiến
            </label>
            <div className="grid grid-cols-2 gap-2" id="guest-selector">
              <button
                className="opt-guest h-11 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface active:bg-primary active:text-on-primary"
                type="button"
              >
                Dưới 80 Khách
              </button>
              <button
                className="opt-guest active h-11 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm"
                type="button"
              >
                80 - 150 Khách
              </button>
              <button
                className="opt-guest h-11 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface"
                type="button"
              >
                150 - 200 Khách
              </button>
              <button
                className="opt-guest h-11 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface"
                type="button"
              >
                Trên 200 Khách
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
              2. Ngân sách / Bàn tiệc mong đợi
            </label>
            <div className="grid grid-cols-3 gap-2" id="budget-selector">
              <button
                className="opt-budget h-11 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface"
                type="button"
              >
                &lt; 2 Triệu
              </button>
              <button
                className="opt-budget active h-11 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm"
                type="button"
              >
                2 - 3 Triệu
              </button>
              <button
                className="opt-budget h-11 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface"
                type="button"
              >
                &gt; 3 Triệu
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              3. Thông tin liên hệ
            </label>
            <input
              className="w-full h-12 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-high transition-colors"
              placeholder="Họ và tên của bạn"
              required
              type="text"
            />
            <input
              className="w-full h-12 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-high transition-colors"
              placeholder="Số điện thoại / Zalo"
              required
              type="tel"
            />
            <input
              className="w-full h-12 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface-variant font-body-md text-body-md focus:outline-none focus:bg-surface-container-high transition-colors"
              placeholder="Ngày cưới dự kiến"
              type="date"
            />
          </div>
          <button
            className="w-full h-12 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2 mt-1"
            type="submit"
          >
            <span className="">Gửi yêu cầu nhận dự toán</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
          <span className="text-center font-label-sm text-label-sm text-on-surface-variant">
            Bảo mật thông tin 100% • Tư vấn thân thiện không làm phiền
          </span>
        </form>
      </div>
    </>
  );
}
