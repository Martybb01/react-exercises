export function Sum({ numbers = [1, 2, 3, 4, 5] }) {
  return (
    <h1>
      the sum is{" "}
      {numbers.reduce((total, current) => {
        return total + current;
      }, 0)}
    </h1>
  );
}
// if the numbers prop is not set either in the component or in App.js the application will break.
