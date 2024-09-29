import React from "react";

function Contact() {
    return (
        <div className="w-1/2 p-5 flex flex-col gap-3">
            <h1>Hubungi Kami</h1>
            <div className="upper_contact flex flex-col gap-2">
                <div className="telephone">
                    <h2>Nomor Telelepon</h2>
                    <p>+62 813-2742-7726</p>
                </div>
                <div>
                    <h2>Alamat</h2>
                    <p>Jl. Balirejo UH2 No.549, RT17, RW5, Mulamuju, Umbulharjo, Yogyakarta, Daerah Istimewa Yogyakarta, 55165</p>
                </div>
                <div>
                    <h2>Email</h2>
                    <p>dummyemail@example.com</p>
                </div>
            </div>
            <div className="bottom_social flex flex-row gap-3 text-lg">
                <a className="intagram">
                    <i className="bi bi-instagram"></i>
                </a>
                <a className="whatsapp">
                    <i className="bi bi-whatsapp"></i>
                </a>
            </div>
        </div>
    )
}

export default Contact;