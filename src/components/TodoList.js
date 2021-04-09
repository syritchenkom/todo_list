import Todo from "./Todo";

const TodoList = ({
										setActiveTodo,
										searchTodo,
										setSearchTodo,
										todos,
										setTodos,
										setBtnText,
										setActiveId
}) => {
	const searchChange = (event) => {
		setSearchTodo(event.target.value);
	}
 
 	return(
		<div className="todo-container">
			<input
				type='text'
				className='todo-search'
				placeholder='Search...'
				checked={searchTodo}
				onChange={searchChange}
			/>
		 <ul className="todo-list">
			{ todos.filter((item) => {
					if (searchTodo === ''){
						return item;
					}else{
						return item.title.toLowerCase().includes(searchTodo.toLowerCase());
					}
				}).map((currentValue, index) => (
					<Todo
						index={index}
						key={currentValue.id}
						activeTodo={currentValue}
						setActiveTodo={setActiveTodo}
						todos={todos}
						setTodos={setTodos}
						setBtnText={setBtnText}
						setActiveId={setActiveId}
					/>
				))
			}
		 </ul>
		</div>
	);
};

export default TodoList;