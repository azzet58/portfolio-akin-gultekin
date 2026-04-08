import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-neutral-50 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="relative mx-auto flex max-w-5xl flex-col items-start justify-center px-4 py-52 md:py-108 lg:max-w-3xl lg:px-0 lg:py-40 2xl:max-w-5xl 2xl:items-center 2xl:py-116">
        <div className="flex flex-col gap-4 md:gap-6 2xl:gap-8">
          <div className="flex gap-2 self-start rounded-full bg-white px-4 py-2 shadow-xs">
            <h1 className="font-heading text-xs font-semibold text-black 2xl:text-sm">
              Sup, I'm Akin!
            </h1>
            <div className="size-1 animate-ping rounded-full bg-green-500"></div>
          </div>
          <p className="bg-gradient-to-br from-black via-zinc-400 to-white bg-clip-text text-2xl font-semibold text-transparent md:max-w-xl md:text-5xl lg:max-w-xl 2xl:max-w-5xl 2xl:text-7xl">
            Crafting clean, performant interfaces.
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 2xl:gap-4">
          <FaArrowDown className="size-6 animate-bounce rounded-full bg-zinc-100 p-2 text-zinc-300 shadow-sm md:size-7 2xl:size-8" />
          <p className="font-heading bg-gradient-to-b from-zinc-300 to-zinc-200 bg-clip-text text-2xl font-bold text-transparent md:text-3xl lg:text-3xl 2xl:text-5xl">
            My work
          </p>
        </div>
      </div>
    </section>
  );
}
