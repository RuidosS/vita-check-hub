
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const WaitlistForm = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToForm) {
      const formElement = document.getElementById("waitlist-form");
      if (formElement) {
        setTimeout(() => {
          formElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.state]);

  useEffect(() => {
    // Bloquear scroll horizontal no body
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "auto"; // repõe scroll normal ao desmontar
    };
  }, []);

  return (
    <section className="py-8" id="waitlist-form">
      <div className="container-custom max-w-lg relative z-10">
        <div className="bg-black/60 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-xl border border-[#FF6B00]/20">
          <div className="text-center mb-6">
            <p className="text-white/80">Preenche os dados abaixo para garantir o teu lugar</p>
          </div>

          <form-widget ucid='b3E8esZE5AjRljFDlbDvNvXPYgs'></form-widget>
        </div>
      </div>
    </section>
  );
};
