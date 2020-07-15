### TCP Servers

This topic is kind of hard to conceptualize. Use these resources for help

[What is TCP](https://searchnetworking.techtarget.com/definition/TCP)
[Build a TCP Server (code only)](https://techbrij.com/node-js-tcp-server-client-promisify)

Video

[OSI Model Explained](https://www.youtube.com/watch?v=vv4y_uOneC0)

##### OSI Model

Programmers and engineers have been able to network computers since the early 1970s. As the needs of networked computers evolved, there where many solutions developed to connect two ore more computers together and share information between them. Over time, several different conceptual models have also been developed to help describe the different networking solutions. In the mid 1980s the “Open Systems Interconnection Reference Model” (OSI model) was developed as a seven layer model. This seven layer OSI model has continued to accurately describe the different processes in computer networking, and is still widely used as a point of reference while working in networked systems today. A developer or engineer is usually responsible for the goals of a specific layer and communicating with the layer above and below. Not every computer network solution uses all seven layers, for example HTTP skips the Presentation and Session layers and lives directly on top of the Transport layer.

##### TCP

The Transmission Control Protocol (TCP) is widely used by application layer protocols in the Internet Protocol Suite. TCP creates a two way communication between two hosts and provides reliable, ordered, and error checked byte streams between the applications. TCP data transfers manage network congestion and use flow control to limit the rate a sender transfers data to guarantee reliable delivery. Each IP packet between the hosts carries a single TCP Segment. A TCP segment is made up of header and data sections.