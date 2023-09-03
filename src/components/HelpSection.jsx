import React from "react";
import payPal from "../images/paypal.png";

const preTitle = 'Допоможіть Україні';
const title = 'запобігти наступній Бучі';

const description = 'Світ робить багато, щоб зупинити цю війну. Але злочини тривають. Технології можуть посилити всі ці зусилля та запобігти загостренню гуманітарної кризи. Допоможіть українцям подолати причину кризи, а не лише її наслідки.';

const buttonLabel = 'Допомогти ЗСУ';

const HelpSection = () => {
    return (
        <section className='w-full flex flex-col items-center text-3xl mx-auto text-center'>
            <article className="text-[#6e6e6e]">
                {preTitle}
            </article>
            <article className="text-[#1b1b1b]">
                {title}
            </article>

            <article className="text-[#6e6e6e] text-base my-8">
                {description}
            </article>

            <button>
                {buttonLabel}
            </button>

            <img alt="" src={payPal} className="mt-8 max-w-[60%]" />
        </section>
    )
}

export default HelpSection;