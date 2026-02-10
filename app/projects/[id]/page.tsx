"use client";
import { usePathname } from "next/navigation";
import projectsData from "../../projects/projects.json";
import BuiltWithCard from "@/components/BuiltWithCard";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectDetailsCard from "@/components/ProjectDetailsCard";
import LinkButton from "@/components/Button/LinkButton";
import { ButtonSize, ButtonType } from "@/components/Button/button.types";
import { Project } from "@/assets/types";

export default function ProjectPage() {
  const projects = projectsData as Project[];

  const pathname = usePathname().slice(10);
  const data = projects.filter((project) => project.url === pathname)[0];

  return (
    <div className="m-auto max-w-7xl">
      <div className="grid md:grid-cols-75/25 p-10">
        <ProjectInfo data={data} />
        <div className="flex flex-col gap-10 items-center">
          <BuiltWithCard data={data} />
          <ProjectDetailsCard data={data} />
          <LinkButton
            type={ButtonType.Primary}
            size={ButtonSize.Large}
            link="/"
          >
            View on GitHub
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
