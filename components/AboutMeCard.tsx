import { useMediaQuery } from "react-responsive";
import styles from "../styles/Home.module.css";
/**
 * @prop emoji = project emoji
 * @prop  description = project description
 * @prop  projectTitle = project title
 * @prop  projectUrl = project url
 */
export function AboutMeCard(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });
  const isBiggerScreen = useMediaQuery({ query: "(min-width: 900px)" });
  const listStyle = {
    fontSize: isBigScreen ? "1.1em" : "1em",
    margin: "0 30px 0 30px",
  };
  return (
    <>
      <article
        style={{
          margin: "10px 40px 30px 40px",
          borderRadius: 30,
          width: "80%",
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
        <header
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            src="andrews-profile-picture.jpg"
            style={{
              margin: isBigScreen ? "35px 0px 35px 0px" : 0,
              borderStyle: "solid",
              borderWidth: 3,
              borderRadius: "20%",
              width: "50%",
            }}
          />
        </header>
        <main
          style={{
            width: "100%",
            display: "flex",
            padding: "0% 0%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              overflow: "scroll",
              width: "100%",
              backgroundColor: "#adadad22",
              margin: "30px 0px 30px 0px",
              borderRadius: 20,
              padding: "10px 10px",
            }}
          >
            <p
              style={{
                lineHeight: 1.5,
                fontSize: isBigScreen ? "2.5em" : "1em",
                fontWeight: 500,
                padding: isBigScreen ? "0px 20px" : "0px 5px",
              }}
            >
              Hello, I am Andrew. I am a fullstack javascript engineer. My tech
              stack is listed below. I have the fundamentals to learn any
              technology, frontend, backend, operations, and automation. The
              list below is an abbreviated list of the technology that I use.
              <br />
              <br />
              Tech Stack:
              <ul style={{ columnCount: isBiggerScreen ? 2 : 1 }}>
                <li style={listStyle}>Apollo server/client</li>
                <li style={listStyle}>Atom</li>
                <li style={listStyle}>Authentication and Authorization</li>
                <li style={listStyle}>BOM</li>
                <li style={listStyle}>Bash Scripting</li>
                <li style={listStyle}>CI/CD</li>
                <li style={listStyle}>Chrome Debugger </li>
                <li style={listStyle}>Cloud9</li>
                <li style={listStyle}>DOM</li>
                <li style={listStyle}>Docker</li>
                <li style={listStyle}>Express</li>
                <li style={listStyle}>Firebase</li>
                <li style={listStyle}>Git</li>
                <li style={listStyle}>Github Actions</li>
                <li style={listStyle}>Github</li>
                <li style={listStyle}>Google Cloud Platform</li>
                <li style={listStyle}>GraphQL</li>
                <li style={listStyle}>HTTP</li>
                <li style={listStyle}>JWT</li>
                <li style={listStyle}>Jest.js</li>
                <li style={listStyle}>Kubernetes</li>
                <li style={listStyle}>Nest.js</li>
                <li style={listStyle}>Next.js</li>
                <li style={listStyle}>Node.js</li>
                <li style={listStyle}>Npm</li>
                <li style={listStyle}>OpenAPI</li>
                <li style={listStyle}>Postgresql</li>
                <li style={listStyle}>Puppeteer.js</li>
                <li style={listStyle}>React-dom</li>
                <li style={listStyle}>React-native</li>
                <li style={listStyle}>React</li>
                <li style={listStyle}>Redux</li>
                <li style={listStyle}>Rest</li>
                <li style={listStyle}>SMTP</li>
                <li style={listStyle}>Sessions and Cookies</li>
                <li style={listStyle}>Swagger</li>
                <li style={listStyle}>TCP</li>
                <li style={listStyle}>Terrafrom</li>
                <li style={listStyle}>Tmux</li>
                <li style={listStyle}>Typescript</li>
                <li style={listStyle}>Vim </li>
                <li style={listStyle}>Vim Script</li>
                <li style={listStyle}>Visual Studio Code</li>
                <li style={listStyle}>Yarn</li>
                <li style={listStyle}>and more...</li>
              </ul>{" "}
            </p>{" "}
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
        ></footer>
      </article>
    </>
  );
}
