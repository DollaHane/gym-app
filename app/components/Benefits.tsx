'use client'
// REACT / NEXT Imports
import React from 'react'
import Image from 'next/image';

// MUI / HERO Imports
import { Box, Typography } from '@mui/material';
import { motion } from "framer-motion";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon, } from "@heroicons/react/24/solid";

// MISC Imports
import Benefit from "./Benefit";
import ActionButton from "../componentsGlobal/ActionButton";
import HText from "../componentsGlobal/HText";
import { BenefitType, SelectedPage } from "../componentsGlobal/types";
import BenefitsPageGraphic from "../assets/BenefitsPageGraphic.png";
import styles from "./Benefits.module.css"


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className={styles.icon} />,
    title: "State of the Art Facilities",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className={styles.icon}  />,
    title: "100's of Diverse Classes",
    description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est.",
  },
  {
    icon: <AcademicCapIcon className={styles.icon}  />,
    title: "Expert and Pro Trainers",
    description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: ( value: SelectedPage ) => void;
}

export default function Benefits({ setSelectedPage }: Props): React.JSX.Element {

  return (
    <section id="benefits" className={styles.secOne}>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

        {/* HEADER */}
        <motion.div
          className={styles.mdOne}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM</HText>
          <Typography className={styles.typoOne}>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </Typography>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className={styles.mdTwo}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS & DESCRIPTION */}
        <Box className={styles.boxOne}>

          {/* GRAPHIC */}
          <Image
            className={styles.imgOne}
            alt='benefits-page-graphic'
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION #1 */}
          <Box className={styles.boxSix}>

            {/* TITLE */}
            <Box className={styles.boxTwo}>
              <Box className={styles.boxThree}>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >

                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <Typography className={styles.typoTwo}>FIT</Typography>
                  </HText>
                
                </motion.div>
              </Box>
            </Box>

            {/* DESCRIPTION #2 */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Typography className={styles.typoThree}>
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </Typography>
              <Typography className={styles.typoFour}>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </Typography>
            </motion.div>

            {/* BUTTON */}
            <Box className={styles.boxFour}>
              <Box className={styles.boxFive}>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </Box>
            </Box>
          </Box>

        </Box>

      </motion.div>
    </section>
  );
};
