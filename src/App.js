import "./App.css";

function Header(props) {
  console.log(props);
  return <h1>Welcome to {props.name}'s Kitchen</h1>;
}
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
    </section>
  );
}
function Footer(props) {
  return <p>&copy; Folakol Inc. {props.year}</p>;
}
function App() {
  return (
    <div className="App">
      <Header name="Adewale"/>
      <Main adjective="Tantalizing" />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
