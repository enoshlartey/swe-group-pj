import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full flex justify-between bg-white">
        <div>EMDG-SWE</div>
        <div className="flex gap-4">
          
        </div>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm/6 text-center font-[family-name:var(--font-geist-mono)]">
          Find the next best talent!
        </p>
      </footer>
    </div>
  );
}
