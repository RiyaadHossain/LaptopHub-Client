import React from "react";

const Blogs = () => {
  return (
    <div className="bg-[#0d0d0d]">
      <div className="container mx-auto pt-16">
        <div>
          <h4 className="text-blue-600 text-2xl md:text-3xl font-bold">
            1. Difference Between Javascript and Node.js
          </h4>
          <p className="text-slate-300 text-lg md:text-xl font-light mt-5">
            The main difference between Javascript and Node.js is that
            Javascript is a cross-platform, dynamic, interpreted, scripting
            language and Node.js is a Javascript runtime environment. Javascript
            cannot be run outside of the browser but Node.js can be run outside
            of the browser and even on the server-side. Javascript is used for
            the client-side. However, Node.js is used on the server-side. JS is
            supported by all browser engines, like Spider Monkey, the V8, the
            Javascript Core and so on. On the other hand, Node.js is only
            supported by the v8 engine mostly used in Chrome.JS is designed to
            build network-centric applications. On the contrary, Node.js is
            designed to build real-time applications. JS is the updated version
            of ECMA and Node.js is written in C, C++ and JS.
          </p>
        </div>
        <div className="mt-24">
          <h4 className="text-blue-600 text-2xl md:text-3xl font-bold">
            2. Difference Between SQL and NoSQL
          </h4>
          <p className="text-slate-300 text-lg md:text-xl font-light mt-5">
            SQL is simply referred to as Relational Database on the other hand
            NoSQL defines non-relational and distributed Database. SQL is the
            most versatile and widely used option available which is useful to
            build complex queries. But, NoSQL is a dynamic schema for
            unstructured data which means it stores data in many ways. SQL is
            vertically scalable. On the contrary, NoSQL is horizontally
            scalable. In SQL, to increase Data load one can add RAM, CPU or SSD
            to a single Server. However, In NoSQL, more traffic can be handled
            by sharding more servers. SQL is Table based. NoSQL is key-value
            pairs, documented-based, and graph-based. Some Examples of SQL
            Database are MySQL, Oracle, Microsoft SQL server and so on. Some
            Examples of NoSQL Database are MongoDB, HBase, BigTable and so on
            and so forth.
          </p>
        </div>
        <div className="mt-24">
          <h4 className="text-blue-600 text-2xl md:text-3xl font-bold">
            3. What is the purpose of the JWT token and how does it work
          </h4>
          <p className="text-slate-300 text-lg md:text-xl font-light mt-5 pb-11">
            JWT token is an open standard for transmitting messages via HTTP. It
            is intended to provide security information between the server and
            client-side to ensure the user's identity.
            <br /> <br />
            First of all, a user sends a request to the server to log in with
            credentials. Then, the server will accept the request as a valid
            request and create a JSON Web token instead of storing the user
            data. After that, the server returns the JWT token to the client.
            After every next time, whenever the user tries to get access to a
            particular site, the client sends a copy of the JWT token. Finally,
            the server checks the JWT signature and sends back the response to
            the Client. Thus, either the user gets access to the site or the
            server deny the request of the user.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
