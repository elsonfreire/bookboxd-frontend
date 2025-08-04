import type { InputHTMLAttributes } from "react";

export const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className="w-full p-4 bg-gray-800 rounded-lg" />;
};
