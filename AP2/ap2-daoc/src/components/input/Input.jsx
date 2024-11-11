import InputText from "./InputText";

function Input({ addCard }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dados = {
      nome: formData.get("nome") || '',
      telefone: formData.get("telefone") || '',
      egresso_convidado: formData.get("egresso_convidado") || '',
      pago: formData.get("pago") || '',
      srcImage: formData.get("image") || ''
    };

    // Verificação de preenchimento dos campos obrigatórios
    if (!dados.nome || !dados.telefone || !dados.egresso_convidado || !dados.pago || !dados.srcImage) {
      console.log("Dados capturados:", dados); // Debug: Mostra os dados capturados no console
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    clearForms(e.target);
    addCard(dados);
  };

  function clearForms(form) {
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ backgroundColor: "#D9D9D9", width: "550px", height: "650px", borderRadius: "20px", padding: "50px 0 50px 100px" }}>
        <legend style={{ backgroundColor: "#65ABFD", color: "black", borderRadius: "20px", padding: "8px", width: "200px", textAlign: "center", fontSize: "16px", fontFamily: "sans-serif" }}>Preencha seus dados</legend>

        <InputText label={"Nome"} placeholder={"Digite seu nome"} name="nome" />
        <br />

        <InputText label={"Telefone"} placeholder={"Digite seu telefone"} name="telefone" />

        <div style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          <p>Você é egresso ou convidado?</p>
          <input type="radio" id="egresso-sim" name="egresso_convidado" value="true" required />
          <label htmlFor="egresso-sim">Sim</label>
          <input type="radio" id="egresso-nao" name="egresso_convidado" value="false" required />
          <label htmlFor="egresso-nao">Não</label>
        </div>

        <div style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          <p>Pago</p>
          <input type="radio" id="pago-sim" name="pago" value="true" required />
          <label htmlFor="pago-sim">Sim</label>
          <input type="radio" id="pago-nao" name="pago" value="false" required />
          <label htmlFor="pago-nao">Não</label>
        </div>

        <br />
        <br />
        <label style={{ fontFamily: "sans-serif", fontSize: "20px" }}>Foto</label>
        <br />
        <input
          type="text"
          id="srcImage"
          name="image"
          placeholder="URL da imagem"
          style={{ padding: "5px", backgroundColor: "#FFFFFF", width: "384px", height: "54px", borderRadius: "10px", borderStyle: "none", paddingLeft: "15px", margin: "8px 0 20px 0" }}
        />
        <br />
        <button style={{
          backgroundColor: "#65ABFD", width: "300px",
          height: "60px",
          borderRadius: "20px",
          borderStyle: "none",
          marginTop: "20px",
          fontFamily: "sans-serif",
          fontSize: "19px",
        }} type="submit">Cadastrar</button>
      </fieldset>
    </form>
  );
}

export default Input;
