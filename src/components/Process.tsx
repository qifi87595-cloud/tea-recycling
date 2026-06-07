const steps = [
  {
    step: "01",
    title: "验茶",
    desc: "拍照或现场鉴定，专业评茶师为您评估茶叶品质、年份及市场价值",
    icon: "🔍",
  },
  {
    step: "02",
    title: "估价",
    desc: "根据茶叶品质和市场行情，给出公正透明的回收报价",
    icon: "💰",
  },
  {
    step: "03",
    title: "确定",
    desc: "双方确认价格和交易方式，签订回收协议，保障您的权益",
    icon: "🤝",
  },
  {
    step: "04",
    title: "成交",
    desc: "确认无误后立即付款，支持多种收款方式，当天即可到账",
    icon: "✓",
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            合作流程
          </h2>
          <p className="text-text-light max-w-xl mx-auto text-base leading-relaxed">
            简单四步，轻松完成茶叶回收交易
          </p>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:flex items-start justify-between gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent via-primary-light to-accent" />

          {steps.map((item, index) => (
            <div key={item.step} className="flex-1 relative">
              {/* Step number circle */}
              <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-white shadow-md border-2 border-accent-light flex items-center justify-center">
                <span className="text-2xl">{item.icon}</span>
              </div>
              {/* Content */}
              <div className="text-center">
                <span className="inline-block text-accent text-xs font-bold tracking-widest mb-2">
                  STEP {item.step}
                </span>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((item, index) => (
            <div key={item.step} className="flex gap-5 items-start">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border-2 border-accent-light flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">{item.icon}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 min-h-[3rem] bg-gradient-to-b from-accent-light to-transparent" />
                )}
              </div>
              {/* Content */}
              <div className="pt-2 pb-8">
                <span className="text-accent text-xs font-bold tracking-widest">
                  STEP {item.step}
                </span>
                <h3 className="text-lg font-bold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
