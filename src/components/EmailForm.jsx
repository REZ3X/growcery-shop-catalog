import React, { useState } from "react";

function EmailMessageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    // Clear error
    setError("");

    // Here, you can add your form submission logic, e.g., sending the data to a server
    console.log("Form submitted:", { name, email, message });

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto p-4 w-1/2 font-Lora">
      <h2 className="text-2xl font-bold mb-4">Kirim Email Ke Kami</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded"
          required
        />
        <textarea
          placeholder="Pesan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 p-2 rounded h-32"
          required
        />
        <button
          type="submit"
          className="bg-[#f6f36c] hover:bg-[#cbc866] text-[#4f523d] py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default EmailMessageForm;
