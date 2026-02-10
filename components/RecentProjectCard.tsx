"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonSize, ButtonType } from "./Button/button.types";
import LinkButton from "./Button/LinkButton";
import projectPhoto from "@/public/images/project-screenshot.png";
import { Project } from "@/assets/types";

interface Props {
  inverted?: boolean;
  data: Project;
}

export default function RecentProjectCard({
  inverted,
  data,
}: Props): React.JSX.Element {
  const [open, setOpen] = useState(false);

  const invertedImageStyling = inverted
    ? "md:order-2 lg:order-2"
    : "md:order-1 md:mr-6 lg:order-1 lg:mr-10 xl:mr-14";

  const invertedTextStyling = inverted
    ? "md:order-1 md:mr-6 lg:order-1 lg:mr-10 xl:mr-14"
    : "md:order-2 lg:order-2";

  return (
    <>
      <div className="flex md:flex-row flex-col justify-between p-4 md:my-3 lg:my-4 md:px-6 lg:px-10 xl:px-0 w-full max-w-7xl rounded-2xl">
        <div
          className={`flex md:flex-1 lg:flex-2 mb-5 md:mb-0 border-emerald-500 border-3 rounded-lg overflow-hidden ${invertedImageStyling} bg-charcoal`}
        >
          <Image
            src={data.image}
            alt="project-image"
            onClick={() => setOpen(true)}
            className="cursor-pointer hover:opacity-97 transition duration-200"
            width={1920}
            height={953}
          />
        </div>

        <div
          className={`flex flex-col md:flex-1 lg:flex-2 md:mb-0 mb-8 items-center justify-center ${invertedTextStyling}`}
        >
          <h2 className="text-emerald-500 font-semibold text-xl mb-2">
            {data.title}
          </h2>
          <p className="text-center text-emerald-500 text-md mb-5">
            {data.recent_project_summary}
          </p>
          <LinkButton
            link={data.url}
            type={ButtonType.Primary}
            size={ButtonSize.Default}
          >
            Go to Project
          </LinkButton>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-6 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            ×
          </button>

          <Image
            src={projectPhoto}
            alt="project-image-large"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[90vh] w-auto h-auto"
          />
        </div>
      )}
    </>
  );
}
