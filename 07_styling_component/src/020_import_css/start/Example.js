import { useState } from "react";

import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  // const style = {
  //   margin: "auto",
  //   "border-radius": "9999px",
  //   border: "none",
  //   display: "block",
  //   width: 120,
  //   height: 60,
  //   fontWeight: "bold",
  //   cursor: "pointer",
  //   backgroundColor: isSelected ? "pink" : "",
  // };

  return (
    <>
      {/* iselectedがTrueの時にselectedクラスを付与 */}
      {/* <button className={isSelected ? "btn selected" : "btn"} onClick={clickHandler}> */}
      {/* テンプレートリテラルを使用すると(文字列の中に変数を入れる処理) */}
      {/* btnは重複してるのでまとめて付与できるように前方に付与しておく */}
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
