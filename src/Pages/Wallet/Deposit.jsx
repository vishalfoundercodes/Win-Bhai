import { useState } from "react";
import { ArrowRight, Clipboard } from "lucide-react";
import { Upload } from "lucide-react";
import phonePay from "../../assets/Wallet/phone pay.png";
import googlePay from "../../assets/Wallet/google pay.png";
import { useNavigate } from "react-router-dom";
export default function DepositPage() {
  const [selectedPayment, setSelectedPayment] = useState("indianpay");
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
    const Crypto = ["USDT (Tron)", "USDT BEP20"];
      const [language, setLanguage] = useState("");
      const [openDropdown, setOpenDropdown] = useState(null); //
  return (
    <div className="min-h-screen  flex justify-center items-start py-6 px-1">
      <div className="w-full px-3 space-y-2">
        {/* Payment Options */}
        <div className=" px-4 py-4 bg-white  rounded-[8px] shadow">
          <h2 className="text-gray-800 font-semibold mb-4">
            Payment Options :
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <button
              className={`px-4 rounded-xl border flex flex-col items-center justify-center space-y-1 ${
                selectedPayment === "indianpay"
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedPayment("indianpay")}
            >
              <svg
                width="88"
                height="41"
                viewBox="0 0 94 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g filter="url(#filter0_dd_824_1448)">
                  <rect
                    x="2.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <rect
                    x="3"
                    y="0.5"
                    width="34"
                    height="34"
                    rx="17"
                    stroke="black"
                    stroke-opacity="0.01"
                    shape-rendering="crispEdges"
                  />
                  <g clip-path="url(#clip0_824_1448)">
                    <path
                      d="M18.7292 16.0415H20.8181V19.365C20.5333 19.5074 20.1537 19.5548 19.8689 19.5548C19.1096 19.5548 18.7292 19.1752 18.7292 18.3202V16.0415ZM28.2705 19.4528C27.1917 24.0209 22.6144 26.8492 18.0471 25.7705C13.479 24.6924 10.6507 20.1144 11.7295 15.5471C12.8082 10.979 17.3855 8.15066 21.9528 9.22945C26.5209 10.3082 29.3492 14.8855 28.2705 19.4528ZM23.8568 15.2822C23.8539 15.1194 23.788 14.9642 23.6729 14.8491C23.5578 14.734 23.4026 14.6681 23.2399 14.6652H22.1002L19.4892 11.6746C19.252 11.3899 18.8723 11.295 18.4926 11.3899L17.5902 11.6739C17.4478 11.7214 17.4004 11.9112 17.4953 12.0061L20.3435 14.712H16.0234C15.881 14.712 15.7861 14.8069 15.7861 14.9492V15.4238C15.7861 15.756 16.0708 16.0408 16.403 16.0408H17.0675V18.3195C17.0675 20.0287 17.9692 21.0253 19.4885 21.0253C19.9631 21.0253 20.3428 20.9779 20.8181 20.788V22.3074C20.8181 22.7345 21.1503 23.0667 21.5774 23.0667H22.2418C22.3158 23.0621 22.3856 23.0306 22.438 22.9781C22.4904 22.9257 22.5219 22.856 22.5266 22.782V15.994H23.6188C23.7612 15.994 23.8561 15.8991 23.8561 15.7567L23.8568 15.2822Z"
                      fill="#613BBC"
                    />
                  </g>
                </g>
                <g filter="url(#filter1_dd_824_1448)">
                  <rect
                    x="20.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <rect
                    x="21"
                    y="0.5"
                    width="34"
                    height="34"
                    rx="17"
                    stroke="black"
                    stroke-opacity="0.01"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M41.85 13.667L41.81 13.671C41.13 13.861 41.267 14.819 40.029 14.901H39.909C39.8915 14.9004 39.874 14.9021 39.857 14.906H39.856C39.8033 14.9186 39.7564 14.9487 39.723 14.9914C39.6896 15.0341 39.6716 15.0868 39.672 15.141V16.231C39.672 16.365 39.778 16.472 39.909 16.472H40.554V21.095C40.554 21.227 40.658 21.333 40.787 21.333H41.845C41.9074 21.3322 41.967 21.3067 42.0107 21.2621C42.0543 21.2175 42.0785 21.1574 42.078 21.095V16.472H42.678C42.808 16.472 42.914 16.365 42.914 16.231V15.141C42.914 15.078 42.8893 15.0176 42.8451 14.9727C42.801 14.9278 42.741 14.902 42.678 14.901H42.066V13.886C42.066 13.8283 42.0434 13.773 42.003 13.7318C41.9626 13.6907 41.9077 13.668 41.85 13.667ZM46.075 14.837C45.677 14.837 45.313 14.987 45.033 15.232V15.108C45.029 15.0482 45.0028 14.992 44.9595 14.9506C44.9162 14.9091 44.8589 14.8854 44.799 14.884H43.729C43.6657 14.885 43.6054 14.9111 43.5612 14.9564C43.517 15.0017 43.4925 15.0627 43.493 15.126V21.046C43.4925 21.1093 43.517 21.1703 43.5612 21.2156C43.6054 21.2609 43.6657 21.2869 43.729 21.288H44.799C44.919 21.288 45.016 21.197 45.032 21.079V16.829C45.0279 16.7259 45.0645 16.6253 45.1339 16.549C45.2033 16.4727 45.3 16.4267 45.403 16.421H45.599C45.6819 16.4268 45.7608 16.4583 45.825 16.511C45.8718 16.5497 45.9092 16.5985 45.9343 16.6538C45.9594 16.709 45.9716 16.7693 45.97 16.83V20.904L45.974 21.059C45.9737 21.1223 45.9985 21.1832 46.0429 21.2283C46.0873 21.2734 46.1477 21.2992 46.211 21.3H47.281C47.3421 21.2988 47.4004 21.2743 47.4441 21.2316C47.4878 21.1888 47.5135 21.131 47.516 21.07L47.515 16.824C47.515 16.684 47.577 16.558 47.689 16.484C47.7472 16.4445 47.8148 16.421 47.885 16.416H48.083C48.313 16.436 48.453 16.616 48.453 16.824C48.458 18.22 48.457 19.624 48.457 21.048C48.4567 21.1113 48.4815 21.1722 48.5259 21.2173C48.5703 21.2624 48.6307 21.2882 48.694 21.289H49.764C49.894 21.289 50 21.181 50 21.048V16.505C50 16.195 49.966 16.063 49.92 15.928C49.8136 15.6114 49.6107 15.3361 49.3399 15.1407C49.0691 14.9452 48.744 14.8394 48.41 14.838H48.395C48.179 14.8382 47.9653 14.8826 47.7672 14.9686C47.5691 15.0546 47.3907 15.1803 47.243 15.338C46.952 15.03 46.543 14.838 46.09 14.838L46.075 14.837ZM26.232 14.9C26.2013 14.9003 26.1709 14.9066 26.1426 14.9186C26.1143 14.9306 26.0887 14.948 26.0671 14.9699C26.0456 14.9919 26.0286 15.0178 26.0171 15.0463C26.0055 15.0748 25.9997 15.1053 26 15.136V21.06C26 21.192 26.096 21.298 26.216 21.301H27.306C27.436 21.301 27.543 21.194 27.543 21.061L27.547 19.403H28.57C29.427 19.403 30.023 18.798 30.023 17.922V16.384C30.023 15.507 29.427 14.9 28.57 14.9H26.232ZM35.264 14.9C35.2007 14.9008 35.1403 14.9266 35.0959 14.9717C35.0515 15.0168 35.0267 15.0777 35.027 15.141V17.611C35.027 18.551 35.684 19.219 36.606 19.219H37.281C37.281 19.219 37.297 19.219 37.318 19.223C37.3796 19.2306 37.4363 19.2606 37.4772 19.3072C37.5181 19.3539 37.5405 19.4139 37.54 19.476C37.54 19.606 37.444 19.711 37.321 19.727L37.303 19.731L37 19.737H35.739C35.6761 19.738 35.616 19.7638 35.5719 19.8087C35.5277 19.8536 35.503 19.914 35.503 19.977V21.067C35.5025 21.1303 35.527 21.1913 35.5712 21.2366C35.6154 21.2819 35.6757 21.3079 35.739 21.309H37.489C38.409 21.309 39.066 20.64 39.066 19.701V15.141C39.066 15.078 39.0413 15.0176 38.9971 14.9727C38.953 14.9278 38.893 14.902 38.83 14.901H37.76C37.6971 14.902 37.637 14.9278 37.5929 14.9727C37.5487 15.0176 37.524 15.078 37.524 15.141C37.519 15.928 37.524 16.666 37.524 17.396C37.5232 17.4621 37.4966 17.5252 37.4499 17.5719C37.4032 17.6186 37.3401 17.6452 37.274 17.646H36.825C36.7581 17.6452 36.6942 17.6179 36.6473 17.5701C36.6005 17.5223 36.5745 17.4579 36.575 17.391C36.58 16.637 36.57 15.891 36.57 15.141C36.57 15.078 36.5453 15.0176 36.5011 14.9727C36.457 14.9278 36.397 14.902 36.334 14.901L35.264 14.9ZM31.26 14.906C31.2295 14.9049 31.199 14.91 31.1705 14.9208C31.1419 14.9316 31.1158 14.948 31.0936 14.9691C31.0714 14.9901 31.0537 15.0154 31.0414 15.0433C31.0291 15.0713 31.0225 15.1014 31.022 15.132V16.155C31.022 16.287 31.135 16.395 31.274 16.395H32.687C32.799 16.412 32.887 16.495 32.9 16.625V16.765C32.887 16.889 32.8 16.979 32.693 16.989H31.993C31.063 16.989 30.399 17.619 30.399 18.504V19.773C30.399 20.653 30.969 21.279 31.894 21.279H33.834C34.182 21.279 34.464 21.009 34.464 20.679V16.543C34.464 15.539 33.956 14.906 32.744 14.906H31.26ZM27.547 16.478H28.225C28.364 16.478 28.475 16.593 28.475 16.734V17.57C28.4754 17.6032 28.4693 17.6362 28.4569 17.667C28.4446 17.6979 28.4262 17.726 28.403 17.7498C28.3798 17.7735 28.3521 17.7925 28.3216 17.8056C28.2911 17.8187 28.2582 17.8256 28.225 17.826H28.125C27.9323 17.8273 27.7397 17.8273 27.547 17.826V16.478ZM32.217 18.455H32.662C32.801 18.455 32.914 18.563 32.914 18.695V19.627C32.9143 19.653 32.9096 19.6788 32.9 19.703C32.8822 19.7516 32.8497 19.7935 32.8071 19.8229C32.7645 19.8522 32.7138 19.8677 32.662 19.867H32.217C32.1518 19.8683 32.0888 19.8439 32.0416 19.7989C31.9944 19.754 31.9668 19.6922 31.965 19.627V18.694C31.965 18.562 32.078 18.455 32.217 18.455Z"
                    fill="url(#paint0_linear_824_1448)"
                  />
                </g>
                <g filter="url(#filter2_dd_824_1448)">
                  <rect
                    x="38.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <rect
                    x="39"
                    y="0.5"
                    width="34"
                    height="34"
                    rx="17"
                    stroke="black"
                    stroke-opacity="0.01"
                    shape-rendering="crispEdges"
                  />
                  <rect
                    x="48"
                    y="6"
                    width="16"
                    height="23"
                    fill="url(#pattern0_824_1448)"
                  />
                </g>
                <g filter="url(#filter3_dd_824_1448)">
                  <rect
                    x="56.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <rect
                    x="57"
                    y="0.5"
                    width="34"
                    height="34"
                    rx="17"
                    stroke="black"
                    stroke-opacity="0.01"
                    shape-rendering="crispEdges"
                  />
                  <g clip-path="url(#clip1_824_1448)">
                    <path
                      d="M79.0128 15.1989C79.6725 15.1989 80.1823 15.387 80.5722 15.7634C80.962 16.1397 81.1419 16.6416 81.1419 17.2688V20.2796H80.3023V19.5897H80.2723C79.9124 20.1543 79.4026 20.4365 78.8028 20.4365C78.293 20.4365 77.8432 20.2796 77.4834 19.9661C77.1535 19.6524 76.9436 19.2134 76.9436 18.7429C76.9436 18.2411 77.1235 17.8334 77.4834 17.5197C77.8432 17.2061 78.353 17.0807 78.9528 17.0807C79.4926 17.0807 79.9124 17.1748 80.2423 17.3943V17.1748C80.2423 16.882 80.1378 16.5893 79.9288 16.3986L79.8824 16.3593C79.6425 16.1398 79.3426 16.0143 79.0128 16.0143C78.503 16.0143 78.1131 16.2339 77.8432 16.673L77.0635 16.1711C77.5433 15.5124 78.1731 15.1989 79.0128 15.1989ZM74.7844 13.0662C75.3225 13.0662 75.8339 13.262 76.2427 13.6272L76.3138 13.6934C76.7337 14.0697 76.9436 14.6343 76.9436 15.2302C76.9436 15.8261 76.7337 16.3593 76.3138 16.7669C75.894 17.1746 75.3842 17.3942 74.7844 17.3942L73.345 17.3628V20.2796H72.4453V13.0662H74.7844ZM79.1327 17.8333C78.7728 17.8333 78.473 17.9274 78.2331 18.1156C77.9932 18.2724 77.8732 18.4919 77.8732 18.7742C77.8732 19.0251 77.9932 19.2446 78.1731 19.3701C78.383 19.5269 78.6229 19.621 78.8628 19.621C79.1987 19.621 79.5346 19.4843 79.7973 19.2367L79.8524 19.1819C80.1523 18.8996 80.3023 18.5546 80.3023 18.1783C80.0324 17.9588 79.6425 17.8333 79.1327 17.8333M74.8445 13.9443H73.3451V16.4534H74.8445C75.1743 16.4534 75.5042 16.328 75.7141 16.0771C76.1939 15.6067 76.1939 14.8226 75.7441 14.3521L75.7141 14.3207C75.4742 14.0698 75.1743 13.913 74.8444 13.9444M86 15.3557L83.0312 22.475H82.1316L83.2411 19.9974L81.2919 15.387H82.2515L83.6609 18.931H83.6909L85.0704 15.387H86V15.3557Z"
                      fill="#5F6368"
                    />
                    <path
                      d="M69.7752 16.7357C69.7752 16.4534 69.7452 16.1712 69.7152 15.8889H65.9668V17.4884H68.0959C68.006 17.9902 67.7361 18.4606 67.3163 18.7429V19.7779H68.6057C69.3555 19.0566 69.7753 17.9902 69.7753 16.7357"
                      fill="#4285F4"
                    />
                    <path
                      d="M65.9663 20.7814C67.0459 20.7814 67.9455 20.405 68.6053 19.7777L67.3158 18.7428C66.9559 18.9937 66.5061 19.1505 65.9663 19.1505C64.9467 19.1505 64.047 18.4292 63.7472 17.4255H62.4277V18.4919C63.1174 19.9032 64.4669 20.7814 65.9663 20.7814Z"
                      fill="#34A853"
                    />
                    <path
                      d="M63.7468 17.4256C63.5669 16.9238 63.5669 16.3593 63.7468 15.8261V14.7598H62.4274C61.8575 15.9202 61.8575 17.3002 62.4274 18.4919L63.7468 17.4256Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M65.9676 14.1326C66.5374 14.1326 67.0772 14.3521 67.497 14.7598L68.6366 13.5681C67.9168 12.8781 66.9572 12.4704 65.9976 12.5017C64.4982 12.5017 63.1187 13.3799 62.459 14.7912L63.7785 15.8575C64.0483 14.8539 64.948 14.1326 65.9676 14.1326Z"
                      fill="#EA4335"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_dd_824_1448"
                    x="0.5"
                    y="0"
                    width="39"
                    height="41"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_824_1448"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_824_1448"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_824_1448"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_824_1448"
                      result="effect2_dropShadow_824_1448"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_824_1448"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_dd_824_1448"
                    x="18.5"
                    y="0"
                    width="39"
                    height="41"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_824_1448"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_824_1448"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_824_1448"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_824_1448"
                      result="effect2_dropShadow_824_1448"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_824_1448"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_dd_824_1448"
                    x="36.5"
                    y="0"
                    width="39"
                    height="41"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_824_1448"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_824_1448"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_824_1448"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_824_1448"
                      result="effect2_dropShadow_824_1448"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_824_1448"
                      result="shape"
                    />
                  </filter>
                  <pattern
                    id="pattern0_824_1448"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_824_1448"
                      transform="matrix(0.0016504 0 0 0.00114811 -0.00749856 0)"
                    />
                  </pattern>
                  <filter
                    id="filter3_dd_824_1448"
                    x="54.5"
                    y="0"
                    width="39"
                    height="41"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_824_1448"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_824_1448"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_824_1448"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_824_1448"
                      result="effect2_dropShadow_824_1448"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_824_1448"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_824_1448"
                    x1="26"
                    y1="14.3839"
                    x2="50"
                    y2="20.6161"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0E2258" />
                    <stop offset="1" stop-color="#4CC8F2" />
                  </linearGradient>
                  <clipPath id="clip0_824_1448">
                    <rect
                      width="17"
                      height="17"
                      fill="white"
                      transform="translate(11.5 9)"
                    />
                  </clipPath>
                  <clipPath id="clip1_824_1448">
                    <rect
                      width="24"
                      height="10"
                      fill="white"
                      transform="translate(62 12.5)"
                    />
                  </clipPath>
                  <image
                    id="image0_824_1448"
                    width="615"
                    height="871"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <span className="text-ssm font-medium">Indianpay Payment</span>
            </button>
            <button
              className={`px-4 rounded-xl border flex flex-col items-center justify-center space-y-1 ${
                selectedPayment === "manual"
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedPayment("manual")}
            >
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.7188 6.75C47.979 6.75 50.625 9.396 50.625 12.6562V27.8438C50.625 31.104 47.979 33.75 44.7188 33.75H42.8861L32.8455 43.7906C31.7485 44.8875 30.4462 45.7575 29.013 46.3511C27.5798 46.9447 26.0437 47.2501 24.4924 47.25H5.0625C4.61495 47.25 4.18572 47.0722 3.86926 46.7557C3.55279 46.4393 3.375 46.0101 3.375 45.5625C3.375 45.1149 3.55279 44.6857 3.86926 44.3693C4.18572 44.0528 4.61495 43.875 5.0625 43.875H24.4924C25.6005 43.8752 26.6978 43.6571 27.7216 43.2332C28.7454 42.8094 29.6757 42.1879 30.4594 41.4045L38.1139 33.75H29.3895L26.5072 36.6322C26.1908 36.9491 25.7615 37.1273 25.3137 37.1276C24.8659 37.1279 24.4363 36.9504 24.1194 36.6339C23.8026 36.3175 23.6244 35.8882 23.6241 35.4404C23.6237 34.9926 23.8013 34.563 24.1178 34.2461L30.969 27.3983L32.1367 26.0618C32.4072 25.5338 32.4804 24.9265 32.343 24.3494C32.2057 23.7723 31.8668 23.2631 31.3875 22.9136C30.9081 22.5641 30.3198 22.3971 29.7283 22.4428C29.1368 22.4884 28.581 22.7437 28.161 23.1626L23.1322 28.1947C22.9755 28.352 22.7893 28.4767 22.5843 28.5618C22.3793 28.647 22.1595 28.6908 21.9375 28.6909H18.5625C17.6674 28.6909 16.809 29.0465 16.176 29.6794C15.5431 30.3123 15.1875 31.1708 15.1875 32.0659C15.1866 32.5128 15.0084 32.9412 14.6921 33.2569C14.3757 33.5727 13.947 33.75 13.5 33.75H9.28125C7.71481 33.75 6.21254 33.1277 5.1049 32.0201C3.99726 30.9125 3.375 29.4102 3.375 27.8438V12.6563C3.375 11.0898 3.99726 9.58754 5.1049 8.4799C6.21254 7.37226 7.71481 6.75 9.28125 6.75L44.7188 6.75ZM10.9688 30.375H12.0251C12.2793 29.3939 12.751 28.4826 13.4055 27.7087C13.1787 26.5579 12.5594 25.5215 11.6532 24.7767C10.7471 24.0318 9.61047 23.6248 8.4375 23.625H6.75V26.1563C6.75 26.4487 6.77812 26.73 6.83437 27H8.4375C8.88505 27 9.31428 27.1778 9.63074 27.4943C9.94721 27.8107 10.125 28.2399 10.125 28.6875V30.2906C10.395 30.3446 10.6763 30.3727 10.9688 30.375ZM21.8903 24.6611L25.7749 20.7799C26.821 19.7333 28.2236 19.1203 29.7022 19.0633C31.1809 19.0064 32.6265 19.5098 33.75 20.4727V20.25C33.7499 19.1609 33.4863 18.088 32.9816 17.1229C32.477 16.1578 31.7463 15.3291 30.852 14.7076C29.9576 14.0861 28.9262 13.6902 27.8457 13.5538C26.7652 13.4173 25.6677 13.5443 24.6469 13.924C23.6261 14.3037 22.7124 14.9247 21.9836 15.7341C21.2549 16.5435 20.7329 17.5171 20.462 18.572C20.1912 19.6269 20.1796 20.7317 20.4283 21.792C20.677 22.8523 21.1786 23.8367 21.8903 24.6611ZM45.5625 16.875H47.25V14.3438C47.25 14.0512 47.2219 13.77 47.1656 13.5H45.5625C45.1149 13.5 44.6857 13.3222 44.3693 13.0057C44.0528 12.6893 43.875 12.2601 43.875 11.8125V10.2094C43.605 10.1531 43.3238 10.125 43.0312 10.125L40.5 10.125V11.8125C40.5 13.1552 41.0334 14.4428 41.9828 15.3922C42.9322 16.3416 44.2198 16.875 45.5625 16.875ZM13.5 11.8125V10.125H10.9688C10.6763 10.125 10.395 10.1531 10.125 10.2094V11.8125C10.125 12.2601 9.94721 12.6893 9.63074 13.0057C9.31428 13.3222 8.88505 13.5 8.4375 13.5H6.83437C6.78037 13.77 6.75225 14.0512 6.75 14.3438V16.875H8.4375C9.78016 16.875 11.0678 16.3416 12.0172 15.3922C12.9666 14.4428 13.5 13.1552 13.5 11.8125ZM45.5625 27H47.1656C47.2209 26.7221 47.2492 26.4396 47.25 26.1562V23.625H45.5625C44.2198 23.625 42.9322 24.1584 41.9828 25.1078C41.0334 26.0572 40.5 27.3448 40.5 28.6875V30.375H43.0312C43.3238 30.375 43.605 30.3469 43.875 30.2906V28.6875C43.875 28.2399 44.0528 27.8107 44.3693 27.4943C44.6857 27.1778 45.1149 27 45.5625 27Z"
                  fill="#C10932"
                />
              </svg>

              <span className="text-ssm font-medium">Manual Payment</span>
            </button>
            <button
              className={`px-4 rounded-xl border flex flex-col items-center justify-center space-y-1 ${
                selectedPayment === "crypto"
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedPayment("crypto")}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.3334 25.3667C37.6501 25.3667 37.0834 25.9334 37.0834 26.6167C37.0834 31.55 33.6501 35.6834 29.0334 36.7667L29.4834 36.0167C29.8334 35.4167 29.6501 34.65 29.0501 34.3C28.4667 33.95 27.6834 34.1334 27.3334 34.7334L25.5834 37.65C25.3501 38.0334 25.3501 38.5167 25.5667 38.9C25.7834 39.3 26.2001 39.5334 26.6501 39.5334C33.7667 39.5334 39.5667 33.7334 39.5667 26.6167C39.5834 25.9334 39.0167 25.3667 38.3334 25.3667Z"
                  fill="#C10932"
                />
                <path
                  d="M13.3337 0.366699C6.21699 0.366699 0.416992 6.1667 0.416992 13.2834C0.416992 13.9667 0.983659 14.5334 1.66699 14.5334C2.35033 14.5334 2.91699 13.9667 2.91699 13.2834C2.91699 8.35003 6.35033 4.2167 10.967 3.13337L10.517 3.88337C10.167 4.48337 10.3503 5.25003 10.9503 5.60003C11.5337 5.95003 12.317 5.7667 12.667 5.1667L14.417 2.25003C14.6337 1.8667 14.6503 1.40003 14.417 1.00003C14.2003 0.616699 13.7837 0.366699 13.3337 0.366699Z"
                  fill="#C10932"
                />
                <path
                  d="M35.8337 14.4498C35.8337 19.5832 32.1004 23.8165 27.2171 24.5998C27.2171 24.5832 27.2171 24.5832 27.2171 24.5665C26.7337 18.3498 21.7004 13.2832 15.4004 12.7832C16.1837 7.89984 20.4171 4.1665 25.5504 4.1665C31.2337 4.1665 35.8337 8.7665 35.8337 14.4498Z"
                  fill="#C10932"
                />
                <path
                  d="M16.3501 23.6665C16.3501 23.4165 16.0668 23.0332 15.7168 23.0332H12.2834V24.2832H15.7168C16.0668 24.2999 16.3501 24.0165 16.3501 23.6665Z"
                  fill="#C10932"
                />
                <path
                  d="M16.3834 26.7998H15.7168H12.2834V28.0498H16.4001C16.9334 28.0498 17.3001 27.7165 17.3001 27.4165C17.3001 27.1165 16.9168 26.7998 16.3834 26.7998Z"
                  fill="#C10932"
                />
                <path
                  d="M24.717 24.75C24.3337 19.7 20.3003 15.6667 15.2503 15.2833C14.9837 15.2667 14.7337 15.25 14.4503 15.25C8.76699 15.25 4.16699 19.85 4.16699 25.55C4.16699 31.2333 8.76699 35.8333 14.4503 35.8333C20.1337 35.8333 24.7503 31.2333 24.7503 25.55C24.7503 25.2667 24.7337 25.0167 24.717 24.75ZM16.3837 30.55H15.2837V31.1833C15.2837 31.8667 14.717 32.4333 14.0337 32.4333C13.3503 32.4333 12.7837 31.8667 12.7837 31.1833V30.55H11.0337C10.3503 30.55 9.78366 29.9833 9.78366 29.3V25.55V21.8C9.78366 21.1167 10.3503 20.55 11.0337 20.55H12.7837V19.9167C12.7837 19.2333 13.3503 18.6667 14.0337 18.6667C14.717 18.6667 15.2837 19.2333 15.2837 19.9167V20.55H15.717C17.3837 20.55 18.8503 22.0167 18.8503 23.6833C18.8503 24.1667 18.7337 24.6167 18.5337 25.0333C19.3003 25.6 19.7837 26.4667 19.7837 27.4333C19.7837 29.15 18.267 30.55 16.3837 30.55Z"
                  fill="#C10932"
                />
              </svg>

              <span className="text-ssm font-medium">Crypto</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2">
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
          </div>
        </div>

        {/* manual payment options */}
        {selectedPayment === "manual" && (
          <div className="flex space-x-2 p-2 ">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => setActive(option)}
                className={`px-4 py-1 rounded-md font-medium transition ${
                  active === option
                    ? "bg-red text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* manual payment */}
        {/* Show manual Wallets (only if selected) */}
        {selectedPayment === "manual" && (
          <div className="space-y-4">
            {/* QR Payment Card */}

            {/* Bank Details Card */}
            {active === "Option 1" && (
              <div className="bg-white rounded-[8px] shadow p-4">
                {/* Red Balance Strip */}
                <div className="bg-red text-white text-xs px-3 py-1 rounded-[8px]  inline-block mb-1">
                  Current Available Balance: ₹ 1,500
                </div>

                <h2 className="text-black font-semibold mb-1">
                  Payment Details
                </h2>

                <div className="space-y-3 text-sm">
                  {/* Account */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-black font-medium text-ssm">
                        Account
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-black font-medium">
                          98765432100529637538
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard("98765432100529637538", "Account")
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

                  {/* IFSC */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-ssm font-medium">IFSC</span>
                      <div className="flex items-center gap-2">
                        <span className="text-black font-medium">
                          HDFC875422
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard("HDFC875422", "IFSC")}
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

                  {/* Account Name */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-medium text-ssm">Account Name</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700 font-medium">Dummy</span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard("Dummy", "Account Name")}
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

                  {/* Account Type */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-medium text-ssm">Account Type</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700 font-medium">
                          Saving
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard("Saving", "Account Type")}
                      className="text-gray-500 hover:text-red-600"
                    >
                      {/* <Clipboard size={16} /> */}
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
                </div>
                {copied && (
                  <span className="text-green-600 text-xs mt-1">Copied!</span>
                )}
              </div>
            )}

            {/* manual payment options */}
            {active === "Option 2" && (
              <div className="bg-white rounded-[8px] shadow p-4">
                {/* Red Balance Strip */}
                <div className="bg-red text-white text-xs px-3 py-1 rounded-md inline-block mb-1">
                  Current Available Balance: ₹ 1,500
                </div>

                <h2 className="text-black font-semibold mb-2">
                  Payment Details
                </h2>

                {/* QR + UPI */}
                <div className="flex flex-col items-center rounded-lg p-3">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=987654321@upi"
                    alt="QR Code"
                    className="w-40 h-40"
                  />
                </div>
                <p className="mt-2 text-sm text-black">UPI ID</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-black font-medium">987654321@upi</span>
                  <button
                    onClick={() => copyToClipboard("987654321@upi", "UPI ID")}
                    className="text-gray-500 hover:text-red-600"
                  >
                    {/* <Clipboard size={16} /> */}
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
                {copied === "UPI ID" && (
                  <span className="text-green-600 text-xs mt-1">Copied!</span>
                )}
              </div>
            )}
            {active === "Option 3" && (
              <div className="bg-white rounded-[8px] shadow p-4">
                {/* Red Balance Strip */}
                <div className="bg-red text-white text-xs px-3 py-1 rounded-md inline-block mb-1">
                  Current Available Balance: ₹ 1,500
                </div>

                <h2 className="text-black font-semibold mb-2">
                  Payment Details
                </h2>

                {/* QR + UPI */}
                <div className="flex flex-col items-center rounded-lg p-3">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=987654321@upi"
                    alt="QR Code"
                    className="w-40 h-40"
                  />
                </div>
                <p className="mt-2 text-sm text-black">UPI ID</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-black font-medium">987654321@upi</span>
                  <button
                    onClick={() => copyToClipboard("987654321@upi", "UPI ID")}
                    className="text-gray-500 hover:text-red-600"
                  >
                    {/* <Clipboard size={16} /> */}
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
                {copied === "UPI ID" && (
                  <span className="text-green-600 text-xs mt-1">Copied!</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* currency for crypto */}
        {selectedPayment === "crypto" && (
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
            Min 100 - Max 100000
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
        {selectedPayment === "crypto" && (
          <button
            type="next"
            className="w-full bg-red text-white font-medium py-3 rounded-md "
            style={{
              fontFamily: "Roboto",
              fontSize: "13.5px",
            }}
            onClick={() => navigate("/CryptoDeposit")}
          >
            Next
          </button>
        )}
        {/* payment slip */}
        {selectedPayment === "manual" && (
          <div className="space-y-4">
            {/* Upload Slip Section */}
            <div className="bg-white rounded-[8px] shadow p-4">
              <label className="block font-medium text-black mb-2 text-sm">
                Upload your payment slip below
                <span className="text-red-500">*</span>
              </label>

              <div className="border-2 border-dashed border-darkGray rounded-[8px] px-1 py-2 flex items-center  text-gray-500 cursor-pointer hover:border-red-500 transition gap-2">
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
                  Upload or drop a file right here
                </p>
                <input type="file" className="hidden" />
              </div>
            </div>

            {/* UTR Number Section */}
            <div className="bg-white rounded-[8px] shadow p-4">
              <label className="block font-medium text-black mb-2">
                UTR Number
              </label>
              <input
                type="text"
                placeholder="Enter UTR Number"
                className="w-full border  border-dashed rounded-[8px] border-darkGray px-3 py-2 text-ssm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        )}

        {/* Offers Section */}
        {selectedPayment !== "crypto" && (
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
        {selectedPayment === "indianpay" && (
          <div className="bg-white rounded-[8px] shadow px-4 py-4">
            {/* <p className="text-ssm font-semibold mb-3">Choose Wallet :</p> */}
            <div className="grid grid-cols-4 gap-2 xsm:gap-3 xxs:gap-4">
              {/* PhonePe */}
              <div className="flex flex-col items-center px-2 xsm:px-3 xxs:px-4 py-2 rounded-[5px] cursor-pointer hover:shadow-md bg-[#EEEEEE]">
                <img
                  src={phonePay}
                  alt="PhonePe"
                  className="w-8 h-8 xsm:w-9 xsm:h-9 xxs:w-10 xxs:h-10"
                />
                <p className="text-xs xsm:text-sm mt-1">PhonePe</p>
              </div>

              {/* GPay */}
              <div className="flex flex-col items-center px-2 xsm:px-3 xxs:px-4 py-2 rounded-[5px] cursor-pointer hover:shadow-md bg-[#EEEEEE]">
                <img
                  src={googlePay}
                  alt="GPay"
                  className="w-8 h-8 xsm:w-9 xsm:h-9 xxs:w-9 xxs:h-10"
                />
                <p className="text-xs xsm:text-sm mt-1">G Pay</p>
              </div>

              {/* Empty 1 */}
              <div className="flex flex-col items-center px-2 xsm:px-3 xxs:px-4 py-2 rounded-[5px] cursor-pointer hover:shadow-md bg-[#EEEEEE]">
                <div className="w-8 h-8 xsm:w-9 xsm:h-9 xxs:w-10 xxs:h-10" />
              </div>

              {/* Empty 2 */}
              <div className="flex flex-col items-center px-2 xsm:px-3 xxs:px-4 py-2 rounded-[5px] cursor-pointer hover:shadow-md bg-[#EEEEEE]">
                <div className="w-8 h-8 xsm:w-9 xsm:h-9 xxs:w-10 xxs:h-10" />
              </div>
            </div>
          </div>
        )}
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

        {selectedPayment === "manual" && (
          <button
            type="submit"
            className="w-full bg-lightGray text-white text-ssm font-medium py-3 rounded-md text-center"
          >
            SUBMIT
          </button>
        )}
        {selectedPayment === "indianpay" && (
          <button
            type="submit"
            className="w-full bg-lightGray text-white text-ssm font-medium py-3 rounded-md text-center"
          >
            SUBMIT
          </button>
        )}

        {/* Chat on WhatsApp */}
        {selectedPayment === "manual" && (
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
