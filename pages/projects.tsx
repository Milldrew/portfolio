import { PageHeader } from "../components/PageHeader";
import { useMediaQuery } from "react-responsive";
import { ProjectCard } from "../components/ProjectCard";
export default function AboutAndrew(props) {
  const listStyle = { fontSize: 20, marginLeft: 30 };
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <>
      <main
        style={{
          marginTop: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <PageHeader headerText="Andrew's projects" />
        <ProjectCard
          emoji="💼"
          projectTitle="Portfolio Site"
          description="This website was built using React.js and Next.js"
        />
        <ProjectCard
          emoji="📚"
          projectTitle="Milldrew's React Library"
          description="This is a mock project"
        />
        <ProjectCard
          emoji="🗳"
          projectTitle="Idaho Election Book"
          description="This is a mock project"
        />
        <ProjectCard
          emoji="✅"
          projectTitle="Federated Todo List"
          description="This is a mock project"
        />
      </main>
    </>
  );
}
