import React, { useState, Suspense, lazy } from "react";
import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import { getPosts, getUser, updateNickname } from "../mocks/api"

const Post = React.lazy(() => import("./Post"))

// api를 통해 닉네임값 가져오기
// handleSubmit을 통해 닉네임 업데이트
export default function Edit() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();

  // const { data: user } = useQuery('@getUser', getUser, {
  //   staleTime: Infinity,
  // })
  // const { data: posts } = useQuery('@getPosts', getPosts, {
  //   staleTime: Infinity,
  // })
  const results = useQueries([
    { 
      queryKey: ["@getUser"], 
      queryFn: getUser, 
      staleTime: Infinity,
    },
    { 
      queryKey: ["@getPosts"], 
      queryFn: getPosts, 
      staleTime: Infinity,
    }
  ]);

  const user = results[0].data
  const posts = results[1].data

  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries("@getUser");
    }
  })

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue)
  };

  // if(isLoading) return <span>Loading...</span>

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {user?.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <ul>
        <Suspense fallback={<span>Loading</span>}>
          {posts?.map((post, idx) => <Post key={idx} title={post.title} />)}
        </Suspense>
      </ul>
    </>
  );
}
