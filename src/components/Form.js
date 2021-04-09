const Form = ({
							 todo,
							 handleSetTodo,
							 todos,
							 setTodos,
							 btnText,
							 handleSetBtnText,
							 activeIndex,
							 setActiveIndex
}) => {
	const handleChange = (event) => {
	//send information about to do
	handleSetTodo(event.target.value);
	}

	const onSubmitForm = (event) => {
		//cancel default value
		event.preventDefault();
		//canceled information about input if he empty
		if(todo === '') return;
		//hear create list!!!
		if(activeIndex === null) {
			setTodos([
				...todos,
				//add properties
				{ title: todo, completed: false, id: Math.random() * 1000},
			]);
			handleSetTodo('');
			//change button name
			handleSetBtnText('Add Next');
			return;
		}
	//hear edit list!!!
		let newTodos = todos.map((currentTodo) => {
			if (currentTodo.id === activeIndex){
				currentTodo.title = todo;
				return currentTodo;
			}
			return currentTodo;
		});
		setTodos([
			...newTodos
		]);
		handleSetTodo('');
		setActiveIndex(null);
		handleSetBtnText('Add Next');
 };

	return(
		<form onSubmit={onSubmitForm}>
			<input
				type="text"
				name={'todo'}
				className="todo-input"
				value={todo}
				onChange={handleChange}
				placeholder='add todo list...'
			/>
			<button
				className="todo-button"
				type="submit"
			>
				{btnText}
			</button>
		</form>
	);
};

export default Form;