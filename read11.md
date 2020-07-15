### Class 11 read notes

A Cryptographic Hash Algorithm takes a piece of data and produces a hash that is deliberately difficult to reverse. If identical data is passed into the algorithm the same hash will always be produced. Hash algorithms are often used for checking the integrity of data.

In a User model, a hash password can be stored when the user signs up. When the user needs to login, they can resend their password and the server can hash the login password using the same hash algorithm. The server can then compare the hashed login password with previously stored hashed password to determine if the user should be authenticated.

A Cryptographic Cypher Algorithm takes a piece of data and a key and produces encrypted data. Later the encrypted data can be reversed into the original data by decrypting it using the same key.


In browsers, we get atob and btoa to convert to/from “Base64 Encoding”

`let encoded = window.btoa('someusername:P@55w0rD!')`
`// c29tZXVzZXJuYW1lOlBANTV3MHJEIQ==`

`let decoded = window.atob('c29tZXVzZXJuYW1lOlBANTV3MHJEIQ==');`
`// someusername:P@55w0rD!`

`request({`
  `method: 'GET',`
  `url: 'https://api.example.com/login',`
  `headers: {`
    `Authorization: ``Basic ${encoded}``,`
  `},`
`})`
`.then(handleLogin)`
`.catch(handleLoginError)`