import Link from "next/link";

export default function MessageSent(): React.JSX.Element {
  return (
    <div className="flex justify-center md:py-45 py-15">
      <div className="w-full md:w-auto gap-5 bg-mist-air p-10 px-6 md:px-15">
        <div className="flex flex-col justify-center xl:items-start items-center text-center py-5">
          <h1 className="md:text-4xl text-3xl text-charcoal mb-3">
            Thank you!
          </h1>
          <p className="mb-3 md:text-lg text-base text-charcoal">
            Your message has been sent. I&apos;ll get back to you as soon as I
            can.
          </p>
          <span>
            <p className="max-w-md md:text-lg text-base text-charcoal xl:text-start">
              For a quicker response, feel free to connect with me on
              <Link
                href="https://www.linkedin.com/in/ben-wallace-630462174/"
                target="_blank"
                className="md:text-lg text-base font-semibold text-charcoal hover:border-b hover:text-emerald"
              >
                {" "}
                LinkedIn
              </Link>
              .
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
