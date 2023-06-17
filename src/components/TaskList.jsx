import { FaTimesCircle } from "react-icons/fa";

const TaskList = ({ items, onChange, onClick }) => {
  return (
    <section className={items.length !== 0 ? 'task-container' : '' }>
      <ul className="task-list">
        {items.map((item, index) => (
          <li key={index} className="task-list-item">
            <input
              type="checkbox"
              name="status"
              checked={item.status}
              onChange={() => onChange(index)}
            />
            <div>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
            <FaTimesCircle onClick={() => onClick(index)}/>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
