import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  function handleRefetchUser() {
    mutate();
  }

  return {
    data,
    error,
    loading: !data && !error,
    onRefetch: handleRefetchUser,
  };

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // async function fetchGithubUser(username) {
  //   setLoading(true);
  //   setError(false);
  //   try {
  //     const response = await fetch(`https://api.github.com/users/${username}`);
  //     const json = await response.json();
  //     setData(json);
  //   } catch (error) {
  //     setError(error);
  //     setData(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   fetchGithubUser(username);
  // }, [username]);
  // return {
  //   data,
  //   error,
  //   loading,
  //   onFetchUser: fetchGithubUser,
  // };
}
