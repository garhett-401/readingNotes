## Class 09 Reading Notes

Express lets you run middleware only when certain parameters are present and expected, eliminating that choice.

Example of calling middle ware using a parameter (:city)
`router.get('/places/:city', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
})`

Mongoose is a schema driven ORM, which gives us the opportunity to provide structure to our Mongo documents. By default, Mongo (all NoSQL Databases, really) are not structured by default. Mongoose takes some of that pain away from us as developers and allows us to provide some level of rules and validation around our data models.

With the addition of “Sub Documents”, Mongoose gives you the ability to take that a step further and use a schema to describe a deeper part of a data model. This can be useful when a document contains potentially a list of other documents. For example, an online store likely has a collection of products. They probably also have a list of customers, each of which has placed orders which contain one or more products. When modeling the users collection, it would be nice to add orders as an array, and within the orders, and array of items … if you’ve previously modeled an item, you can re-use that schema within the orders section of a customer to keep the shape of that data the same.

===================================================

Note: Simply sharing a schema as a sub-document doesn’t bring in or connect the data, it simply uses the schema/rules. It’ll be up to you to manage the actual data.

===================================================

###### populate() 
is a method we can use in Mongoose to connect 2 collections
Method 1: physically joining using a reference to another collection
Method 2: Virtual Population
Create a virtual field in a document pointed to a field in another one.
In pre('find') you do a collection “on the fly” which can be more efficient than storing the relation.
Pre and Post hooks (middleware)
Mongoose allows you to inject logic at various points in the lifecycle of a data record.
User can perform validation, normalization

###### Virtual Joins
In this example, we create a virtual field in teams called players by connecting them with named fields, and then doing a populate as we find/load documents. This “join” happens in real time, as the records are being processed by Mongoose and can be quite slow, although convenient.

###### Direct Population (References)
Create a reference column in the collection and then when you save, you need to push() into the reference field with the _id of the referenced document. This results in quicker find() but requires a lot more management on saves, updates, deletes.