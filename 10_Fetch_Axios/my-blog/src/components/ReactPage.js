import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function ReactPage() {
  // const [ docs, setDocs ] = useState([])
  const [ number, setNumber ] = useState(0)

  // useEffect(() => {
  //   /* async function fetchData() {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const result = await res.json()
  //     setDocs(result)
  //   }

  //   fetchData() */

  //   async function axiosData() {
  //     const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //     console.log(result.data)
  //     return result.data
  //   }

  //   axiosData().then((result) => {
  //     setDocs(result)
  //   })
  // }, [])

  async function fetcher(url) {
    const result = await axios.get(url)
    return result.data
  }

  const { data: docs, error } = useSWR('posts', () => fetcher("https://jsonplaceholder.typicode.com/posts"))

  if(error) return <div>Failed to load</div>
  if(!docs) return <div>Loading...</div>

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      {docs.map((doc) => (
        <Link 
          to={`${doc.id}`} 
          key={doc.id}
          style={{display: "block", margin: "1rem 0" }}
        >
          {doc.title}
        </Link>
      ))}
    </div>
  )
}