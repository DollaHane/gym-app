'use client'
// REACT & NEXT Imports
import React from 'react'
import Image from 'next/image';

// MUI & MODULE Imports
import { Box, Typography } from '@mui/material';
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

// COMPONENT Imports
import useMediaQuery from "../hooks/useMediaQuery";
import { SelectedPage } from "../componentsGlobal/types";
import ActionButton from "../componentsGlobal/ActionButton";
import styles from "./Home.module.css"

// IMAGE Imports
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import SponsorFortune from "../assets/SponsorFortune.png";

type Props = {
  setSelectedPage: ( value: SelectedPage ) => void 
}

export default function Home({ setSelectedPage }: Props) {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id="home" className={styles.secOne}>

      {/* IMAGE & HEADER */}
      <motion.div
        className={styles.mdOne}
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >

        {/* HEADER */}
        <Box className={styles.boxOne}>

          {/* HEADINGS */}
          <motion.div
            className={styles.mdTwo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* MAIN LOGO IMAGE */}
            <Box className={styles.boxTwo}>
              <Box className={styles.boxThree}>
                <Image className={styles.imgOne} alt="home-page-text" src={HomePageText}/>
              </Box>
            </Box>

            {/* INTRODUCTION TEXT */}
            <Typography className={styles.typoOne}>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </Typography>

          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className={styles.mdThree}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>

            <AnchorLink
              className={styles.anchorOne}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <Typography>Learn More</Typography>
            </AnchorLink>

          </motion.div>
        </Box>

        {/* IMAGE */}
        <Box className={styles.boxFour}>
          <Image className={styles.imgTwo} alt="home-pageGraphic" src={HomePageGraphic}/>
        </Box>

      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <Box className={styles.boxFive}>
          <Box className={styles.boxSix}>
            <Box className={styles.boxSev}>
              <Image alt="redbull-sponsor" src={SponsorRedBull}/>
              <Image alt="forbes-sponsor" src={SponsorForbes}/>
              <Image alt="fortune-sponsor" src={SponsorFortune}/>
            </Box>
          </Box>
        </Box>
      )}

    </section>
  )
}
