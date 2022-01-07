import { useEffect, useState } from 'react';
import './App.css';
// 接口
interface TodoListHeaderProps {
  title: string;
}
interface TodoListDispalyProps {
  todoItems: Array<TodoItem>;
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}
interface TodoListAdderProps {
  todoItems: Array<TodoItem>;
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}
interface TodoItem {
  finished: boolean;
  todo: string;
  favorite: boolean;
}
// todolist头部
const TodoListHeader: React.FC<TodoListHeaderProps> = ({ title }) => (
  <div className="todolist-header">
    <span>{title}</span>
    <div className="button-area">
      <button type="button">add</button>
      <button type="button">...</button>
    </div>
  </div>
);
// todolist的展示区
const TodoListDispaly: React.FC<TodoListDispalyProps> = ({
  setTodoItems,
  todoItems,
}) => (
  <div className="todos-container">
    <div>
      {todoItems
        .filter(e => !e.finished)
        .map((e, i) => (
          <div className="todo-container white-bg" key={i}>
            <div
              onClick={() => {
                e.finished = !e.finished;
                setTodoItems(todoItems.slice());
                localStorage.setItem('todo-items', JSON.stringify(todoItems));
              }}
              className="finished-ponit unfinished"></div>
            <div className="todo-text">{e.todo}</div>
            {!e.favorite ? (
              <svg
                onClick={() => {
                  e.favorite = !e.favorite;
                  setTodoItems(todoItems.slice());
                  localStorage.setItem('todo-items', JSON.stringify(todoItems));
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2116"
                width="200"
                height="200">
                <path
                  d="M512 720.416l232.096 171.904a19.2 19.2 0 0 0 16.864 2.88c9.536-2.88 14.592-12.224 11.84-20.864l-88.96-281.6 237.344-176.96a16.48 16.48 0 0 0 6.816-13.152c0-9.152-7.904-16.928-18.112-16.96l-292-0.448-88.48-277.12a17.568 17.568 0 0 0-11.776-11.264c-9.856-2.976-20.16 2.304-23.04 11.264l-88.48 277.12-292 0.48a18.624 18.624 0 0 0-14.624 6.944 16.096 16.096 0 0 0 3.328 23.136l237.376 176.96-88.992 281.6a15.904 15.904 0 0 0 2.72 14.688c6.048 7.744 17.856 9.312 25.984 3.296L512 720.416z m-194.016 223.36a83.008 83.008 0 0 1-114.56-15.424 79.904 79.904 0 0 1-13.28-73.28l75.296-238.24-200.864-149.76a80.096 80.096 0 0 1-15.424-113.92 82.624 82.624 0 0 1 64.864-31.456l245.312-0.384 74.304-232.672c13.6-42.56 59.52-66.112 102.56-53.024A81.536 81.536 0 0 1 590.4 88.64l74.304 232.64 245.312 0.416c45.184 0.064 82.08 36.16 82.016 81.024a80.48 80.48 0 0 1-32.576 64.352l-200.864 149.76 75.296 238.24c13.568 42.976-11.072 88.352-54.496 101.408a83.2 83.2 0 0 1-73.344-12.736L512 800.064l-194.016 143.68z"
                  p-id="2117"></path>
              </svg>
            ) : (
              <svg
                onClick={() => {
                  e.favorite = !e.favorite;
                  setTodoItems(todoItems.slice());
                  localStorage.setItem('todo-items', JSON.stringify(todoItems));
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2248"
                width="200"
                height="200">
                <path
                  d="M519.2 807.2l255.2 133.6c12 6.4 25.6-4 23.2-16.8L748.8 640c-0.8-4.8 0.8-10.4 4.8-14.4L960 424.8c9.6-9.6 4-25.6-8.8-27.2l-284.8-41.6c-5.6-0.8-9.6-4-12-8.8l-128-257.6c-5.6-12-23.2-12-28.8 0L370.4 348c-2.4 4.8-7.2 8-12 8.8L73.6 398.4c-13.6 1.6-18.4 17.6-8.8 27.2l206.4 200.8c4 4 5.6 8.8 4.8 14.4l-48.8 284c-2.4 12.8 11.2 23.2 23.2 16.8L505.6 808c4-3.2 8.8-3.2 13.6-0.8z"
                  p-id="2249"></path>
              </svg>
            )}
          </div>
        ))}
    </div>
    <div className="label">已完成</div>
    <div>
      {todoItems
        .filter(e => e.finished)
        .map((e, i) => (
          <div className="todo-container white-bg" key={i}>
            <div
              onClick={() => {
                e.finished = !e.finished;
                setTodoItems(todoItems.slice());
                localStorage.setItem('todo-items', JSON.stringify(todoItems));
              }}
              className="finished-ponit finished">
              ✔
            </div>
            <div className="todo-text finished">{e.todo}</div>
            {!e.favorite ? (
              <svg
                onClick={() => {
                  e.favorite = !e.favorite;
                  setTodoItems(todoItems.slice());
                  localStorage.setItem('todo-items', JSON.stringify(todoItems));
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2116"
                width="200"
                height="200">
                <path
                  d="M512 720.416l232.096 171.904a19.2 19.2 0 0 0 16.864 2.88c9.536-2.88 14.592-12.224 11.84-20.864l-88.96-281.6 237.344-176.96a16.48 16.48 0 0 0 6.816-13.152c0-9.152-7.904-16.928-18.112-16.96l-292-0.448-88.48-277.12a17.568 17.568 0 0 0-11.776-11.264c-9.856-2.976-20.16 2.304-23.04 11.264l-88.48 277.12-292 0.48a18.624 18.624 0 0 0-14.624 6.944 16.096 16.096 0 0 0 3.328 23.136l237.376 176.96-88.992 281.6a15.904 15.904 0 0 0 2.72 14.688c6.048 7.744 17.856 9.312 25.984 3.296L512 720.416z m-194.016 223.36a83.008 83.008 0 0 1-114.56-15.424 79.904 79.904 0 0 1-13.28-73.28l75.296-238.24-200.864-149.76a80.096 80.096 0 0 1-15.424-113.92 82.624 82.624 0 0 1 64.864-31.456l245.312-0.384 74.304-232.672c13.6-42.56 59.52-66.112 102.56-53.024A81.536 81.536 0 0 1 590.4 88.64l74.304 232.64 245.312 0.416c45.184 0.064 82.08 36.16 82.016 81.024a80.48 80.48 0 0 1-32.576 64.352l-200.864 149.76 75.296 238.24c13.568 42.976-11.072 88.352-54.496 101.408a83.2 83.2 0 0 1-73.344-12.736L512 800.064l-194.016 143.68z"
                  p-id="2117"></path>
              </svg>
            ) : (
              <svg
                onClick={() => {
                  e.favorite = !e.favorite;
                  setTodoItems(todoItems.slice());
                  localStorage.setItem('todo-items', JSON.stringify(todoItems));
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2248"
                width="200"
                height="200">
                <path
                  d="M519.2 807.2l255.2 133.6c12 6.4 25.6-4 23.2-16.8L748.8 640c-0.8-4.8 0.8-10.4 4.8-14.4L960 424.8c9.6-9.6 4-25.6-8.8-27.2l-284.8-41.6c-5.6-0.8-9.6-4-12-8.8l-128-257.6c-5.6-12-23.2-12-28.8 0L370.4 348c-2.4 4.8-7.2 8-12 8.8L73.6 398.4c-13.6 1.6-18.4 17.6-8.8 27.2l206.4 200.8c4 4 5.6 8.8 4.8 14.4l-48.8 284c-2.4 12.8 11.2 23.2 23.2 16.8L505.6 808c4-3.2 8.8-3.2 13.6-0.8z"
                  p-id="2249"></path>
              </svg>
            )}
          </div>
        ))}
    </div>
  </div>
);
// todolist的添加区
const TodoListAdder: React.FC<TodoListAdderProps> = ({
  todoItems,
  setTodoItems,
}) => {
  const [todo, setTodo] = useState<string>('');
  const handleInput: React.KeyboardEventHandler = e => {
    // 回车键特殊处理
    if (e.key === 'Enter') {
      // todo 加新的item
      setTodoItems(
        todoItems.concat({ finished: false, favorite: false, todo }),
      );
      setTodo('');
      return;
    } else if (e.key === 'Backspace' && todo.length > 0) {
      // 其他的特殊键
      setTodo(todo.slice(0, todo.length - 1));
      return;
    }
    // 字符就直接加入
    setTodo(todo + e.key);
  };
  return (
    <div className="todo-container flex-bottom">
      <div className="add-point"></div>
      <input
        type="text"
        onKeyDown={handleInput}
        value={todo}
        placeholder="添加任务"
      />
    </div>
  );
};

const App: React.FC = () => {
  const [todoItems, setTodoItems] = useState<Array<TodoItem>>([]);
  useEffect(() => {
    const dataString: string = localStorage.getItem('todo-items');
    if (dataString) {
      setTodoItems(JSON.parse(dataString));
    }
    return () => {
      // todo
    };
  }, []);
  return (
    <div id="app">
      <TodoListHeader title="123" />
      <TodoListDispaly todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoListAdder todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
};

export default App;
