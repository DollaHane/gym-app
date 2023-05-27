'use client'
import React from 'react'
import { SelectedPage } from "../componentsGlobal/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./Benefit.module.css"
import { Box, Typography } from '@mui/material';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: ( value: SelectedPage ) => void;
};

export default function Benefit({ icon, title, description, setSelectedPage }: Props): React.JSX.Element {

  return (
    <motion.div 
      variants={childVariant} 
      className={styles.mdOne}
    >

      <Box className={styles.boxOne}>
        <Box className={styles.boxTwo}>
          {icon}
        </Box>
      </Box>

      <Typography className={styles.typoOne} variant="h5">{title}</Typography>
      <Typography className={styles.typoTwo}>{description}</Typography>

      <AnchorLink
        className={styles.anchorOne}
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>

    </motion.div>
  );
};
