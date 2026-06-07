import Image from "next/image";
import Link from "next/link";

const businessServices = [
  {
    title: "普洱茶回收",
    description:
      "我们专注各类普洱茶回收服务，涵盖生普、熟普、古树茶、山头茶、品牌普洱茶等。无论您是个人收藏还是商家库存，我们都提供专业的鉴定和合理的报价。",
    details: [
      "古树普洱茶 — 班章、冰岛、易武、景迈等名山古树茶",
      "品牌普洱茶 — 大益、下关、中茶、老同志等知名品牌",
      "年份普洱茶 — 2000年代、90年代及更早的陈年普洱",
      "特色普洱茶 — 野生茶、单株、古树熟茶等珍稀品类",
    ],
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=500&fit=crop",
  },
  {
    title: "中粮回收",
    description:
      "专业回收中粮集团旗下各类茶叶产品。中粮作为中国最大的茶叶企业之一，旗下拥有众多知名品牌和丰富产品线，我们为这些产品提供高价回收服务。",
    details: [
      "中茶系列 — 中茶普洱、中茶黑茶、中茶红茶等全线产品",
      "海堤系列 — 海堤乌龙茶、海堤红茶等经典系列",
      "蝴蝶牌 — 蝴蝶牌茉莉花茶、蝴蝶牌白茶等",
      "其他中粮系 — 中茶生活、中茶世界茶园等品牌产品",
    ],
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=500&fit=crop",
  },
  {
    title: "老茶回收",
    description:
      "高价回收各类年份老茶，拥有十余年老茶鉴定经验，专业评估茶叶的仓储状态、转化程度和市场价值。",
    details: [
      "陈年普洱 — 干仓、湿仓普洱老茶，生熟皆可",
      "老白茶 — 白毫银针、白牡丹、寿眉等年份白茶",
      "老黑茶 — 安化黑茶、六堡茶、湖北青砖等陈年老茶",
      "老乌龙 — 陈年铁观音、陈年岩茶、陈年单丛等",
    ],
    image:
      "https://images.unsplash.com/photo-1544787217-cf08bfc43cb0?w=800&h=500&fit=crop",
  },
];

export default function BusinessPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#1B4332] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-5 left-5 text-6xl opacity-5">🍃</div>
          <div className="absolute bottom-5 right-10 text-8xl opacity-5">🍃</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
            业务介绍
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            杨记茶叶深耕茶叶回收领域十余年，业务覆盖普洱茶、中粮产品、老茶等多个品类，为全国茶友提供一站式回收服务
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {businessServices.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-text-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-leaf-light flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-leaf"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-text text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            还不确定您的茶叶是否回收？
          </h2>
          <p className="text-text-light mb-8 leading-relaxed">
            联系我们，专业评茶师免费为您鉴定估价，无论是否成交，都给您一个专业的参考意见
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:17600100747"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-primary-light transition-colors shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              拨打咨询热线
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary text-primary font-medium rounded-xl hover:bg-primary hover:text-white transition-colors"
            >
              查看更多问题
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
