import { ProjectCard } from "../components/ProjectCard";
export default function AboutAndrew(props) {
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
        <h1
          style={{
            paddingLeft: 40,
            paddingRight: 40,
          }}
        >{` Expensive Pieces of Paper
        `}</h1>
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
