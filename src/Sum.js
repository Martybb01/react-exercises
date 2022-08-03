export function Sum({ numbers }) {
  return (
    <h1>
      the sum is{" "}
      {numbers.reduce((total, current) => {
        return total + current;
      }, 0)}
    </h1>
  );
}
