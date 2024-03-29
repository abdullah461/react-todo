import { useState } from "react"

export function TodoForm({addTodo}){
    const [newitem, setNewItem]= useState("")
    
    function handleSubmit(e) {
        e.preventDefault();

        addTodo(newitem)

        setNewItem("");

    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newitem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button>Add</button>
      </form>
    );
}