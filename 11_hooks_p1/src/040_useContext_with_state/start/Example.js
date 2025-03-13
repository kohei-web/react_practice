import { createContext, useState } from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext();

const Example = () => {
  const [ value, setValue ] = useState(0);

  return (
    // Providerで定義された値を最初に探して、なければcreateContext()の値を使用する
    <MyContext.Provider value={[ value, setValue ]}>
      <Child />
      <OtherChild />
    </MyContext.Provider>
  );
};

export default Example;
