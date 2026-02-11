export default function DeleteBtn({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-outline-danger px-3">
      <i className="bi bi-trash3"></i>
    </button>
  );
}
