import { LoginFormClient } from "@/components/login-form"; // seu Client Component
import loginAction from "./loginAction";

export default function LoginFormServer() {
  return <LoginFormClient loginAction={loginAction} />;
}
