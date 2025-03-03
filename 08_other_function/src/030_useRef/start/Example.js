import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef()

  console.log(inputRef);
  // 値の取得更新を行いたいときはuseRefのcurrentにアクセスする

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={()=> inputRef.current.focus()} >
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  // 動画の再生中かどうかをplayingで定義する
  const [ playing, setPlaying ] = useState(false);
  const videoRef = useRef();

  return (
    <div>
      <video style={{ maxWidth: "100%"}} ref={videoRef}>
        {/* reactのは現状はsrcフォルダの中身をいじっているが実際のところはpublicフォルダのindex.htmlで動いているのでmpファイルまでのパスはindex.htmlからのパスで指定する */}
        <source src="./sample.mp4"></source>
      </video>
      <button onClick={() => {
        // onClickが発火されたタイミングで動画の再生・停止を行う
        if(playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        // クリックされた時にplayingの状態をTrue↔︎Flaseを変更する
        setPlaying(prev => !prev)
      }}>
        {/* playがTrueのときつまり再生中の時の文字の表示 */}
        { playing ? "Stop" : "Play"}

        {/* useRefとは再レンダリングを発生させずに値を保持する方法のこと */}

      </button>
    </div>
  )
}

const Example = () => {
  return (
    <>
      {/* useRefを使用してDOMに直接命令を与えることができる */}
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
