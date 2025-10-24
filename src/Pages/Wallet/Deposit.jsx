import { useEffect, useState } from "react";
import { ArrowRight, Clipboard } from "lucide-react";
import { Upload } from "lucide-react";
import phonePay from "../../assets/Wallet/phone pay.png";
import googlePay from "../../assets/Wallet/google pay.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apis from "../../utils/apis";
import { toast } from "react-toastify";
import Loader from "../resuable_component/Loader/Loader"
export default function DepositPage() {
  const [loading, setLoading]=useState(false)
  const [selectedPayment, setSelectedPayment] = useState(1);
  const [amount, setAmount] = useState("");
  
const navigate = useNavigate()
  const quickAmounts = [500, 1000, 5000, 10000, 25000, 50000];
    const [copied, setCopied] = useState("");

    const copyToClipboard = (text, label) => {
      navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    };
  const [active, setActive] = useState("Option 1");

  const options = ["Option 1", "Option 2", "Option 3"];
    const Crypto = [ "USDT BEP20"];
      const [language, setLanguage] = useState("");
      const [openDropdown, setOpenDropdown] = useState(null); //

      const [paymentOptions,setPaymentOptons]=useState([])
      const paymentOption=async()=>{
        try{
          setLoading(true)
          const res = await axios.get(apis.pay_modes);
          setPaymentOptons(res?.data?.data);
          console.log(res?.data?.data);
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }
      useEffect(()=>{
        paymentOption()
        
      },[])
      const handleBappaVentures=async()=>{
        try{
          if(amount < minAmount){
            toast.warn(`Minimum amount ${minAmount}`)
            return
          }
          if (amount > maxAmount){
            toast.warn(`Maximum amount ${maxAmount}`)
            return
          } 
          setLoading(true);
          const payload = {
            user_id: localStorage.getItem("userId"),
            cash: amount,
            type: "1",
          };
          const res=await axios.post(apis.bappa_venture,payload)
          console.log(res)
          if (res?.data?.status === "SUCCESS"){
             window.open(res?.data?.payment_link, "_blank");
             setAmount("")
          }
            if (res?.data?.status === 400) {
              toast.error(res?.data?.error);
            }
          setLoading(false)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }
      const handlecrypto = async () => {
        try {
          if (amount < minAmount) {
            toast.warn(`Minimum amount ${minAmount}`);
            return;
          }
          if (amount > maxAmount) {
            toast.warn(`Maximum amount ${maxAmount}`);
            return;
          }
          setLoading(true);
          const payload = {
            user_id: localStorage.getItem("userId"),
            amount: amount,
            type: "0",
          };
          console.log(payload)

          const res = await axios.post(apis.crypto, payload);
          console.log(res);
          if (res?.data?.status === 400) {
            toast.error(res?.data?.error || res?.data?.message);
          }
          else if(res?.data?.status===200){
            toast.success(res?.data?.message)
            if(res?.data?.data?.status_url){
              window.open(
                res.data.data.status_url,
                "_blank",
                "noopener,noreferrer"
              );
            }
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
          if(error?.response?.data?.status===400){
            toast.error(error?.response?.data?.message);
          }
        } finally {
          setLoading(false);
        }
      };

      const [manualData,setManualData]=useState(null)
      const handleManual=async()=>{
        try{
          setLoading(true)
          const res=await axios.get(apis.get_manual_details)
          console.log("manual",res?.data?.data)
          setManualData(res?.data?.data);
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }

   
      const minAmount = 100;
      const maxAmount = 100000;

        const [file, setFile] = useState(null);
        const [utrNumber, setUtrNumber] = useState("");
 const [fileName, setFileName] = useState("");
        // Convert file to base64
        const handleFileChange = (e) => {
          const selectedFile = e.target.files[0];
          if (!selectedFile) return;

          const reader = new FileReader();
          reader.onloadend = () => {
            setFile(reader.result); // base64 string
          };
          reader.readAsDataURL(selectedFile);
              const file = e.target.files[0];
              if (file) {
                console.log("File selected:", file.name);
                setFileName(file.name);
              }

        };

        const handleManualSubmit = async() => {
          try {
            setLoading(true)
                 if (amount < minAmount) {
                   toast.warn(`Minimum amount ${minAmount}`);
                   return;
                 }
                 if (amount > maxAmount) {
                   toast.warn(`Maximum amount ${maxAmount}`);
                   return;
                 } 
                 if(!file){
                    toast.warn(`Upload your payment slip`);
                    return;
                 }
                 if(!utrNumber){
                      toast.warn(`Upload your utr number`);
                      return;
                 }
             const payload = {
               user_id: localStorage.getItem("userId"),
               cash: amount,
               //  transaction_id: utrNumber || "dummy_transaction_id", // you can replace this
               transaction_id: parseInt(utrNumber, 16),
               screenshot: file || "",
             };

             console.log(payload);
             const res = await axios.post(apis.manual_payin,payload);
             console.log(res?.data)
             if(res?.data?.status===200){
              toast.success(res?.data?.message);
              setUtrNumber("")
              setFileName("")
              setAmount("")
             }
          } catch (error) {
            console.log(error)
          }finally{
            setLoading(false)
          }
         };

         if (loading) {
           return (
             <div className="min-h-screen flex items-center justify-center">
               <Loader />
             </div>
           );
         }
  return (
    <div className="min-h-screen  flex justify-center items-start py-6 px-1">
      <div className="w-full px-3 space-y-2">
        {/* Payment Options */}
        <div className=" px-4 py-4 bg-white  rounded-[8px] shadow">
          <h2 className="text-gray-800 font-semibold mb-4">
            Payment Options :
          </h2>
          {paymentOptions && (
            <div className="grid grid-cols-3 gap-3">
              {paymentOptions
                .filter((item) => item.status === 1)
                .map((item) => (
                  <>
                    <button
                      className={`px-4 rounded-xl border flex flex-col items-center justify-center space-y-1 ${
                        selectedPayment === item?.id
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                      onClick={() => {
                        setSelectedPayment(item?.id);
                        if (item?.id == 2) {
                          handleManual();
                        }
                      }}
                    >
                      <img src={item.image} alt="" className="w-14 h-12 mt-2" />
                      <span className="text-ssm font-medium">{item.name}</span>
                    </button>
                  </>
                ))}
            </div>
          )}
          {/* <div className="grid grid-cols-3 gap-3 mt-2">
            <button
              className={`px-2 py-2 rounded-xl border flex flex-col items-center justify-center space-y-1 ${
                selectedPayment === "whatsup"
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedPayment("whatsup")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-[linear-gradient(92.11deg,#19C262_0%,#0C5C2E_98.22%)] p-1 rounded-[5px]"
              >
                <path
                  d="M12.0018 2.64307C17.1695 2.64307 21.3585 6.83207 21.3585 11.9998C21.3585 17.1675 17.1695 21.3565 12.0018 21.3565C10.3482 21.3594 8.72371 20.9218 7.29533 20.0887L2.64878 21.3565L3.91381 16.7081C3.08008 15.2793 2.64214 13.6541 2.64503 11.9998C2.64503 6.83207 6.83404 2.64307 12.0018 2.64307ZM8.81299 7.60213L8.62585 7.60962C8.50486 7.61795 8.38665 7.64973 8.27778 7.70318C8.17633 7.76074 8.08369 7.83258 8.0027 7.91652C7.89041 8.02225 7.82679 8.11394 7.75848 8.20283C7.4124 8.6528 7.22606 9.20523 7.22889 9.77289C7.23076 10.2314 7.35053 10.6777 7.53767 11.095C7.92036 11.939 8.55006 12.8325 9.38094 13.6606C9.58117 13.8599 9.77767 14.0601 9.98913 14.2463C11.0216 15.1553 12.2518 15.8108 13.5821 16.1607L14.1136 16.2421C14.2867 16.2515 14.4598 16.2384 14.6338 16.23C14.9063 16.2156 15.1723 16.1418 15.4132 16.0138C15.5357 15.9505 15.6552 15.8818 15.7716 15.808C15.7716 15.808 15.8112 15.7812 15.8885 15.7238C16.0149 15.6302 16.0925 15.5638 16.1973 15.4543C16.2759 15.3732 16.3414 15.279 16.3938 15.1717C16.4668 15.0192 16.5398 14.7282 16.5697 14.4859C16.5922 14.3006 16.5856 14.1996 16.5828 14.1369C16.5791 14.0368 16.4958 13.9329 16.405 13.8889L15.8605 13.6447C15.8605 13.6447 15.0464 13.2901 14.5487 13.0637C14.4966 13.041 14.4407 13.028 14.384 13.0253C14.32 13.0186 14.2552 13.0257 14.1942 13.0462C14.1332 13.0667 14.0773 13.1001 14.0303 13.1441C14.0256 13.1422 13.9629 13.1956 13.2864 14.0152C13.2476 14.0674 13.1941 14.1068 13.1328 14.1285C13.0715 14.1502 13.0051 14.1531 12.9421 14.1369C12.8811 14.1206 12.8214 14.1 12.7634 14.0751C12.6474 14.0265 12.6071 14.0077 12.5276 13.9741C11.9904 13.7401 11.4932 13.4234 11.0539 13.0356C10.936 12.9327 10.8266 12.8204 10.7143 12.7118C10.3462 12.3593 10.0254 11.9605 9.75989 11.5254L9.70468 11.4365C9.66563 11.3764 9.63361 11.3121 9.60924 11.2447C9.57369 11.1072 9.66632 10.9968 9.66632 10.9968C9.66632 10.9968 9.89369 10.7479 9.99942 10.6131C10.1023 10.4821 10.1894 10.3549 10.2455 10.2641C10.3559 10.0863 10.3905 9.90389 10.3325 9.7626C10.0705 9.1226 9.79981 8.48603 9.52036 7.85289C9.46515 7.72751 9.30141 7.63769 9.15264 7.61991C9.10211 7.61367 9.05158 7.60868 9.00106 7.60494C8.87542 7.59773 8.74945 7.59898 8.62398 7.60868L8.81299 7.60213Z"
                  fill="white"
                />
              </svg>

              <span className="text-ssm font-medium">WhatsApp Deposit</span>
            </button>
          </div> */}
        </div>
        {/* manual payment options */}
        {selectedPayment === 2 && manualData && (
          <div className="flex space-x-2 p-2">
            {manualData.map((option) => (
              <button
                key={option.id}
                onClick={() => setActive(option.option_name)}
                className={`px-4 py-1 rounded-md font-medium transition ${
                  active === option.option_name
                    ? "bg-red text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {option.option_name}
              </button>
            ))}
          </div>
        )}

        {/* manual payment details */}
        {selectedPayment === 2 && manualData && (
          <div className="space-y-4">
            {manualData.map((option) => {
              if (active !== option.option_name) return null;

              return (
                <div
                  key={option.id}
                  className="bg-white rounded-[8px] shadow p-4"
                >
                  <div className="bg-red text-white text-xs px-3 py-1 rounded-[8px] inline-block mb-1">
                    Current Available Balance: ₹ 1,500
                  </div>

                  <h2 className="text-black font-semibold mb-1">
                    Payment Details
                  </h2>

                  <div className="space-y-3 text-sm">
                    {/* Account Number */}
                    {option.account_number && (
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="text-black font-medium text-ssm">
                            Account
                          </span>
                          <span className="text-black font-medium">
                            {option.account_number}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(option.account_number, "Account")
                          }
                          className="text-gray-500 hover:text-red-600"
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.5 5.216V2.906C5.50013 2.53306 5.64838 2.17544 5.91213 1.91178C6.17589 1.64812 6.53356 1.5 6.9065 1.5H19.0935C19.4665 1.5 19.8243 1.64818 20.088 1.91195C20.3518 2.17572 20.5 2.53347 20.5 2.9065V15.094C20.4999 15.4669 20.3517 15.8244 20.088 16.088C19.8244 16.3517 19.4669 16.4999 19.094 16.5H16.758"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.094 5.5H2.9055C2.53265 5.50027 2.17515 5.64857 1.9116 5.91231C1.64805 6.17605 1.5 6.53365 1.5 6.9065V19.0935C1.5 19.4665 1.64818 19.8243 1.91195 20.088C2.17572 20.3518 2.53347 20.5 2.9065 20.5H15.094C15.4669 20.4999 15.8244 20.3517 16.088 20.088C16.3517 19.8244 16.4999 19.4669 16.5 19.094V6.9055C16.4997 6.53273 16.3515 6.17532 16.0879 5.91178C15.8242 5.64824 15.4668 5.50013 15.094 5.5Z"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* IFSC */}
                    {option.ifsc_code && (
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="text-ssm font-medium">IFSC</span>
                          <span className="text-black font-medium">
                            {option.ifsc_code}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(option.ifsc_code, "IFSC")
                          }
                          className="text-gray-500 hover:text-red-600"
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.5 5.216V2.906C5.50013 2.53306 5.64838 2.17544 5.91213 1.91178C6.17589 1.64812 6.53356 1.5 6.9065 1.5H19.0935C19.4665 1.5 19.8243 1.64818 20.088 1.91195C20.3518 2.17572 20.5 2.53347 20.5 2.9065V15.094C20.4999 15.4669 20.3517 15.8244 20.088 16.088C19.8244 16.3517 19.4669 16.4999 19.094 16.5H16.758"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.094 5.5H2.9055C2.53265 5.50027 2.17515 5.64857 1.9116 5.91231C1.64805 6.17605 1.5 6.53365 1.5 6.9065V19.0935C1.5 19.4665 1.64818 19.8243 1.91195 20.088C2.17572 20.3518 2.53347 20.5 2.9065 20.5H15.094C15.4669 20.4999 15.8244 20.3517 16.088 20.088C16.3517 19.8244 16.4999 19.4669 16.5 19.094V6.9055C16.4997 6.53273 16.3515 6.17532 16.0879 5.91178C15.8242 5.64824 15.4668 5.50013 15.094 5.5Z"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* Account Name */}
                    {option.account_name && (
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="font-medium text-ssm">
                            Account Name
                          </span>
                          <span className="text-gray-700 font-medium">
                            {option.account_name}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(option.account_name, "Account Name")
                          }
                          className="text-gray-500 hover:text-red-600"
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.5 5.216V2.906C5.50013 2.53306 5.64838 2.17544 5.91213 1.91178C6.17589 1.64812 6.53356 1.5 6.9065 1.5H19.0935C19.4665 1.5 19.8243 1.64818 20.088 1.91195C20.3518 2.17572 20.5 2.53347 20.5 2.9065V15.094C20.4999 15.4669 20.3517 15.8244 20.088 16.088C19.8244 16.3517 19.4669 16.4999 19.094 16.5H16.758"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.094 5.5H2.9055C2.53265 5.50027 2.17515 5.64857 1.9116 5.91231C1.64805 6.17605 1.5 6.53365 1.5 6.9065V19.0935C1.5 19.4665 1.64818 19.8243 1.91195 20.088C2.17572 20.3518 2.53347 20.5 2.9065 20.5H15.094C15.4669 20.4999 15.8244 20.3517 16.088 20.088C16.3517 19.8244 16.4999 19.4669 16.5 19.094V6.9055C16.4997 6.53273 16.3515 6.17532 16.0879 5.91178C15.8242 5.64824 15.4668 5.50013 15.094 5.5Z"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* Account Type */}
                    {option.account_type && (
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="font-medium text-ssm">
                            Account Type
                          </span>
                          <span className="text-gray-700 font-medium">
                            {option.account_type}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(option.account_type, "Account Type")
                          }
                          className="text-gray-500 hover:text-red-600"
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.5 5.216V2.906C5.50013 2.53306 5.64838 2.17544 5.91213 1.91178C6.17589 1.64812 6.53356 1.5 6.9065 1.5H19.0935C19.4665 1.5 19.8243 1.64818 20.088 1.91195C20.3518 2.17572 20.5 2.53347 20.5 2.9065V15.094C20.4999 15.4669 20.3517 15.8244 20.088 16.088C19.8244 16.3517 19.4669 16.4999 19.094 16.5H16.758"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.094 5.5H2.9055C2.53265 5.50027 2.17515 5.64857 1.9116 5.91231C1.64805 6.17605 1.5 6.53365 1.5 6.9065V19.0935C1.5 19.4665 1.64818 19.8243 1.91195 20.088C2.17572 20.3518 2.53347 20.5 2.9065 20.5H15.094C15.4669 20.4999 15.8244 20.3517 16.088 20.088C16.3517 19.8244 16.4999 19.4669 16.5 19.094V6.9055C16.4997 6.53273 16.3515 6.17532 16.0879 5.91178C15.8242 5.64824 15.4668 5.50013 15.094 5.5Z"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* Wallet Address */}
                    {option.wallet_address && (
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="font-medium text-ssm">
                            Wallet Address
                          </span>
                          <span className="text-gray-700 font-medium">
                            {option.wallet_address}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              option.wallet_address,
                              "Wallet Address"
                            )
                          }
                          className="text-gray-500 hover:text-red-600"
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.5 5.216V2.906C5.50013 2.53306 5.64838 2.17544 5.91213 1.91178C6.17589 1.64812 6.53356 1.5 6.9065 1.5H19.0935C19.4665 1.5 19.8243 1.64818 20.088 1.91195C20.3518 2.17572 20.5 2.53347 20.5 2.9065V15.094C20.4999 15.4669 20.3517 15.8244 20.088 16.088C19.8244 16.3517 19.4669 16.4999 19.094 16.5H16.758"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.094 5.5H2.9055C2.53265 5.50027 2.17515 5.64857 1.9116 5.91231C1.64805 6.17605 1.5 6.53365 1.5 6.9065V19.0935C1.5 19.4665 1.64818 19.8243 1.91195 20.088C2.17572 20.3518 2.53347 20.5 2.9065 20.5H15.094C15.4669 20.4999 15.8244 20.3517 16.088 20.088C16.3517 19.8244 16.4999 19.4669 16.5 19.094V6.9055C16.4997 6.53273 16.3515 6.17532 16.0879 5.91178C15.8242 5.64824 15.4668 5.50013 15.094 5.5Z"
                              stroke="#C10932"
                              stroke-width="2"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* QR Code */}
                    {option.option_name !== "Option 1" && option.qr_code && (
                      <div className="flex flex-col items-center mt-2">
                        <img
                          src={option.qr_code}
                          alt="QR Code"
                          className="w-40 h-40"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* currency for crypto */}
        {selectedPayment === 3 && (
          <div
            className="w-full relative"
            style={{
              fontFamily: "Roboto",
            }}
          >
            <label className="block text-red text-lg font-medium mb-0">
              Select Currency
            </label>

            <div
              className="flex justify-between w-full  bg-white cursor-pointer border border-[#ADADAD] rounded-md px-3 py-2 items-center "
              onClick={() =>
                setOpenDropdown(openDropdown === "language" ? null : "language")
              }
            >
              <div
                className={` ${
                  openDropdown === "language" ? "ring-none" : ""
                } text-[#969696]`}
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontWeight: "400px",
                }}
              >
                {language || "Select crypto"}
              </div>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.66 0.433036L13.72 1.49404L7.943 7.27304C7.85043 7.36619 7.74036 7.44012 7.61911 7.49057C7.49786 7.54101 7.36783 7.56699 7.2365 7.56699C7.10517 7.56699 6.97514 7.54101 6.85389 7.49057C6.73264 7.44012 6.62257 7.36619 6.53 7.27304L0.75 1.49404L1.81 0.434036L7.235 5.85804L12.66 0.433036Z"
                  fill="#969696"
                />
              </svg>
            </div>
            {openDropdown === "language" && (
              <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-10">
                {Crypto.map((lang, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                      i !== Crypto.length - 1 ? "border-b border-[#E5E7EB]" : ""
                    }`}
                    style={{
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 400, // px hata diya, px mat use karo
                    }}
                    onClick={() => {
                      setLanguage(lang);
                      setOpenDropdown(null);
                    }}
                  >
                    {/* Text */}
                    <span>{lang}</span>

                    {/* Circle indicator */}
                    <span
                      className={`w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center`}
                    >
                      {language === lang && (
                        <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Amount Section */}
        <div className="rounded-[8px] shadow p-4 bg-white">
          <h2 className="text-black font-semibold mb-3">
            Amount<span className="text-red-500">*</span>
          </h2>
          <div className="flex items-center gap-2 border rounded-[8px] border-grayBorder px-3 py-1">
            <span className="text-gray-500">₹</span>
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full outline-none text-gray-700 font-normal"
            />
            <span className="text-black font-medium">INR</span>
          </div>
          <p className="text-ssm text-lightGray mt-1 font-semibold">
            Min {minAmount} - Max {maxAmount}
          </p>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            {quickAmounts.map((val, idx) => (
              <button
                key={idx}
                onClick={() => setAmount(val)}
                className="bg-red text-white rounded-[8px] py-2 font-semibold hover:bg-red-700"
              >
                +{val.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
        {/* next for crypto */}
        {/* Submit Button */}
        {selectedPayment === 3 && (
          <button
            type="next"
            className="w-full bg-red text-white font-medium py-3 rounded-md "
            style={{
              fontFamily: "Roboto",
              fontSize: "13.5px",
            }}
            onClick={() => {
              // navigate("/CryptoDeposit")
              handlecrypto();
            }}
          >
            Next
          </button>
        )}
        {/* payment slip */}
        {selectedPayment === 2 && (
          <div className="space-y-4">
            {/* Upload Slip Section */}
            <div className="bg-white rounded-[8px] shadow p-4">
              <label className="block font-medium text-black mb-2 text-sm">
                Upload your payment slip below
                <span className="text-red-500">*</span>
              </label>

              <div
                className="border-2 border-dashed border-darkGray rounded-[8px] px-1 py-2 flex items-center  text-gray-500 cursor-pointer hover:border-red-500 transition gap-2"
                onClick={() =>
                  document.getElementById("paymentSlipInput").click()
                }
              >
                {/* <Upload className="text-red-600 w-6 h-6 mb-2" /> */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.625 4.375H4.375C3.91087 4.375 3.46575 4.55937 3.13756 4.88756C2.80937 5.21575 2.625 5.66087 2.625 6.125V21.875C2.625 22.3391 2.80937 22.7842 3.13756 23.1124C3.46575 23.4406 3.91087 23.625 4.375 23.625H23.625C24.0891 23.625 24.5342 23.4406 24.8624 23.1124C25.1906 22.7842 25.375 22.3391 25.375 21.875V6.125C25.375 5.66087 25.1906 5.21575 24.8624 4.88756C24.5342 4.55937 24.0891 4.375 23.625 4.375ZM17.0625 9.625C17.3221 9.625 17.5758 9.70198 17.7917 9.8462C18.0075 9.99042 18.1758 10.1954 18.2751 10.4352C18.3744 10.6751 18.4004 10.939 18.3498 11.1936C18.2991 11.4482 18.1741 11.682 17.9906 11.8656C17.807 12.0491 17.5732 12.1741 17.3186 12.2248C17.064 12.2754 16.8001 12.2494 16.5602 12.1501C16.3204 12.0508 16.1154 11.8825 15.9712 11.6667C15.827 11.4508 15.75 11.1971 15.75 10.9375C15.75 10.5894 15.8883 10.2556 16.1344 10.0094C16.3806 9.76328 16.7144 9.625 17.0625 9.625ZM23.625 21.875H4.375V17.5755L9.44344 12.5059C9.5247 12.4246 9.6212 12.36 9.72743 12.316C9.83365 12.272 9.94751 12.2493 10.0625 12.2493C10.1775 12.2493 10.2913 12.272 10.3976 12.316C10.5038 12.36 10.6003 12.4246 10.6816 12.5059L18.0469 19.8691C18.2111 20.0332 18.4337 20.1255 18.6659 20.1255C18.8981 20.1255 19.1208 20.0332 19.285 19.8691C19.4492 19.7049 19.5414 19.4822 19.5414 19.25C19.5414 19.0178 19.4492 18.7951 19.285 18.6309L17.3534 16.7005L18.9219 15.1309C19.086 14.967 19.3084 14.8749 19.5404 14.8749C19.7724 14.8749 19.9948 14.967 20.1589 15.1309L23.625 18.6014V21.875Z"
                    fill="#C10932"
                  />
                </svg>

                <p className="text-ssm font-medium text-darkGray">
                  {fileName ? fileName : "Upload or drop a file right here"}
                </p>
                <input
                  type="file"
                  id="paymentSlipInput"
                  className="hidden"
                  onChange={(e) => {
                    console.log("jii");
                    handleFileChange(e);
                  }}
                  onClick={() => {
                    console.log("jii"), handleFileChange;
                  }}
                />
              </div>
            </div>

            {/* UTR Number Section */}
            <div className="bg-white rounded-[8px] shadow p-4">
              <label className="block font-medium text-black mb-2">
                UTR Number
              </label>
              <input
                type="number"
                placeholder="Enter UTR Number"
                onChange={(e) => setUtrNumber(e.target.value)}
                className="w-full border  border-dashed rounded-[8px] border-darkGray px-3 py-2 text-ssm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        )}

        {/* Offers Section */}
        {selectedPayment !== 3 && (
          <div className="rounded-[8px] shadow p-4 bg-white">
            <h2 className="text-lightGray font-semibold mb-0 text-ssm uppercase">
              Available Offers
            </h2>
            <div className=" flex items-center justify-between px-1 py-0 ">
              <div className="flex items-center gap-1">
                <span className="text-green-600 font-bold text-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="#AFEE9A" />
                    <path
                      d="M12 19.0082L13.5282 19.8925C13.7121 19.9988 13.9307 20.0277 14.1358 19.9728C14.341 19.918 14.516 19.784 14.6224 19.6001L15.5066 18.0703H17.2687C17.4812 18.0703 17.6849 17.9859 17.8351 17.8357C17.9853 17.6855 18.0697 17.4818 18.0697 17.2693V15.508L19.5987 14.6245C19.7827 14.5184 19.917 14.3435 19.972 14.1384C19.9992 14.0367 20.0062 13.9307 19.9924 13.8264C19.9787 13.7221 19.9445 13.6215 19.8919 13.5304L19.0076 12.0006L19.8927 10.4707C19.9989 10.2868 20.0277 10.0681 19.9727 9.86296C19.9177 9.65777 19.7835 9.48283 19.5995 9.37661L18.0697 8.49234V6.73102C18.0697 6.51859 17.9853 6.31486 17.8351 6.16465C17.6849 6.01444 17.4812 5.93005 17.2687 5.93005H15.5074L14.6232 4.40021C14.5705 4.30908 14.5004 4.22922 14.4169 4.16521C14.3333 4.10119 14.238 4.05426 14.1363 4.02711C14.0346 3.99996 13.9286 3.99312 13.8242 4.00697C13.7199 4.02082 13.6193 4.0551 13.5282 4.10785L12 4.99212L10.4718 4.10785C10.2877 4.00212 10.0694 3.97343 9.86425 4.02804C9.65914 4.08266 9.48395 4.21615 9.37686 4.3994L8.4926 5.92925H6.73128C6.51886 5.92925 6.31513 6.01364 6.16492 6.16385C6.01471 6.31406 5.93032 6.51779 5.93032 6.73022V8.49234L4.40048 9.37661C4.27926 9.44752 4.17859 9.54877 4.10837 9.67039C4.03816 9.79201 4.0008 9.92981 4 10.0702C4 10.2096 4.03685 10.3482 4.10813 10.4715L4.99239 11.9998L4.10813 13.5296C4.00185 13.7135 3.97295 13.932 4.02777 14.1372C4.0826 14.3424 4.21666 14.5174 4.40048 14.6237L5.93032 15.5072V17.2685C5.93032 17.481 6.01471 17.6847 6.16492 17.8349C6.31513 17.9851 6.51886 18.0695 6.73128 18.0695H8.4926L9.37686 19.5993C9.42952 19.6905 9.49963 19.7703 9.58317 19.8343C9.66671 19.8984 9.76204 19.9453 9.86373 19.9724C9.96542 19.9996 10.0715 20.0064 10.1758 19.9926C10.2801 19.9787 10.3807 19.9444 10.4718 19.8917L12 19.0082ZM16.0128 9.99736C16.0127 10.3161 15.886 10.6218 15.6605 10.8471C15.4351 11.0724 15.1293 11.1989 14.8106 11.1988C14.4918 11.1987 14.1862 11.072 13.9609 10.8465C13.7356 10.621 13.609 10.3153 13.6091 9.99656C13.6093 9.67781 13.736 9.37215 13.9614 9.14684C14.1869 8.92152 14.4926 8.795 14.8114 8.79511C15.1301 8.79521 15.4358 8.92194 15.6611 9.1474C15.8864 9.37287 16.0129 9.67861 16.0128 9.99736ZM8.3236 10.2376L9.28395 8.9561L15.6916 13.7619L14.7313 15.0434L8.3236 10.2376ZM8.00321 14.0022C8.00326 13.8444 8.0344 13.6881 8.09485 13.5423C8.1553 13.3965 8.24387 13.264 8.35551 13.1525C8.46714 13.0409 8.59966 12.9524 8.7455 12.8921C8.89133 12.8317 9.04763 12.8007 9.20545 12.8007C9.36328 12.8008 9.51956 12.8319 9.66535 12.8924C9.81114 12.9528 9.9436 13.0414 10.0552 13.153C10.1667 13.2647 10.2552 13.3972 10.3156 13.543C10.3759 13.6889 10.4069 13.8452 10.4069 14.003C10.4068 14.3217 10.2801 14.6274 10.0546 14.8527C9.82914 15.078 9.5234 15.2045 9.20465 15.2044C8.88591 15.2043 8.58025 15.0776 8.35494 14.8521C8.12963 14.6267 8.0031 14.3209 8.00321 14.0022Z"
                      fill="#4EB92B"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-ssm font-medium text-green-700 -mb-2">
                    5% extra on this deposit
                  </p>
                  <button
                    className="text-xs text-lightGray"
                    onClick={() => navigate("/cuppon")}
                  >
                    View all coupons &gt;
                  </button>
                </div>
              </div>
              <button className="px-3 py-1  text-green-500 text-vsm rounded-md border border-green-500">
                Apply
              </button>
            </div>
          </div>
        )}

        {/* indian payment */}
        {/* Show Indianpay Wallets (only if selected) */}
      
        {/* Terms Checkbox */}
        {/* <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 rounded border-gray-400"
          />
          <label htmlFor="terms" className="text-ssm text-gray-600">
            I have read and agree with{" "}
            <p className="text-red-600 cursor-pointer">
              the terms of payment and withdrawal policy.
            </p>
          </label>
        </div> */}

        {selectedPayment === 2 && (
          <button
            type="submit"
            className={`w-full  text-white text-ssm font-medium py-3 rounded-md text-center ${
              amount >= minAmount && amount <= maxAmount
                ? "bg-red hover:bg-red-600"
                : "bg-lightGray cursor-not-allowed"
            }`}
            onClick={handleManualSubmit}
          >
            SUBMIT
          </button>
        )}
        {selectedPayment === 1 && (
          <button
            type="submit"
            onClick={handleBappaVentures}
            // className="w-full bg-lightGray text-white text-ssm font-medium py-3 rounded-md text-center"
            className={`w-full text-white text-ssm font-medium py-3 rounded-md text-center transition-colors duration-300 ${
              amount >= minAmount && amount <= maxAmount
                ? "bg-red hover:bg-red-600"
                : "bg-lightGray cursor-not-allowed"
            }`}
          >
            SUBMIT
          </button>
        )}

        {selectedPayment === 2 && (
          <div className="w-full  mt-4 hide-scrollbar">
            <button className="w-full bg-white rounded-xl shadow p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-[linear-gradient(134.08deg,#18B95E_0.78%,#235313_99.22%)] p-4 rounded-[15px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0013 2.66675C23.3653 2.66675 29.3347 8.63608 29.3347 16.0001C29.3347 23.3641 23.3653 29.3334 16.0013 29.3334C13.645 29.3375 11.3301 28.7139 9.29466 27.5267L2.67332 29.3334L4.47599 22.7094C3.28793 20.6733 2.66386 18.3574 2.66799 16.0001C2.66799 8.63608 8.63732 2.66675 16.0013 2.66675ZM11.4573 9.73342L11.1907 9.74408C11.0182 9.75596 10.8498 9.80125 10.6947 9.87741C10.5501 9.95943 10.4181 10.0618 10.3027 10.1814C10.1427 10.3321 10.052 10.4627 9.95466 10.5894C9.46148 11.2306 9.19595 12.0178 9.19999 12.8267C9.20266 13.4801 9.37332 14.1161 9.63999 14.7107C10.1853 15.9134 11.0827 17.1867 12.2667 18.3667C12.552 18.6507 12.832 18.9361 13.1333 19.2014C14.6046 20.4966 16.3577 21.4307 18.2533 21.9294L19.0107 22.0454C19.2573 22.0587 19.504 22.0401 19.752 22.0281C20.1402 22.0076 20.5193 21.9025 20.8627 21.7201C21.0371 21.6299 21.2075 21.532 21.3733 21.4267C21.3733 21.4267 21.4298 21.3885 21.54 21.3067C21.72 21.1734 21.8307 21.0787 21.98 20.9227C22.092 20.8072 22.1853 20.673 22.26 20.5201C22.364 20.3027 22.468 19.8881 22.5107 19.5427C22.5427 19.2787 22.5333 19.1347 22.5293 19.0454C22.524 18.9027 22.4053 18.7547 22.276 18.6921L21.5 18.3441C21.5 18.3441 20.34 17.8387 19.6307 17.5161C19.5564 17.4838 19.4769 17.4652 19.396 17.4614C19.3048 17.4519 19.2125 17.4621 19.1256 17.4913C19.0386 17.5205 18.959 17.5681 18.892 17.6307C18.8853 17.6281 18.796 17.7041 17.832 18.8721C17.7767 18.9464 17.7004 19.0026 17.6131 19.0335C17.5257 19.0644 17.4311 19.0685 17.3413 19.0454C17.2544 19.0223 17.1693 18.9928 17.0867 18.9574C16.9213 18.8881 16.864 18.8614 16.7507 18.8134C15.9852 18.48 15.2766 18.0287 14.6507 17.4761C14.4827 17.3294 14.3267 17.1694 14.1667 17.0147C13.6421 16.5124 13.185 15.9441 12.8067 15.3241L12.728 15.1974C12.6723 15.1118 12.6267 15.0201 12.592 14.9241C12.5413 14.7281 12.6733 14.5707 12.6733 14.5707C12.6733 14.5707 12.9973 14.2161 13.148 14.0241C13.2947 13.8374 13.4187 13.6561 13.4987 13.5267C13.656 13.2734 13.7053 13.0134 13.6227 12.8121C13.2493 11.9001 12.8635 10.993 12.4653 10.0907C12.3867 9.91208 12.1533 9.78408 11.9413 9.75875C11.8693 9.74986 11.7973 9.74275 11.7253 9.73741C11.5463 9.72715 11.3668 9.72893 11.188 9.74275L11.4573 9.73342Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm text-gray-900">
                    Chat on WhatsApp
                  </p>
                  <p className="text-ssm text-gray-500">
                    Reach out to us on WhatsApp for personalized support
                  </p>
                </div>
              </div>
              <ArrowRight className="w-14 h-5 text-darkGray" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
