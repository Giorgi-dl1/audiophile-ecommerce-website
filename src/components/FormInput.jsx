export default function FormInput({
  name,
  error,
  value,
  handleChange,
  holder,
  label,
  fullWidth,
}) {
  return (
    <div
      style={fullWidth ? { maxWidth: "100%" } : {}}
      className={error ? "form-input input-error" : "form-input"}
    >
      {error && <div className="input-error-message">{error}</div>}

      <label htmlFor="name">{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={holder}
      />
    </div>
  );
}
