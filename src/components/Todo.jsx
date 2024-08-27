import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todolist.svg'
import { Todoitem } from './Todoitem'

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  )

  const inputRef = useRef()

  const add = () => {
    const inputText = inputRef.current.value.trim()
    if (inputText === '') {
      return
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }

    setTodoList((prev) => [...prev, newTodo])
    inputRef.current.value = ''
  }

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    )
  }

  const markAllDone = () => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, isComplete: true }))
    )
  }

  const deleteAll = () => {
    setTodoList([])
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      add()
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className="bg-gray-200 bg-opacity-80 text-black border-2 border-zinc-800 rounded-lg place-self-center w-full max-w-md md:max-w-lg flex flex-col p-5 md:p-7 min-h-[550px] shadow-lg">
      {/* title */}
      <div className="flex justify-center mt-4 md:mt-5 mb-6 md:mb-8 gap-3 md:gap-4">
        <img className="w-6 md:w-7" src={todo_icon} alt="todo_icon" />
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
          To-Do List
        </h1>
      </div>

      {/* input box */}
      <div className="flex flex-col md:flex-row items-center gap-4 my-4 md:my-7">
        <input
          ref={inputRef}
          className="bg-transparent border-2 border-black rounded-md outline-none flex-1 h-12 md:h-14 pl-4 md:pl-5 pr-2 placeholder:text-slate-700"
          type="text"
          placeholder="What You Want To Do Today?"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={add}
          className="w-full md:w-32 h-12 md:h-14 text-white-900 cursor-pointer font-medium rounded-md mt-3 md:mt-0"
          style={{
            background:
              'linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)',
            backgroundSize: '200% auto',
            transition: 'background-position 0.5s, color 0.5s',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = 'right center'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = 'left center'
            e.currentTarget.style.color = '#ffffff'
          }}
        >
          ADD TASK
        </button>
      </div>

      {/* todo list */}
      <div className="flex-1 overflow-y-auto">
        {todoList.map((item, index) => (
          <Todoitem
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>

      {/* action buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 md:mt-8">
        <button
          onClick={markAllDone}
          className="w-full md:w-40 h-12 md:h-14 text-white-900 cursor-pointer font-medium rounded-md"
          style={{
            background:
              'linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)',
            backgroundSize: '200% auto',
            transition: 'background-position 0.5s, color 0.5s',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = 'right center'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = 'left center'
            e.currentTarget.style.color = '#ffffff'
          }}
        >
          Mark All Done
        </button>
        <button
          onClick={deleteAll}
          className="w-full md:w-40 h-12 md:h-14 text-white-900 cursor-pointer font-medium rounded-md"
          style={{
            background:
              'linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)',
            backgroundSize: '200% auto',
            transition: 'background-position 0.5s, color 0.5s',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = 'right center'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = 'left center'
            e.currentTarget.style.color = '#ffffff'
          }}
        >
          Delete All
        </button>
      </div>
    </div>
  )
}

export default Todo
