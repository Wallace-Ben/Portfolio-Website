import { ButtonSize, ButtonType } from "@/components/Button/button.types";
import LinkButton from "@/components/Button/LinkButton";
import profilePhoto from "../../assets/images/linkedin-photo.jpg";

export default function About() {
  return (
    <div className="flex flex-col p-10 md:px-8 max-w-6xl mx-auto xl:items-start items-center xl:px-0">
      <h1 className="xl:text-4xl text-2xl font-semibold text-emerald-500 xl:mb-0 mb-2">
        About Me
      </h1>
      <div
        className="xl:hidden shrink-0 h-[150px] w-[150px] md:h-40 md:w-40 xl:translate-x-0 xl:h-[170px] xl:w-[170px] rounded-[20%] 
        bg-cover bg-center bg-no-repeat border-3 border-emerald-500 xl:shadow-md shadow-sm shadow-emerald-deep "
        style={{
          backgroundImage: `url(${profilePhoto.src})`,
          backgroundSize: 300,
        }}
      />

      <p className="text-emerald-500 text-lg text-center md:max-w-3xl">
        Building accessible, user-friendly interfaces with TypeScript and React.
      </p>

      <div className="max-w-5xl mt-2">
        <div className="mt-5 xl:mt-2 xl:mb-5 mb-8 xl:text-start text-center xl:px-0 px-8 md:px-4">
          <h2 className="font-semibold text-xl text-emerald-500">Summary</h2>

          <div className="flex flex-row gap-8 items-start md:gap-6">
            <p className="text-charcoal flex-1">
              I&apos;m a frontend developer at Version 1, working closely with
              designers and backend engineers to deliver high-quality,
              user-focused services. Before moving into frontend development, I
              worked in data analysis, specialising in UX/UI analytics, which
              has shaped how I approach designing and building systems.
            </p>
            <div
              className="hidden xl:block shrink-0 -mt-25 h-[100px] w-[100px] xl:translate-x-0 xl:h-[170px] xl:w-[170px] rounded-[20%] 
        bg-cover bg-center bg-no-repeat border-3 border-emerald-500 xl:shadow-md shadow-sm shadow-emerald-deep xl:mb-2 mb-4
    "
              style={{
                backgroundImage: `url(${profilePhoto.src})`,
                backgroundSize: 300,
              }}
            />
          </div>
        </div>

        <div className="xl:text-start text-center xl:px-0 px-8 md:px-4">
          <h2 className="font-semibold text-xl text-emerald-500">
            Experience Highlights
          </h2>

          <div className="mb-8 xl:mb-8">
            <span className="flex xl:flex-row flex-col justify-between md:items-center">
              <h3 className="font-semibold text-emerald-500">
                Frontend Developer - Version 1
              </h3>
              <p className="text-emerald-500">July 2023 - Present</p>
            </span>
            <p className="text-emerald-500">
              TypeScript, React, HTML, CSS, REST APIs, Jest
            </p>
            <p className="text-charcoal">
              Worked with Companies House to build and maintain multiple
              frontend services. Collaborated with design and backend teams to
              ensure highly accessible services with rigorous testing to
              guarantee reliability.
            </p>
          </div>

          <div className="mb-8 xl:mb-8">
            <span className="flex xl:flex-row flex-col justify-between md:items-center">
              <h3 className="font-semibold text-emerald-500">
                Data Analyst - Jarmany
              </h3>
              <p className="text-emerald-500">February 2022 - October 2022</p>
            </span>
            <p className="text-emerald-500">
              Adobe Analytics, Microsoft Excel, A/B Testing
            </p>
            <p className="text-charcoal">
              Worked with Samsung UK design teams to gather user behaviour
              metrics and support data-driven design improvements to increase
              conversion rates and usability.
            </p>
          </div>
        </div>

        <div className="mb-10 text-center xl:text-start xl:px-0 px-8 md:px-4">
          <h2 className="font-semibold text-xl text-emerald-500 xl:mb-0 mb-1">
            Core skills
          </h2>

          <span className="flex xl:flex-row flex-col md:flex-row md:justify-center xl:justify-start">
            <h4 className="text-emerald-500 font-semibold mr-2">Frontend:</h4>
            <p className="text-charcoal">
              TypeScript, JavaScript, React, Next.js, HTML, CSS
            </p>
          </span>

          <span className="flex flex-col xl:flex-row md:flex-row md:justify-center xl:justify-start">
            <h4 className="text-emerald-500 font-semibold mr-2">
              Data & backend:
            </h4>
            <p className="text-charcoal">
              MongoDB, MySQL, REST APIs, Python (basic)
            </p>
          </span>

          <span className="flex flex-col xl:flex-row md:flex-row md:justify-center xl:justify-start">
            <h4 className="text-emerald-500 font-semibold mr-2">Tools: </h4>
            <p className="text-charcoal">Git, GitHub, Jest, Docker</p>
          </span>
        </div>

        <div className="flex justify-center md:gap-4 mb-2">
          <LinkButton
            link="/projects"
            type={ButtonType.Primary}
            size={ButtonSize.Default}
          >
            View my projects
          </LinkButton>
          <LinkButton
            link="/ben-wallace-cv.pdf"
            type={ButtonType.Secondary}
            size={ButtonSize.Default}
            openNewTab={true}
          >
            Download CV
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
