import { useState } from "react";
import { TextInput } from "../components/TextInput";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSwitchMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLogin((mode) => !mode);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with: ", { username, password });
    } else {
      console.log("Signing up with: ", { email, username, password });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <form className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-gray-900 p-16 sm:min-h-0 sm:max-w-lg sm:rounded-2xl">
        <h1 className="mb-8 text-2xl font-extrabold">
          {isLogin ? "Login to Bookboxd" : "Register to Bookboxd"}
        </h1>

        {!isLogin && (
          <TextInput
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        )}

        <TextInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-teal-200 p-3 text-black"
          onClick={handleSubmit}
        >
          {isLogin ? "Sign in" : "Sign up"}
        </button>

        <div className="mt-2 text-center text-sm">
          {isLogin
            ? "Don't have an account yet? "
            : "Already have an account? "}
          <button
            className="cursor-pointer font-bold hover:underline"
            onClick={handleSwitchMode}
          >
            {isLogin ? "Register now." : "Login."}
          </button>
        </div>
      </form>
    </div>
  );
};
