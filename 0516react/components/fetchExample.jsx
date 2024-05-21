import { useState, useEffect } from "react";

export function FetchExample() {
  const [data, setData] = useState(null);

  // 1번
  // Promise와 .then()/.catch() 사용
  // Promise 체인: 이 방식에서는 Promise가 반환된 후, .then() 메소드를 체인으로 연결하여 각 단계의 비동기 처리 결과를 순차적으로 처리합니다.
  // 조건 검사와 예외 처리: response.ok를 검사하여 응답의 유효성을 확인하고, 유효하지 않을 경우 .then() 체인 중간에 에러를 던져 .catch()에서 잡습니다.
  // 에러 핸들링: .catch()를 사용하여 Promise 체인 중 발생할 수 있는 모든 예외를 잡고 처리합니다.

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행되게 합니다.

  // 2번
  // async/await와 try/catch 사용
  // async/await 사용: async 함수를 정의하고, await를 사용하여 비동기 작업의 완료를 기다립니다. 이 방식은 코드를 동기적으로 작성하는 것처럼 만들어 가독성을 높입니다.
  // 통합된 에러 처리: try/catch 블록을 사용하여 비동기 작업 중 발생할 수 있는 에러를 한 곳에서 처리합니다. await를 사용한 줄에서 예외가 발생하면 catch 블록으로 이동하여 에러를 처리합니다.
  // 간결성: async/await를 사용하면 중간의 결과 처리 로직을 분리하지 않고, 연속적인 코드 흐름으로 비동기 로직을 표현할 수 있습니다.
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error("Fetching data failed:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return <p>{JSON.stringify(data, null, 2)}</p>;
}
