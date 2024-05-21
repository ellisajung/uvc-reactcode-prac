import { useQuery, gql } from "@apollo/client";

export const GraphQLExample = () => {
  // [3]
  const GET_COUNTRIES = gql`
    query {
      countries {
        code
        name
        capital
      }
    }
  `;
  console.log("----------------------", GET_COUNTRIES);
  // [4]
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>로딩중</p>;
  if (error) return <p>에러</p>;

  console.log("-------------", data);

  // 데이터가 존재하는지 확인
  if (!data || !data.countries) return <p>데이터를 불러올 수 없습니다.</p>;

  const firstData = data.countries[0];

  return (
    <>
      <p>{firstData.code}</p>
    </>
  );
};
