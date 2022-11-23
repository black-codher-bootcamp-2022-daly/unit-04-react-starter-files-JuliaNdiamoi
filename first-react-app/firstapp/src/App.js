function ClickableButton({ text, handleClick }) {
  return React.createElement(
    "button",
    {
      onClick: handleClick,
      key: text,
      style: {
        backgroundColor: "#3392e4",
        color: "#fff",
        border: "0",
        padding: "10px 20px",
        fontWeight: "bold",
        borderRadius: "5px",
        fontSize: "1.1em",
      },
    },
    text
  );
}

function Title() {
  return React.createElement(
    "h2",
    {
      key: "title-test",
      style: {
        color: "red",
      },
    },
    "I am a React Title"
  );
}

function CountryName(show) {
  if (!show) {
    return null;
  }
  return React.createElement(
    "h1",
    {
      key: "country-test",
      style: {
        color: "blue",
      },
    },
    "Uk"
  );
}

function Julia(show) {
  if (!show) {
    return null;
  }
  return React.createElement("h3", {}, "Julia was here");
}

function App() {
  const [show, setShow] = React.useState(true);
  const [julia, setJulia] = React.useState(false);

  return React.createElement("div", {}, [
    Title(),
    ClickableButton({
      text: "Display Country",
      handleClick: () => setShow(!show),
    }),
    CountryName(show),
    ClickableButton({
      text: "Display Julia",
      handleClick: () => setJulia(!julia),
    }),
    Julia(julia),
  ]);
}

const domContainer = document.querySelector("#root");

const root = ReactDOM.createRoot(domContainer);

root.render(React.createElement(App));