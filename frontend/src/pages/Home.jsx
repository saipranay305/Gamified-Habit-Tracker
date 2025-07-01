import React, { useEffect, useState } from "react";
import api from "../utils/axios";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/")
      .then(res => {
        setMessage(res.data);
      })
      .catch(err => {
        console.error(err);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">Backend Message:</h1>
      <p className="mt-4">{message}</p>
    </div>
  );
};

export default Home;
