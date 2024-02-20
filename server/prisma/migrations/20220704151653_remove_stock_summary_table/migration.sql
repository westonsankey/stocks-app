/*
  Warnings:

  - You are about to drop the `StockSummary` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `businessSummary` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grossProfit` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastRefreshed` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketCap` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regularMarketChange` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regularMarketChangePercent` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regularMarketPrice` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revenueGrowth` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalRevenue` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StockSummary" DROP CONSTRAINT "StockSummary_stockId_fkey";

-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "businessSummary" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "grossProfit" TEXT NOT NULL,
ADD COLUMN     "lastRefreshed" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "marketCap" TEXT NOT NULL,
ADD COLUMN     "regularMarketChange" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "regularMarketChangePercent" TEXT NOT NULL,
ADD COLUMN     "regularMarketPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "revenueGrowth" TEXT NOT NULL,
ADD COLUMN     "totalRevenue" TEXT NOT NULL;

-- DropTable
DROP TABLE "StockSummary";
