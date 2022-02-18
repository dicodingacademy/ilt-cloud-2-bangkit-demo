# ILT Cloud 2 Bangkit Demo

## Simple RESTFul API

Create the simple RESTFul API using Node.js Natively and Hapi Framework with the specification:

| Method | Path          | Response Code | Body | Description         |
| ------ |---------------| ------------- | ---- |---------------------|
| POST   | /contacts     | 201 | JSON | Create new contacts |
| GET    | /contacts     | 200 | JSON | List of contacts    |
| DELETE | /contacts/:id | 200 | JSON | Delete contacts     |

User data structure:

```json
{
  "id": "1",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```
Server options:
 - `port`: 3000
 - `host`: localhost


