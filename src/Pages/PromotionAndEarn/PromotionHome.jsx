import promotionbg from "../../assets/promotion/promotionbg.png";
import invitation_code from "../../assets/promotion/invitation_code.png";
import sub_ordinate_icon from "../../assets/promotion/sub_ordinate_icon.png";
import rebate_ratio from "../../assets/promotion/rebate_ratio.png";
import invitation from "../../assets/promotion/invitation.png";
import customer from "../../assets/promotion/customer.png";
import commission_icon from "../../assets/promotion/commission_icon.png";
import promotions_data from "../../assets/promotion/promotions_data.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import apis from "../../utils/apis";
import FirstDepositModal from "./FirstDepositModal";
import Loader from "../resuable_component/Loader/Loader";
function PromotionHome() {
  const [loading, setLoading] = useState(false);
  const [firstDepsoitModal, setFirstDepsoitModal] = useState(
    localStorage.getItem("firstDepositModalValue") === "1"
  );
  const [copyInvitation, setCopyInvitation] = useState(false);
  const [copyInvitationCode, setCopyInvitationCode] = useState(false);
  const [invitationCode, setinvitationCode] = useState("");
  const [promotionData, setPromotionData] = useState(null);
  const [myDetails, setMyDetails] = useState(null);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const profileDetails = async () => {
    if (!userId) {
      toast.error("User not logged in");
      navigate("/login");
      return;
    }
    try {
      const res = await axios.get(`${apis?.profile}${userId}`);
      console.log("profile", res);
      if (res?.data?.success === 200) {
        setMyDetails(res?.data);
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (userId) {
      profileDetails();
    }
  }, [userId]);
  // console.log("myDetailsmyDetails",myDetails)
  const promotionDataHandler = async () => {
    setLoading(true);
    try {
      console.log(`promotion data api: ${apis.promotionData}${userId}`);
      console.log(`userId: ${userId}`);
      const res = await axios.get(`${apis?.promotionData}${userId}`);
      console.log("resooooo", res.data.referral_code);
      setinvitationCode(res.data.referral_code);
      if (res?.status === 200) {
        setLoading(false);
        setPromotionData(res?.data);
      } else {
        setLoading(false);
        //toast.error(res?.data?.message)
      }
    } catch (er) {
      setLoading(false);
      toast.error(er);
    }
  };
  useEffect(() => {
    if (userId) {
      promotionDataHandler();
    }
  }, [userId]);
  console.log("object", myDetails?.data.referral_code_url);
  const handleCopyInvitationLink = () => {
    console.log("handleCopyInvitationLink called");
    if (myDetails?.data?.u_id) {
      // const baseUrl = "https://admin.gameon.deals/";
      // const baseUrl = "https://webbdgcassio.123ace.in/"
      // const baseUrl = "https://bdgcassino.apponrent.com/";
      const referralLink = myDetails?.data?.referral_code_url;
      // const referralLink = `${baseUrl}register?referral=${invitationCode}`;
      console.log("referralLink", referralLink);

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(referralLink)
          .then(() => {
            setCopyInvitation(true);
            toast.success("Link copied successfully!");
          })
          .catch(() => {
            toast.error("Failed to copy link.");
          });
      } else {
        // Fallback for unsupported browsers or insecure context
        const textArea = document.createElement("textarea");
        textArea.value = referralLink;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          setCopyInvitation(true);
          toast.success("Link copied successfully!");
        } catch (err) {
          toast.error("Failed to copy link.");
        }
        document.body.removeChild(textArea);
      }
    } else {
      toast.error("UID is not available.");
    }
  };

  const handleCopyInvitationCode = () => {
    if (myDetails?.data?.u_id && myDetails?.data?.referral_code) {
      const invitationCode = myDetails.data.referral_code;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        // Secure context (HTTPS or localhost)
        navigator.clipboard
          .writeText(invitationCode)
          .then(() => {
            setCopyInvitationCode(true);
            // toast.success("Code copied successfully!");
          })
          .catch(() => {
            toast.error("Failed to copy code.");
          });
      } else {
        // Fallback for insecure context
        const textArea = document.createElement("textarea");
        textArea.value = invitationCode;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          setCopyInvitationCode(true);
          // toast.success("Code copied successfully!");
        } catch (err) {
          toast.error("Failed to copy code.");
        }
        document.body.removeChild(textArea);
      }
    } else {
      toast.error("UID is not available.");
    }
  };

  useEffect(() => {
    if (copyInvitation) {
      handleCopyInvitationLink();
      const timer = setTimeout(() => {
        setCopyInvitation(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copyInvitation, setCopyInvitation]);

  useEffect(() => {
    if (copyInvitationCode) {
      handleCopyInvitationCode();
      const timer = setTimeout(() => {
        setCopyInvitationCode(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copyInvitationCode, setCopyInvitationCode]);

  useEffect(() => {
    const userid = localStorage.getItem("userId");
    // console.log("userid",userid)
    const status = localStorage.getItem("firstDepositModalValue");
    if (status === "0" && userid) {
      setFirstDepsoitModal(true);
    } else {
      setFirstDepsoitModal(false);
    }
  }, []);
  return (
    <>
      {loading && <Loader setLoading={setLoading} loading={loading} />}
      {firstDepsoitModal && (
        <div className="relative z-50 font-roboto">
          <FirstDepositModal
            firstDepsoitModal={firstDepsoitModal}
            setFirstDepsoitModal={setFirstDepsoitModal}
            onClose={() => setFirstDepsoitModal(false)}
          />
        </div>
      )}
          <div
            className="hidden lg2:block mb-2 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="8" fill="#C10932" />
              <path
                d="M28 31.202L26.2153 33L16.4945 23.2009C16.3378 23.0439 16.2134 22.8572 16.1285 22.6515C16.0437 22.4459 16 22.2253 16 22.0025C16 21.7798 16.0437 21.5592 16.1285 21.3536C16.2134 21.1479 16.3378 20.9612 16.4945 20.8042L26.2153 11L27.9983 12.798L18.8746 22L28 31.202Z"
                fill="white"
              />
            </svg>
          </div>
       

      <div className="bg-  h-full w-full overflow-y-auto mb-24 hide-scrollbar">
        <div
          className="w-full flex flex-col px-3 items-center bg-red h-64 bg-center bg-cover lg2:hidden"
          //   style={{
          //     // backgroundImage: `url(${promotionbg})`,
          //     // backgroundColor:"red"
          //   }}
        >
          <p className="text-2xl mt-5 text-white">
            {promotionData?.yesterday_total_commission
              ? Number(promotionData?.yesterday_total_commission).toFixed(2)
              : "0.00"}
          </p>
          <p className="bg-white text-[15px] mt-1 rounded-full px-2 py-1 text-red font-semibold">
            Yesterday&apos;s total commission
          </p>
          <p className="text-xs mt-1 text-white">
            Upgrade the level to increase commission income
          </p>
          <div className="bg-white shadow-md pb-2 w-full mt-2 rounded-lg">
            <div className="flex justify-between items-start text-xs gap-[1px] w-full text-red">
              <div className="bg-red4 py-2.5 text-center rounded-tl-lg w-full ">
                Direct subordinates
              </div>
              <div className="bg-red4 py-2.5 text-center rounded-tr-lg w-full ">
                Team subordinates
              </div>
            </div>
            <div
              className="grid w-full grid-cols-2"
              style={{
                fontFamily: "Roboto",
              }}
            >
              <div className="text-black text-xs col-span-1 flex flex-col items-center px-2">
                <div className="flex flex-col items-center pt-3">
                  <p className="text-bold text-black2 text-ssm font-semibold">
                    {promotionData?.register || "0"}
                  </p>
                  <p>number of register</p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <p className="text-black text-ssm font-semibold">
                    {promotionData?.deposit_number || "0"}
                  </p>
                  <p>Deposit number</p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <p className="text-black text-ssm font-semibold">
                    {promotionData?.deposit_amount || "0"}
                  </p>
                  <p>Deposit amount</p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <p className="text-bold text-black2 text-ssm font-semibold ">
                    {promotionData?.first_deposit || "0"}
                  </p>
                  <p className="text-center">
                    Number of people making first deposit
                  </p>
                </div>
              </div>
              <div className="text-black text-xs col-span-1 flex flex-col items-center px-2">
                <div className="flex flex-col items-center pt-3">
                  <p className="text-bold text-black2 text-ssm font-semibold">
                    {promotionData?.subordinates_register || "0"}
                  </p>
                  <p>number of register</p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <p className="text-black text-ssm font-semibold">
                    {promotionData?.subordinates_deposit_number || "0"}
                  </p>
                  <p>Deposit number</p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <p className="text-black text-ssm font-semibold">
                    {promotionData?.subordinates_deposit_amount || "0"}
                  </p>
                  <p>Deposit amount</p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <p className="text-bold text-black2 text-ssm font-semibold">
                    {promotionData?.subordinates_first_deposit || "0"}
                  </p>
                  <p className="text-center">
                    Number of people making first deposit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* lg2 screens  */}
        {/* 🔴 First Div - Red Section */}
        <div className="hidden lg2:flex flex-col items-center justify-center bg-gradient-to-r from-[#C10932] to-[#5B0418] rounded-[15px] h-40 px-5 shadow-md mr-4">
          <p className="text-2xl font-semibold mt-5 text-white">
            {promotionData?.yesterday_total_commission
              ? Number(promotionData?.yesterday_total_commission).toFixed(2)
              : "0.00"}
          </p>

          <p className="bg-white text-[15px] mt-2 rounded-full px-3 py-1 text-[#b31217] font-semibold">
            Yesterday&apos;s total commission
          </p>

          <p className="text-xs mt-2 text-white opacity-90">
            Upgrade the level to increase commission income
          </p>
        </div>

        {/* ⚪ Second Div - White Stats Card */}
        <div className="hidden lg2:block bg-white shadow-md mt-4 rounded-[12px] overflow-hidden mr-4">
          {/* Header */}
          <div className="flex text-xs w-full text-[#b31217] font-semibold">
            <div className="bg-[#ffe1e3] py-3 text-center w-1/2 rounded-tl-[12px] border-r border-white">
              Direct subordinates
            </div>
            <div className="bg-[#ffe1e3] py-3 text-center w-1/2 rounded-tr-[12px]">
              Team subordinates
            </div>
          </div>

          {/* Grid Data */}
          <div className="grid grid-cols-2 w-full text-xs text-black">
            {/* Left Column */}
            <div className="col-span-1 flex flex-col items-center py-3 gap-2">
              <div className="text-center">
                <p className="font-semibold text-[13px]">
                  {promotionData?.register || "0"}
                </p>
                <p className="opacity-70">Number of Register</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-[13px]">
                  {promotionData?.deposit_number || "0"}
                </p>
                <p className="opacity-70">Deposit Number</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-[13px]">
                  {promotionData?.deposit_amount || "0"}
                </p>
                <p className="opacity-70">Deposit Amount</p>
              </div>
              <div className="text-center px-2">
                <p className="font-semibold text-[13px]">
                  {promotionData?.first_deposit || "0"}
                </p>
                <p className="opacity-70">
                  Number of People Making First Deposit
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-1 flex flex-col items-center py-3 gap-2">
              <div className="text-center">
                <p className="font-semibold text-[13px]">
                  {promotionData?.subordinates_register || "0"}
                </p>
                <p className="opacity-70">Number of Register</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-[13px]">
                  {promotionData?.subordinates_deposit_number || "0"}
                </p>
                <p className="opacity-70">Deposit Number</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-[13px]">
                  {promotionData?.subordinates_deposit_amount || "0"}
                </p>
                <p className="opacity-70">Deposit Amount</p>
              </div>
              <div className="text-center px-2">
                <p className="font-semibold text-[13px]">
                  {promotionData?.subordinates_first_deposit || "0"}
                </p>
                <p className="opacity-70">
                  Number of People Making First Deposit
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 lg2:px-4 text-[15px] mt-32 lg2:mt-2 pb-0 bg-[] w-full">
          <div className="flex w-full justify-center lg2:justify-end">
            <button
              onClick={() => setCopyInvitation(true)}
              className="w-full lg2:w-auto lg2:px-4 font-semibold py-1.5 rounded-[5px] bg-red text-white"
            >
              INVITATION LINK
            </button>
          </div>

          <div
            onClick={() => setCopyInvitationCode(true)}
            className="w-full cursor-pointer flex items-center justify-between mt-4 bg-white p-4 rounded-md"
          >
            <div className="flex w-full items-center gap-2 text-black whitespace-nowrap overflow-hidden">
              <div className=" flex w-full lg2:justify-between lg2:items-center">
                <div className="flex items-center">
                  <img
                    className="w-6 h-6 shrink-0"
                    src={invitation_code}
                    alt="Invitation"
                  />

                  <p className="text-[14px] text-black font-medium">
                    Copy invitation code
                  </p>
                </div>

                <div className="flex items-center gap-1 ml-2 ">
                  <p className="text-[#A8A5A1] text-[14px] truncate max-w-[120px]">
                    {myDetails?.data?.referral_code || "------"}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#A8A5A1"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16.5H6.75A2.25 2.25 0 014.5 14.25v-9A2.25 2.25 0 016.75 3h9A2.25 2.25 0 0118 5.25V6m-5.25 4.5h5.25m0 0v5.25A2.25 2.25 0 0115.75 18H9a2.25 2.25 0 01-2.25-2.25v-5.25A2.25 2.25 0 019 8.25h6.75A2.25 2.25 0 0118 10.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/promotion/subordinatedata"
            className="w-full flex items-center justify-between mt-2 bg-white p-4 rounded-md"
          >
            <div className="flex items-center gap-2 text-black font-semibold">
              <img className="w-6 h-6" src={sub_ordinate_icon} alt="ds" />
              <p>Subordinate data</p>
            </div>
            <div className="text-xsm text-black">
              <MdKeyboardArrowRight size={30} />
            </div>
          </Link>
          <Link
            to="/promotion/commissiondetail"
            className="w-full flex items-center justify-between mt-2 bg-white p-4 rounded-md"
          >
            <div className="flex items-center gap-2 text-black font-semibold">
              <img className="w-6 h-6" src={commission_icon} alt="ds" />
              <p>Commission details</p>
            </div>
            <div className="text-xsm text-black">
              <MdKeyboardArrowRight size={30} />
            </div>
          </Link>
          <Link
            to="/promotion/invitationrules"
            className="w-full flex items-center justify-between mt-2 bg-white p-4 rounded-md"
          >
            <div className="flex items-center gap-2 text-black font-semibold">
              <img className="w-6 h-6" src={invitation} alt="ds" />
              <p>Invitation rules</p>
            </div>
            <div className="text-xsm text-black">
              <MdKeyboardArrowRight size={30} />
            </div>
          </Link>
          <div className="w-full flex items-center justify-between mt-2 bg-white p-4 rounded-md">
            <div
              className="flex items-center gap-2 text-black font-semibold"
              onClick={() => navigate("/promotion/agentLine")}
            >
              <img className="w-6 h-6" src={customer} alt="ds" />
              <p>Agent line customer service</p>
            </div>
            <div className="text-xsm text-black">
              <MdKeyboardArrowRight size={30} />
            </div>
          </div>
          <Link
            to="/promotion/rebateratio"
            className="w-full flex items-center justify-between mt-2 bg-white p-4 rounded-md"
          >
            <div className="flex items-center gap-2 text-black font-semibold">
              <img className="w-6 h-6" src={rebate_ratio} alt="ds" />
              <p>Rebate ratio</p>
            </div>
            <div className="text-xsm text-black">
              <MdKeyboardArrowRight size={30} />
            </div>
          </Link>
          <div className="mt-2  bg-white p-4 rounded-md">
            <div className="flex items-center gap-2">
              <img className="w-8 h-8" src={promotions_data} alt="df" />
              <h1 className="text-black font-bold">Promotion data</h1>
            </div>
            <div className="grid grid-cols-2 mt-3 text-xs">
              <div className="col-span-1 flex flex-col items-center border-r-[1px] border-black">
                <p className="text-black text-ssm font-semibold">
                  {promotionData?.weekly_commission
                    ? Number(promotionData.weekly_commission).toFixed(2)
                    : "0"}
                </p>
                <p className="text-black">This weak</p>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <p className="text-black text-ssm font-semibold">
                  {promotionData?.total_commission
                    ? Number(promotionData.total_commission).toFixed(2)
                    : "0"}
                </p>
                <p className="text-black">Total commision</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-3 text-xs">
              <div className="col-span-1 flex flex-col items-center border-r-[1px] border-black">
                <p className="text-black  text-ssm font-semibold">
                  {promotionData?.direct_subordinate
                    ? Number(promotionData.direct_subordinate)
                    : "0"}
                </p>
                <p className="text-black"> direct subordinates</p>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <p className="text-black text-ssm font-semibold">
                  {promotionData?.team_subordinate
                    ? Number(promotionData.team_subordinate)
                    : "0"}
                </p>
                <p className="text-black text-center">
                  Total number subordinates in the team
                </p>
              </div>
            </div>
          </div>
        </div>
        {copyInvitation && (
          <div className="fixed inset-0 flex items-center justify-center ">
            <div className="h-14 w-[300px] bg-gray text-red text-ssm font-bold rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p>Copy successfull</p>
            </div>
          </div>
        )}
        {copyInvitationCode && (
          <div className="fixed inset-0 flex items-center justify-center ">
            <div className="h-14 w-[300px] bg-gray text-red text-ssm  rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p>Copy successfull</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PromotionHome;
