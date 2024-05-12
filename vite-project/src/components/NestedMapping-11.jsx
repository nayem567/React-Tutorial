import React from "react";

const users = [
  {
    name: "Nayem",
    age: 27,
    phones: [{ home: "01432432" }, { office: "88324222" }],
  },
  {
    name: "John",
    age: 22,
    phones: [{ home: "014234234" }, { office: "992432424" }],
  },
];

export default function NestedMapping() {
  return (
    <div>
      <h2>Nested Lists</h2>
      {users.map((user, index) => (
          <article key={index}>
            <h3>Name: {user.name}</h3>
            <p>Age: {user.age}</p>
            {user.phones.map((phone, phoneIndex) => 
            <div key={phoneIndex}>
              <p>{phone.home}</p>
              <p>{phone.office}</p>
            </div>
          )}
          </article>
      ))}
    </div>
  );
}
