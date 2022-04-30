import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "Produce",
  })

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value
    setFormData((previousState)=> ({...previousState, [key]: value, id: uuid()}))
  }
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(e.target)
    onItemFormSubmit(formData)
    setFormData({
      id: "",
      name: "",
      category: "Produce",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
