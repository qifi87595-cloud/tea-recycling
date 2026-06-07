import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍃</span>
              <span className="text-xl font-bold text-white tracking-wider">
                杨记茶叶
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              专注茶叶回收十余年，为全国茶友提供专业、透明、高效的茶叶回收服务。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-sm mb-4 tracking-wider">
              快速链接
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "首页", href: "/" },
                { label: "业务介绍", href: "/business" },
                { label: "常见问题", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium text-sm mb-4 tracking-wider">
              回收业务
            </h3>
            <ul className="space-y-2.5">
              {["普洱茶回收", "中粮回收", "老茶回收"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium text-sm mb-4 tracking-wider">
              联系方式
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:13800138000" className="hover:text-accent transition-colors">
                  138-0013-8000
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:service@yangjitea.com" className="hover:text-accent transition-colors">
                  service@yangjitea.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>全国服务 · 上门回收</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} 杨记茶叶 版权所有
          </p>
          <p className="text-xs text-white/40">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              滇ICP备202X0000000号-1
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
