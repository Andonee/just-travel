import React from "react"
import styles from "./Baner.module.css"

const Baner = ({ title, content, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{content}</p>
      {children}
    </div>
  )
}

export default Baner
