import { useRouter } from "next/router";
import React from "react";

interface Props {}

const Error: React.FC<Props> = () => {
    const rounter = useRouter();
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center gap-2 justify-center">
            <div className="font-bold text-xl">{rounter.query.error || "Error"}</div>
            <div onClick={()=>rounter.push("/login")} className="bg-white px-4 font-bold cursor-pointer py-2 rounded-xl">Back To Login</div>
        </div>
    );
};

export default Error;