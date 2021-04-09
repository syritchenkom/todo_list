import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [todo, setTodo] = useState('');
	const [searchTodo, setSearchTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [btnText, setBtnText] = useState('Add Todo');
	const [activeIndex, setActiveIndex] = useState(null);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts', {
					params: {
						_limit: 8
					}
			}).then((res) => {
				setTodos(res.data.map(
					(selectedTodo) => {
						selectedTodo.completed = false;
						return selectedTodo;
					})
				);
		});
	},[]);

	return (
			<section className='App'>
				<header>
					<h1>Todo List</h1>
				</header>
				<Form
						todo={todo}
						handleSetTodo={(todoText) => setTodo(todoText)}
						todos={todos}
						setTodos={setTodos}
						btnText={btnText}
						handleSetBtnText={(name) => setBtnText(name)}
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
				/>
				<TodoList
						setActiveTodo={setTodo}
						searchTodo={searchTodo}
						setSearchTodo={setSearchTodo}
						todos={todos}
						setTodos={setTodos}
						setBtnText={setBtnText}
						setActiveId={setActiveIndex}
				/>
			</section>
	);
}

export default App;