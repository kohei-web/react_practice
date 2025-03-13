import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  // 返す値はExample関数のresultを上書きすればいいので・・・
  switch (type) {
    case "change":
      // a,bそれぞれのnameが渡ってきた時にその値を返してあげる
      return { ...state, [payload.name]: payload.value }
    case "add":
      return { ...state, result: state.a + state.b }
    case "minus":
      return { ...state, result: state.a - state.b }
    case "divide":
      return { ...state, result: state.a / state.b }
    case "multiply":
      return { ...state, result: state.a * state.b }
      // これら以外の値が渡ってきた時にエラーを発生させる
      default:
        throw new Error('不明なタイプです。')
  }
}

const Example = () => {

  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  // useReducerの第一引数にコールバック関数を第二引数に初期値を入れる
  // 先に関数を定義しておいて変数を渡すタイプのuseState
  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    // select value={state.type} onChange={calculate}で渡ってくるvalue={state.type("add"などの文字列)}渡してあげる
    dispatch({ type: e.target.value })
  };

  const numChangeHandler = (e) => {
    // payloadにnameとvalueを渡す
    dispatch({ type: 'change', payload: { name: e.target.name, value: e.target.value }})
  }

  return (
    <>
    <h3>練習問題</h3>
    <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      {/* aやbの値を他の数値が指定された時に変更してあげる関数を定義してあげるnumChangeHandler */}
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map(calc => {
          return (
            <option key={calc} value={calc}>
              {calc}
            </option>
          )
        })}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
