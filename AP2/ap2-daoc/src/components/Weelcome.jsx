import Button from "./Button";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Weeelcome({ name }) {
    const [cepEvento, setCepEvento] = useState(["88970000"]); 


    const { cep } = useFetch(`https://viacep.com.br/ws/${cepEvento}/json/`); 

    function handleButton() {

        const novoCep = "88965000"; 
        setCepEvento(novoCep); 
    }

    return ( 
        <>  
            {cep && (       
                <>
                    <h2 style={{fontFamily:"sans-serif", fontSize:"32px", marginLeft:"40px"}}>Seja bem vindo, {name}</h2>

                    <div style={{marginLeft: "50px", marginBottom:"10px"}}>
                        <Button click={handleButton} nome="Localização" colorButton="#65ABFD" />
                        <div style={{display:"flex", marginLeft:"-50px"}}>
                            <ul style={{ listStyle: "none", fontWeight:"700" }}>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>CEP: {cep.cep}</li>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>ESTADO: {cep.estado}</li>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>HORÁRIO: </li>
                            </ul>
                            <ul style={{ listStyle: "none", fontWeight:"700" }}>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>CIDADE: {cep.localidade}</li>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>REGIÃO: {cep.regiao}</li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Weeelcome;