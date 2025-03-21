import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(link)}
      className="w-full h-12 tb:w-[154px] bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base lg:text-lg"
    >
      {text}
    </button>
  );
};

export default Button;
