import DeleteBtn from "./DeleteBtn";

export default function List({ array, handleDelete }) {
  return (
    <ul className="list-group fs-3 w-50">
      {array.map((element, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between">
          <span>{element}</span>
          <DeleteBtn onClick={() => handleDelete(index)} />
        </li>
      ))}
    </ul>
  );
}
