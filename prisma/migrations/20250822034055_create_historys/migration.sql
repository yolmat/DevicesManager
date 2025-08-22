/*
  Warnings:

  - Added the required column `historys` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."History" ADD COLUMN     "historys" TEXT NOT NULL;
