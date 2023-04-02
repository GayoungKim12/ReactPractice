import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";

const submitButtonStyle = {
  position: "fixed",
  bottom: 50,
  left: "50%",
  padding: 5,
  width: 375,
  border: "1px solid black",
  borderRadius: 10,
  fontSize: 16,
  background: "white",
  color: "black",
  transform: "translateX(-50%)",
}

export default function complete() {
  const router = useRouter();
  const [ choice, setChoice ] = useState({
    user: "사원",
    device: "",
    accessory: "",
  });

  useEffect(() => {
    const user = localStorage.getItem('user')
    const device = localStorage.getItem('selected-device');
    const accessory = localStorage.getItem('selected-accessory');

    setChoice({ user, device, accessory });
  }, [])

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          {choice.user}님이 선택하신 장비는 {choice.device}, 악세서리는 {choice.accessory}입니다.
        </h3>
        <p>맞으시다면 제출하기 버튼, 다시 선택 하시려면 첫 화면으로 돌아가기 버튼을 클릭해주세요.</p>
      </div>
      <button style={submitButtonStyle}>제출하기</button>
      <BottomButton onClick={() => router.push('/start')}>
        첫 화면으로 돌아가기
      </BottomButton>
    </div>
  )
}
