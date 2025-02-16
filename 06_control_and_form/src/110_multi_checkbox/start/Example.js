import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  // handleChangeの処理を定義
  const handleChange = (e) => {
    const newFruits = fruits.map(fruit => {
      // spread演算子を使用して
      const newFruit = { ...fruit };
      // input要素のvalueの値を取得するのでinput valueに設定されているのがfruit.labelなため
      if(newFruit.label === e.target.value) {
        // checkedにはfalseが入っているのでこれをTrueに変更する
        newFruit.checked = !fruit.checked
      }

      return newFruit;
    })

    setFruits(newFruits);

    let sumVal = 0;
    newFruits.forEach(fruit => {
      if(fruit.checked) {
        sumVal += fruit.value;
      }
    })

    setSum(sumVal);
  }

  return (
    <div>
      {fruits.map(fruit => {
        return (
          <div key={fruit.label}>
            {/* input要素をlabelで囲んでないのでidを指定する必要がある */}
            <input
              id={fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
