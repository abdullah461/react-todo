import { useState } from "react"

export function EditTodo({editTodo, title}){
    const [newitem, setNewItem]= useState("")
    
    function handleSubmit(e) {
        e.preventDefault();
        editTodo(newitem, title)
    }
  
    return(
        <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newitem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
          />
        </div>
        <button>Update</button>
      </form>
    );
}