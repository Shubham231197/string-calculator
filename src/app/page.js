"use client";
import { Button, Col, Form, Input, message, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import BackgroundImg from "../app/background.jpg"
import { ArrowLeftOutlined } from "@ant-design/icons";


export const GetSum = (values) => {
  const regex = /-?\d+(\.\d+)?/g;
  const matches = values.match(regex) || [];
  const obj = {
    positive: [],
    positiveSum: 0,
    negative: [],
  };

  for (let i = 0; i < matches.length; i++) {
    const number = parseFloat(matches[i]);
    if (number >= 0) {
      obj.positive.push(number);
      obj.positiveSum += number;
    } else {
      obj.negative.push(number);
    }
  }

  return obj.negative.length > 0
    ? `Negative numbers not allowed: ${obj.negative.join(", ")}`
    : obj.positiveSum;
};

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const sumResult = GetSum(inputValue);
    setResult(sumResult);
    message.info(sumResult);
  };

  const removeLastCharacter = () => {
    setInputValue(inputValue.slice(0, -1))


  }

  return (
    <Row className="main-container">
      <Image src={BackgroundImg} className="image-Class" />
      <div>
      {result !== null && <div className="result-class" >Result: {result}</div>}
      <div className="calculator-main-container">
        <div className="inner-container">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter numbers (e.g. 1,2,-3,4)"
          />
          <Row justify={"space-around"} className="action-container" >
            <Col> <Button onClick={handleSubmit}>Submit</Button></Col>
            <Col> <Button onClick={() => { { setInputValue(""); setResult(null) } }}>Clear</Button></Col>
            <Col> <Button onClick={() => removeLastCharacter()}><ArrowLeftOutlined /></Button></Col>
          </Row>


        </div>
        </div>
      </div>

    </Row>

  );
}
