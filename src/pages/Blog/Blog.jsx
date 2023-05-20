import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mt-24 text-start w-8/12 mx-auto py-5">
        <h1 className="font-bold">
          1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
        </h1>
        <p className="ml-4 font-semibold">
        An access token is a credential that verifies the authorization granted to a user or client application. It serves as a proof of authentication and is used to access protected resources or APIs. Access tokens are typically short-lived and have expiration times to enhance security. They are sent with each request to the server, allowing the server to verify the user's identity and permissions before granting access. On the other hand, a refresh token is a long-lived credential used to obtain a new access token without the need for user re-authentication. It is securely stored on the client-side and is used to refresh expired access tokens. Refresh tokens have longer expiration times and are crucial for maintaining user sessions. Proper storage of tokens on the client-side is important for security. Access tokens can be stored in memory, while refresh tokens should be stored in more secure mechanisms like HTTP-only cookies or encrypted storage.
        </p>

        <h1 className="font-bold mt-4">2. Compare SQL and NoSQL databases?</h1>
        <p className="ml-4 font-semibold">
        SQL (Structured Query Language) databases are based on a predefined schema and use tables with rows and columns to store data. They provide strong data consistency, support complex relationships, and offer powerful querying capabilities using SQL. SQL databases are well-suited for applications with structured data and transactions that require data integrity.
<br /> <br />
On the other hand, NoSQL (Not Only SQL) databases offer a more flexible approach to data storage. They can handle unstructured or semi-structured data and use various data models like key-value, document, columnar, or graph. NoSQL databases prioritize scalability, allowing for horizontal scaling and high write/read performance. They are commonly used in modern applications that require agility, scalability, and the ability to handle large volumes of data.
        </p>

        <h1 className="font-bold mt-4">
          3. What is express js? What is Nest JS?
        </h1>
        <p className="ml-4 font-semibold">
        Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible set of features for building web applications and APIs. Express.js allows developers to handle routes, manage middleware, and handle HTTP requests and responses easily. It is widely used and popular for its simplicity and robustness. <br /> <br />

Nest.js, on the other hand, is a progressive and extensible Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and takes advantage of decorators, dependency injection, and other modern programming concepts. Nest.js provides a modular and organized architecture, making it suitable for complex and enterprise-level applications.
        </p>

        <h1 className="font-bold mt-4">4. What is MongoDB aggregate and how does it work?</h1>
        <p className="ml-4 font-semibold">
        MongoDB's aggregate is a powerful framework for performing advanced data processing and analysis operations on collections. It allows users to perform complex queries, transformations, and aggregations on the data, using stages like $match, $group, $project, and more. Aggregate pipelines are constructed using these stages to manipulate and aggregate data efficiently.
        </p>
      </div>
    </div>
  );
};

export default Blog;
