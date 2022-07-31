import { ReactNode } from "react";

interface LoginCardProps {
  children: ReactNode;
  onClick?: () => void;
}
function LoginCard({ children, onClick }: LoginCardProps) {
  return (
    <button
      onClick={onClick}
      className="py-3 px-4 rounded-lg w-full 
       hover:bg-gray-200 
       flex justify-center items-center
       "
      style={{ border: "1px solid #e6e6e6" }}
    >
      {children}
    </button>
  );
}

export default LoginCard;
