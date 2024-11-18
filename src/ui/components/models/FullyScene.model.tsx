import MultipleFences from "./MultipleFences.model";
import ParallaxBackground from "./ParallaxScene.model";

export default function FullyScene() {
  return (
    <>
      <ParallaxBackground />
      <MultipleFences scale={1.5} />
    </>
  );
}
