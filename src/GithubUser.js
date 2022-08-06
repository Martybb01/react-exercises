import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>An error has occurred</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
