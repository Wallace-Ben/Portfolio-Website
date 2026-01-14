"use client";
import ContactForm from "@/components/ContactForm";
import MessageSent from "@/components/MessageSent";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Contact() {
  const searchParams = useSearchParams();
  const urlSubmitted = searchParams.get("submitted") === "true";

  const [submitted, setSubmitted] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const stored = sessionStorage.getItem("contact_submitted");
    if (stored === "true") {
      setSubmitted(true);
    } else {
      setSubmitted(urlSubmitted);
    }
  }, []);

  React.useEffect(() => {
    if (urlSubmitted) {
      sessionStorage.setItem("contact_submitted", "true");
      setSubmitted(true);
    }
  }, [urlSubmitted]);

  if (submitted === null) return null;

  if (submitted) {
    return <MessageSent />;
  } else {
    return <ContactForm />;
  }
}
