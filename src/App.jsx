import axios from "axios";
import { useEffect } from "react";

function App() {
  const APIURL = "https://my-json-server.typicode.com/typicode/demo/posts";

  const fetchData = async () => {
    const response = await axios.get(APIURL)
    console.log(response.data, "Fetch");
  };

  const postData = async () => {
    const response = await axios.post(APIURL, {
      id: 2342324,
      title: "Post 2342324"
    })
    console.log(response.data, "post")
  }

  const updateData = async () => {
    const response = await axios.put(`${APIURL}/2`, {
      title: "title 2"
    })
    console.log(response.data, "update")
  }

  const deleteData = async () => {
    const response = await axios.put(`${APIURL}/1`, {
    })
    console.log(response.data, "delete")
  }

useEffect (() =>{
  fetchData();
  postData();
  updateData();
  deleteData();
},[]);


  return <div></div>;
}

export default App;
