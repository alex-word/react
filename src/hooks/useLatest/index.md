### useLatest 返回最新的 Hooks 可以避免闭包陷阱


```tsx
import React, { useState, useEffect } from "react";
import useLatest from "./index.ts";

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(count2 + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count(useLatest): {count}</p>
      <p>count(defult): {count2}</p>
    </>
  );
};
```
