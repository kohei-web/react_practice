import { useState } from "react";

// const Example = () => {
//   const [ count, setCount ] = useState(0);
//   return (
//     <>
//       <CountResult title="カウント" count={count} />
//       <CountUpdate setCount={setCount} />
//     </>
//   );
// };
// const CountResult = ({ title, count }) => <h3>{title}: {count}</h3>

const Example = () => {
  const [ count, setCount ] = useState(0);
  const countUp = () => {
    setCount(prev => prev + 1)
  };
  const countDown = () => {
    setCount(prev => prev - 1)
  };
  return (
    <>
      {count}
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
