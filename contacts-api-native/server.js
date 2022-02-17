const http = require('http');
const contacts = require("./contacts");

(async () => {
  const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    const { url } = request;

    if (url === '/contacts') {
      const { method } = request

      if (method === 'POST') {
        let body = '';

        request.on('data', (chunk) => {
          body += chunk.toString();
        });

        request.on('end', () => {
          const { name, email, phone  } = JSON.parse(body);
          const id = contacts[contacts.length - 1].id + 1;
          contacts.push({ id, name, email, phone });

          response.statusCode = 201;
          return response.end(JSON.stringify({ message: 'Contact added successfully' }));
        });
      }

      if (method === 'GET') {
        return response.end(JSON.stringify(contacts));
      }
    }

    if (url.startsWith('/contacts/')) {
      const { method } = request;

      if (method === 'DELETE') {
        const id = request.url.split('/')[2];
        const user = contacts.find(user => user.id === parseInt(id));

        if (user) {
          const index = contacts.indexOf(user);
          contacts.splice(index, 1);

          response.statusCode = 200;
          return response.end(JSON.stringify({ message: 'Contact deleted successfully' }));
        }

        response.statusCode = 404;
        return response.end(JSON.stringify({ message: 'Contact not found' }));
      }
    }
  });

  server.listen(3000, 'localhost', () => {
    console.log('Server running on http://localhost:3000');
  });
})();
