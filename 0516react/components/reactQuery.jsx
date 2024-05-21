import { useQuery } from "react-query";
import axios from "axios";

export function ReactQueryExample() {
  const { data, error, isLoading } = useQuery("fetchData", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div>
      <p>react query</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
