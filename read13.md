### JWT

- JWT can quickly transmit verified info very fast.
- It can be included in get and post requests
- can be attached to headers

Structure of JWT token is Header, Payload, Signature

- Bearer Tokens are sent to the user/client after the initial signin process has completed.
- Clients must make every subsequent request to the server with that token, in the header


  function bearerToken( req, res, next ) {
    let token = req.headers.authorization.split(' ').pop();
    try {
      if ( tokenIsValid(token) ) { next(); }
    }
    catch(e) { next("Invalid Token") }
  }