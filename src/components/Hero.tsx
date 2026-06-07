"use client";

import { useState } from "react";

export default function Hero() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("请输入正确的手机号码");
      return;
    }
    setError("");
    setSubmitted(true);
    // In production, send this to your backend
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#1B4332]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-8xl opacity-5 animate-float">🍃</div>
        <div className="absolute top-40 right-20 text-6xl opacity-5" style={{ animation: "float 4s ease-in-out infinite 0.5s" }}>🍃</div>
        <div className="absolute bottom-20 left-1/4 text-7xl opacity-5" style={{ animation: "float 5s ease-in-out infinite 1s" }}>🍃</div>
        <div className="absolute top-1/3 left-1/2 text-5xl opacity-5" style={{ animation: "float 3.5s ease-in-out infinite 1.5s" }}>🍃</div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M30 10c-4 0-8 3-10 7 2-4 6-7 10-7z'/%3E%3Cpath d='M30 50c-4 0-8-3-10-7 2 4 6 7 10 7z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/80 text-sm">专注茶叶回收 · 值得信赖</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            <span className="inline-block">杨记茶叶</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-4 font-medium">
            专业回收，值得信赖
          </p>
          <p className="text-base sm:text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            专注普洱茶回收、中粮回收、老茶回收，十余年行业经验，为全国茶友提供专业、透明、高效的茶叶回收服务
          </p>

          {/* Phone Collection Form */}
          <div className="max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setError("");
                    }}
                    placeholder="输入手机号，获取免费估价"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-accent hover:bg-[#C49564] text-primary font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap"
                >
                  立即估价
                </button>
              </form>
            ) : (
              <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl animate-fade-in-up">
                <p className="text-white font-medium">
                  ✓ 感谢您的信任！我们将在30分钟内联系您
                </p>
                <p className="text-white/60 text-sm mt-1">请保持电话畅通</p>
              </div>
            )}
            {error && (
              <p className="mt-2 text-red-300 text-sm text-left">{error}</p>
            )}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/40 text-xs">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              隐私保障
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              30分钟响应
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              免费估价
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
