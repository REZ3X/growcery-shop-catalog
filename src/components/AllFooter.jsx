import React from "react";
import Footer from "./footer";
import Contact from "./contact";
import EmailMessageForm from "./EmailForm";

function AllFooter() {
    return(
        <div className="flex flex-col">
            <div className="flex flex-row">
                <Contact />
                <EmailMessageForm />
            </div>
            <Footer />
        </div>
    )
}

export default AllFooter;