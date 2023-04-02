import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ReactDocPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [ content, setContent ] = useState({});

  useEffect(() => {
    async function getContent() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.docId}`)
      const result = await res.json()
      setContent(result)
    }

    getContent()
  },[])

  return (
    <>
      <h5 onClick={() => navigate("/")}>logo</h5>
      <div>ReactDocPage ##{params.docId}</div>
      <h3>{content.title}</h3>
      <p>{content.body}</p>
    </>
  )
}