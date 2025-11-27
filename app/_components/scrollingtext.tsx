"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Observer,SplitText);

export default function ScrollingText() {
  useGSAP(() => {
    const splitText = SplitText.create('.rail h1',{
        type:'chars',
        smartWrap:true
    })
    const scrollingText = gsap.utils.toArray<HTMLElement>(splitText.chars);
    const tl = horizontalLoop(scrollingText, {
      repeat: -1,
      paddingRight: 30,
    });

    // Observer.create({
    //   onChangeY(self) {
    //     let factor = 2.5;
    //     if (self.deltaY < 0) factor *= -1;

    //     gsap
    //       .timeline({ defaults: { ease: "none" } })
    //       .to(tl, { timeScale: factor * 2.5, duration: 0.5, overwrite: true })
    //       .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
    //   },
    // });
  }, []);

  return (
    <div className="rail flex gap-10 overflow-hidden text-nowrap  h-50 w-screen pointer-events-none">
     <h1 className="text-[15vw] sm:text-[9vw] font-semibold text-white/90 ">Ahmed Adel -Web Developer</h1>
    </div>
  );
}

// ---------------------------
// horizontalLoop (TypeScript)
// ---------------------------

function horizontalLoop(
  items: HTMLElement[],
  config: {
    repeat?: number;
    paused?: boolean;
    speed?: number;
    snap?: number | false;
    reversed?: boolean;
    paddingRight?: number;
  } = {}
) {
  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () =>
      tl.totalTime(tl.rawTime() + tl.duration() * 100),
  });

  const length = items.length;
  const startX = items[0].offsetLeft;

  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  let curIndex = 0;

  const pixelsPerSecond = (config.speed || 1) * 100;
  const snap =
    config.snap === false
      ? (v: number) => v
      : gsap.utils.snap(config.snap || 1);

  gsap.set(items, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(
        gsap.getProperty(el, "width", "px") as string
      ));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
          (gsap.getProperty(el, "xPercent") as number)
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

  const last = items[length - 1];
  const totalWidth =
    last.offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    last.offsetWidth * (gsap.getProperty(last, "scaleX") as number) +
    (config.paddingRight || 0);

  items.forEach((item, i) => {
    const curX = (xPercents[i] / 100) * widths[i];
    const distanceToStart = item.offsetLeft + curX - startX;
    const distanceToLoop =
      distanceToStart +
      widths[i] * (gsap.getProperty(item, "scaleX") as number);

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    ).fromTo(
      item,
      {
        xPercent: snap(
          ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
        ),
      },
      {
        xPercent: xPercents[i],
        duration:
          (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
        immediateRender: false,
      },
      distanceToLoop / pixelsPerSecond
    );

    times[i] = distanceToStart / pixelsPerSecond;
    tl.add(`label${i}`, times[i]);
  });

  const toIndex = (index: number, vars: any = {}) => {
    if (Math.abs(index - curIndex) > length / 2)
      index += index > curIndex ? -length : length;

    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }

    curIndex = newIndex;
    vars.overwrite = true;

    return tl.tweenTo(time, vars);
  };

  // attach methods
  (tl as any).next = (vars: any) => toIndex(curIndex + 1, vars);
  (tl as any).previous = (vars: any) => toIndex(curIndex - 1, vars);
  (tl as any).current = () => curIndex;
  (tl as any).toIndex = (index: number, vars: any) =>
    toIndex(index, vars);
  (tl as any).times = times;

  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    (tl.vars as any).onReverseComplete();
    tl.reverse();
  }

  return tl;
}
