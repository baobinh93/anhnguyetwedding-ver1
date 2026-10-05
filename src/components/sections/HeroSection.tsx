export default function HeroSection() {
  return (
    <section id="trang-chu" className="relative min-h-[calc(100dvh-4rem)] overflow-hidden md:min-h-[calc(100dvh-5rem)]">
      <picture className="absolute inset-0 z-0 block">
        <source
          media="(max-width: 767px)"
          srcSet="https://lh3.googleusercontent.com/aida-public/AB6AXuATJT-usWfPN_DeQIg0Dk-qVx9vK4w2VlXoZ5P5pafsJxYoHLoSGY1aflkfeCPDgOhdW0XHY6Pr7RchVlKrR9ha8AwxwicqJYzF1S-tAKgO4eXK_IlbHKSZS6GLpgoCzmPrandwXV-au9NI5UN9_jke_3MYUxc9tXvMh5mRFb6zdm0VCPCZzO1D6iilNu96mBpgZ6LthMfRC7aKIv1mXTC9uYJ6Um32cpg213-EofAiR-j0CXQi3Pwm"
        />
        <img
          alt="Không gian tiệc cưới Ánh Nguyệt ấm cúng, sang trọng và tràn ngập tiếng cười"
          className="h-full w-full object-cover object-center opacity-30 mix-blend-multiply scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkhNRjr9o3HQh76cLPQl-j_8nR11MRlrGm4-37s967YrParimFmWBaY4Umvx5YOFie8e0GucfOaApGCkDd_DElUnE6KX1bozb-wdH8WAERpZ3RIWIYYawbrSC5K0qt504JLAT_fheHLEL-e1nntGZfF-4M_g4aTP-4O1ifs6FrR9Or1GJkVYURdqzeyak2MQqjYtqTzd16-7KE3hM__tMJ7_RJFnp9xW3KyLogRXKAqG4vWsWer6Yv"
        />
      </picture>

      <div className="absolute inset-0 z-0 bg-gradient-to-t from-surface via-surface/75 to-surface/40 md:from-surface md:via-surface/75 md:to-surface/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent md:hidden" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl flex-col items-center justify-center px-5 py-10 text-center md:min-h-[calc(100dvh-5rem)] md:px-6 md:py-16 lg:px-8 xl:px-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary-container/50 px-3 py-1.5 text-on-secondary-container md:mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
            Ánh Nguyệt · WEDDING & BANQUET
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl font-display-hero text-display-hero text-primary tracking-tight leading-tight md:mt-0 md:mb-6">
          Để ngày vui được trọn vẹn,
          <br className="hidden sm:inline" /> Mọi điều nhỏ bé đều đáng được chăm chút
        </h1>

        <p className="mt-4 max-w-2xl font-subheading text-subheading font-light leading-relaxed text-on-surface-variant md:mt-0 md:mb-10">
          Tiệc cưới chỉn chu, món ăn chuẩn vị và dịch vụ tận tâm — với một mức chi phí bạn hoàn toàn có thể chủ động hoạch định.
        </p>

        <div className="mt-7 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row md:mt-0 md:w-auto md:max-w-none md:gap-4">
          <a
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:opacity-95 sm:w-auto sm:px-8 md:h-auto md:py-3.5"
            href="#goi-tiec"
          >
            <span>Khám phá tiệc mẫu</span>
            <span className="material-symbols-outlined text-[18px]">east</span>
          </a>
          <a
            className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-surface-container-lowest px-6 font-label-lg text-label-lg text-primary shadow-sm transition-colors hover:bg-surface-container-high sm:w-auto sm:px-8 md:h-auto md:py-3.5"
            href="#bao-gia-nhanh"
          >
            Nhận báo giá nhanh
          </a>
        </div>

        <div className="mt-8 inline-flex flex-col items-center gap-1.5 opacity-70 transition-opacity hover:opacity-100 md:mt-16 md:gap-2">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            Cuộn để khám phá
          </span>
          <span className="material-symbols-outlined animate-bounce text-[20px] text-primary">
            arrow_downward
          </span>
        </div>
      </div>
    </section>
  );
}
