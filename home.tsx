import { useState } from "react";
import { Download, Zap } from "lucide-react";

/**
 * صفحة قدحين تيم بمب - موقع تحميل الملف
 * تصميم: أسود وأبيض مع تأثيرات نيون أخضر
 * الهدف: تحميل ملف Velostrap.exe بتصميم احترافي وانسيابي
 */

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);

  // رابط تحميل الملف من S3
  const downloadUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663209471320/KzWDawDYqEOYUkBf.exe";
  const heroGifUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663209471320/MqDWFWbVMbdsFnNR.gif";

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "velostrap";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* خلفية مع تأثيرات */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* الصورة المربعة الصغيرة في البداية */}
        <div className="mb-12 float-animation">
          <div className="hero-image-square">
            <img
              src={heroGifUrl}
              alt="قدحين تيم بمب"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 neon-glow" style={{ fontFamily: "Space Mono" }}>
          قدحين تيم بمب
        </h1>

        {/* الخط الديكوري */}
        <div className="divider-line w-32 mb-8"></div>

        {/* الوصف */}
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12" style={{ fontFamily: "Poppins" }}>
          تحميل آمن واحترافي لملف <span className="text-green-400 font-semibold">Velostrap</span> - حل متقدم لاحتياجاتك
        </p>

        {/* زر التحميل النيون */}
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="neon-button mb-8 flex items-center gap-3 text-lg"
          style={{ fontFamily: "Poppins" }}
        >
          <Zap size={24} className="animate-pulse" />
          {isDownloading ? "جاري التحميل..." : "تحميل الآن"}
          <Download size={24} />
        </button>

        {/* معلومات إضافية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl">
          {/* بطاقة 1 */}
          <div className="bg-gray-900 border border-green-400 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300" style={{ boxShadow: "0 0 15px rgba(0, 255, 0, 0.2)" }}>
            <div className="text-3xl mb-3 text-green-400">⚡</div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Poppins" }}>سريع</h3>
            <p className="text-gray-400 text-sm">تحميل فائق السرعة بدون تأخير</p>
          </div>

          {/* بطاقة 2 */}
          <div className="bg-gray-900 border border-green-400 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300" style={{ boxShadow: "0 0 15px rgba(0, 255, 0, 0.2)" }}>
            <div className="text-3xl mb-3 text-green-400">🔒</div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Poppins" }}>آمن</h3>
            <p className="text-gray-400 text-sm">ملف موثوق وخالي من الأخطار</p>
          </div>

          {/* بطاقة 3 */}
          <div className="bg-gray-900 border border-green-400 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300" style={{ boxShadow: "0 0 15px rgba(0, 255, 0, 0.2)" }}>
            <div className="text-3xl mb-3 text-green-400">✨</div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Poppins" }}>احترافي</h3>
            <p className="text-gray-400 text-sm">تصميم عصري وواجهة سلسة</p>
          </div>
        </div>

        {/* نص التذييل */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p style={{ fontFamily: "Poppins" }}>© 2026 قدحين تيم بمب - جميع الحقوق محفوظة</p>
        </div>
      </div>

      {/* خط ديكوري في الأسفل */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" style={{ boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)" }}></div>
    </div>
  );
}
