const Todo = ({
								activeTodo,
								setActiveTodo,
								todos,
								setTodos,
								setBtnText,
								setActiveId
}) => {
	const removeTodo = () => {
  const newTodo = todos.filter((element) => element.id !== activeTodo.id);
  setTodos(newTodo);
 };
	const editTodo = () => {
		setActiveTodo(activeTodo.title);
		setBtnText('Update Todo');
		setActiveId(activeTodo.id);
	};
	const markTodoDone = () => {
		setTodos(
			todos.map((currentValue) => {
				if (currentValue.id === activeTodo.id){
					return{
						...currentValue, completed: !currentValue.completed
					};
				}
				return currentValue;
			})
		);
	};
 return (
	<div className="todo">
		<li className='todo-item'>
		<input
				type='checkbox'
				checked={activeTodo.completed}
				onChange={markTodoDone}
		/>
		<span
				className={`todo-item ${activeTodo.completed ? 'completed' : ''}`}
				onClick={markTodoDone}
			>{activeTodo.title}</span>
		</li>
		<button
				className='complete-btn'
				onClick={editTodo}
				disabled={activeTodo.completed}
		>Edit</button>

		<button
				className='trash-btn'
				onClick={removeTodo}
		>
			<i className='fas fa-trash' />
		</button>
	</div>
 );
};

export default Todo;