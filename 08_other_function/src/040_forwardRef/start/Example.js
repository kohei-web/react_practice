import { useRef, forwardRef } from "react";

// forwardRefを使用してforwardRefの引数としてコンポーネントを渡すようにする
const Input = forwardRef((props, ref) => {
  // InputのコンポーネントからExampleコンポーネントで定義されたrefにアクセスする方法
  return <input type="text" ref={ref} />
});

// refをコンポーネント間で受け渡せるがコンポーネント間の依存関係が強くなるのでなるべく使わないようにする
const Example = () => {
  const ref = useRef();
  return (
    <>
      {/* propsで渡す値にrefを使用しないかcomponentRef={ref}みたいに */}
      <Input ref={ref}/>
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
