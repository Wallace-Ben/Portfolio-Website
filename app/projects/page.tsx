"use client";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "./projects.json";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Project } from "@/assets/types";
import { PaginationArray, NumOfPages } from "@/lib/pagination";
import { IoFilter, IoChevronDown } from "react-icons/io5";
import ClickButton from "@/components/Button/ClickButton";
import { ButtonSize, ButtonType } from "@/components/Button/button.types";

export default function Projects() {
  const numPerPage = 8;
  const searchParams = useSearchParams();
  const currentPage = !searchParams.size ? 1 : Number(searchParams.get("page"));
  const selectedStyles = "font-semibold pointer-events-none border-b-2 pb-0.5";
  const generalStyles =
    "text-emerald-700 text-lg hover:underline hover:underline-offset-4";

  // Creates an array of projects to render based on the current page index
  const projects = projectsData.slice(
    (currentPage - 1) * numPerPage,
    (currentPage - 1) * numPerPage + numPerPage,
  );

  return (
    <div className="flex justify-center bg-mist">
      <div className="flex flex-col relative lg:py-[2%] lg:mb-5 items-center max-w-7xl">
        <h2 className="xl:text-4xl text-2xl text-emerald-500 font-semibold mt-5 mb-7">
          Projects
        </h2>

        <div className="flex gap-4 mb-10">
          <span className="flex text-emerald-500 font-semibold items-center gap-2 text-lg">
            <IoFilter size={23} />
            <p>Filter by:</p>
          </span>
          <ClickButton size={ButtonSize.Small} type={ButtonType.Filter}>
            JavaScript
          </ClickButton>
          <ClickButton size={ButtonSize.Small} type={ButtonType.Filter}>
            JavaScript
          </ClickButton>
          <ClickButton size={ButtonSize.Small} type={ButtonType.Filter}>
            JavaScript
          </ClickButton>
          <ClickButton size={ButtonSize.Small} type={ButtonType.Filter}>
            JavaScript
          </ClickButton>
          <ClickButton size={ButtonSize.Small} type={ButtonType.Filter}>
            JavaScript
          </ClickButton>
          <ClickButton size={ButtonSize.Small} type={ButtonType.Filter}>
            JavaScript
          </ClickButton>
          <span
            className="flex items-center justify-center gap-1  text-charcoal border-emerald-500
          border-2 rounded-full pl-4 pr-2 py-1 hover:bg-emerald/10
          hover:border-emerald transition duration-200 cursor-pointer bg-mist-light"
          >
            <p>More</p>
            <IoChevronDown className="mt-0.5" size={19} />
          </span>
        </div>

        {/* Render the projects in by mapping over projectsData */}
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project: Project) => (
            <div key={project.id}>
              <ProjectCard data={project} />
            </div>
          ))}
        </div>

        {/* Renders pagination links */}
        <div className="flex gap-8 mt-10">
          <Link
            href={`/projects?page=${currentPage - 1}`}
            className={currentPage === 1 ? "hidden" : generalStyles}
          >
            Previous
          </Link>
          {PaginationArray(currentPage, numPerPage, projectsData).map(
            (number: number | string, index: number) => (
              <div key={index}>
                <Link
                  href={`/projects?page=${number}`}
                  className={
                    number === "..."
                      ? `pointer-events-none ${generalStyles}`
                      : Number(number) === currentPage
                        ? `${generalStyles} ${selectedStyles}`
                        : generalStyles
                  }
                >
                  {number}
                </Link>
              </div>
            ),
          )}

          <Link
            href={`/projects?page=${currentPage + 1}`}
            className={
              currentPage === NumOfPages(5, projectsData)
                ? "hidden"
                : generalStyles
            }
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
