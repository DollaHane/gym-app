'use client'
import React from 'react'
import { SelectedPage } from "../componentsGlobal/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./NavBarLink.module.css"

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: ( value: SelectedPage ) => void;
}

export default function NavbarLink({ page, selectedPage, setSelectedPage }: Props): React.JSX.Element {
  
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
  
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? styles.linkOne : styles.linkTwo}`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}
