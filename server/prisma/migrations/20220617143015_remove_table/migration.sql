/*
  Warnings:

  - You are about to drop the `UserW` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserFollows` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_B_fkey";

-- DropTable
DROP TABLE "UserW";

-- DropTable
DROP TABLE "_UserFollows";
