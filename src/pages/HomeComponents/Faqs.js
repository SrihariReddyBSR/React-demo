import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
const Faqs = () => {
  const data = [
    {
      question: "Question1",
      answer:
        "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English",
    },
    {
      question: "Question2",
      answer:
        "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English",
    },
    {
      question: "Question3",
      answer:
        "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English",
    },
    {
      question: "Question4",
      answer:
        "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English",
    },
    {
      question: "Question5",
      answer:
        "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English",
    },
    {
      question: "Question6",
      answer:
        "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English",
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleShow = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <h1 className="heading">FAQ's</h1>
      <section className="faq">
        <div className="item">
          {data.map((item, i) => {
            return (
              <div className="wrapper" key={i}>
                <div className="question" onClick={() => handleShow(i)}>
                  <h3>{item.question}</h3>
                  {selected === i ? (
                    <BiSolidUpArrow
                      size={30}
                      style={{
                        cursor: "pointer",
                        border: "1px solid white",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  ) : (
                    <BiSolidDownArrow
                      size={30}
                      style={{
                        cursor: "pointer",
                        border: "1px solid white",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  )}
                </div>
                <div className={selected === i ? "answer show" : "answer"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faqs;
