import { useState } from "react";

const Faq = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <article>
      <div className="faqHeading">
        <h2>{title}</h2>
        <button onClick={handleToggle}>{toggle ? "-" : "+"}</button>
      </div>

      <div>{toggle && <p>{desc}</p>}</div>
    </article>
  );
};


export default Faq;
