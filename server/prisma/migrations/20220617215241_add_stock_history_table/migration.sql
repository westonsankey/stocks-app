-- CreateTable
CREATE TABLE "StockHistory" (
    "id" SERIAL NOT NULL,
    "stockId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "StockHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StockHistory_stockId_key" ON "StockHistory"("stockId");

-- AddForeignKey
ALTER TABLE "StockHistory" ADD CONSTRAINT "StockHistory_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
