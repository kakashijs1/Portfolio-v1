"use client"
import { motion } from "framer-motion"

import Link from "next/link";

const Contact = () => {

    const CONTACT = {
        address: "767 Ubonratchatani warinchamrab 34190 ",
        phoneNo: "+66 123456789",
        email: "kakashiproject@example.com",
      }; 

  return (
    <div className="border-t border-stone-900 pb-20"> 
        <motion.h2
         whileInView={{  opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: 100 }}
         transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <motion.div 
        whileInView={{  opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center tracking-tighter">
            <motion.p
            whileInView={{  opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4">
                {CONTACT.address}
            </motion.p>

            <motion.p 
            whileInView={{  opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4">
                {CONTACT.phoneNo}
            </motion.p>
            <Link
            href={'#'}
            className="border-b"
            >
                {CONTACT.email}
            </Link>
        </motion.div>
    </div>
  )
}
export default Contact