import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import connectToDb from './config/connect.js';
import authroute from './routes/auth.route.js';
import profileroute from './routes/profile.route.js';
import adminroute from './routes/admin.route.js';
import taskroute from './routes/task.route.js';
// socket import
import { Server } from 'socket.io';
import http from 'http';
const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

io.on('connection', (socket) => {
  socket.on('joinRoom', (employee_id) => {
    socket.join(employee_id);
    console.log(`Employee ${employee_id} joined their room`);
  });
});

dotenv.config();
connectToDb();
const port = process.env.PORT || 7000;
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'hi' });
});
//profile route
app.get('/get-profile', profileroute);
//authentication request
app.use('/api/v1/auth', authroute);

//admin route
app.use('/api/v1/admin', adminroute);
//task route
app.use('/api/v1/tasks', taskroute);
server.listen(port, () => {
  console.log(colors.magenta.italic('listening on port'));
});

export { io };
