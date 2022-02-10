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
        <h1 style={{ paddingTop: 30 }}>About Andrew</h1>
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
        >
          <div
            style={{
              marginLeft: 40,
              marginBottom: -3,
              marginRight: 20,
              borderRadiusTop: 30,
              width: "80%",
              color: "black",
              backgroundColor: "#ededed",
              padding: 20,
              display: "flex",
              justifyContent: "center",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <img
              src="andrews-profile-picture.jpg"
              style={{
                marginTop: 15,
                borderStyle: "solid",
                borderWidth: 3,
                borderRadius: "20%",
                width: "40",
              }}
            />
          </div>
          <div
            style={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              marginLeft: 40,
              marginRight: 20,
              width: "80%",
              color: "black",
              backgroundColor: "#ededed",
              flexDirection: "column",
              display: "flex",
              paddingBottom: 20,
            }}
          >
            <p
              style={{
                lineHeight: 1.5,
                fontSize: 20,
                fontWeight: 500,
                margin: "0px 50px",
                padding: "0px 20px",
              }}
            >
              Hello, I am Andrew. I am a fullstack javascript engineer. My tech
              stack is listed below. I have the fundamentals to learn any
              technology, front end, backend, dev ops automation.
            </p>
            <div style={{ display: "flex", padding: "10px 50px" }}>
              <div style={{ width: "50%" }}>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: 0,
                    fontSize: 30,
                    marginLeft: 30,
                  }}
                >
                  Tech Stack:
                </h3>
                <ul>
                  <li style={listStyle}>node.js</li>
                  <li style={listStyle}>express</li>
                  <li style={listStyle}>apollo server/client</li>
                  <li style={listStyle}>nest.js</li>
                  <li style={listStyle}>react</li>
                  <li style={listStyle}>react-dom</li>
                  <li style={listStyle}>react-native</li>
                  <li style={listStyle}>redux</li>
                  <li style={listStyle}>next.js</li>
                  <li style={listStyle}>jest.js</li>
                  <li style={listStyle}>puppeteer.js</li>
                  <li style={listStyle}>firebase</li>
                  <li style={listStyle}>postgresql</li>
                  <li style={listStyle}>google cloud platform</li>
                  <li style={listStyle}>terrafrom</li>
                  <li style={listStyle}>docker</li>
                  <li style={listStyle}>kubernetes</li>
                  <li style={listStyle}>Anything I need to finish the job</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
