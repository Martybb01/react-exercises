import { useGithubUser } from "./useGithubuser";

export function GithubUser({ username }) {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  return (
    <div onChange={onFetchUser}>
      {loading && <h1>Loading...</h1>}
      {error && <h1>An error has occurred</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
