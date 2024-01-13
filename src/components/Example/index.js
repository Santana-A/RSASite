import React from 'react'
import img1 from '../images/example1.png'
import img2 from '../images/example2.png'
import img3 from '../images/example3.png'
import img4 from '../images/example4.png'
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { AlgorithmsH1, AlgorithmsCard } from '../Algorithms/AlgorithmsElements'


const Example = () => {
  const [check, setChecked] = useState(true)
  let [current, setCurrent] = useState(0);
  let slides = [
    img1,
    img2,
    img3,
    img4,
  ];

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
console.log(check)
  return (
    <>
    <AlgorithmsH1 id = 'example' style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingTop: '50px'}}>Example Problems</AlgorithmsH1>
    <AlgorithmsCard style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginLeft: '340px', marginBottom: '100px'}}>
    <div  className="overflow-hidden relative ">
      <div 
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`, 
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full  justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill style={{fill: '#000'}}/>
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill style={{fill: '#000'}}/>
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
    </AlgorithmsCard>
    </>
  )
}

export default Example
