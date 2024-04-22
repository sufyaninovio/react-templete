import React from "react";
const FaqSec = () => {
    const answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet. Facilisis leo vel fringilla est ullamcorper eget. ";
    const faqList = [
        {
            question: "How do I get the marketing services on your website?",
            answer: answer,
        },
        {
            question: "Is it safe to enter my payment information on your website?",
            answer: answer,
        },
        {
            question: "Can I modify or cancel my reservation after booking?",
            answer: answer,
        },
        {
            question: "Is it safe to enter my payment information on your website?",
            answer: answer,
        },
        {
            question: "Can I modify or cancel my reservation after booking?",
            answer: answer,
        }
    ]
    return (
        <>
            <section className="faq-section">
                <div className="container">
                    <div className="faqs-start col-lg-10 mx-auto">
                        <div className="top-heading pb-2">
                            <h2 className="level-2">Read our <span className="text-primary">Frequently</span> asked Qustions</h2>
                        </div>
                        <div className="faqs-list pt-4">
                            <div class="accordion" id="accordionExample">
                                {
                                    faqList.map((singleFaq, index) => (
                                        <>
                                            <div className="single-faq" key={index}>
                                                <div class="accordion-item bg-transparent border-0 py-1">
                                                    <h2 class="accordion-header" id={`heading${index}`}>
                                                        <button class={`accordion-button accordian-custom-btn level-5 px-4 mx-lg-1 py-3 font-large text-dark ${(index === 0) ? '' : 'collapsed'} bg-transparent border-0`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={`${(index === 0) ? 'true' : 'false'}`} aria-controls={`collapse${index}`}>
                                                            {singleFaq.question}
                                                        </button>
                                                    </h2>
                                                    <div id={`collapse${index}`} class={`accordion-collapse collapse ${(index === 0) ? 'show' : ''} `} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                                        <div class="accordion-body ps-4 pt-2 mx-lg-3 pe-lg-5">
                                                            <p className="para font-small">{singleFaq.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FaqSec;