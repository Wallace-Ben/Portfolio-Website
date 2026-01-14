import Link from "next/link";
import { ButtonSize, ButtonType } from "./Button/button.types";
import ClickButton from "./Button/ClickButton";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import React from "react";

export default function ContactForm(): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  return (
    <div className="flex justify-center md:py-30">
      <div className="w-full md:w-auto xl:grid grid-cols-2 gap-5 bg-mist-air p-10 px-6 md:px-15">
        <div className="flex flex-col justify-center xl:items-start items-center py-5">
          <h1 className="md:text-4xl text-3xl text-charcoal mb-3">
            Get in touch
          </h1>
          <p className="mb-3 md:text-lg text-base text-charcoal">
            It would be great to hear from you!
          </p>
          <p className="mb-5 max-w-md md:text-lg text-base text-charcoal xl:text-start text-center">
            Feel free to get in touch using the form, or connect with me on
            LinkedIn or GitHub via the links below.
          </p>
          <div className="flex justify-center gap-8">
            <Link
              href="https://www.linkedin.com/in/ben-wallace-630462174/"
              target="_blank"
            >
              <IoLogoLinkedin size={40} className="text-charcoal" />
            </Link>
            <Link href="https://github.com/Wallace-Ben" target="_blank">
              <IoLogoGithub size={40} className="text-charcoal" />
            </Link>
          </div>
        </div>
        <form
          action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          method="POST"
          className="flex flex-col md:max-w-lg p-6"
          onSubmit={() => setIsSubmitting(true)}
        >
          <div className="flex md:flex-row flex-col md:justify-between md:gap-9 gap-5 md:mb-3 mb-5">
            <div className="flex flex-col">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="border-2 rounded-sm border-emerald-deep bg-white/80 px-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="border-2 rounded-sm border-emerald-deep bg-white/80 px-2"
              />
            </div>
          </div>
          <div className="flex flex-col xl:mb-3 mb-5">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
              autoComplete="email"
              className="border-2 rounded-sm border-emerald-deep bg-white/80 px-2"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              autoComplete="off"
              className="border-2 rounded-sm border-emerald-deep bg-white/80 h-30 px-2"
            />
            <input
              type="hidden"
              name="_subject"
              value="New message from your portfolio website"
            />
            <input type="hidden" name="_replyto" value="%email%" />
            <input
              type="hidden"
              name="_next"
              value={`${process.env.NEXT_PUBLIC_CONTACT_REDIRECT}`}
            />
            <input type="text" name="_honey" style={{ display: "none" }} />
          </div>
          <div className="flex justify-center">
            <ClickButton
              type={ButtonType.Submit}
              size={ButtonSize.Default}
              submit={true}
              disabled={isSubmitting}
            >
              Send message
            </ClickButton>
          </div>
        </form>
      </div>
    </div>
  );
}
