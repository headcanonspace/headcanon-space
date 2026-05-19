"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  const loadScripts = () => {
    // 1. GA4 Script tag
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-0S0GHTYEEB";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    // 2. GA4 Initialization tag
    const gaInitScript = document.createElement("script");
    gaInitScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0S0GHTYEEB');
    `;
    document.head.appendChild(gaInitScript);

    // 3. AdSense script tag
    const adsScript = document.createElement("script");
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    adsScript.async = true;
    adsScript.crossOrigin = "anonymous";
    document.head.appendChild(adsScript);
  };

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "accepted") {
      loadScripts();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
    loadScripts();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie Consent Banner"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        right: "24px",
        zIndex: 9999,
        background: "rgba(10, 14, 26, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(91, 63, 191, 0.25)",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(91, 63, 191, 0.15)",
        borderRadius: "16px",
        padding: "20px",
        maxWidth: "480px",
        marginLeft: "auto",
        animation: "slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      
      <p style={{ margin: "0 0 16px 0", fontSize: "14px", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.9)" }}>
        We use cookies for analytics and ads to keep this tool free. You can accept or decline. Learn more in our{" "}
        <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>
      
      <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", alignItems: "center" }}>
        <button
          onClick={handleDecline}
          style={{
            background: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "rgba(255, 255, 255, 0.8)",
            padding: "9px 18px",
            borderRadius: "10px",
            fontSize: "13.5px",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: "#5B3FBF",
            border: "none",
            color: "#fff",
            padding: "9px 20px",
            borderRadius: "10px",
            fontSize: "13.5px",
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(91, 63, 191, 0.3)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#6b4fd0";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(91, 63, 191, 0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#5B3FBF";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(91, 63, 191, 0.3)";
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
