'use client'
// REACT & TOOLS Imports
import React from 'react'
import Image from 'next/image';

// MUI & TOOLS Imports
import { Box, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

// COMPONENT Imports
import styles from './ContactUs.module.css'
import { SelectedPage } from "../componentsGlobal/types";
import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import HText from "../componentsGlobal/HText";

type Props = {
  setSelectedPage: ( value: SelectedPage ) => void
}

export default function ContactUs({ setSelectedPage }: Props) {

  const inputStyles = styles.inputStyles

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event: any) => {
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  }

  return (
    <section id="contactus" className={styles.secOne}>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>

        {/* HEADER */}
        <motion.div 
          className={styles.mdOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <Box className={styles.boxThree}>
              <Typography className={styles.typoOne}>JOIN NOW</Typography> TO GET IN SHAPE
            </Box>
          </HText>
          <Typography className={styles.typoTwo}>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </Typography>
        </motion.div>

        {/* FORM & IMAGE */}
        <Box className={styles.boxOne}>
          <motion.div 
            className={styles.mdTwo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >

            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <Typography className={styles.typoThree}>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </Typography>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <Typography className={styles.typoThree}>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </Typography>
              )}

              <textarea
                className={inputStyles}
                placeholder="Have any questions?"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <Typography className={styles.typoThree}>
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </Typography>
              )}

              <button
                type="submit"
                className={styles.button}
              >
                SUBMIT
              </button>
            </form>

          </motion.div>

          <motion.div 
            className={styles.mdTwo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Box className={styles.boxFour}>
              <Image 
                className={styles.image} 
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </Box>
          </motion.div>

        </Box>

      </motion.div>
    </section>
  );
};
