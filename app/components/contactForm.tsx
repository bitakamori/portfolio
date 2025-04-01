"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CachedIcon from "@mui/icons-material/Cached";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          mail: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setAlert({ message: "Mensagem enviada com sucesso!", type: "success" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setAlert({
        message: "Erro ao enviar mensagem. Tente novamente.",
        type: "error",
      });
    }

    setLoading(false);
  };

  return (
    <>
      {alert && (
        <div
          className={`z-10 fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white transition-opacity duration-300 ${
            alert.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {alert.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label
              htmlFor="Nome"
              className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-sm sm:text-base"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-sm sm:text-base"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
          >
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-sm sm:text-base"
            placeholder="Assunto"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            name="message"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-sm sm:text-base"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 sm:py-3 rounded-lg font-medium hover:shadow-lg transition-shadow text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {loading ? (
            <>
              <CachedIcon className="h-5 w-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Enviar email"
          )}
        </button>
      </form>
      <button
        type="submit"
        onClick={() =>
          setAlert({
            message: "Mensagem enviada com sucesso!",
            type: "error",
          })
        }
      >
        click
      </button>
    </>
  );
};

export default ContactForm;
