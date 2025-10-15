import TradingViewWidget from "@/components/TradingViewWidget";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen home-wrapper px-4 py-6">
      {/* Top Row - Market Overview + Heatmap */}
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1 flex flex-col items-stretch">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
            config={MARKET_DATA_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        <div className="md:col-span-1 xl:col-span-2 flex flex-col items-stretch">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js"
            config={HEATMAP_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>

      {/* Bottom Row - Top Stories + Market Quotes */}
      <section className="grid w-full gap-8 home-section mt-10">
        <div className="h-full md:col-span-1 xl:col-span-1 flex flex-col items-stretch">
          <TradingViewWidget
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
            config={TOP_STORIES_WIDGET_CONFIG}
            height={600}
          />
        </div>

        <div className="h-full md:col-span-1 xl:col-span-2 flex flex-col items-stretch">
          <TradingViewWidget
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
