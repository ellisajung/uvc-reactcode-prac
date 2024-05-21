export const Modal = ({ setShowModal, info }) => {
  return (
    <div className="modal">
      <p>{info.name} 의 {info.text} 입니다.</p>
      <button onClick={() => setShowModal(false)}>닫기</button>
    </div>
  )
}