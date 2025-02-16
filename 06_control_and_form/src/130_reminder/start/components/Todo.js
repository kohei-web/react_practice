import { useState } from "react"
import List from "./List.js"
import Form from "./Form.js"

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  // listの状態自体はここで管理している
  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    // 引数のidと渡ってきたtodoListのidが同じであればリストから削除する処理を入れる
    const newTodos = todos.filter((todo) => {
      // 削除するリスト以外のリストを返す
      return todo.id !== id;
    })

    // 返した値をuseStateに渡す
    setTodos(newTodos);
  }

  // todoList追加更新用の関数
  const createTodo = (todo) => {
    // useStateのtodosの値の最後尾に引数のtodoの値を追加する処理を記述する
    // .appendなどは元々の配列に直接追加する処理であって、新しい配列のインスタンスを作成し、そこに追加するようにしないと上手く状態が更新されない
    setTodos([...todos, todo]);
  }


  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form createTodo={createTodo} />
    </>
  )
};

export default Todo;
