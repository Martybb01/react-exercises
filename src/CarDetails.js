import { useRef } from "react";

export function CarDetails({ initialData }) {
  const refModel = useRef(initialData.model);
  const refYear = useRef(initialData.year);
  const refColor = useRef(initialData.color);

  function handleFormSubmit(event) {
    event.preventDefault();
    const model = refModel.current.value;
    const year = refYear.current.value;
    const color = refColor.current.value;

    console.log({ model, year, color });
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Model:</label>
        <input name="model" ref={refModel}></input>
        <label>Year:</label>
        <input name="year" ref={refYear}></input>
        <label>Color:</label>
        <input name="color" ref={refColor}></input>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
