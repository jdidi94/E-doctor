require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const db = require("./database/index");
const PORT = process.env.PORT || 3000;
const patientRouter = require("./routers/patient.router.js");
const doctorRouter = require("./routers/doctor.router.js");
const reviewRouter = require("./routers/review.router");
const roomRouter = require("./routers/room.router");
const appointmentRouter = require("./routers/appointementRouter.js");
const AdminDocRouter = require("./routers/admin.doc.router.js");
const AdminPatientRouter = require("./routers/admin.patient.router.js");
const messageRouter = require("./routers/message.Router");

app.use(cors());

app.use(express.json());
app.use("/api/doctor/", doctorRouter);
app.use("/api/patient/", patientRouter);
app.use("/api/review", reviewRouter);
app.use("/api/room", roomRouter);
app.use("/api/appointment/", appointmentRouter);
app.use("/api/AdminDoc/", AdminDocRouter);
app.use("/api/AdminPatient/", AdminPatientRouter);
app.use("/api/message/", messageRouter);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    // methods: ["GET", "POST", "PUT"],
  },
});

// http.listen(PORT, () => console.log(`listening on ${PORT}`))

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  //sends the message to all the users on the server
  socket.on("message", (data) => {
    console.log("this is from back", data);
    io.emit("messageResponse", data);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});
server.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
