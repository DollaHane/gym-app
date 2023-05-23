'use client'
import React from 'react'

// MUI / FRAMER Imports
import { Box, Typography } from '@mui/material';
import { motion } from "framer-motion";

// COMPONENTS
import { SelectedPage, ClassType } from "../componentsGlobal/types";
import HText from "../componentsGlobal/HText";
import Class from "./OurClass";

// IMAGE Imports
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1.toString(),
  },
  {
    name: "Yoga Classes",
    image: image2.toString(),
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3.toString(),
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4.toString(),
  },
  {
    name: "Fitness Classes",
    image: image5.toString(),
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6.toString(),
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};


export default function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className='secOne'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>

        {/* TYPOGRAPHY */}
        <motion.div
          className='mdOne'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Box className="boxOne">
            <HText>OUR CLASSES</HText>
            <Typography className='typoOne'>
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </Typography>
          </Box>
        </motion.div>

        {/* LIST ITEMS */}
        <Box className="boxTwo">
          <ul className='ulOne'>
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </Box>

      </motion.div>
    </section>
  );
};
