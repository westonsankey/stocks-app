-- CreateTable
CREATE TABLE "UserW" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "UserW_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SimilarStocks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_UserFollows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SimilarStocks_AB_unique" ON "_SimilarStocks"("A", "B");

-- CreateIndex
CREATE INDEX "_SimilarStocks_B_index" ON "_SimilarStocks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFollows_AB_unique" ON "_UserFollows"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFollows_B_index" ON "_UserFollows"("B");

-- AddForeignKey
ALTER TABLE "_SimilarStocks" ADD CONSTRAINT "_SimilarStocks_A_fkey" FOREIGN KEY ("A") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SimilarStocks" ADD CONSTRAINT "_SimilarStocks_B_fkey" FOREIGN KEY ("B") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD CONSTRAINT "_UserFollows_A_fkey" FOREIGN KEY ("A") REFERENCES "UserW"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD CONSTRAINT "_UserFollows_B_fkey" FOREIGN KEY ("B") REFERENCES "UserW"("id") ON DELETE CASCADE ON UPDATE CASCADE;
