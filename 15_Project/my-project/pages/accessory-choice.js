import React, { useState } from "react";
import { useRouter } from 'next/router';
import Radio from "../src/components/Radio";
import BottomButton from "../src/components/BottomButton";
import RadioGroup from "../src/components/RadioGroup";

export default function accessoryChoice() {
  const router = useRouter();
  const [ selectAccessory, setSelectAccessory ] = useState('')

  const goNextPage = () => {
    localStorage.setItem('selected-accessory', selectAccessory)
    router.push('/complete')
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          모니터, 키보드 중 원하는 악세서리를 선택하세요.
        </h3>
      </div>
      <RadioGroup name="accessory" onChange={state => setSelectAccessory(state)}>
        <Radio id="mornitor" name="accessory" value="mornitor" label="mornitor" />
        <Radio id="keyboard" name="accessory" value="keyboard" label="keyboard" />
      </RadioGroup>
      <BottomButton onClick={goNextPage}>
        완료 화면으로 넘어가기
      </BottomButton>
    </div>
  )
}
