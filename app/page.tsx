import Hero from "@/components/Hero";
import RecentProjectCard from "@/components/RecentProjectCard";
import projectsData from "./projects/projects.json";
import { Project } from "@/assets/types";

export default function Home() {
  // Sort Projects array by most recent projects - may do a 'featured projects' section instead
  function dateSort(a: Project, b: Project) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }

  const sortedData = projectsData.sort(dateSort);

  return (
    <>
      <Hero />
      <div
        id="recent-projects"
        className="flex flex-col bg-mist lg:py-[2%] lg:mb-5 items-center"
      >
        <h2 className="xl:text-4xl text-2xl text-emerald-500 font-semibold xl:my-5 mt-5">
          Recent Projects
        </h2>
        <div className="flex flex-col">
          <RecentProjectCard inverted={false} data={sortedData[0]} />
          <RecentProjectCard inverted={true} data={sortedData[1]} />
          <RecentProjectCard inverted={false} data={sortedData[2]} />
          <RecentProjectCard inverted={true} data={sortedData[3]} />
        </div>
      </div>
    </>
  );
}
