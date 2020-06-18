## HTTP and REST


| HTTP    | Method	| Request Has Body |	Response Has Body |	Safe	| Idempotent	|        Cacheable	Function           |
|:--------|:-------:|:----------------:|:------------------:|:-----:|:-----------:|-------------------------------------:|
| GET	    | No	    |      Yes	       |       Yes	        | Yes	  |     Yes	    | Retrieve a resource                  |
| HEAD    | No	    | No	             | Yes	              |  Yes	| Yes	        | Like GET but headers only            |
| POST    | Yes	    | Yes	             | No	                | No	  | Yes	        | Create a resource                    |
| PUT	    | Yes	    | Yes	             | No	                |  Yes	| No	        | Update a resource                    |
| DELETE	| No	    | Yes	             | No	                | Yes	  | No	        | Delete a resource                    |
| CONNECT	| Yes	    | Yes	             | No	                | No	  | No	        | Create TCP/IP tunnel                 |
| OPTIONS	| Optional| Yes	             | Yes	              | Yes	  | No	        | Returns supported methods for a URL  |
| TRACE	  | No	    | Yes	             | Yes	              |  Yes	| No	        | Echos retrieved request              |
| PATCH	  | Yes	    | Yes	             | No	                | No	  |  No	        | Partial modification of resource     |


#### REST ###### is acronym for REpresentational State Transfer. In layman’s terms, is a means by which we can reference, manipulate, and transfer state. Rest uses a common set of methods (called “verbs”) to operate on the state of a resource (“noun”), generally using HTTP as the transfer protocol.

Example:
RESTful Endpoint: http://api.server.com/api/v1/people
> http:// - Protocol/Scheme
> api.server.com - Domain or Server
> /api/v1 - API Endpoint
> /people - The resource (This identifies a collection: all people)
> /people/12345 - A more specific resource: The person with id 12345


REST Method	CRUD Operation	Function
GET	READ	Retrieve 1 or More Records
POST	CREATE	Create a new record
PUT	UPDATE	Update a record through replacement (Put it back)
PATCH	UPDATE	Update a record (just the parts that changed)
DESTROY	DELETE	Remove a record