import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import "./OurClass.css"

type Props = {
  name: string;
  description?: string;
  image: string;
}

export default function OurClass({ name, description, image }: Props) {

  return (
    <li className='list'>
      <Box className="boxOne">
        <Typography className="typoOne">{name}</Typography>
        <Typography className="typoTwo">{description}</Typography>
      </Box>
      <Image alt={image} src={image}/>
    </li>
  )
}
