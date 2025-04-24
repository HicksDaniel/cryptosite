import { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from "primereact/calendar";

interface RegisterFormProps {
  setSelected: () => void;
}

export const RegisterForm = ({ setSelected }: RegisterFormProps) => {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const register = async () => {
    setLoading(true);
    await await new Promise((r) => setTimeout(r, 2000));
    navigate("/home");
    setLoading(false);
  };

  return (
    <div className="flex flex-column flex-nowrap gap-4">
      <h2>Create an account</h2>
      <div className="flex gap-3 flex-row justify-content-evenly">
        <FloatLabel className="w-6">
          <InputText
            className="w-full"
            id="firstname"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
            disabled={loading}
          />
          <label htmlFor="firstname">First Name</label>
        </FloatLabel>

        <FloatLabel className="w-6">
          <InputText
            className="w-full"
            id="lastname"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
            disabled={loading}
          />
          <label htmlFor="lastname">Last Name</label>
        </FloatLabel>
      </div>

      <FloatLabel>
        <InputText
          className="w-full"
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
        <InputText
          className="w-full"
          id="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          disabled={loading}
        />
        <label htmlFor="email">Email</label>
      </FloatLabel>
      <div>
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
            inputId="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            toggleMask
            disabled={loading}
          />

          <label htmlFor="password">Password</label>
        </FloatLabel>
      </div>
      <div className="flex justify-content-evenly flex-row gap-3 min-w-0">
        <p>Date of Birth:</p>
        <Calendar
          value={birthDate}
          onChange={(e) => setBirthDate(e.value)}
          dateFormat="mm/dd/yy"
          label="Birth Date"
          showIcon
        />
      </div>

      <Button
        label="Register"
        onClick={register}
        disabled={loading}
        className="mt-4"
      />
      <p
        className="cursor-pointer"
        style={{ margin: "-10px 0 0 0" }}
        onClick={() => setSelected("login")}
      >
        Already have an account?
      </p>
    </div>
  );
};
