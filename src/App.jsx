import { useEffect, useState } from "react";
import { Title, AddItem, TaskList } from "./components";

function App() {
  const data = JSON.parse(localStorage.getItem("item"));
  const [items, setItems] = useState(data || []);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
  }, [items]);

  const initialValues = {
    title: "",
    description: "",
    status: false
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues.title && formValues.description) {
      setItems([
        ...items,
        {
          title: formValues.title,
          description: formValues.description,
          status: false,
        },
      ]);
      setFormValues(initialValues);
    } else {
      // Handle form validation error
    }
  };

  const handleCheckboxChange = (itemId) => {
   const updatedValues = items.map((item, idx) => {
       if(itemId === idx){
        return {...item,
          status: !item.status 
        }
       }
       return item
  })
  setItems(updatedValues)
  }

  const handleDelete = (itemId) => {
    setItems(items.filter((item, idx) => idx !== itemId))
  }
  return (
    <main>
      <Title />
      <AddItem
        title={formValues.title}
        description={formValues.description}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TaskList items={items} onChange={handleCheckboxChange} onClick={handleDelete}/>
    </main>
  );
}

export default App;
