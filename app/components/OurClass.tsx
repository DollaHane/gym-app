import React from 'react'
import { Box, Typography } from '@mui/material'
import styles from "./OurClass.module.css"

type Props = {
  name: string;
  description?: string;
  image: string;
}

export default function OurClass({ name, description, image }: Props) {

  return (
    <li className={styles.list}>
      <Box className="boxOne">
        <Typography className={styles.typoOne}>{name}</Typography>
        <Typography className={styles.typoTwo}>{description}</Typography>
      </Box>
      <img width={100} height={100} alt={image} src={image}/>
    </li>
  )
}
