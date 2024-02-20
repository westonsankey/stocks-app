/*
  Warnings:

  - Added the required column `score` to the `SimilarStocks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SimilarStocks" ADD COLUMN     "score" DECIMAL(65,30) NOT NULL;
