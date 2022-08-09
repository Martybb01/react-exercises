import { useCallback, useEffect, useState } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }, []);

  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

  function onCounterChange(value) {
    console.log(`The counter is: ${value}`);
  }

  useEffect(() => {
    onCounterChange(counter);
  }, [counter]);

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}
