'use client'
import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
import styles from "./ActionButton.module.css"

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ActionButton({ children, setSelectedPage }: Props) {

  return (
    <AnchorLink
      className={styles.anchor}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}
