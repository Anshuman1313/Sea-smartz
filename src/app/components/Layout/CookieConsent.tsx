"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  // Show banner only if user hasn't made a choice yet
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bottom-4 right-4 w-[90%] max-w-md 
           bg-neutral-900 text-white rounded-2xl shadow-lg p-4 
           flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm text-white/90">
            We use cookies to improve your experience. Read our{" "}
            <Link href={"/about"}  className="underline">privacy policy</Link>.
          </p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => handleConsent("declined")}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg text-sm"
            >
              Decline
            </button>
            <button
              onClick={() => handleConsent("accepted")}
              className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-lg text-sm"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
