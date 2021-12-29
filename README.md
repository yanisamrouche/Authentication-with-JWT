# Authentication-with-JWT
NodeJS authentication with JWT
- JWT : JSON Web Token is a standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object, JWTs can be signed using a secret key. <br/> 
<br>

# Structure of a JWT
- Header (type : jwt, Signing algorithm: SHA512) <br>
- Payload : provide information about a user <br>
- Signature
<br>

# JWT Use Cases
- Authorization : once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. <br>
- Information Exchange : JWT are a good way of securely transmitting information between parties.

# Test in POSTMAN
- POST : http://localhost:3000/api/login (and get the token) <br>
- POST : http://localhost:3000/api/posts