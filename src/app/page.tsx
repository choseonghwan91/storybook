"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");

  return (
    <main className="flex justify-center h-screen w-screen bg-white">
      <div className="flex flex-col gap-5 mt-10">
        <h1 className="text-black text-3xl font-bold text-center">STORYBOOK</h1>
        <section>
          <h2 className="h-10 flex items-center text-black">버튼 공용 컴포넌트</h2>
          <div className="border-2 border-black p-10">
            <Button label="Button" />
          </div>
        </section>
        <section>
          <h2 className="h-10 flex items-center text-black">인풋 공용 컴포넌트</h2>
          <div className="border-2 border-black p-10">
            <Input
              value={inputText}
              handleReset={() => setInputText("")}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="사용자 인풋 테스트"
            />
            <Input
              value="사용자 입력 텍스트"
              handleReset={() => setInputText("")}
              onChange={(e) => setInputText(e.target.value)}
              label="인풋 레이블"
              placeholder="사용자 인풋 테스트"
            />
            <Input
              value="사용자 입력 텍스트"
              handleReset={() => setInputText("")}
              onChange={(e) => setInputText(e.target.value)}
              label="인풋 레이블"
              placeholder="사용자 인풋 테스트"
              errorMsg="에러 메세지"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
