"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value;
      if (query.trim()) {
        router.push(`pages/results?query=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <div className="flex gap-4 items-center flex-col w-full">
          <h1 className="text-2xl font-bold text-center">
            Find your next recruit!
          </h1>
          <input
            className="w-full bg-white py-5 px-7 rounded-3xl text-black"
            placeholder="Search by name or major"
            onKeyDown={handleKeyDown}
          ></input>
        </div>
      </main>
    </div>
  );
}
