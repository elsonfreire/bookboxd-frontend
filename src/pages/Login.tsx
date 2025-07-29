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
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <form className="flex flex-col items-center justify-center gap-4 bg-gray-900 p-16 w-full min-h-screen sm:max-w-lg sm:rounded-2xl sm:min-h-0">
          <h1 className="font-extrabold text-2xl mb-10">
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
            className="w-full p-3 bg-teal-200 rounded-md text-black cursor-pointer"
            onClick={handleSubmit}
          >
            {isLogin ? "Sign in" : "Sign up"}
          </button>

          <div className="text-center text-sm mt-2">
            {isLogin
              ? "Don't have an account yet? "
              : "Already have an account? "}
            <button
              className="font-bold hover:underline cursor-pointer"
              onClick={handleSwitchMode}
            >
              {isLogin ? "Register now." : "Login."}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
