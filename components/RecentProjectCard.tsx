import Image from "next/image";
import { ButtonSize, ButtonType } from "./Button/button.types";
import LinkButton from "./Button/LinkButton";
import projectPhoto from "@/assets/images/project-screenshot.png";

interface Props {
  inverted?: boolean;
}

export default function RecentProjectCard({
  inverted,
}: Props): React.JSX.Element {
  const invertedImageStyling = inverted
    ? "md:order-2 lg:order-2"
    : "md:order-1 md:mr-6 lg:order-1 lg:mr-10 xl:mr-14";

  const invertedTextStyling = inverted
    ? "md:order-1 md:mr-6 lg:order-1 lg:mr-10 xl:mr-14"
    : "md:order-2 lg:order-2";

  return (
    <div className="flex md:flex-row flex-col justify-between p-4 md:my-3 lg:my-4 md:px-6 lg:px-10 xl:px-0 w-full max-w-7xl rounded-2xl">
      <div
        className={`flex md:flex-1 lg:flex-2 mb-5 md:mb-0 border-emerald-500 border-3 rounded-lg overflow-hidden ${invertedImageStyling}`}
      >
        <Image alt="project-image" src={projectPhoto} />
      </div>

      <div
        className={`flex flex-col md:flex-1 lg:flex-2 md:mb-0 mb-8 items-center justify-center ${invertedTextStyling}`}
      >
        <h2 className="text-emerald-500 font-semibold text-xl mb-2">
          Project Description
        </h2>
        <p className="text-center text-emerald-500 text-md mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit
          ipsa fugiat asperiores enim, ad quis ratione obcaecati suscipit
          perspiciatis inventore nulla officiis debitis odio et? Ab, dignissimos
          suscipit. Ipsa.
        </p>
        <LinkButton
          link="/"
          type={ButtonType.Primary}
          size={ButtonSize.Default}
        >
          Go to Project
        </LinkButton>
      </div>
    </div>
  );
}
