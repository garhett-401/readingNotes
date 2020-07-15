### Socket.io

##### Socket.io

It is a library which enables real-time and full duplex communication between the Client and the Web servers. It uses the WebSocket protocol to provide the interface. Generally, it is divided into two parts, each of which use WebSockets, but also provide additional functionality such as broadcasting, namespacing, and other means of segmenting connected clients into groups.

  - Client Side: it is the library that runs inside the browser
  - Server Side: It is the library for Node.js

##### Connections

With TCP, you connect directly to a server with a keep-alive type of connection.

With Socket.io, you connect to a server over HTTP. The session is “kept alive” through it’s internal use of the WebSocket Protocol, with session information being preserved.

##### Messaging

Standard node events are sent with emit() and received with on() … Socket.io uses the same methodology/terminology.

In an event driven node app, the entire app is in memory, and (through a common event pool), all parts of your application can emit and hear events, communicating with each other. However, no outside application can participate in these events natively.

With Socket.io, the entire purpose is to have events shared between ‘disconnected’ participants. Through a mediator (server), clients connect, emit events, and respond to events from the server. A typical flow works like this:

  - Client Applications 1, 2, 3, x … connect to a running Socket.io server
    - Clients can join the common pool of connections or coalesce into groups/subgroups, if the server has been setup in this manner
  - Client Application 1 emits an event called ‘speak’ to the server, with the data ‘Hello World’
  - Server has an on('speak', (data) => {}) which “hears” that event
  - Upon processing the event, the server may elect to
    - broadcast() the event itself or emit() an event of it’s own.
      - i.e. socket.emit('heard', data) or socket.emit('speak',data)

    - Messages can be sent to individual clients, groups, or sub-groups of clients
  - Other client applications that have connected into the server may have a listener on that event type, can then “hear” it as well…
    - i.e. socket.on('incoming-message', text => console.log(text)
  - Not every client will have a listener for every event.
  - The server may not have a listener for every event a client sends.