import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    const style = {
        // 文字列ではなく、数値で表現した場合は自動的にpx指定される
        width: 120,
        height: 60,
        display: "block",
        fontWeight: "bold",
        // ハイフンをつけたプロパティのまま使用したい場合はプロパティを文字列として扱う
        "border-radius": 9999,
        cursor: "pointer",
        border: "none",
        margin: "auto",
        // ボタンがクリックされたときにはuseStateでピンクにする
        background: isSelected ? "pink" : ""
    }
    // インラインスタイルはbuttonタグなどのタグに対して直接cssを当てるようにするもの
    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            {/* 直接オブジェクトを入れてみる */}
            <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
