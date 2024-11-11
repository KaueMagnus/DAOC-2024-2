function Header({title}) {
    return (
        <>
            <div style={{backgroundColor: "#65ABFD", display: "flex", width: "100%", heigth: "127px"}}>
                <h1 style={{margin: "auto auto", fontFamily:"sans-serif", fontWeight:"700",alignItems:"center" }}>{title}</h1>
            </div>
        </>
    )
}
export default Header