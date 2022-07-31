import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ReactNode } from "react";

interface SignInBtnProps {
  onClick: () => void;
  children: ReactNode;
  isLoading: boolean;
}
function AsyncBtn({ onClick, isLoading, children }: SignInBtnProps) {
  return (
    <button
      disabled={isLoading}
      className="bg-gray-900 rounded-full px-4 py-3 text-white transition-all duration-300 inline-flex justify-center items-center"
      onClick={onClick}
    >
      {isLoading ? (
        <div className="animate-spin py-1">
          <AiOutlineLoading3Quarters />
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default AsyncBtn;
