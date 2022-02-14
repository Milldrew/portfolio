import { useMediaQuery } from "react-responsive";
import styles from "../styles/Home.module.css";
/**
 * @prop emoji = project emoji
 * @prop  description = project description
 * @prop  projectTitle = project title
 * @prop  projectUrl = project url
 */
export function ProjectCard(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <>
      <article
        style={{
          margin: "10px 40px 30px 40px",
          borderRadius: 30,
          width: "80%",
          height: "65%",
          color: "black",
          backgroundColor: "#ededed",
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <header>
          <h3
            style={{
              fontSize: isBigScreen ? "2.0em" : "1.2em",
              textAlign: "center",
              fontWeight: 400,
              letterSpacing: 3,
            }}
          >
            {props.projectTitle || `Project Title`}
          </h3>
        </header>
        <main
          style={{
            width: "100%",
            display: "flex",
            flexDirection: isBigScreen ? "row" : "column",
            padding: "2% 0%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: isBigScreen ? "6em" : "4em",
              width: 50,
              height: 50,
              margin: isBigScreen ? " 0% 7% 0% 0%" : "5% 0% ",
              padding: isBigScreen ? "0px 60px" : 0,
            }}
          >
            {props.emoji || "🌲"}
          </div>
          <div
            style={{
              overflow: "scroll",
              width: "100%",
              height: "75%",
              backgroundColor: "#adadad22",
              borderRadius: 20,
              padding: "10px 0px",
            }}
          >
            <p
              style={{
                margin: 25,
                lineHeight: 1.5,
                fontSize: isBigScreen ? "2em" : "1em",
              }}
            >
              {props.description || "project description"}
            </p>
          </div>
        </main>
        <footer
          style={{
            display: "flex",
            width: "100%",
            height: "25%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{ fontSize: isBigScreen ? "2em" : "1em", marginRight: "5%" }}
          >
            🔗
          </div>
          <p
            style={{
              fontSize: isBigScreen ? "2em" : "1em",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            <a href={props.projectUrl} target="_blank" rel="noreferrer">
              {props.projectUrl || "https://google.com"}
            </a>
          </p>
        </footer>
      </article>
    </>
  );
}
