export function TouchEvent() {
  return (
    <div className="event"
      onTouchStart={() => console.log('Touch start')}
      onTouchMove={() => console.log('Touch move')}
      onTouchEnd={() => console.log('Touch end')}
      style={{ width: '200px', height: '100px' }}
    >
      Touch here
    </div>
  );
}