import React from "react"
import Title from "../HomeComponents/Title/Title"
import styles from "./contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/mateusz.poprawa@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="Enter your e-mail address"
            />
          </div>
          <div>
            <textarea
              type="textarea"
              name="message"
              id="message"
              rows="8"
              className={styles.formControl}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <input type="submit" value="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
