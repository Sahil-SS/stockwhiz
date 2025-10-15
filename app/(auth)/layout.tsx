import Image from "next/image";
import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo">
          <Image
            src="/assets/icons/logo.svg"
            alt="StockWhiz logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="pb-6 lg:pb-9 flex-1">{children}</div>
      </section>

      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="block-auth-quote">
            StockWhiz completely transformed how I analyze markets. Real-time
            insights, clean charts, and AI-driven summaries make it the ultimate
            tool for investors.
          </blockquote>
          <div className="flex items-center justify-between p-2">
            <cite>- Rohit Agarwal, Independent Trader</cite>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star"
                  key={star}
                  width={20}
                  height={20}
                  className="h-4 w-4"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
            <Image src="/assets/images/dashboard.png" alt="Dashboard Preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0 " />
        </div>
      </section>
    </main>
  );
};

export default layout;
