import Hero from "@/components/Hero";
import RecentProjectCard from "@/components/RecentProjectCard";

export default function Home() {
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
          <RecentProjectCard inverted={false} />
          <RecentProjectCard inverted={true} />
          <RecentProjectCard inverted={false} />
          <RecentProjectCard inverted={true} />
        </div>
      </div>
    </>
  );
}
