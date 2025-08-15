/*
  Warnings:

  - Added the required column `status` to the `Devices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userDevice` to the `Devices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Devices" ADD COLUMN     "status" BOOLEAN NOT NULL,
ADD COLUMN     "userDevice" TEXT NOT NULL;
