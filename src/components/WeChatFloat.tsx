"use client";

import { useState } from "react";
import Image from "next/image";

export default function WeChatFloat() {
  const [showQr, setShowQr] = useState(false);

  return (
    <>
      {/* Floating button */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center group">
        <button
          onClick={() => setShowQr(!showQr)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 flex items-center justify-center animate-[breathe-scale_2s_ease-in-out_infinite] hover:animate-none transition-[transform,background-color,box-shadow] duration-300"
          aria-label="微信咨询"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zM23.999 14.33c0-3.746-3.613-6.777-8.037-6.777-4.453 0-8.037 3.031-8.037 6.777 0 3.746 3.584 6.777 8.037 6.777a9.88 9.88 0 002.586-.37.772.772 0 01.653.082l1.504.937c.073.045.178.082.275.082a.28.28 0 00.275-.283c0-.066-.028-.14-.047-.212l-.327-1.338a.604.604 0 01.192-.649c1.614-1.22 2.627-2.849 2.627-4.526zM14.821 11.3c.47 0 .864.398.864.865a.87.87 0 01-.864.865.87.87 0 01-.864-.865.86.86 0 01.864-.865zm4.454 0c.47 0 .864.398.864.865a.87.87 0 01-.864.865.87.87 0 01-.864-.865.86.86 0 01.864-.865z"/>
          </svg>
        </button>
        <span className="mt-2 text-[10px] text-text-light font-medium whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
          微信咨询
        </span>
      </div>

      {/* QR Code Modal */}
      {showQr && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowQr(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl mx-4 max-w-xs w-full animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowQr(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zM23.999 14.33c0-3.746-3.613-6.777-8.037-6.777-4.453 0-8.037 3.031-8.037 6.777 0 3.746 3.584 6.777 8.037 6.777a9.88 9.88 0 002.586-.37.772.772 0 01.653.082l1.504.937c.073.045.178.082.275.082a.28.28 0 00.275-.283c0-.066-.028-.14-.047-.212l-.327-1.338a.604.604 0 01.192-.649c1.614-1.22 2.627-2.849 2.627-4.526zM14.821 11.3c.47 0 .864.398.864.865a.87.87 0 01-.864.865.87.87 0 01-.864-.865.86.86 0 01.864-.865zm4.454 0c.47 0 .864.398.864.865a.87.87 0 01-.864.865.87.87 0 01-.864-.865.86.86 0 01.864-.865z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">添加微信</h3>
              <p className="text-text-light text-sm mb-5">扫码添加好友，免费鉴定估价</p>

              {/* QR Code placeholder - replace with actual QR */}
              <div className="w-48 h-48 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                <div className="text-center">
                  <span className="text-4xl">📱</span>
                  <p className="text-xs text-text-light mt-2">
                    替换为真实二维码
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-light">
                微信号：<span className="font-medium text-primary">YangJi_Tea</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
