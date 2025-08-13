-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Devices" (
    "id" SERIAL NOT NULL,
    "device" TEXT NOT NULL,
    "deviceType" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."History" (
    "id" SERIAL NOT NULL,
    "devicesId" INTEGER,
    "Qrcode" TEXT NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "public"."User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Devices_id_key" ON "public"."Devices"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Devices_serialNumber_key" ON "public"."Devices"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "History_id_key" ON "public"."History"("id");

-- AddForeignKey
ALTER TABLE "public"."History" ADD CONSTRAINT "History_devicesId_fkey" FOREIGN KEY ("devicesId") REFERENCES "public"."Devices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
