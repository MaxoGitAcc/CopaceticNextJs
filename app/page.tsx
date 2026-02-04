'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <section className="ml-3 px-[4rem] py-[3rem] flex flex-col items-left justify-center text-white">

      <div className="mt-[5rem] flex flex-col items-let justify-center gap-[2rem]">
        <h1 className="text-4xl font-bold mb-4 glow">
          365 Days <br /> 365 Words!
        </h1>

        <h2 className="text-xl">
          <span className="flex items-center gap-2">
            Build your lexicon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgb(219 234 254)" 
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 
                  12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 
                  3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 
                  3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 
                  1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 
                  20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 
                  1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 
                  1.423Z"
              ></path>
            </svg>
          </span>
          <span className="block mt-1">Start your challenge today!</span>
        </h2>
      </div>

      <div className="mt-[3rem] flex flex-col gap-[1rem]">
        <input type="text" placeholder="Enter your name..." value={name} onChange={(e) => setName(e.target.value)} 
          className="border py-5 px-2 rounded-xl max-w-[80%]"
        />
        <button disabled={!name} onClick={() => router.push(`/stats?name=${encodeURIComponent(name)}`)}
          className={`border rounded-xl self-start px-[2rem] py-3  
            ${name ? "bg-[#121424] text-white cursor-pointer shadow-md shadow-black" :  "bg-gray-900 text-gray-400 cursor-not-allowed"}`}>
          Start &rarr;
        </button>
      </div>

    </section>
  );
};

export default page;
