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
import './NavBar.css';


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: ( value: SelectedPage ) => void
}

export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props): React.JSX.Element {
  
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "#FFE1E0 drop-shadow";

  return (
    <nav>
      <Box className="boxOne">
        <Box className="boxTwo">
          <Box className="boxThree">

            {/* LEFT SIDE */}
            <Image alt="logo" src={Logo}/>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (

              <Box className="boxFour">

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
                <Box className="boxSix">
                  <Typography>Sign In</Typography>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </Box>

              </Box>

            ) : (

              <button
                className="buttonOne"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="Bars3"/>
              </button>

            )}

          </Box>
        </Box>
      </Box>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <Box className="boxSev">

          {/* CLOSE ICON */}
          <Box className='boxEight'>
            <button 
              className='buttonTwo'
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className='XMarkIcon'/>
            </button>
          </Box>

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

        </Box>
      )}
    </nav>
  )
}
