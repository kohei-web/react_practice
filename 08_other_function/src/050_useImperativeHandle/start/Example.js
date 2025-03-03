import { useRef, forwardRef, useImperativeHandle } from "react";

/* POINT forwardRef
子コンポーネント内の DOM に直接アクセスしたいときに使います。
refは、親から子コンポーネントへprops形式で渡して参照するということができないため、
参照したい場合は子コンポーネント内でforwardRefを使用する必要があります。
*/
const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    myFocus() {
      inputRef.current.focus();
    }
  }))
  // 第二引数に使用したいオブジェクトを含む関数などを指定する

  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
