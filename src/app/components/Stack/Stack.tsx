"use client"
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiNestjs  } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import React from "react";
import { motion, Variants } from "framer-motion"

const Stack = () => {
 

  // กำหนด type สำหรับแต่ละ icon
  type StackIconType = {
    stack: string;
    icon: React.ReactElement<{ className?: string }>; // ระบุว่ามี prop className
    className: string;
    variants: Variants;
  };
  

  const iconVariants = (duration: number): Variants => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "reverse" as const, // กำหนด type แบบ literal
      },
    },
  });

  const StackIcon: StackIconType[] = [
    {
      stack: "react",
      icon: <FaReact />,
      className: " text-5xl md:text-7xl text-blue-300",
      variants: iconVariants(2.5),
    },
    {
      stack: "next",
      icon: <SiNextdotjs />,
      className: "text-5xl md:text-7xl text-white",
      variants: iconVariants(3),
      
    },
    {
      stack: "mongodb",
      icon: <SiMongodb />,
      className: "text-5xl md:text-7xl text-green-600",
      variants: iconVariants(5),
    },
    {
      stack: "tailwind",
      icon: <RiTailwindCssFill />,
      className: "text-5xl md:text-7xl text-sky-600",
      variants: iconVariants(2),
    },
    {
      stack: "nodejs",
      icon: <FaNodeJs />,
      className: "text-5xl md:text-7xl text-green-600",
      variants: iconVariants(3),
    },
    {
      stack : "nest",
      icon: <SiNestjs />,
      className: "text-5xl md:text-7xl text-red-600",
      variants: iconVariants(5),
    },
    {
      stack: "mysql",
      icon: <SiMysql />,
      className: "text-5xl md:text-8xl text-blue-600",
      variants: iconVariants(6),
    },
  ];

  return (
    <>
      <div className="pb-20">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="my-14 text-center text-4xl">Stack Build         
        </motion.h2>

        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }} 
        className="flex flex-wrap justify-center items-center gap-6">

          {/* loop icon here */}
          {StackIcon.map((item, index) => (
            <motion.div 
            variants={item.variants}
            initial="initial"
            animate="animate"
            key={index} 
            className="flex  items-center gap-1">
              {React.cloneElement(item.icon, { className: item.className})}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </>
  );
};
export default Stack;

//React.cloneElement() เป็นฟังก์ชันของ React ที่ใช้สร้าง clone (สำเนา) ของ React element ที่มีอยู่ แล้วสามารถเพิ่ม props ใหม่เข้าไปใน element นั้นได้

//ทำไมต้องใช้ React.cloneElement()?
// เพราะ React elements เป็น immutable (เปลี่ยนแปลงค่าโดยตรงไม่ได้) ถ้าต้องการเพิ่ม props ให้กับ element ที่ถูกสร้างมาก่อนหน้า จำเป็นต้องใช้ React.cloneElement()