/*
  Warnings:

  - You are about to drop the column `createdAt` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `History` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."History" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
