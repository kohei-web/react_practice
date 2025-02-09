
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // for文を使用した場合
  // const animalList = [];
  // for(const animal of animals) {
  //   animalList.push(<li key={animal}>{animal}</li>);
  // }
  // mapを使用した場合
  // const helloAnimals = animals.map((animal) => <li key={animal}>Hello, {animal}</li>)
  return (
    <>
      <h3>配列の操作</h3>
      {/* <ul>
        <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li>
      </ul> */}
      {/* {animalList} */}
      {/* {helloAnimals} */}
      {animals.map((animal) => <li key={animal}>Hello, {animal}</li>)}
    </>
  );
};

export default Example;
