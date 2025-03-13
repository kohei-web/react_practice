import Child from "./components/Child";
import { createContext } from "react";

// グローバルで保持したい値を渡す
export const MyContext = createContext('hello');

// アプリケーション全体でstateを保持したい→グローバルで値をもつということ
const Example = () => {
  const value = 'hello'
  return <Child />;
};

export default Example;
