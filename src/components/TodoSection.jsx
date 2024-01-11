
import { initialState } from "../initialState"
import TodoItem from "./TodoItem"
function TodoSection() {

    const todo = initialState.todos.filter((todo) => {
        return todo.status === "todo"
    })

    return (
        <div className=' w-1/4 bg-gray-200 h-[90%] rounded-sm overflow-y-auto box-border mx-1'>
            <div className="flex justify-between items-center p-2">
                <h1 className="text-2xl pl-2 text-gray-500 font-semibold">To Do</h1>
                <p className="w-6 rounded-md bg-gray-300 text-center text-gray-500 font-semibold">{todo.length}</p>
            </div>

            {
                todo.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />
                })
            }

        </div>
    )
}

export default TodoSection
