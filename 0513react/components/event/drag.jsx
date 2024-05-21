export function DragDropEvent() {
  const handleDragStart = (e) => {
    console.log('Drag started');
    e.dataTransfer.setData('text/plain', 'This text may be dragged');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log('Dropped item:', e.dataTransfer.getData('text'));
  };

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnter={() => console.log('Drag enter')}
        onDragLeave={() => console.log('Drag leave')}
        onDragOver={(e) => e.preventDefault()}
        style={{ height: '100px', backgroundColor: '#ccc', marginBottom: '10px' }}
      >
        Drag me
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{ height: '100px', backgroundColor: '#aaa' }}
      >
        Drop here
      </div>
    </>
  );
}