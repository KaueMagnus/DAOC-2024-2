import { useEffect, useState } from "react";

export function useFetch(url) {
    
    const [cep, setCep] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        async function buscaCep() {
            setLoading(true);
            setError(null);
            setCep(null);

            try {
                const resposta = await fetch(url);
                if (!resposta.ok) {
                    throw new Error("Requisão não deu certo");
                }
                const cepJson = await resposta.json();
                setCep(cepJson);
            } catch (error) {
                setError("Error: " + error.message);
            } finally {
                setLoading(false);
            }
        }

        buscaCep(); // Chama a função para buscar o CEP
    }, [url]);

    return { cep, loading, error };
}