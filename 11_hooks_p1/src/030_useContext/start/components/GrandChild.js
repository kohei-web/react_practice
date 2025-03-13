import { useContext } from "react";
// グローバル設定したuseContextに渡した関数だけだと動かずuseContextを使用したいファイルでもimportする必要がある
import { MyContext } from "../Example";

const GrandChild = () => {
  const value = useContext(MyContext);
  return (
      <div style={{ border: "1px solid black" }}>
        <h3>孫コンポーネント</h3>
        {value}
      </div>
  );
};
export default GrandChild;
