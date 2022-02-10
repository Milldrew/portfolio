import { useMediaQuery } from "react-responsive";
import { ProjectCard } from "../components/ProjectCard";
export default function AboutAndrew(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 24px)" });
  const listStyle = { fontSize: 20, marginLeft: 30 };
  return (
    <>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1 style={{ paddingTop: 30 }}>{`
          Andrew's Projects
        `}</h1>
        {isBigScreen && <h1>big screen</h1>}
        <ProjectCard
          emoji="🚀"
          projectTitle="Take Off"
          description="This is a mock project"
        />
        <ProjectCard />
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            justifyItems: "stretch",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        ></article>
      </main>
    </>
  );
}
