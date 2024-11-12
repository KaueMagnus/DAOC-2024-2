import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../mock/data"; 

function ContatoPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        cpf: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        data.push(formData);

        setFormData({
            nome: "",
            telefone: "",
            cpf: ""
        });
    };

    return (
        <>
            <h1>ContatoPage</h1>
            <button onClick={() => navigate("/home")}>Home</button>

            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Telefone:
                    <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} />
                </label>
                <br />
                <label>
                    CPF:
                    <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Adicionar Pessoa</button>
            </form>
        </>
    );
}

export default ContatoPage;
