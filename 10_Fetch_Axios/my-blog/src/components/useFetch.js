import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  console.log("")

  useEffect(() => {
    async function fetchData() {
      setLoading('Loading...')
      setData(null);
      setError(null);
      const result = await axios.get(url)
      console.log(result)
      return result
    }

    fetchData().then(res => {
      setLoading(false);
      setData(res.body);
    })
    .catch(() => {
      setLoading(false)
      setError('An error occurred. Awkward..')
    })
  },[url])

  return { data, loading, error }
}
