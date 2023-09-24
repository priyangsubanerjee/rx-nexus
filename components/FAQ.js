import React from "react";
import { Icon } from "@iconify/react";

function FAQ() {
  const [active, setActive] = React.useState(0);
  const data = {
    rows: [
      {
        question: "What is the medicine tracking system, and how does it work?",
        answer: `The medicine tracking system is a web-based system that tracks the movement of medicines from factory to patient. It uses QR codes to store information about each medicine, such as its type, quantity, batch number, expiry date, and price. This information is stored in a secure database that is accessible to the government and authorized healthcare professionals.`,
      },
      {
        question: "Who can use the medicine tracking system?",
        answer: `The medicine tracking system can be used by anyone who buys or sells medicines, including patients, pharmacists, distributors, and manufacturers.`,
      },
      {
        question: `How do I register for the medicine tracking system?`,
        answer: `To register for the medicine tracking system, you will need to create an account on our website. Once you have created an account, you can start scanning QR codes on medicine packages.`,
      },
      {
        question: `I am a patient. How can I use the medicine tracking system?`,
        answer: `As a patient, you can use the medicine tracking system to verify the authenticity of medicines that you purchase.`,
      },
      {
        question: `I am a pharmacist. How can I use the medicine tracking system?`,
        answer: `As a pharmacist, you can use the medicine tracking system to track the movement of medicines through your pharmacy. You can also use the system to verify the authenticity of medicines that you receive from distributors and to report any suspected counterfeit medicines`,
      },
      {
        question: `I am a distributor. How can I use the medicine tracking system?`,
        answer: `As a manufacturer, you can use the medicine tracking system to track the movement of medicines from your factory to the market. You can also use the system to verify the authenticity of medicines that you sell to distributors and to report any suspected counterfeit medicines.`,
      },
      {
        question: `How does the medicine tracking system work?`,
        answer: `The medicine tracking system works by assigning a unique QR code to each medicine package. When a medicine is sold, the QR code is scanned to record the sale. This information is then stored in the database. This allows us to track the movement of medicines through the supply chain and to identify any potential problems.`,
      },
      {
        question: `Can I track both prescription and over-the-counter medicines with Rx-Nexus?`,
        answer: `Yes, Rx-Nexus allows you to track both prescription and over-the-counter medications, providing a complete overview of your medicine inventory.`,
      },
      {
        question: `How do I add medicines to my Rx-Nexus account`,
        answer: `You can add medicines to your Rx-Nexus account by scaning the QR code or manually entering their details, including name, and expiration date.`,
      },
      {
        question: `Is my personal health information and medication history kept confidential on Rx-Nexus?`,
        answer: `Yes, Rx-Nexus takes data privacy seriously. Your personal health information and medication history are kept confidential and secure through encryption and stringent privacy measures.`,
      },
      {
        question: `Can I receive alerts or notifications about my medication supply?`,
        answer: `Yes, Rx-Nexus offers medication supply alerts and reminders to help you stay on top of your medication schedule.`,
      },
      {
        question: `What happens if I can't find a specific medication in the Rx-Nexus database?`,
        answer: `If you can't find a medication, you can manually enter its details into Rx-Nexus to ensure it's included in your tracking.`,
      },
      {
        question: `I have a question that is not answered on this page. How can I contact you?`,
        answer: `If you have a question that is not answered on this page, you can contact us by email or by phone`,
      },
    ],
  };
  return (
    <div className="max-w-4xl">
      {data.rows.map((item, index) => {
        return (
          <div
            onClick={() => setActive(index)}
            key={index}
            className="border-b py-5"
          >
            <div className="flex items-center justify-between">
              <h2>{item.question}</h2>
              <button>
                <Icon
                  height={20}
                  icon={
                    active == index ? "majesticons:minus" : "majesticons:plus"
                  }
                />
              </button>
            </div>

            {active === index && (
              <p className="mt-2 text-sm text-neutral-500 leading-6">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
