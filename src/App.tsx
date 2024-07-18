import AppCanvas from "./ui/components/containers/AppCanvas.container";
import "./ui/styles/configurator.scss";

function App() {
  return (
    <main className="configurator">
      <article className="configurator__left">
        <AppCanvas />
      </article>
      <article className="configurator__right">FORM HERE</article>
    </main>
  );
}

export default App;
