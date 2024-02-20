/*
  Warnings:

  - You are about to drop the `_SimilarStocks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_SimilarStocks" DROP CONSTRAINT "_SimilarStocks_A_fkey";

-- DropForeignKey
ALTER TABLE "_SimilarStocks" DROP CONSTRAINT "_SimilarStocks_B_fkey";

-- DropTable
DROP TABLE "_SimilarStocks";

-- CreateTable
CREATE TABLE "SimilarStocks" (
    "stockId" INTEGER NOT NULL,
    "similarStockId" INTEGER NOT NULL,

    CONSTRAINT "SimilarStocks_pkey" PRIMARY KEY ("stockId","similarStockId")
);

-- AddForeignKey
ALTER TABLE "SimilarStocks" ADD CONSTRAINT "SimilarStocks_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SimilarStocks" ADD CONSTRAINT "SimilarStocks_similarStockId_fkey" FOREIGN KEY ("similarStockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
