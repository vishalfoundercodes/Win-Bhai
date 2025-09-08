import React from "react";
import { Download, Zap, Lock, Sparkles } from "lucide-react";

const DownloadApkPage = () => {
  return (
    <div className="max-w-m mx-auto p-4">
      {/* Top Red Section */}
      <div className=" p-0 text-white ">
        <div className=" bg-[linear-gradient(108.25deg,#C10932_0.52%,#5B0418_99.48%)] p-6 rounded-xl mb-2">
          <h2 className="text-xl font-semibold mb-2">Download Our App</h2>
          <p className="text-ssm text-gray-100 mb-4">
            Download our APK directly for faster performance, exclusive
            features, and a smoother experience. No app store required!
          </p>
        </div>

        {/* Download Button */}
        <div className=" flex w-full items-center text-center justify-center mb-0 p-2">
          <button className=" flex items-center justify-center px-6 py-2 gap-2 bg-red text-white font-semibold rounded-full hover:bg-red shadow-md">
            <Download size={18} />
            Download APK
          </button>
        </div>

        {/* Version Info */}
        <p className="mt-0 text-ssm text-[#4B5563] text-center">
          Version 1.2.3 | 24MB | Android 6.0+
        </p>
      </div>
      {/* Feature List */}
      <div className="mt-6 space-y-4">
        {/* Feature 1 */}
        <div className="bg-white  rounded-xl py-2 items-start gap-1 shadow-sm flex flex-col w-full">
          <div className=" p-2 rounded-full items-center justify-center flex w-full">
            <div className="bg-blue-100 text-red p-2 rounded-full">
              <Zap size={20} />
            </div>
          </div>
          <div className="flex flex-col w-full items-center text-center gap-2">
            <h3 className="font-semibold">Faster Performance</h3>
            <p className="text-ssm text-gray-600">
              Direct APK installation optimizes app performance
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-white  rounded-xl py-2 items-start gap-1 shadow-sm flex flex-col w-full">
          <div className="p-2 rounded-full items-center justify-center flex w-full">
            <div className="bg-blue-100 text-red p-2 rounded-full">
              <Lock size={20} />
            </div>
          </div>
          <div className="flex flex-col w-full items-center text-center gap-2">
            <h3 className="font-semibold">No Store Required</h3>
            <p className="text-ssm text-gray-600">
              Install directly without app store restrictions
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-white  rounded-xl py-2 items-start gap-1 shadow-sm flex flex-col w-full">
          <div className="p-2 rounded-full items-center justify-center flex w-full">
            <div className="bg-blue-100 text-red p-2 rounded-full">
              <Sparkles size={20} />
            </div>
          </div>
          <div className="flex flex-col w-full items-center text-center gap-2">
            <h3 className="font-semibold">Exclusive Features</h3>
            <p className="text-ssm text-gray-600">
              Access special features only available in direct version
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApkPage;
