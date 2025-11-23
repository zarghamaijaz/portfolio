"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import throttle from "@/utils/throttle";

const BannerBg = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [scrollValue, setScrollValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  function handleScroll(e: Event) {
      const windowScroll = window.scrollY;
      const refheight = ref.current ? ref.current.getBoundingClientRect().height : 0;
  
      const scrollPercentage = windowScroll / refheight;
      let newScrollValue = Math.round(scrollPercentage * 100);
        if(newScrollValue > 100) newScrollValue = 100;
      setScrollValue(newScrollValue);

  }

  useEffect(() => {
    setIsMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <div ref={ref} className="hidden lg:block absolute inset-0 -z-10">
        <Image
          src="/svgs/banner-wave-outline.svg"
          alt="Banner wave"
          width={500}
          height={500}
          sizes="100vw"
          className="absolute right-0 w-[75%] [mask-image:linear-gradient(to_right,transparent,black)] translate-x-4"
        />
        <Image
          src="/svgs/banner-ellipse-outline.svg"
          alt="Banner ellipse"
          width={200}
          height={200}
          sizes="100vw"
          className={`absolute right-[30%] ${
            isMounted ? "fade-in-pop" : "opacity-0"
          }`}
          style={{
            transform: `translateX(-${scrollValue}%)`
          }}
        />
        <Image
          src="/svgs/banner-ellipse-half-outline.svg"
          alt="Banner ellipse"
          width={150}
          height={150}
          sizes="100vw"
          className={`absolute right-[25%] top-[60%] ${
            isMounted ? "fade-in-pop" : "opacity-0"
          }`}
          style={{
            transform: `translateX(${scrollValue}%) translateY(${scrollValue}%) rotate(-${scrollValue}deg)`
          }}
        />
        <Image
          src="/svgs/banner-ellipse-filled.svg"
          alt="Banner ellipse"
          width={80}
          height={80}
          sizes="100vw"
          className={`absolute right-[20%] top-[30%] ${
            isMounted ? "fade-in-pop" : "opacity-0"
          }`}
          style={{
            transform: `translateX(${scrollValue * 2}%)`
          }}
        />
      </div>
    </>
  );
};

export default BannerBg;
