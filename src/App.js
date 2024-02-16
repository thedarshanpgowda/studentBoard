import "./App.css";
import Form from "./components/Form";
import styles from "./components/Form.module.css";
import Chart from "./components/Chart";
import Secondary from "./components/Secondary";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState([]);

  const newa = [
    { question: "Unable to focus on studies", answer: "Just shut and focus" },
    { question: "Unable to focus on studies", answer: "Just shut and focus" },
    { question: "Unable to focus on studies", answer: "Just shut and focus" },
  ];
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Chart className="nameBlock">Darshan SP | 4MC21CS041</Chart>
      <Chart className={styles.mainBlock}>
        <Form />
        <hr />
        <Secondary state={newa} /> 
        {/* change this to state */}
      </Chart>
    </>
  );
}

export default App;
