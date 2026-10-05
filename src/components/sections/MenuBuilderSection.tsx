import MenuBuilder from "../menu/MenuBuilder";

export default function MenuBuilderSection() {
  return (
    <>
    {/* laptop */}
      <section id="tu-chon-menu" className="hidden md:block w-full py-20 lg:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-3">
              TƯƠNG TÁC TỰ CHỌN
            </p>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Tự chọn thực đơn của bạn
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-4">
            Thực đon theo ý thích. Hãy chọn những món cả hai gia đình cùng ưng ý,
              tính toán chi phí minh bạch tức thì theo số bàn thực tế.
            </p>
          </div>
          <MenuBuilder />
        </div>
      </section>
     {/* mobile */}
      <section id="signature-menu-builder" className="block md:hidden p-margin-mobile py-space-md mb-space-lg">
        <div className="flex flex-col mb-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            TRẢI NGHIỆM TƯƠNG TÁC
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            Tự phối thực đơn cho ngày cưới
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Chạm để chọn các món ăn ưa thích và xem ngay dự toán sơ bộ minh bạch.
          </p>
        </div>
        <MenuBuilder />
      </section>
    </>
  );
}
