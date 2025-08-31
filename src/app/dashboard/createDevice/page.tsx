import { RegisterDeviceForm } from "@/components/register-device-form";

export default async function CreateDevice() {
  return (
    <div className="grid">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterDeviceForm />
          </div>
        </div>
      </div>
    </div>
  );
}
