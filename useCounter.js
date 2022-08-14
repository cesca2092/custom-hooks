import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const handleAdd = ( value = 1) => {
        setCounter((current) => current + value);
    }

    const handleSubstract = (value = 1) => {
        if(counter < value) return;
        setCounter( (current) => current - value);
    }

    const handleReset = () => {
        setCounter(initialValue);
    }

  return {
    counter,
    handleAdd,
    handleSubstract,
    handleReset
  }
}
