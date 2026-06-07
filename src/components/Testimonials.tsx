const testimonials = [
  {
    name: "张先生",
    location: "云南·昆明",
    role: "普洱茶收藏爱好者",
    content:
      "家里收藏了十几年的普洱茶，一直不知道怎么处理。找到杨记茶叶后，他们的评茶师亲自上门，专业地鉴别了每饼茶的年份和仓储情况，给的价格也很公道。几十万的交易一次性到账，非常靠谱！",
    tags: ["收藏级老茶", "上门服务"],
    rating: 5,
  },
  {
    name: "李女士",
    location: "广东·广州",
    role: "茶叶经销商",
    content:
      "做茶叶生意十几年，库存积压了不少中粮系列的产品。杨记的回收价格比市场其他渠道高出不少，而且打款特别快，当天确认当天到账。已经合作多次了，值得信赖的合作伙伴。",
    tags: ["中粮回收", "批量交易"],
    rating: 5,
  },
  {
    name: "王总",
    location: "福建·福州",
    role: "企业礼品管理",
    content:
      "公司年会积压了一批高档礼品茶，联系了几家回收公司都不太满意。朋友推荐了杨记茶叶，从鉴定到成交只用了两天时间，价格透明没有隐形扣费，几十万的库存处理得非常顺利。",
    tags: ["企业礼品", "快速成交"],
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-5">"</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-5">"</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
            合作好评
          </h2>
          <p className="text-text-light max-w-xl mx-auto text-base leading-relaxed">
            来自全国各地客户的真实评价，每一份信任都是我们前进的动力
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-cream rounded-2xl p-6 lg:p-8 border border-[#E8E0D0] hover:border-accent-light transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#E8A020]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-text text-sm leading-relaxed mb-6">
                &ldquo;{item.content}&rdquo;
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-leaf-light text-leaf text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E0D0]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-sm font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">{item.name}</p>
                  <p className="text-xs text-text-light">
                    {item.location} · {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
