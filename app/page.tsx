"use client";
import { useEffect, useRef, useState } from "react";
import { Videoplayer } from "./Videoplayer";

export default function Home() {
  const [ispaused, setispaused] = useState(true);
  const videoref = useRef<HTMLVideoElement>(null);
  const [videoduration, setvideoduration] = useState<number>(0);
  const [videoprogress, setvideoprogress] = useState<number>(0);

  useEffect(() => {
    const videodurationtime = videoref.current?.duration;
    if (videodurationtime) {
      setvideoduration(videodurationtime);
    }
  }, []);

  useEffect(() => {
    if (ispaused) return;

    const interval = setInterval(() => {
      const videocurrenttime = videoref.current?.currentTime;
      if (videocurrenttime != null && videoduration != null) {
        setvideoprogress(videocurrenttime / videoduration);
      }
    }, 10);

 
    return () => {
      clearInterval(interval);
    };
  }, [videoduration, videoprogress, ispaused]);

 

  const toggleplaypause = () => {
    const video = videoref.current;
    if (video) {
      setispaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };



  return (
    <div className="w-full min-h-screen  bg-gray-600/30 flex flex-col gap-20 items-center  overflow-y-auto py-12">
      <div className="relative w-1/2  p-2  bg-gray-900/80 shadow-2xl shadow-black rounded-xl">
        <video autoPlay loop ref={videoref}  className=" object-cover   ">
          <source src="/video.mp4"></source>
        </video>
        <div className="absolute flex justify-center items-center w-full bottom-8 z-10">
          <Videoplayer
            ispaused={ispaused}
            toggleplaypause={toggleplaypause}
            size={56}
            width={3}
            progress={videoprogress}
          ></Videoplayer>
          
        </div>
      </div>
      
    </div>
  );
}
