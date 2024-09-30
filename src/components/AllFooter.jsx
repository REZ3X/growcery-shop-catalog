import React from "react";
import Footer from "./footer";
import Contact from "./contact";
import EmailMessageForm from "./EmailForm";

function AllFooter() {
    return(
        <div className="flex flex-col bg-[#4f523d] text-white gap-3 font-Lora">
            <div className="flex flex-row pdl:flex-col">
                <Contact />
                <EmailMessageForm />
            </div>
            <Footer />
        </div>
    )
}

export default AllFooter;