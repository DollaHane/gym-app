'use client'
// REACT / NEXT Imports
import React, { useState } from 'react'
import Link from "./NavbarLink";
import Image from 'next/image'

// MUI / HERO Imports
import { Box, Typography } from "@mui/material"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// MISC Imports
import { SelectedPage } from "../componentsGlobal/types";
import useMediaQuery from "../hooks/useMediaQuery";
import ActionButton from "../componentsGlobal/ActionButton";
import Logo from "../assets/Logo.png";
import styles from "./NavBar.module.css"


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: ( value: SelectedPage ) => void
}

export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props): React.JSX.Element {
  
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <Box className={styles.boxOne}>
        <Box className={styles.boxTwo}>
          <Box className={styles.boxThree}>

            {/* LEFT SIDE */}
            <Image alt="logo" src={Logo}/>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (

              <Box className={styles.boxThree}>

                {/* NAVIGATION */}
                <Box className="boxFive">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </Box>

                {/* SIGN IN */}
                <Box className={styles.boxSix}>
                  <Typography>Sign In</Typography>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </Box>

              </Box>

            ) : (

              <button
                className={styles.buttonOne}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className={styles.Bars3}/>
              </button>

            )}

          </Box>
        </Box>
      </Box>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <Box className={styles.boxSev}>

          {/* CLOSE ICON */}
          <Box className={styles.boxEight}>
            <button 
              className={styles.buttonTwo}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className={styles.XMarkIcon}/>
            </button>
          </Box>

          {/* NAVIGATION */}
          <Box className={styles.boxFive}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </Box>

        </Box>
      )}
    </nav>
  )
}
