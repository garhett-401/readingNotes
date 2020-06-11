## Class 3 Reading Notes

##### Questions

1. The data modeling concept is driven by how the concept of the application works instead of the opposite. This way, the information that is stored is used more efficiently as it pertains to the business or goals of the application.

2. CRUD (CREATE, READ, UPDATE, DELETE)
  - pretty self explanatory. They handle the actions on the database that MANIPULATE the data thats stored. NOT referencing!

3. Postgres is a relational database that creates seperate relations that can reference and tie into other relations. MongoDB is a single JSON file format that "looks" like relational data but does not seperate out individual tables.

4. Mongoose is a node module that seemlessly integrates with mongoDB by compiling the data from the files that can be stored into Mongo

5. For the lab that we are on. We have content "text", catagory, and ID. These all relate to the same thing but category is the only one that can be listed together with other data entries due to the fact that multiple entries can have the same category. In the case of our lab it is unlikely that the text content will have the same text.

##### Terms

database: A piece of hardware that stores information in an organized fasion that can be called at will.

data model: This refers to how the information is stored. Different databases organize their info differently then others.

CRUD: (CREATE, READ, UPDATE, DELETE)

schema: A template that lays out the groudwork for how the data should be compiled before sending to a database.

sanitize: Describes cleansing and scrubbing user input to prevent it from jumping the fence and exploiting security holes.

SQL: Structured Query Language, its job is to communicate with a database.

Non SQL: The opposite of relational databases. Mongo is one. It provides easier handling of data stored.

MongoDB: A provider of storage data. Mongo is a commercial database provider that charges per usage.

Mongoose: Node module that compiles data easily to be sent to Mongo databases so that it can be read and stored.

record: A row in a table within a relational database essentially. Its an object that contain multiple values.

document: This is essentially the entire JSON object that non relational databases use to store data. Rather the have multiple tables, a single "document" is used to store the data in its entirety.

Object Relation Mapping: ORM is a tool that converts data to the type that the database requires it to be stored in. Kind of like mongoose, it esseintially takes JS language and converts it to ex. SQL to be read and stored. 


#### Works Cited:
https://www.esecurityplanet.com/browser-security/prevent-web-attacks-using-input-sanitization.html#:~:text=Input%20sanitization%20describes%20cleansing%20and,a%20false%20sense%20of%20security.

http://www.sqlcourse.com

https://en.wikipedia.org/wiki/Object-relational_mapping

https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a
