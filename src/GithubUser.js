import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubuser";

export function GithubUser() {
  const { username } = useParams();
  const { data, loading, error } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>An error has occurred</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
