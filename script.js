const clients = [
  {
    name: 'Paulo Moura',
    email:'paulomoura@test.com'
  },
  {
    name: 'Maria Rita',
    email:'mariarita@test.com'
  },
  {
    name: 'Cláudio',
    email:'claudio@test.com'
  },
  {
    name: 'Ana Terra',
    email:'anaterra@test.com'
  },
  {
    name: 'Chico Buarque',
    email:'chicobuarque@test.com'
  }
]

const list = document.getElementById('clients');

function createParagraph(textContent, parent) {
  const paragraph = document.createElement('p');
  const text = document.createTextNode(textContent);
  paragraph.appendChild(text);
  parent.appendChild(paragraph)
}

clients.forEach((client) => {

  const listItem = document.createElement('li');

  createParagraph(client.name, listItem);
  createParagraph(client.email, listItem);

  list.appendChild(listItem);
})

// let content = '';
// clients.forEach((client) => {
//   content += `<li><p>${client.name}</p></li>`
// })

// list.innerHTML = content;


// list.forEach((client) => {
//   console.log(client);
// })

