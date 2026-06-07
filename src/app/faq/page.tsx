"use client";

import { useState } from "react";

const faqs = [
  {
    category: "回收流程",
    items: [
      {
        q: "如何联系杨记茶叶进行回收？",
        a: "您可以通过以下方式联系我们：拨打热线电话 138-0013-8000、发送邮件至 service@yangjitea.com，或直接在网站首页填写手机号，我们的客服会在30分钟内与您联系。",
      },
      {
        q: "回收流程是怎样的？",
        a: "流程非常简单：① 您通过电话或微信联系我们，提供茶叶基本信息（品类、年份、数量）；② 专业评茶师进行鉴定评估，可通过照片初步估价，量大可安排上门；③ 双方确认回收价格；④ 确认成交，当天打款到账。",
      },
      {
        q: "可以提供上门鉴定服务吗？",
        a: "可以的。对于批量茶叶或高价值藏品，我们提供上门鉴定服务。我们的评茶师会携带专业工具上门，现场评估茶叶品质、年份和仓储状况，并给出合理报价。",
      },
      {
        q: "整个回收过程需要多长时间？",
        a: "普遍情况下，从联系到成交可在24小时内完成。简单流程最快2小时内完成估价和打款。对于需要上门鉴定的大批量或高价值茶叶，通常在1-2个工作日内完成。",
      },
    ],
  },
  {
    category: "回收品类",
    items: [
      {
        q: "哪些茶叶可以回收？",
        a: "我们回收的茶叶范围包括：① 普洱茶（生普、熟普、古树茶、山头茶、品牌普洱等）；② 中粮集团旗下产品（中茶、海堤、蝴蝶牌等）；③ 各类老茶（陈年普洱、老白茶、老黑茶、老乌龙等）。如有其他品类不确定，欢迎咨询。",
      },
      {
        q: "回收茶叶有数量和品类限制吗？",
        a: "没有严格的数量和品类限制。无论是个人收藏的单饼老茶，还是商家积压的批量库存，我们都可以回收。单品数量越多、价值越高，通常能获得更好的回收价格。",
      },
      {
        q: "散茶可以回收吗？",
        a: "可以回收。散茶回收同样根据茶叶的品质、年份、产地等因素进行综合评估。不过相较于整饼/整提的原包装茶，散茶的保存状态和来源追溯更为重要，会影响最终的回收价格。",
      },
      {
        q: "已经拆封的茶叶可以回收吗？",
        a: "可以回收。拆封茶叶只要保存得当、未受潮变质，我们同样可以回收。我们会根据剩余量、保存状态和茶叶品质综合估价。建议将茶叶保存在阴凉干燥处，避免异味。",
      },
    ],
  },
  {
    category: "估价与付款",
    items: [
      {
        q: "如何确定茶叶的回收价格？",
        a: "回收价格主要基于以下因素综合评估：① 茶叶品类和品牌知名度；② 生产年份和仓储年份；③ 仓储状态（干仓/湿仓，保存是否完好）；④ 市场行情和供需关系；⑤ 数量规模和完整程度。我们的报价全程透明，不会出现隐形扣费。",
      },
      {
        q: "回收价格是否公道？",
        a: "我们始终坚持公平透明的定价原则。我们的评茶师团队拥有十余年行业经验，价格参考市场行情和实际品质，报价公道合理。您可以多方比价，相信我们的专业和诚意。我们也欢迎您提供预期的心理价位，双方协商达成满意结果。",
      },
      {
        q: "回收款如何支付？多长时间到账？",
        a: "我们支持多种收款方式：银行转账、微信支付、支付宝等。确认成交后，我们承诺当天到账，大额款项最快2小时内到账，让您省心放心。",
      },
      {
        q: "估价需要收费吗？",
        a: "完全免费。我们提供免费的初步估价服务，您可以通过照片或视频让评茶师在线评估，不收取任何费用。即使是需要上门鉴定的情况，在未成交前也不收取任何鉴定费。",
      },
    ],
  },
  {
    category: "其他问题",
    items: [
      {
        q: "杨记茶叶的回收范围包括哪些地区？",
        a: "我们的服务覆盖全国各地。对于同城客户，我们可以提供上门回收服务；对于异地客户，您可以通过快递方式寄送茶叶样品（或整批），我们收到后专业鉴定并报价。快递费用可由双方协商承担。",
      },
      {
        q: "茶叶回收需要哪些凭证？",
        a: "对于个人收藏的茶叶，一般不需要特殊凭证，我们会根据茶叶本身的品质进行鉴定和估价。如果有购买凭证、包装完整、防伪标识等，可以帮助提升茶叶的可信度和回收价格。对于大宗交易，我们会签订正式回收协议，保障双方权益。",
      },
      {
        q: "如何保障交易安全？",
        a: "我们非常重视交易安全：① 签订正式回收协议，明确双方权利义务；② 交易过程全程透明，无隐形收费；③ 打款到账后再完成货物交接，保障您的资金安全；④ 公司化运营，已有数千次成功交易记录。",
      },
      {
        q: "如果对估价不满意怎么办？",
        a: "我们的估价完全自愿，如果您对我们的报价不满意，完全可以选择不成交，不会有任何强制消费。我们尊重每一位客户的选择，即使不成交也欢迎您继续咨询茶叶相关问题。良好的口碑是我们最看重的东西。",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);

  const currentCategory = faqs.find((f) => f.category === activeCategory) || faqs[0];
  const globalIndexOffset = faqs
    .slice(0, faqs.findIndex((f) => f.category === activeCategory))
    .reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#1B4332] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-5 right-10 text-6xl opacity-5">?</div>
          <div className="absolute bottom-5 left-10 text-8xl opacity-5">?</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase">
            FAQ
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
            常见问题
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            关于茶叶回收的常见疑问，我们为您一一解答。如果仍未解决您的问题，欢迎直接联系我们
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {faqs.map((category) => (
              <button
                key={category.category}
                onClick={() => {
                  setActiveCategory(category.category);
                  setOpenIndex(null);
                }}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
                  activeCategory === category.category
                    ? "bg-primary text-white shadow-sm"
                    : "bg-cream text-text hover:bg-leaf-light"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {currentCategory.items.map((faq, idx) => {
              const globalIdx = globalIndexOffset + idx;
              const isOpen = openIndex === globalIdx;

              return (
                <div
                  key={faq.q}
                  className="border border-[#E8E0D0] rounded-xl overflow-hidden hover:border-accent-light transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-primary pr-4">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="w-full h-px bg-[#E8E0D0] mb-4" />
                      <p className="text-text-light text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center p-8 bg-cream rounded-2xl border border-[#E8E0D0]">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-bold text-primary mb-2">
              还没有找到想要的答案？
            </h3>
            <p className="text-text-light text-sm mb-5">
              我们的客服团队随时为您提供一对一解答
            </p>
            <a
              href="tel:13800138000"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-light transition-colors shadow-sm"
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
              拨打 138-0013-8000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
