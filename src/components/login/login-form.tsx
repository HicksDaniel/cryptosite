import { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

interface LoginFormProps {
  setSelected: () => void;
}

export const LoginForm = ({ setSelected }: LoginFormProps) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const login = async () => {
    setLoading(true);
    await await new Promise((r) => setTimeout(r, 2000));
    navigate("/home");
    setLoading(false);
  };

  return (
    <div className="flex flex-column flex-nowrap gap-4 min-w-0">
      <h2>Sign In</h2>
      <FloatLabel>
        <InputText
          className="w-full min-w-0"
          id="username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          disabled={loading}
        />
        <label htmlFor="username">UserName</label>
      </FloatLabel>

      <FloatLabel>
        <Password
          className="w-full min-w-0"
          pt={{
            iconField: {
              root: {
                style: { width: "100%", minWidth: "0px" },
              },
            },
            input: { style: { width: "100%", minWidth: "0px" } },
          }}
          toggleMask
          inputId="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          disabled={loading}
        />
        <label htmlFor="password">Password</label>
      </FloatLabel>
      <Button
        label="Login"
        onClick={login}
        disabled={loading}
        className="mt-4"
      />
      <p
        className="cursor-pointer"
        style={{ margin: "-10px 0 0 0" }}
        onClick={() => setSelected("register")}
      >
        Create an Account
      </p>
    </div>
  );
};
