const express = require("express");
const http = require("http"); // Node.js 기본 모듈로, HTTP 서버 기능을 제공
const socketIo = require("socket.io"); // 웹소켓을 쉽게 구현할 수 있게 해주는 라이브러리

const app = express(); // Express 앱 인스턴스 생성
const server = http.createServer(app); // Express 앱을 기반으로 HTTP 서버 생성
// Socket.io를 사용하여 서버를 초기화
const io = socketIo(server, {
  // CORS (Cross-Origin Resource Sharing) 정책 설정
  cors: {
    // 서버 접근 허용
    origin: ["http://localhost:3000", "http://localhost:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// 프록시 서버로부터의 연결을 신뢰하도록 설정
app.set("trust proxy", true);

// 클라이언트가 서버에 연결될 때 실행, 클라이언트의 연결에 대해 콜백 함수를 호출
io.on("connection", (socket) => {
  // 클라이언트의 IP 주소를 가져옴
  const clientIp =
    socket.request.headers["x-forwarded-for"] ||
    socket.request.connection.remoteAddress;
  console.log(`New connection from ${clientIp}`);
  // 클라이언트가 'chat message' 이벤트를 보낼 때 실행
  // 서버는 이 메시지를 받아 클라이언트에게 전송
  socket.on("chat message", (msg) => {
    const messageWithIp = { text: msg, ip: clientIp };
    io.emit("chat message", messageWithIp); // 메시지와 IP 주소 함께 전송
  });
  // 클라이언트의 연결이 끊어질 때 실행
  socket.on("disconnect", () => {
    console.log(`User disconnected ${clientIp}`);
  });
});

// 서버는 환경 변수에 설정된 PORT 또는 8080 포트에서 실행
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
