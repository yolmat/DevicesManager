/*
  Warnings:

  - You are about to drop the column `Qrcode` on the `History` table. All the data in the column will be lost.
  - Added the required column `Qrcode` to the `Devices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Devices" ADD COLUMN     "Qrcode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."History" DROP COLUMN "Qrcode";
