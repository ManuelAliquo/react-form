export default function Form({
  newItem,
  handleSubmit,
  handleChange,
  label,
  placeholder,
  btnAction,
}) {
  return (
    <form onSubmit={handleSubmit} className="fs-2">
      <label htmlFor="new-article" className="mb-1">
        {label}
      </label>
      <div className="input-group mb-3">
        <input
          value={newItem}
          onChange={handleChange}
          type="text"
          placeholder={placeholder}
          className="form-control fs-4"
          id="new-article"
        />
        <button className="btn btn-primary fs-4">{btnAction}</button>
      </div>
    </form>
  );
}
