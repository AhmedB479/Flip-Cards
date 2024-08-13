import Image from "next/image";
import Background from "./components/background";
export default function Home() {
  return (
    <body>
    <div style={{zIndex:'0',position:'fixed'}}>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.6/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/AF5ZqcFihO7h630V/scene.splinecode"></spline-viewer>
    </div>
      <h1 style={{zIndex:'1'}}>hello world</h1>
    </body>
  );
}
