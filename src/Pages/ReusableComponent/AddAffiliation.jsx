import axios from "axios";
import { div } from "framer-motion/client";
import React,{useState, useEffect} from "react";
import apis from "../../utils/apis";
import Loader from "../resuable_component/Loader/Loader";
import { toast } from "react-toastify";

const AffiliateModal = ({ isOpen, setIsOpen, onCampaignCreated, onClose }) => {
  if (!isOpen) return null;
  const [campaignName, setCampaignName] = useState("");
  const [uniqueCode, setUniqueCode] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // ✅ Function to create campaign
  const CreateCampaign = async () => {
    try {
      setLoading(true);
      if (!campaignName || !uniqueCode) {
        toast.error("Campaign name and unique code are required.");
        return;
      }
      const payload = {
        user_id: localStorage.getItem("userId"),
        campaign_name: campaignName || "Diwali Campaign",
        unique_code: uniqueCode,
      };
      console.log("payload", payload);

      const res = await axios.post(apis.create_campaign, payload);
      console.log("Campaign created:", res.data);
      if (res?.data?.status === 200) {
        toast.success(res?.data?.message);
          setCampaignName("");
          setUniqueCode("");
          setIsOpen(false);
          onCampaignCreated && onCampaignCreated();
      }
    } catch (error) {
      console.error("Error creating campaign:", error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Trigger API when unique code length = 6
  useEffect(() => {
    if (uniqueCode.length === 6) {
      // CreateCampaign();
    }
  }, [uniqueCode]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      style={{
        fontFamily: "Roboto",
      }}
    >
      <div className="bg-white w-full  mx-2 p-4 rounded-xl shadow-lg relative">
        <div className="">
          {/* Close Button */}
          <div className="px-3">
            <button
              className="absolute top-2 right-6 text-[32px] text-black2"
              onClick={() => {
                setIsOpen(false);
                onClose && onClose();
              }}
            >
              &times;
            </button>

            <h2
              className="text-lg font-semibold text-gray-900 mb-4 "
              style={{
                fontFamily: "Inter",
              }}
            >
              Add Affiliate
            </h2>
          </div>

          <div className="space-y-4 border border-lightBorder p-4 rounded-[8px] m-2">
            {/* Campaign Name */}
            <div>
              <label className="block text-sm font-medium text-red">
                Campaign name
              </label>
              <input
                type="text"
                placeholder="Enter campaign name"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 outline-none border-lightBorder text-grayBorder"
              />
            </div>

            {/* Unique Code */}
            <div>
              <label className="block text-sm font-medium text-red">
                Unique code
              </label>
              <input
                type="text"
                placeholder="Enter 6-digit unique code"
                maxLength={6}
                value={uniqueCode}
                onChange={(e) =>
                  setUniqueCode(e.target.value.trim().toUpperCase())
                }
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 outline-none border-lightBorder text-grayBorder"
              />
            </div>

            {/* Referral Link */}
            <div>
              <label className="block text-sm font-medium text-red">
                Referral link
              </label>

              <div className="relative">
                <input
                  type="text"
                  disabled
                  value={`https://winbhai.in/signup?campaign=${
                    uniqueCode || ""
                  }`}
                  className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed border-lightBorder text-grayBorder pr-12"
                />

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={() => {
                    const link = `https://winbhai.in/signup?campaign=${
                      uniqueCode || ""
                    }`;
                    if (!uniqueCode) {
                      toast.warn("Enter a unique code first!");
                      return;
                    }
                    navigator.clipboard.writeText(link);
                    toast.success("Referral link copied!");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-red font-medium text-sm hover:underline"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button className="w-full bg-lightgrayBg2 text-white py-2 rounded-md">
                Reset
              </button>
              <button
                className="w-full bg-red text-white py-2 rounded-md"
                onClick={CreateCampaign}
              >
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateModal;
