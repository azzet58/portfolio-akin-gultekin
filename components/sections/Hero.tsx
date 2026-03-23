import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-neutral-50 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center py-116">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 self-start rounded-full bg-white px-4 py-2 shadow-xs">
            <h1 className="font-heading font-semibold text-black">
              Sup, I'm Akin!
            </h1>
            <div className="size-1 animate-ping rounded-full bg-green-500"></div>
          </div>
          <p className="bg-gradient-to-br from-black via-zinc-400 to-white bg-clip-text text-7xl font-semibold text-transparent">
            Crafting clean, performant interfaces.
          </p>
        </div>
        <div className="absolute bottom-0 flex flex-col items-center gap-4">
          <FaArrowDown className="size-8 animate-bounce rounded-full bg-zinc-100 p-2 text-zinc-300 shadow-sm" />
          <p className="font-heading bg-gradient-to-b from-zinc-300 to-zinc-200 bg-clip-text text-5xl font-bold text-transparent">
            My work
          </p>
        </div>
      </div>
    </section>
  );
}
