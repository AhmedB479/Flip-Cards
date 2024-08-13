"use client";
import Spline from '@splinetool/react-spline/next';

export default function Background() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Spline
        scene="https://prod.spline.design/AF5ZqcFihO7h630V/scene.splinecode"
      />
    </div>
  );
}