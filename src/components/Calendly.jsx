import React, { useEffect, useRef, useState } from "react";

const Calendly = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    const initializeWidget = () => {
      if (widgetRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/yoel-saravia25/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1",
          parentElement: widgetRef.current,
        });
      }
    };

    const existingScript = document.getElementById("calendly-script");

    if (existingScript) {
      if (window.Calendly) {
        initializeWidget();
      } else {
        existingScript.addEventListener("load", initializeWidget, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initializeWidget;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isOpen || !widgetRef.current || !window.Calendly) {
      return;
    }

    window.Calendly.initInlineWidget({
      url: "https://calendly.com/yoel-saravia25/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1",
      parentElement: widgetRef.current,
    });
  }, [isOpen]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "980px",
        margin: "0 auto",
        padding: "24px 16px",
      }}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: "100%",
          maxWidth: "360px",
          padding: "16px 24px",
          borderRadius: "999px",
          border: "none",
          background: "linear-gradient(90deg, #0069ff 0%, #4a7cff 100%)",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0, 105, 255, 0.25)",
          display: "block",
          margin: "0 auto 20px",
        }}
      >
        {isOpen ? "Ocultar calendario" : "Agenda tu cita"}
      </button>

      {isOpen && (
        <div
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            ref={widgetRef}
            style={{
              minWidth: "320px",
              width: "100%",
              height: "700px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Calendly;
