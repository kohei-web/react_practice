import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          // .map((animal) => {
          //   if(animal === "Dog") {
          //     return <li key={animal}>{animal}★</li>
          //   } else {
          //     return <li key={animal}>{animal}</li>
          //   }
          // })

          // 三項演算子を使用した場合
          .map((animal) => {
            return <li key={animal}>{
              animal === "Dog" ? animal + "★" : animal
            }</li>
          })
        }
      </ul>
    </>
  );
};

export default Example;
