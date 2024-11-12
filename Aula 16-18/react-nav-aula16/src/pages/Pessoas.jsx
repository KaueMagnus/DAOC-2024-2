import { data } from "../mock/data";

function Pessoas() {
    return (
        <>
            <h1>Pessoas Cadastradas</h1>
            {data.length > 0 ? (
                <ul>
                    {data.map((pessoa, index) => (
                        <li key={index}>
                            Nome: {pessoa.nome}, Telefone: {pessoa.telefone}, CPF: {pessoa.cpf}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma pessoa cadastrada ainda.</p>
            )}
        </>
    );
}

export default Pessoas;
