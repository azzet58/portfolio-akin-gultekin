import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="sticky z-10 h-16 w-full bg-white shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="mx-auto h-full max-w-5xl lg:max-w-3xl 2xl:max-w-5xl px-4 lg:px-0">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="font-heading text-xs font-medium">
            Akin Gultekin
          </Link>
          <Button
            href="#contact"
            className="from-hire-200 via-hire-400 to-hire-300 hover:from-hire-600 hover:via-hire-600 hover:to-hire-200 bg-gradient-to-tl text-xs font-medium text-white transition-colors duration-400"
          >
            Hire me!
          </Button>
        </div>
      </div>
    </nav>
  );
}
