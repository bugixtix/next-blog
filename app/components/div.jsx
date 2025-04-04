'use client'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

function Div_({children, className='', triggerOnce=false, initialStyle=true}) {
    const {ref, inView} = useInView({triggerOnce:triggerOnce, threshold:0.2});
  return (
    
        <motion.div
            ref={ref}
            initial={{opacity:0, y:50}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{duration:1.4}}
            className={`${initialStyle &&' px-1 bg-gray-600'}${className}`}
        >
            {children}
        </motion.div>
   
  )
}

export default Div_