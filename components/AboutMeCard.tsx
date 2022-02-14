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
                <li style={listStyle}>node.js</li>
                <li style={listStyle}>express</li>
                <li style={listStyle}>apollo server/client</li>
                <li style={listStyle}>nest.js</li>
                <li style={listStyle}>react</li>
                <li style={listStyle}>react-dom</li>
                <li style={listStyle}>react-native</li>
                <li style={listStyle}>rest</li>
                <li style={listStyle}>redux</li>
                <li style={listStyle}>next.js</li>
                <li style={listStyle}>jest.js</li>
                <li style={listStyle}>graphql</li>
                <li style={listStyle}>puppeteer.js</li>
                <li style={listStyle}>firebase</li>
                <li style={listStyle}>postgresql</li>
                <li style={listStyle}>google cloud platform</li>
                <li style={listStyle}>terrafrom</li>
                <li style={listStyle}>docker</li>
                <li style={listStyle}>kubernetes</li>
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
