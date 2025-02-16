import { useState } from "react";

const Form = ({createTodo}) => {
    const [enteredTodo, setEnteredTodo] = useState("");
    const addTodo = (e) => {
        e.preventDefault();
        // 子コンポーネントから親コンポーネントへの変更を渡すには親コンポーネントとかで更新用の関数を定義してそこに渡してあげる必要がある
        const newTodo = {
            // idの箇所は適当に乱数を作成する
            id: Math.floor(Math.random() * 90) + 10,
            content: enteredTodo,
        };

        createTodo(newTodo);
        setEnteredTodo(""); // 入力フィールドをリセット
    }
    return (
        // Enterボタンで追加できるようにしてブラウザのデフォルトの更新処理を無効化する
        // submitと追加ボタン両方にaddTodoを入れておくことで両方の動作にも対応する
        <form onSubmit={addTodo}>
            <div>
                {/* e.target.valueで受け取った値を状態として保持するためにenteredTodoに入れて更新処理を行って値を保持する */}
                <input type="text" value={enteredTodo} onChange={(e) => setEnteredTodo(e.target.value)} />
                {/* addTodoにeの値が渡されてない...つまり更新後の値としてのenteredTodoが受け取れてない */}
                <button onClick={addTodo}>
                    追加
                </button>
                {/* コンポーネントが定義されているかどうか確認する */}
                {/* <span>{enteredTodo}</span> */}
            </div>
        </form>
    );
}

export default Form
