import GraphComponent from "../components/graph/GraphComponent";
import Popup1 from "./Popup1";
import Popup2 from "./Popup2";
import Visitors from "./Visitors";

const HeroComponent = () => {
  return (
    <>
      <Popup1 />
      <Popup2 />
      <GraphComponent />
      {/* <Visitors /> */}
    </>
  );
};

export default HeroComponent;
