"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
 
const Hero = () => {

  const MotionImage = motion(Image);
  const MotionLink = motion(Link);

  const profile = "/assets/hacker.jpg";

  const  CONTENT = "I am  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae fugiat earum, magnam necessitatibus assumenda, fugit eos deserunt, nihil velit incidunt dolor. Porro impedit deserunt aspernatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae fugiat earum,  !";

  const containerVariants = {
    hidden: { opacity: 0, X: -100 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.5,
       } },
  };

  const childVariants = {
    hidden :{ opacity : 0, x: -100 },
    visible : { opacity: 1, x: 0 },
    transition : { duration: 0.5 }
  }

  return (
    <>
      <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">

            {/* section profile */}
          <div className="w-full  lg:w-1/2 ">
                <div className="flex justify-center    lg:p-8 relative w-full md:w-[400px]       md:mx-auto lg:w-[550px]   aspect-square">
                    <MotionImage
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 , delay: 1.8}}
                        className="border border-stone-900 rounded-xl   object-cover"
                        src={profile}
                        alt=""
                        fill                
                    />
                </div>
          </div>

            {/* section text */}
          <div className="w-full lg:w-1/2">
                <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                    className="flex flex-col items-center lg:items-start mt-10">
                    <motion.h2
                    variants={childVariants}
                    className="pb-2 text-4xl tracking-tighter lg:text-8xl">Kakashi Project
                    </motion.h2>
                    <motion.span 
                     variants={childVariants}
                    className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Full stack Developer</motion.span>
                    <motion.p 
                     variants={childVariants}
                    className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                        {CONTENT}
                    </motion.p>
                    <MotionLink
                    variants={childVariants}
                    href="#"
                    rel="noopener noreferrer"
                    download
                    className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10" 
                    >
                        Download Resume
                    </MotionLink>
                </motion.div>
          </div>

        </div>
      </div>
    </>
  );
};
export default Hero;

 //Flexbox Utilities
//flex-wrap : อนุญาตให้ items ขึ้นบรรทัดใหม่ได้เมื่อพื้นที่ไม่พอ
// lg:flex-row-reverse : บนหน้าจอขนาดใหญ่ (≥1024px) จะสลับลำดับ items แนวนอน (เหมือน flex-direction: row-reverse)
//aspect-square : กำหนดอัตราส่วน 1:1 (กว้าง=สูง) พูดง่ายๆคือทำให้ element เป็นสี่เหลี่ยมจัตุรัส

// leading-relaxed : กำหนดระยะห่างระหว่างบรรทัด (line-height: 1.625)
// tracking-tight : กำหนดระยะห่างระหว่างตัวอักษร (letter-spacing: -0.025em)
//bg-clip-text : กำหนดให้พื้นหลังถูกครอบไว้เฉพาะพื้นที่ข้อความ (ใช้ร่วมกับ text-transparent และ gradient background)

// เคล็ดลับสำหรับนักเรียน
// aspect-square ควรใช้กับ parent element ที่มีขนาดกำหนดแล้ว (เช่น ใช้กับ w-64 h-64 ไม่ได้ผล)

// bg-clip-text ต้องใช้คู่กับ text-transparent และพื้นหลัง gradient/สี

// flex-row-reverse ใช้กับกรณีที่ต้องการสลับลำดับ items แนวนอน

// rel="noopener noreferrer" ควรใช้ทุกครั้งเมื่อมี target="_blank" เพื่อป้องกัน security risk

// 🚨 ข้อควรระวัง
// การใช้ flex-row-reverse อาจทำให้ลำดับการอ่านของ screen reader สับสนได้

// bg-clip-text ต้องใช้ prefix -webkit- ในบางเบราว์เซอร์ แต่ Tailwind จัดการให้อัตโนมัติ

// aspect-square อาจไม่ทำงานใน Safari เวอร์ชันเก่า (<15.4)