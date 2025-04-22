import { useState } from 'react'
import './App.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function App() {
  const [clicked, setClicked] = useState(null)

  function CardWrapper({children, onClick}) {
    return <div className='wrapper' onClick={onClick}>
      {children}
    </div>
  }
  
  function ToggleIcon({clicked}) {
    return <>
      {clicked ? <FaChevronUp /> : <FaChevronDown />}
    </>
  }

  function toggleAccordion(i) {
    console.log("Clicked" + i)
    setClicked(clicked === i ? null : i)
  }

  const faq = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email."
    },
    {
      question: "Where can I view my purchase history?",
      answer: "You can view your purchase history in your account dashboard under the 'Orders' section.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times may vary.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach out to our support team via the 'Contact Us' page or by emailing support@example.com.",
    },
    {
      question: "Can I cancel or change my order?",
      answer: "Orders can be canceled or changed within 2 hours of placing them. After that, the order is processed and cannot be altered.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept Visa, MasterCard, PayPal, Apple Pay, and Google Pay.",
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use industry-standard encryption and never share your personal details with third parties.",
    },
  ]

  return (
    <>
      {
        faq.map((item, i) => {
          return (
            <CardWrapper key={i} onClick={() => toggleAccordion(i)}>
              <div className="header">
                <h3>{item.question}</h3>
                <ToggleIcon clicked={clicked === i} />
              </div>
              <div className={`accordion-content ${clicked === i ? 'open' : ''}`}>
                {clicked === i ? <p>{item.answer}</p> : <p></p>}
              </div>
            </CardWrapper>
          )
        })
      }
    </>
  )
}

export default App
