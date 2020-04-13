import React from "react"

import styles from "./MainCover.module.css"

const MainCover = ({ children }) => {
  return <header className={styles.MainCover}>{children}</header>
}

export default MainCover
