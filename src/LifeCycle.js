import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount");

    // unmount는 콜백함수에서 함수를 리턴시키면 됌 // 리턴시키는 함수가 unmount
    return () => {
      console.log("Unmount");
    };
  }, []);
  return <div>Unmout Testing Component</div>;
};
const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON?OFF</button>
      {isVisible && <UnmountTest />}
      {/* 뒤가 true면 뒤반환, 앞이 false면 아무것도 x */}
    </div>
  );
};

export default LifeCycle;
