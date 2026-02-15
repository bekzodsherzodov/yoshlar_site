import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLang } from "../../lang/LanguageContext";

function PartnerForm({ id }) {
  const { t } = useLang();

  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(null); // success | error
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.organization || !formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://hook.eu1.make.com/plbn2h3qz9kbcrwdl7uci3iv3vxug8qg",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ organization: "", name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔥 Modal Animation CSS inside component */}
      <style>
        {`
          @keyframes slideDownFade {
            from { opacity: 0; transform: translate(-50%, -20px); }
            to { opacity: 1; transform: translate(-50%, 0); }
          }

          /* Placeholder style */
          input::placeholder,
          textarea::placeholder {
            color: #7F7F7F80;
            font-family: Manrope;
            font-weight: 400;
            font-style: Regular;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: 0%;
          }

          /* Input and textarea text color */
          input, textarea {
            color: #FFFFFF;
          }

          /* Sarlavha responsive width */
          .partner-form-title {
            width: 100%;
            max-width: 604px;
          }
          
          @media (max-width: 767px) {
            .partner-form-title {
              max-width: 320px;
            }
          }

          /* Subtitle responsive width */
          .partner-form-subtitle {
            width: 100%;
            max-width: 604px;
          }
          
          @media (max-width: 767px) {
            .partner-form-subtitle {
              max-width: 320px;
            }
          }
        `}
      </style>

      {/* 🔥 TOP MODAL */}
      {status && (
        <div
          className="fixed top-6 left-1/2 z-50"
          style={{ transform: "translateX(-50%)", animation: "slideDownFade 0.4s ease-out" }}
        >
          <div
            className={`px-6 py-4 rounded-xl shadow-2xl text-white font-medium transition-all duration-300
              ${status === "success" ? "bg-green-500" : "bg-red-500"}`}
          >
            {status === "success" ? t("form_success") : t("form_error")}
          </div>
        </div>
      )}

      <section id={id} className="w-full flex justify-center my-24 px-4">
        <div className="flex flex-col lg:flex-row max-w-[1344px] w-full shadow-xl rounded-3xl overflow-hidden bg-[#F1F2F4]">

          {/* Form */}
          <div className="p-10 w-full lg:flex-1 flex flex-col gap-6">
            {/* Sarlavha */}
            <h2
              className="partner-form-title"
              style={{
                fontFamily: "Manrope",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "48px",
                letterSpacing: "0%",
                color: "#000000"
              }}
            >
              {t("partner_form_title")}
            </h2>

            {/* Subtitle */}
            <p
              className="partner-form-subtitle"
              style={{
                fontFamily: "Manrope",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#7F7F7F80"
              }}
            >
              {t("partner_form_subtitle")}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder={t("organization")}
                className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] bg-[#FFFFFF]"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("name")}
                className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] bg-[#FFFFFF]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("email")}
                className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] bg-[#FFFFFF]"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("message")}
                className="rounded-2xl p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] min-h-[150px] bg-[#FFFFFF]"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 flex items-center transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                style={{
                  background: "transparent",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "100%",
                  border: "none",
                  padding: 0,
                  gap: "1px"
                }}
              >
                {/* Qizil doira ichida 3 ta harf - O'NG TOMONGA YOPISHGAN */}
                <span
                  className="flex items-center justify-end"
                  style={{
                    background: "#F24B4B",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    color: "#000000",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "Manrope, sans-serif",
                    flexShrink: 0,
                    paddingRight: "1px",
                    marginRight: "-1px"
                  }}
                >
                  {loading ? "" : "Отп"}
                </span>

                {/* Qolgan matn */}
                <span style={{ 
                  color: "#000000",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600
                }}>
                  {loading ? t("sending") : "равить обращение"}
                </span>

                {/* O'q */}
                <FaArrowRightLong style={{ width: "18px", height: "18px", color: "#000000", marginLeft: "6px" }} />
              </button>

            </form>
          </div>

          {/* Map */}
          <div className="w-full lg:flex-1 h-[400px] lg:h-auto">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps?q=41.285680,69.203464&z=15&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnerForm;