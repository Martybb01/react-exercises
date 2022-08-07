import { useState } from "react";

export function useLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  return {
    data: data,
    onInputChange: handleInputChange,
  };
}
