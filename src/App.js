import React from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList.js";
import { useRef, useState } from "react";

// const dummyList = [
//   {
//     id: 1,
//     author: "이 정 환",
//     content: "하이 1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "홍길동",
//     content: "하이 ",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "가가가",
//     content: "하이 1",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const detaId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      id: detaId.current,
      created_date,
      emotion,
    };
    detaId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log("${targetId}가 삭제되었습니다");
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
