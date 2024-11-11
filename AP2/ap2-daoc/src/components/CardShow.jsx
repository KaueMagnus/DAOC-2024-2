import React from 'react';
import Card from './Card'; // Importando o Card

function CardShow({ cardsData }) {
  return (
    <div>
      <div style={{ width: "304px", color: "white" }}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card
              srcImage={card.srcImage}
              alt="Foto de perfil"
              style={{ borderRadius: '50%' }}
              nome={card.nome}
              telefone={card.telefone}
              egresso_convidado={card.egresso_convidado === "true" ? "Egresso/Convidado" : "Estudante"}
              pago={card.pago === "true" ? "Confirmado" : "Não confirmado"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardShow;
