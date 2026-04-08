import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-16 w-full">
      <div className="mx-auto h-full max-w-5xl px-4 xl:px-0">
        <div className="flex h-full items-center justify-center gap-4 text-stone-400">
          <p className="font-heading text-xs font-medium">
            © 2026 Akin Gultekin
          </p>
          <ul className="flex gap-2">
            <li>
              <Link
                href="https://github.com/azzet58"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-stone-500" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/akin-gültekin-687327312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-stone-500" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
