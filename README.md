Created for a demo purpose

1. What is REST API?
   REST stands for REpresnatation State Transfer
   API stands for Application Programming Interface
   We use this mechanism to contact between two computers and transfer information
2. Flexible
   It's not a specification, rather some suggested rules and depends on the creator.
   For example:

   1. https://api.example.com/products
   2. https://example.com/api/products
   3. https://api.example.com/v1/products
   4. https://api.example.com/v1/getAllProducts
      As we can see that all the above 4 API URI will return products, but the way they are structured are different and depends on the creator. ReST API doesn't depends on URI structure as there are no specification. API creator can still use any of the above 4 structure and handle on server.

   It's suggested to use NOUN i.e. products rather then VERB getAllProducts.

3. What are C.R.U.D?
   POST ====request====> Create
   GET ====request===> Read
   PUT ===request===> Update
   DELETE ===request==> Delete

   Here POST,GET,PUT and DELETE are verb

4. Status code
   A status code tells the requester about there request.
   Requester can do the next dependent things on previous API calls like when a user is registered, and server responded with 200 status code, then fire email this user.

   All the status codes are grouped or we can say level
   200 ====> Success
   "200": "OK",
     "201": "Created",
     "202": "Accepted",
     "203": "Non-Authoritative Information",
     "204": "No Content",

   400 ====> Something not correct at requester end, like required information not passed, or format is not correct.

   "400": "Bad Request",
     "401": "Unauthorized",
     "402": "Payment Required",
     "403": "Forbidden",
     "404": "Not Found",
     "405": "Method Not Allowed",
     "406": "Not Acceptable",
     "407": "Proxy Authentication Required",
     "408": "Request Timeout",
     "429": "Too Many Requests",
     "431": "Request Header Fields Too Large",
     "451": "Unavailable For Legal Reasons",

   500 ====> Something went wrong at server level, like server went down or timeout happened
   "500": "Internal Server Error",
     "501": "Not Implemented",
     "502": "Bad Gateway",
     "503": "Service Unavailable",
     "504": "Gateway Timeout",
     "505": "HTTP Version Not Supported",
     "508": "Loop Detected",
     "510": "Not Extended",
     "511": "Network Authentication Required"

   We can have our own status code and there definition.

5. API should be well documented.
6. It should be stateless
7. Always write test cases <-- will do soon on the demo as well.
