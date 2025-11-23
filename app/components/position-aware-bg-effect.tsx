"use client";
import { useState, useEffect, useRef } from "react";

const PositionAwareBgEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const boxedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current || !boxedRef.current) return;

      const rect = ref.current.getBoundingClientRect();
      const boxedRect = boxedRef.current.getBoundingClientRect();

      const x = event.clientX - boxedRect.left - rect.width / 2;
      const y = event.clientY - boxedRect.top - rect.height / 2;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={boxedRef} className="absolute inset-0 -z-10 flex justify-center items-center">
      <div
        ref={ref}
        className="absolute h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] rounded-full blur-xl lg:blur-3xl bg-linear-to-r from-dawn-orange to-dawn-blue opacity-30"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

export default PositionAwareBgEffect;
