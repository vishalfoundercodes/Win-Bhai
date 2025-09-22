import React,{useState} from 'react'
import { useLocation } from "react-router-dom";

export default function UpdateBankAccount() {
  const location = useLocation();
  const mode = location.state?.mode || "update"; // default update
const [selectedPayment, setSelectedPayment] = useState(null);
  const headingText =
    mode === "add" ? "Add Bank Account" : "Update Bank Account";
  return (
    <div
      className="min-h-screen  p-6 rounded-md "
      style={{
        fontFamily: "Roboto",
      }}
    >
      {/* Title */}
      <h2 className="text-[22px] font-semibold text-center mb-6 text-gray-800">
        {headingText}
      </h2>

      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-red mb-1">
            Account Holder Name
          </label>
          <input
            type="text"
            placeholder="Enter account holder’s name"
            className="w-full border bg-white  placeholder:text-sm  text-lightGray rounded-md px-3 py-2 text-sm "
          />
        </div>

        {/* Bank Account Number */}
        <div>
          <label className="block text-sm font-medium text-red mb-1">
            Bank Account Number
          </label>
          <input
            type="text"
            placeholder="Enter bank account number"
            className="w-full border bg-white text-lightGray placeholder:text-sm rounded-md px-3 py-2 text-sm "
          />
        </div>

        {/* Confirm Bank Account Number */}
        <div>
          <label className="block text-sm font-medium text-red mb-1">
            Confirm Bank Account Number
          </label>
          <input
            type="text"
            placeholder="Re-enter bank account number"
            className="w-full border bg-white text-lightGray rounded-md px-3 py-2 text-sm "
          />
        </div>

        {/* IFSC Code */}
        <div>
          <label className="block text-sm font-medium text-red mb-1">
            IFSC Code
          </label>
          <input
            type="text"
            placeholder="Enter IFSC code"
            className="w-full border bg-white text-lightGray rounded-md px-3 py-2 text-sm  placeholder:text-sm "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#969696] text-white font-medium py-3 rounded-md "
          style={{
            fontFamily: "Roboto",
            fontSize: "13.5px",
          }}
        >
          SUBMIT
        </button>
      </form>
      {/* Payment Options */}
      {/* <div className=" px-4 py-4 bg-white  rounded-[8px] shadow mt-5">
        <h2 className="text-gray-800 font-semibold mb-4">Withdraw Options :</h2>
        <div className="grid grid-cols-2 gap-6">
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
                d="M14.625 22.5H10.125L10.125 38.25H14.625L14.625 22.5ZM28.125 22.5L23.625 22.5L23.625 38.25H28.125L28.125 22.5ZM47.25 42.75L4.5 42.75V47.25L47.25 47.25L47.25 42.75ZM41.625 22.5H37.125V38.25H41.625V22.5ZM25.875 7.335L37.5975 13.5L14.1525 13.5L25.875 7.335ZM25.875 2.25L4.5 13.5V18L47.25 18V13.5L25.875 2.25Z"
                fill="#C10932"
              />
            </svg>

            <span className="text-ssm font-medium">Bank Payment</span>
          </button>

          <button
            className={`px-4 rounded-xl border flex flex-col items-center justify-center space-y-1 ${
              selectedPayment === "indianpay"
                ? "border-red-500 bg-red-50"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedPayment("indianpay")}
          >
            <svg
              width="94"
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
        </div>
      </div> */}
    </div>
  );
}

