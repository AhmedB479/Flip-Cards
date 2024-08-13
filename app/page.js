import Image from "next/image";
import Onboarding from "./components/onboarding";
import Background from "./components/background";

export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: '1' }}>
      {/* <Background /> */}
      {/* <button style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px 20px',
        backgroundColor: '#ED9121',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: '2' // Ensure the button is on top of the background
      }}>
        Click Me
      </button> */}
      <Onboarding/>
    </div>
  );
}