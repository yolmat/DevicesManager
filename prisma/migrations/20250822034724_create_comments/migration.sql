/*
  Warnings:

  - You are about to drop the column `historys` on the `History` table. All the data in the column will be lost.
  - Added the required column `comments` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."History" DROP COLUMN "historys",
ADD COLUMN     "comments" TEXT NOT NULL;
