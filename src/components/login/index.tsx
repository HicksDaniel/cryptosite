import { useState } from "react";
import { Card } from "primereact/card";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

export default function AuthPage() {
  const [selected, setSelected] = useState<"login" | "register">("register");
  const [userAuth, setUserAuth] = useState(false);
  const isLoginSelected = selected === "login";
  const isRegisterSelected = selected === "register";

  return (
    <div className="w-30rem align-self-center">
      <Card>
        {isLoginSelected && <LoginForm setSelected={setSelected} />}
        {isRegisterSelected && <RegisterForm setSelected={setSelected} />}
      </Card>
    </div>
  );
}
