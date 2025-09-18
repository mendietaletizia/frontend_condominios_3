function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "8px",
        marginBottom: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        width: "100%",
      }}
    />
  );
}

export default Input;
