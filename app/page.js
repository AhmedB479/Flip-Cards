import Image from "next/image";
import Background from "./components/background";

export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <Main />
      <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', zIndex: 0 }}>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.6/build/spline-viewer.js"
          async
        ></script>
        <spline-viewer url="https://prod.spline.design/AF5ZqcFihO7h630V/scene.splinecode"></spline-viewer>
      </div>
    </div>
  );
}