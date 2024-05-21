import { useState, useEffect, useRef } from "react";
// io는 socket.io-client 모듈에서 가져온 함수로, 서버와의 웹소켓 연결을 초기화
import io from "socket.io-client";

const socket = io("http://localhost:8080");

export default function Socket() {
  // messages는 채팅 메시지 목록을 상태로 관리
  const [messages, setMessages] = useState([]);
  // input은 사용자 입력을 상태로 관리
  const [input, setInput] = useState("");
  // chatContainerRef는 채팅 컨테이너의 DOM 요소를 참조하기 위해 사용
  const chatContainerRef = useRef(null);

  // useEffect는 컴포넌트가 마운트될 때 실행
  useEffect(() => {
    // 로컬 스토리지에서 저장된 메시지를 불러오고
    // 서버로부터 새 메시지를 받을 때 메시지 목록을 업데이트
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);

    // 서버로부터 'chat message' 이벤트를 받을 때마다 호출
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, msg];
        localStorage.setItem("messages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    });
    // 컴포넌트 언마운트 시 이벤트 리스너를 제거
    return () => socket.off("chat message");
  }, []);

  useEffect(() => {
    scrollToBottom(); // 메시지 상태가 업데이트될 때 스크롤 맨 아래로 이동
  }, [messages]); // 메시지 배열이 변경될 때마다 이 효과 실행

  // 메시지를 입력하고 전송 버튼을 클릭하면 sendMessage 함수가 호출
  // 입력된 메시지를 서버에 전송하고 입력 필드를 초기화
  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit("chat message", input);
      setInput("");
    }
  };

  // reset 함수는 저장된 메시지를 삭제하고 메시지 목록을 초기화
  const reset = () => {
    localStorage.removeItem("messages");
    setMessages([]);
  };

  const scrollToBottom = () => {
    const scrollHeight = chatContainerRef.current.scrollHeight;
    const height = chatContainerRef.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    chatContainerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  return (
    <div className="socket">
      <div
        className="socket-chat"
        ref={chatContainerRef}
      >
        {messages.map((msg, index) => (
          <p key={index}>
            {msg.ip} : {msg.text}
          </p>
        ))}
      </div>
      <div className="socket-form">
        <form onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
          <button onClick={reset}>Reset</button>
        </form>
      </div>
    </div>
  );
}
