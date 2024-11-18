import { lazy, Suspense } from "react";
import { useValues } from "../../../context/FormValuesContext";

const LazyIsolatedScene = lazy(() => import("../models/IsolatedScene.model"));
const LazyFullyScene = lazy(() => import("../models/FullyScene.model"));

export default function Scene() {
  const { scene } = useValues();

  return (
    <Suspense fallback={null}>
      {scene === 0 ? <LazyIsolatedScene /> : <LazyFullyScene />}
    </Suspense>
  );
}
