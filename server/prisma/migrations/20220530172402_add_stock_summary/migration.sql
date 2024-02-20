-- CreateTable
CREATE TABLE "StockSummary" (
    "id" SERIAL NOT NULL,
    "stockId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "businessSummary" TEXT NOT NULL,
    "grossProfit" BIGINT NOT NULL,
    "marketCap" BIGINT NOT NULL,
    "regularMarketChange" DOUBLE PRECISION NOT NULL,
    "regularMarketChangePercent" DOUBLE PRECISION NOT NULL,
    "regularMarketPrice" DECIMAL(65,30) NOT NULL,
    "revenueGrowth" DOUBLE PRECISION NOT NULL,
    "totalRevenue" BIGINT NOT NULL,
    "lastRefreshed" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StockSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StockSummary_stockId_key" ON "StockSummary"("stockId");

-- AddForeignKey
ALTER TABLE "StockSummary" ADD CONSTRAINT "StockSummary_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
