import { useMemo } from "react";

export function FilteredList() {
  const filterList = useMemo(() => {
    const list = [
      { id: 1, name: "Martina", age: 21 },
      { id: 2, name: "Matilde", age: 25 },
      { id: 3, name: "Ilaria", age: 23 },
      { id: 4, name: "Serena", age: 15 },
    ];
    return list.filter((item) => item.age > 18);
  }, []);
  return (
    <div>
      <ul>
        {filterList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
