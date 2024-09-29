// import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles'
import { fadeIn, textVariant } from "../utils/motion";

import CookieConsent from "react-cookie-consent";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <video 
      muted playsInline disablepictureinpicture autoPlay loop  data-src-desk="https://www.ghayath.org/wp-content/uploads/2024/01/footer_opt.mp4" data-src="https://www.ghayath.org/wp-content/uploads/2024/01/footer_opt.mp4" data-ll-status="loaded" src="https://www.ghayath.org/wp-content/uploads/2024/01/footer_opt.mp4">
        <source type="video/mp4" />
      </video>

      {/* <video  playsInline autoPlay loop disablePictureInPicture src="https://www.ghayath.org/wp-content/uploads/2024/01/footer_opt.mp4">

      </video> */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `} >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient"  />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            We are <span className='text-[#915EFF]'>Team</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Tech Solutions, IT Excellence
          {/* <br className='sm:block hidden' /> */}
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      {/* <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent> */}
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B",fontWeight: "bold" }}
        buttonStyle={{ background: "#915EFF",color: "#fff", fontSize: "13px", fontWeight: "bold" }}
        expires={5}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </section>
  )
}

export default Hero