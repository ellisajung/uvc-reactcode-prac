import axios from "axios";
import { useState, useEffect } from "react";

export function AxiosExample() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
      console.log("1 : ", response);
      console.log("2 : ", response.data);
      console.log("3 : ", response.data[3].email);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>{JSON.stringify(data, null, 2)}</p>
    </>
  );
}
