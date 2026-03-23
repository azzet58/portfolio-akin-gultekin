import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  children?: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
};

export default function Button({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href ?? "#"}
      className={cn(
        "rounded-full px-7 py-2 text-sm shadow-[0_2px_4px_1px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
