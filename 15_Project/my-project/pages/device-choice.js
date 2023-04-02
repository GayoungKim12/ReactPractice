import React, { useState } from "react";
import { useRouter } from 'next/router'
import Radio from "../src/components/Radio";
import BottomButton from "../src/components/BottomButton";
import RadioGroup from "../src/components/RadioGroup";

export default function deviceChoice() {
  const router = useRouter();
  const [ selectDevice, setSelectDevice ] = useState('')
  
  const goNextPage = () => {
    localStorage.setItem('selected-device', selectDevice)
    router.push('/accessory-choice')
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          아이맥, 맥북 중 원하는 장비를 선택하세요.
        </h3>
      </div>
      <RadioGroup name="device" onChange={state => setSelectDevice(state) }>
        <Radio id="iMac" name="device" value="iMac" label="iMac" />
        <Radio id="macbook" name="device" value="macbook" label="macbook" />
      </RadioGroup>
      <BottomButton onClick={goNextPage}>
        악세서리 선택 화면으로 넘어가기
      </BottomButton>
    </div>
  )
}
