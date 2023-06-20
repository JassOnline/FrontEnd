import { useState } from "react"
import TodoItem from "./TodoItem"

const TodoList = () => {

    const [inputValue, setInputValue] = useState('')

    const [todos, setTodos] = useState([])

    const handleAddItem = () => {
        if(inputValue.trim()){
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }

    const handleDelete = (index) => {
        setTodos(todos.filter((item, i) => i !== index))
    }

  return (
    <div>
        <h1>Lista de Tareas</h1>
        <input type ='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleAddItem}>Agregar</button>
        <ul>
            {todos.map((item, index) => (
                <TodoItem
                    todo={item}
                    handleDelete={() => handleDelete(index)}
                    key={index}
                />
            ) )

            }
        </ul>
    </div>
  )
}

export default TodoList