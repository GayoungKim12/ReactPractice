import React, { useRef } from "react";
import Cat from "./Cat";

// Cat 안에 있는 img의 사이즈를 알고 싶다!
export default function CatParent() {
  const catRef = useRef();

  console.log("부모 컴포넌트 CatParent");
  console.log(catRef)

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={catRef} />
      </div>
      <button onClick={() => alert(`${catRef.current.width} X ${catRef.current.height}`)}>고양이의 크기를 알고싶어</button>
    </div>
  );
}
