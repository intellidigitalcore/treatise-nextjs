import axios from 'axios'
import { useEffect, useState } from 'react'

function FAQ() {
    const [faqs, setFaqs] = useState([])
    useEffect(()=>{
        axios.get('../data/membership/FAQ.json').then((response) =>{
            setFaqs(response.data)
        })
    },[])

    console.log(faqs);
    const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
            return faq;
          })
        );
      };
  return (
    <div className='faqs'>
        {faqs.map((faq, index) => (
          <div key={index} className={"faq " + (faq.open ? "open" : "")} onClick={() => toggleFAQ(index)}>
            <div className="faq-question title cursor-pointer">
                <p>{faq.questions}</p>
                <span>
                    <svg className="a-rolation" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.75 10.5L14 19.25L5.25 10.5" stroke="#060B25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </div>
            <div className="faq-answer desc">{faq.answer}</div>
          </div>
        ))}
    </div>
  )
}

export default FAQ