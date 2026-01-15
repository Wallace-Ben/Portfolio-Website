import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-emerald-deep border-t-4 border-emerald-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between relative md:p-7 p-5 md:mx-[25%] mx-[5%]">
          <div>
            <h3 className="font-semibold text-mint-light pb-2">Navigation</h3>
            <ul>
              <li className="pb-2">
                <Link href="/" className="text-mint-light hover:underline">
                  Home
                </Link>
              </li>
              <li className="pb-2">
                <Link href="/about" className="text-mint-light hover:underline">
                  About
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  href="/projects"
                  className="text-mint-light hover:underline"
                >
                  Projects
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  href="/contact"
                  className="text-mint-light hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-1 text-mint-light">Connect</h3>
              <div className="flex flex-row gap-5">
                <Link
                  href="https://www.linkedin.com/in/ben-wallace-630462174/"
                  target="_blank"
                >
                  <IoLogoLinkedin size={40} className="text-mint-light" />
                </Link>
                <Link href="https://github.com/Wallace-Ben" target="_blank">
                  <IoLogoGithub size={40} className="text-mint-light" />
                </Link>
                <Link href="/contact" target="_blank">
                  <IoMail size={40} className="text-mint-light" />
                </Link>
              </div>
              <p className="mt-5 text-mint-light hover:underline">
                <Link
                  href="/ben-wallace-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </Link>
              </p>
            </div>
            <p className="text-mint-light mb-2">© 2026 Ben Wallace</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
