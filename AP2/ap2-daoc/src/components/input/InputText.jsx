function InputText({ label, placeholder, name }) {
  return (
    <div>
      <label style={{ fontFamily: "sans-serif", fontSize: "20px" }}>{label}</label>
      <br />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        style={{
          padding: "5px",
          backgroundColor: "#FFFFFF",
          width: "384px",
          height: "54px",
          borderRadius: "10px",
          borderStyle: "none",
          paddingLeft: "15px",
          margin: "8px 0 20px 0"
        }}
      />
    </div>
  );
}

export default InputText;
