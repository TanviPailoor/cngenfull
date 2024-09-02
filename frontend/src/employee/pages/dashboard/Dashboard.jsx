import { useEffect } from 'react';
import io from 'socket.io-client';
import { useState } from 'react';
import axios from 'axios';
const socket = io.connect('http://localhost:8600');
import './dashboard.scss';
const Dashboard = () => {
  const [task, setTask] = useState(null);
  const employee_id = '66a36be65e5953239b6a03e7';
  //reject task
  const accept = async () => {
    const { data } = await axios.post(
      `http://localhost:8600/api/v1/tasks/accept-task?employee_id=${employee_id}&taskId=${task._id}`
    );
  };

  //accept task
  const reject = async () => {
    const { data } = await axios.post(
      'http://localhost:8600/api/v1/admin/task/reject-task'
    );
  };
  //joining the room code
  socket.emit('joinRoom', employee_id);
  useEffect(() => {
    socket.on('taskAssigned', (task) => {
      console.log('New task assigned:', task);
      setTask(task);
      alert('task assigned');
      // Handle the task assignment on the client side
    });
  }, []);
  return (
    <section className="employee_taskscontainer">
      <h1>My Tasks</h1>
      <section className="inner_container">
        <section className="card">
          <h1>{task?.location}</h1>
          <h1>{task?.name}</h1>
          <h1>{task?.amount}</h1>
          <h1>{task?.carwash}</h1>
          <h1>{task?.assignTime}</h1>
          <section className="btn_container">
            <button onClick={accept}>Accept</button>
            <button onClick={reject}>Reject</button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
