import Image from "next/image";
import dynamic from "next/dynamic";

const Background = dynamic(() => import('./components/background'),{ssr:false})

export default function Home() {
  return (
    <div>
      <Background />
    </div>
  );
}