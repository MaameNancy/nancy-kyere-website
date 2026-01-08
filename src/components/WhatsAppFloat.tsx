'use client';

const WhatsAppFloat = () => {
  const WHATSAPP_LINK = "https://wa.me/233202522385";

  return (
    <>
      {/* Custom pulse animation styles */}
      <style jsx>{`
        @keyframes subtle-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        
        .whatsapp-float {
          animation: subtle-pulse 3s ease-in-out infinite;
        }
        
        .whatsapp-float:hover {
          animation: none;
        }
      `}</style>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contact via WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-7 w-7 text-white" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M16.688 13.404c-.29-.145-1.712-.845-1.977-.942-.264-.098-.456-.145-.647.146-.192.29-.744.942-.912 1.136-.167.192-.334.218-.623.073-.29-.145-1.223-.451-2.33-1.438-.862-.768-1.44-1.715-1.608-2.004-.167-.29-.018-.446.127-.59.13-.129.29-.334.434-.501.145-.167.192-.29.29-.483.098-.192.049-.36-.024-.505-.073-.145-.647-1.56-.885-2.135-.233-.557-.47-.483-.647-.492l-.552-.01c-.192 0-.503.073-.767.36-.264.29-1.01.988-1.01 2.413 0 1.426 1.034 2.805 1.177 2.998.145.192 2.037 3.11 4.935 4.36.69.298 1.227.476 1.645.609.691.22 1.32.19 1.817.115.555-.085 1.712-.699 1.954-1.375.242-.676.242-1.253.17-1.376-.073-.123-.264-.192-.554-.337z"/>
        </svg>
      </a>
    </>
  );
};

export default WhatsAppFloat;