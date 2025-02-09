import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
	const [todoList, setTodoList] = useState(
		localStorage.getItem("todos")
			? JSON.parse(localStorage.getItem("todos"))
			: []
	); //get data from local storage
	const inputRef = useRef();

	// add items to todo list
	const add = () => {
		const inputText = inputRef.current.value.trim();

		if (inputText === "") {
			return null;
		}

		// create new todo
		const newTodo = {
			id: Date.now(), // unique id
			text: inputText,
			isComplete: false, // default value
		};

		setTodoList((prev) => [...prev, newTodo]);
		inputRef.current.value = ""; //input field empty
	};

	// delete items from todo list
	const deleteTodo = (id) => {
		//fitler helps to identify id's
		setTodoList((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	const toggleTodo = (id) => {
		setTodoList((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						isComplete: !todo.isComplete,
					};
				}
				return todo;
			});
		});
	};

	useEffect(() => {
		// to store items in local storage
		localStorage.setItem("todos", JSON.stringify(todoList)); //todos is the id, todoList is the value
	}, [todoList]);

	let markAllDone = () => {
		setTodoList((prevTodos) => {
			return prevTodos.map((todo) => {
				return {
					...todo,
					isComplete: true,
				};
			});
		});
	};

	return (
		<div className="bg-white place-self-center w-10/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
			{/* ------ title ------ */}
			<div className="flex items-center mt-7 gap-2">
				<img className="w-8" src={todo_icon} alt="" />
				<h1 className="text-5xl font-semibold items-center">To-Do List</h1>
			</div>

			{/* ------ input box ------ */}
			<div className="flex items-center my-7 bg-slate-200 rounded-full">
				<input
					ref={inputRef}
					className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:Zinc-200
                    "
					type="text"
					placeholder="Add a task..."
				/>
				<button
					onClick={add}
					className="border-none rounded-full bg-lime-600 text-white w-32 h-14 text-lg cursor-pointer">
					ADD +
				</button>
			</div>

			{/* ------ todo list ------ */}
			<div>
				{todoList.map((item, index) => {
					// key for unique value
					return (
						<TodoItems
							key={index}
							Text={item.text}
							id={item.id}
							isComplete={item.isComplete}
							deleteTodo={deleteTodo}
							toggleTodo={toggleTodo}
						/>
					);
				})}
			</div>
			
			{/* ------ mark all done ------ */}
			<div className="flex justify-center mt-3">
				<button
					onClick={markAllDone}
					className="border-none rounded-full bg-emerald-600 text-white w-32 h-10  cursor-pointer">
					Mark all done
				</button>
			</div>
		</div>
	);
};

export default Todo;
