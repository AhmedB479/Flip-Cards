import Image from "next/image";
import dynamic from "next/dynamic";

const Background = dynamic(() => import('./components/background'),{ssr:false})

export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: '1' }}>
      <Background />
      <button style={{
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
      </button>
    </div>
  );
}