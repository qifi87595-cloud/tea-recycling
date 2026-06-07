import Image from "next/image";

const services = [
  {
    title: "普洱茶回收",
    subtitle: "Pu'er Tea",
    description:
      "专注各类普洱茶回收，包括生普、熟普、古树茶、山头茶等。经验丰富的品鉴团队，精准评估每一饼茶的价值。",
    highlights: ["古树茶", "山头茶", "品牌普洱"],
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=400&fit=crop",
  },
  {
    title: "中粮回收",
    subtitle: "COFCO Tea",
    description:
      "专业回收中粮集团旗下各类茶叶产品，涵盖中茶、海堤、蝴蝶牌等知名品牌，高价回收，诚信交易。",
    highlights: ["中茶系列", "海堤系列", "蝴蝶牌"],
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop",
  },
  {
    title: "老茶回收",
    subtitle: "Aged Tea",
    description:
      "高价回收各类年份老茶，包括陈年普洱、老白茶、老黑茶等。专业的仓储评估和年份鉴定，确保您的藏品价值最大化。",
    highlights: ["陈年普洱", "老白茶", "老黑茶"],
    image:
      "https://images.unsplash.com/photo-1544787217-cf08bfc43cb0?w=600&h=400&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            业务介绍
          </h2>
          <p className="text-text-light max-w-xl mx-auto text-base leading-relaxed">
            覆盖三大核心业务板块，为全国各地茶友提供专业、便捷的茶叶回收服务
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/80 text-xs font-medium tracking-widest">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-leaf-light text-leaf text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
