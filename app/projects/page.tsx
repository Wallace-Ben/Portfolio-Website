"use client";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "./projects.json";
import Link from "next/link";
import { Project } from "@/assets/types";
import { PaginationArray, NumOfPages } from "@/lib/pagination";
import { IoFilter, IoChevronDown } from "react-icons/io5";
import ClickButton from "@/components/Button/ClickButton";
import { ButtonSize, ButtonType } from "@/components/Button/button.types";
import { useState } from "react";
import HiddenMenuButton from "@/components/Button/HiddenMenuButton";

export default function Projects() {
  const numPerPage = 8;
  const selectedStyles = "font-semibold pointer-events-none border-b-2 pb-0.5";
  const generalStyles =
    "text-emerald-700 text-lg hover:underline hover:underline-offset-4";

  const [selectFilter, setSelectFilter] = useState<string[]>([]);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const techObject: Record<string, { count: number; index: number[] }> = {};

  let consoleProjects: Project[] = [];

  if (selectFilter.length > 0) {
    consoleProjects = [];
    for (let i = 0; i < projectsData.length; i++) {
      let valid = true;
      for (let j = 0; j < selectFilter.length; j++) {
        if (!projectsData[i].keywords.includes(selectFilter[j])) {
          valid = false;
        }
      }
      if (valid) {
        consoleProjects = [...consoleProjects, projectsData[i]];
      }
    }
  }

  const filteredProjects: Project[] =
    selectFilter.length > 0 ? consoleProjects : projectsData;

  // Creates an array of projects to render based on the current page index
  const projects = filteredProjects.slice(
    (currentPage - 1) * numPerPage,
    (currentPage - 1) * numPerPage + numPerPage,
  );

  function CreateProjectObject(skill: string, projectIndex: number) {
    if (!techObject[skill]) {
      techObject[skill] = { count: 0, index: [] };
    }
    techObject[skill].count += 1;

    if (!techObject[skill].index.includes(projectIndex)) {
      techObject[skill].index.push(projectIndex);
    }
  }

  for (let i = 0; i < projectsData.length; i++) {
    for (let j = 0; j < projectsData[i].keywords.length; j++) {
      CreateProjectObject(projectsData[i].keywords[j], i);
    }
    for (let k = 0; k < projectsData[i].key_skills.length; k++) {
      CreateProjectObject(projectsData[i].key_skills[k], i);
    }
  }

  const sortedTechnology = Object.entries(techObject)
    .slice()
    .sort((a, b) => b[1].count - a[1].count)
    .map((technology) => technology[0]);

  function SelectProjectFilter(skill: string) {
    setSelectFilter((prevFilter) =>
      prevFilter.includes(skill)
        ? prevFilter.filter((f) => f !== skill)
        : [...prevFilter, skill],
    );
  }

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

          {sortedTechnology.slice(0, 10).map((tech) => (
            <ClickButton
              key={tech}
              size={ButtonSize.Small}
              type={ButtonType.Filter}
              onClick={() => {
                SelectProjectFilter(tech);
                setCurrentPage(1);
              }}
              active={selectFilter.includes(tech)}
            >
              {tech}
            </ClickButton>
          ))}
          <HiddenMenuButton
            size={ButtonSize.Small}
            type={ButtonType.Filter}
            onClick={() => setToggleMenu(!toggleMenu)}
            active={toggleMenu}
          >
            More
            <IoChevronDown className="mt-0.5" size={19} />
          </HiddenMenuButton>
        </div>

        {toggleMenu && (
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mb-10 mt-[-20]">
            {sortedTechnology.slice(10).map((tech) => (
              <ClickButton
                key={tech}
                size={ButtonSize.Small}
                type={ButtonType.Filter}
                onClick={() => {
                  SelectProjectFilter(tech);
                  setCurrentPage(1);
                }}
                active={selectFilter.includes(tech)}
              >
                {tech}
              </ClickButton>
            ))}
          </div>
        )}

        {filteredProjects.length > 0 ? (
          <>
            <div className="flex flex-wrap gap-8 justify-center">
              {projects.map((project: Project) => (
                <div key={project.id}>
                  <ProjectCard data={project} />
                </div>
              ))}
            </div>

            <div className="flex gap-8 mt-10">
              <Link
                href="/projects"
                onClick={() => setCurrentPage(currentPage - 1)}
                className={currentPage === 1 ? "hidden" : generalStyles}
              >
                Previous
              </Link>
              {filteredProjects.length > numPerPage
                ? PaginationArray(
                    currentPage,
                    numPerPage,
                    filteredProjects,
                  ).map((number: number | string, index: number) => (
                    <div key={index}>
                      <Link
                        href="/projects"
                        onClick={() => setCurrentPage(Number(number))}
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
                  ))
                : ""}

              <Link
                href="/projects"
                onClick={() => setCurrentPage(currentPage + 1)}
                className={
                  currentPage === NumOfPages(numPerPage, filteredProjects)
                    ? "hidden"
                    : generalStyles
                }
              >
                Next
              </Link>
            </div>
          </>
        ) : (
          <p className="text-xl text-emerald-500 font-semibold">
            No projects match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
