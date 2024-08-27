import React from 'react'
import Check_Icon from '../assets/check.svg'
import Uncheck_Icon from '../assets/uncheck.svg'
import Delete_Icon from '../assets/delete.svg'

export const Todoitem = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-3 p-2 bg-white shadow-sm rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
      <div
        onClick={() => toggle(id)}
        className="flex items-center cursor-pointer flex-1"
      >
        <img
          className="w-6 h-6 md:w-7 md:h-7"
          src={isComplete ? Check_Icon : Uncheck_Icon}
          alt={isComplete ? 'Checked' : 'Unchecked'}
        />
        <p
          className={`ml-4 text-sm md:text-base ${
            isComplete ? 'line-through text-gray-600' : 'text-gray-700'
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        className="w-5 h-5 cursor-pointer transition-transform transform hover:scale-110"
        src={Delete_Icon}
        alt="Delete"
      />
    </div>
  )
}
