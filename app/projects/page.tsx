"use client";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "./projects.json";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Project } from "@/assets/types";
import { PaginationArray, NumOfPages } from "@/lib/pagination";

export default function Projects() {
  const numPerPage = 9;

  const searchParams = useSearchParams();
  const currentPage = !searchParams.size ? 1 : Number(searchParams.get("page"));
  const selectedStyles = "font-semibold pointer-events-none border-b-2 pb-0.5";
  const generalStyles =
    "text-emerald-700 text-lg hover:underline hover:underline-offset-4";

  // Creates an array of projects to render based on the current page index
  const projects = projectsData.slice(
    (currentPage - 1) * numPerPage,
    (currentPage - 1) * numPerPage + numPerPage
  );

  return (
    <div className="flex flex-col relative bg-mist lg:py-[2%] lg:mb-5 items-center">
      <h2 className="xl:text-4xl text-2xl text-emerald-500 font-semibold mt-5 mb-10">
        Projects
      </h2>
      {/* Render the projects in by mapping over projectsData */}
      <div className="flex flex-wrap gap-20 justify-center">
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
          )
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
  );
}
