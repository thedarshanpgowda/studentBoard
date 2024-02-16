import React from "react";
import Chart from "./Chart";
import styles from "./Form.module.css";

export default function Form() {
  return (
    <Chart className={styles.primaryBlock}>
      <Chart className={styles.primaryContainer}>
        <Chart className={styles.inputBlock}>
          <textarea
            type="text"
            className={styles.message}
            placeholder="Message"
          />
        </Chart>
        <Chart className={styles.inputBlock}>
          <input type="text" placeholder="Branch" className="" />
        </Chart>
        <Chart className={styles.inputBlock}>
          <input type="text" placeholder="Lecturer Name" className="" />
        </Chart>
        <Chart className={styles.blockCheckbox}>
          <input
            type="checkbox"
            name="hide"
            id="hide"
            className={styles.checkbox}
          />
          <label htmlFor="hide" className={styles.checkboxMessage}>
            Hide to details to lecturer
          </label>
        </Chart>
        <input type="submit" value="Submit" className={styles.button} />
      </Chart>
    </Chart>
  );
}
