import React from 'react';
import {RiReactjsLine} from "react-icons/ri";
import {BiLogoSpringBoot} from "react-icons/bi";
import {TbBrandNextjs} from "react-icons/tb";
import {FaNodeJs} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import Image from "next/image";
import MySql from "../assets/mysql.png";

const Technologies = () => {
  return (
    <section className='py-20 border-b border-neutral-800'>
      <h2 className='mb-16 text-center text-4xl font-bold text-white'>
        Technologies
      </h2>
      <div className='flex flex-wrap items-center justify-center gap-4 mb-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <BiLogoSpringBoot className="text-7xl text-green-500"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandNextjs className="text-7xl text-white"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className="text-7xl text-green-500"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <Image src={MySql} alt="MySQL" width={78} height={78}/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGithub className="text-7xl"/>
        </div>
      </div>
    </section>
  );
};

export default Technologies;