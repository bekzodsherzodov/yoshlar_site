import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLang } from "../../lang/LanguageContext";

function PartnerForm({ id }) {
  const { t } = useLang();

  const [formData, setFormData] = useState({
    organization: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
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
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.organization ||
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
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
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");

        setFormData({
          organization: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });
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
      <style>
        {`
          @keyframes slideDownFade {
            from { opacity: 0; transform: translate(-50%, -20px); }
            to { opacity: 1; transform: translate(-50%, 0); }
          }

          input::placeholder,
          textarea::placeholder {
            color: #7F7F7F80;
            font-family: Manrope;
            font-size: 20px;
          }

          input, textarea {
            color: #000000;
          }

          .partner-form-title {
            width: 100%;
            max-width: 604px;
          }

          @media (max-width: 767px) {
            .partner-form-title {
              max-width: 320px;
            }
          }

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

      {status && (
        <div
          className="fixed top-6 left-1/2 z-50"
          style={{
            transform: "translateX(-50%)",
            animation: "slideDownFade 0.4s ease-out",
          }}
        >
          <div
            className={`px-6 py-4 rounded-xl shadow-2xl text-white font-medium
              ${status === "success" ? "bg-green-500" : "bg-red-500"}`}
          >
            {status === "success" ? t("form_success") : t("form_error")}
          </div>
        </div>
      )}

      <section id={id} className="w-full flex justify-center my-24 px-4">
        <div className="flex flex-col lg:flex-row max-w-[1344px] w-full shadow-xl rounded-3xl overflow-hidden bg-[#F1F2F4]">

          {/* FORM */}
          <div className="p-10 w-full lg:flex-1 flex flex-col gap-6">

            <h2
              className="partner-form-title"
              style={{
                fontFamily: "Manrope",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "48px",
                color: "#000000",
              }}
            >
              {t("partner_form_title")}
            </h2>

            <p
              className="partner-form-subtitle"
              style={{
                fontFamily: "Manrope",
                fontWeight: 400,
                fontSize: "20px",
                color: "#7F7F7F80",
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
                className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] bg-white"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("name")}
                className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] bg-white"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("email")}
                className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] bg-white"
              />

              {/* TELEFON INPUT */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("phone")}
                className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] bg-white"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("message")}
                className="rounded-2xl p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] min-h-[150px] bg-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 relative flex items-center hover:opacity-90 disabled:opacity-50"
                style={{
                  background: "transparent",
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontSize: "16px",
                  border: "none",
                  padding: 0,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "-12px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#F24B4B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                />

                <span
                  style={{
                    paddingLeft: "3px",
                    color: "#000",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {loading ? t("sending") : t("button_main_text")}
                </span>

                <FaArrowRightLong
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "#000",
                    marginLeft: "8px",
                  }}
                />
              </button>
            </form>
          </div>

          {/* MAP */}
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