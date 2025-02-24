import { useState } from "react";
import styled from "styled-components";

// styledコンポーネントの中身の確認
console.log(styled);

// タグ付きテンプレートでテンプレートリテラル内に定義された処理を実行する関数として定義できる
const StyledButton = styled.button`
  /* cssの記法をそのままコピーして使用できるので非常に便利 */
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  /* 継承：継承したい内容を他のスタイルに渡す 分割代入を使用してするとこんな感じになる */
  background: ${({ isSelected }) => isSelected ? "pink" : ""};

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

// 同じスタイルでbackgroundだけ別のスタイルを適応したい場合
// 継承したいプロパティを()の中に記述
const OrangeButton = styled(StyledButton)`
  background-color: orange;

  /* hoverアクションをつけたい場合 */
  :hover {
    color: red;
    opacity: 0.7;
  }

  span {
    font-size: 2em;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* propsを渡すことができる。
      受け取ったpropsを処理するためにstyled内にpropsを受け取るためのjsxの処理を記述する必要がある */}
      <StyledButton isSelected={isSelected} onClick={clickHandler}>ボタン</StyledButton>
      <OrangeButton isSelected={isSelected} onClick={clickHandler}><span>ボタン</span></OrangeButton>
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
