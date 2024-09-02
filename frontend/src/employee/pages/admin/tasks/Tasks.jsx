import { useEffect, useState } from 'react';
import axios from 'axios';
import './tasks.scss';
import { TaskCard } from '../../../components';
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const { data } = await axios.get(
        'http://localhost:8600/api/v1/tasks/get-tasks'
      );

      console.log(data);
      if (data.success) {
        setTasks(data.tasks);
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(tasks);
  return (
    <section className="tasks_container">
      <h1>Tasks</h1>
      <section className="bottom">
        {/* {tasks?.map((item, ind) => (
          <TaskCard key={ind} {...item} />
        ))} */}
        {tasks.map((item, ind) => (
          <section className="task_card">
            <h3>{item?._id}</h3>
            <h3>{item?.location}</h3>
            <h3>{item?.phone}</h3>
            <h3>{item?.date}</h3>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Tasks;
// "66cc10ebd59703bfa2f12f93"
