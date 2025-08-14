import type { InputHTMLAttributes } from "react";

export const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className="w-full rounded-lg bg-gray-800 p-4" />;
};
