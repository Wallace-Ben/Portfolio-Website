import Hero from "@/components/Hero";
import RecentProjectCard from "@/components/RecentProjectCard";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col bg-mist md:py-[2%] md:mb-5 items-center">
        <h2
          id="recent-projects"
          className="text-4xl text-emerald-500 font-semibold mt-5"
        >
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
