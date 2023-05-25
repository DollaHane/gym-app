import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import styles from "./OurClass.module.css"

type Props = {
  name: string;
  description?: string;
  image: any;
}

export default function OurClass({ name, description, image }: Props) {

  return (
    <li className={styles.list}>
      <Box className={styles.boxZero}>
        <Box className={styles.boxOne}>
          <Typography className={styles.typoOne}>{name}</Typography>
          <Typography className={styles.typoTwo}>{description}</Typography>
        </Box>
        <Image className={styles.image} alt={image} src={image}/>
      </Box>
    </li>
  )
}
