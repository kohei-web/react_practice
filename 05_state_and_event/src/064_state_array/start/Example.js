import { useState } from 'react';

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  // 配列の中身を変更する
  const [nums, setNums] = useState(numArray);

  const shuffle = () => {
    // 配列も変更する場合もスプレッド演算子で新しい配列にしないと動かない
    const newNums = [ ...nums ];
    // pop()は配列の末尾を削除
    const value = newNums.pop();
    // unshiftは削除した項目を最初に持ってくる
    newNums.unshift(value);
    setNums(newNums);
  }

  return (
    <>
      <h1>{nums}</h1>
      <button  onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
