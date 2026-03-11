# Catalog Service
A simple Node.js microservice demo application demonstrating Apache Kafka producer and consumer communication for event-driven architecture

# Node Kafka Demo

A simple **Node.js microservice demo application** that demonstrates how to integrate **Apache Kafka** for asynchronous communication using an **event-driven architecture**.

This project shows how services can act as **Kafka producers and consumers**, enabling scalable and loosely coupled microservices.

---

## 📌 Overview

Modern microservice architectures rely heavily on **event-driven communication**.
This project demonstrates how to use **Kafka with Node.js** to publish and consume messages between services.

The demo includes:

* A **Producer Service** that sends messages to a Kafka topic
* A **Consumer Service** that listens and processes those messages

---

## 🏗 Architecture

Producer → Kafka Topic → Consumer

1. The **Producer** sends events/messages to a Kafka topic.
2. **Kafka** acts as a distributed event streaming platform.
3. The **Consumer** listens to the topic and processes incoming messages.

---

## 🚀 Features

* Node.js Kafka Producer
* Node.js Kafka Consumer
* Event-driven microservice communication
* Kafka topic messaging
* Simple and beginner-friendly structure
* Easy to extend for real microservices

---

## 🛠 Tech Stack

* Node.js
* Apache Kafka
* JavaScript
* Docker (optional)

---

## 📂 Project Structure

```
catalog-service
│
├── dist/                     # Compiled JavaScript output (after TypeScript build)
├── node_modules/             # Project dependencies
│
├── src/
│   ├── api/
│   │   └── catalog.route.ts      # Express routes for catalog APIs
│   │
│   ├── interface/
│   │   └── catalog.interface.ts  # TypeScript interfaces for catalog data
│   │
│   ├── models/
│   │   └── product.model.ts      # Product data model/schema
│   │
│   ├── repository/
│   │   └── catalog.repository.ts # Database access layer
│   │
│   ├── services/
│   │   └── catalog.service.ts    # Business logic for catalog operations
│   │
│   └── server.ts                 # Application entry point
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Prerequisites

Before running the project make sure you have:

* Node.js installed
* Apache Kafka running
* Zookeeper running

---

## ▶️ Running Kafka with Docker (Optional)

You can start Kafka quickly using Docker:

```bash
docker run -p 2181:2181 zookeeper
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=host.docker.internal:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

---

## ▶️ Install Dependencies

```
npm install
```

---

## ▶️ Run Producer

```
node producer/producer.js
```

---

## ▶️ Run Consumer

```
node consumer/consumer.js
```

The consumer will start listening for messages sent by the producer.

---

## 📚 Learning Purpose

This project is designed for developers who want to:

* Learn **Kafka basics**
* Understand **event-driven microservices**
* Implement **Kafka producer and consumer in Node.js**

---

## 📌 Future Improvements

* Add multiple microservices
* Implement Kafka partitions and consumer groups
* Add Docker Compose setup
* Add REST API gateway

---

## 👨‍💻 Author

Raunik Singh
Node.js Backend Developer
