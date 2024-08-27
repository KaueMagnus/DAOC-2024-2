function navigate(page) {
  document.querySelectorAll('main > section').forEach(section => {
    section.classList.add('disable');
  });
  document.getElementById(page).classList.remove('disable')
}

function submitForm() {
  const contato = {
    nome : document.getElementById('nome').value,
    email : document.getElementById('email').value,
    phone : document.getElementById('phone').value
  };
  exibirContato(contato);
}

function exibirContato(contato) {
  const tabela = `
    <table>
      <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Telefone</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>${contato.nome}</td>
          <td>${contato.email}</td>
          <td>${contato.phone}</td>
        </tr>
      </tbody>
    </table>
  `

  document.getElementById('tabelaContato').innerHTML = tabela;
}

const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('#menu ul');
  
menuToggle.addEventListener('click', () => {
     menu.classList.toggle('disable');
  });

