import { useMediaQuery } from "react-responsive";
import styles from "../styles/Home.module.css";
/**
 * @prop emoji = project emoji
 * @prop  description = project description
 * @prop  projectTitle = project title
 * @prop  projectUrl = project url
 */
export function ContactCard(props) {
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
          color: "black",
          backgroundColor: "#ededed",
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: isBigScreen ? "row" : "column",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <header
          style={{
            margin: " 10px 30px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="andrews-profile-picture.jpg"
            style={{
              margin: isBigScreen ? "35px 0px 35px 0px" : 0,
              borderStyle: "solid",
              borderWidth: 3,
              borderRadius: "20%",
            }}
          />
        </header>
        <main
          style={{
            display: "flex",
            padding: "0% 0%",
          }}
        >
          <div
            style={{
              backgroundColor: "#adadad22",
              margin: "30px 0px 30px 0px",
              borderRadius: 20,
              padding: "10px 10px",
            }}
          >
            <p
              style={{
                lineHeight: 2.5,
                fontSize: isBigScreen ? "1.5em" : "1em",
                fontWeight: 500,
                padding: isBigScreen ? "0px 3px" : "0px 0px",
              }}
            >
              Phone:
              <br />
              <a
                style={{
                  cursor: "pointer",
                  color: "#44f",
                  textDecoration: "underline",
                }}
                href="tel:907-590-0529"
              >
                907-590-0529 (iOS)
              </a>
              <br />
              Email:{"  "}
              <br />
              <a
                style={{
                  cursor: "pointer",
                  color: "#44f",
                  textDecoration: "underline",
                }}
                href="mailto: andrew.patrick.miller.2022@gmail.com"
              >
                {"      "} Andrew.Patrick.Miller.2022@gmail.com
              </a>
            </p>{" "}
          </div>
        </main>
      </article>
    </>
  );
}
