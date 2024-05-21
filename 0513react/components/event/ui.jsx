import { useRef, useEffect } from 'react'

export function UIEvent() {
  const scrollContainerRef = useRef(null);  // useRef를 사용해 DOM 요소에 대한 참조 생성

  useEffect(() => {
    // scrollContainerRef.current가 DOM 요소를 가리키게 됩니다.
    const scrollContainer = scrollContainerRef.current;
    
    const handleScroll = () => {
      console.log('브라우저 스크롤!');
    };

    // 스크롤 이벤트 리스너를 추가
    scrollContainer.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트되거나, 의존성이 변경될 때 이벤트 리스너를 제거
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);  // 의존성 배열이 비어있으므로 컴포넌트 마운트 시에만 실행

  return (
    <div className='event-scroll' ref={scrollContainerRef}>
      <div className='scroll'>Scroll or resize the window</div>
    </div>
  );
}