### Message Queues

##### Message Queues

A Queue server runs independently, and is tasked with routing events and messaging between clients.

  - Any connected client can “publish” a message into the server.
  - Any connected client can “subscribe” to receive messages by type.


A message is a package of information, categorized by queue and event

  - queue - Which general bucket does this message belong
i.e. “Database Events”, “Filesystem Events”, “Network Events”, etc
  - event - What event has happened
i.e. “delete, add, update, connection lost, error”, etc.
  - payload - data associated with the event
i.e. “record id, record information, error text”, etc.


##### procedure...

  - An API server responds to a POST request
    - User’s access rights are confirmed
    - The data is analyzed and normalized
    - The data is sent to the database for saving
    - The database “publishes” a message into the queue
      - Queue: DB
      - Event: CREATE
      - Payload: JSON Object containing the created record
    - The API server sends information back to it’s client as normal