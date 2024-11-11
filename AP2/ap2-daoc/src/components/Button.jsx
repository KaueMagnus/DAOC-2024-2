function Button({ nome, colorButton , click}) {
    return (
      <button 
        style={{
          backgroundColor: colorButton,
          width: "300px",
          height: "60px",
          borderRadius: "20px",
          borderStyle: "none",
          marginTop: "20px",
          fontFamily: "sans-serif",
          fontSize: "19px",
        }}
        onClick={click}
        >
        {nome}
      </button>
    );
  }
  
  export default Button;