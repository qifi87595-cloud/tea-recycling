const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "专业品鉴",
    desc: "十余年行业经验，国家级评茶师团队，为您提供权威专业的茶叶鉴定和估价服务",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "价格公道",
    desc: "坚持市场透明报价，拒绝压价，以诚信为本，让每一片好茶都得到应有的价值认可",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "当天到账",
    desc: "确认成交后立即付款，支持银行转账、微信、支付宝等多种到账方式，高效快捷",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-light/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-light/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            为什么选择我们
          </h2>
          <p className="text-text-light max-w-xl mx-auto text-base leading-relaxed">
            以专业为本，以诚信为根，做您身边最可靠的茶叶回收伙伴
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group text-center"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-leaf-light to-accent-light flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
