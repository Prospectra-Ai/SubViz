import GraphComponent from "./components/graph/GraphComponent";
import HeroEffects from "./components/effects/HeroEffects";
function App() {
  return (
    <div className="bg-primary h-screen">
      <HeroEffects />
      <GraphComponent />
    </div>
  );
}

export default App;
