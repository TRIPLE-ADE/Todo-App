import Input from "./Input"

const AddItem = ({ title, description, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <Input name="title" value={title} onChange={onChange}/>
        <Input name="description" value={description} onChange={onChange}/>
      </div>
      <button>Add</button>
    </form>
  )
}

export default AddItem