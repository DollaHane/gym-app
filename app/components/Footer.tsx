import React from 'react'
import Image from 'next/image';
import { Box, Typography } from '@mui/material'
import Logo from '../assets/Logo.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Box className={styles.boxOne}>

        <Box className={styles.boxTwo}>
          <Image alt="logo" src={Logo}/>
          <Typography className={styles.typoOne}>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </Typography>
          <Typography>© Evogym All Rights Reserved.</Typography>
        </Box>

        <Box className={styles.boxTwo}>
          <Typography className={styles.typoTwo}>Links</Typography>
          <Typography className={styles.typoThree}>Massa orci senectus</Typography>
          <Typography className={styles.typoThree}>Et gravida id et etiam</Typography>
          <Typography>Ullamcorper vivamus</Typography>
        </Box>

        <Box className={styles.boxTwo}>
          <Typography className={styles.typoTwo}>Contact Us</Typography>
          <Typography className={styles.typoThree}>Tempus metus mattis risus volutpat egestas.</Typography>
          <Typography>(333)425-6825</Typography>
        </Box>

      </Box>
    </footer>
  );
};
