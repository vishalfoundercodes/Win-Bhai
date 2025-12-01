import axios from "axios";
import { ArrowRight, Mail, Phone } from "lucide-react";
import apis from "../../utils/apis";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";


export default function HelpPage() {
  const [dataSection ,setDataSection]=useState(null)
  const [supportSection ,setSupportSection]=useState(null)
  const navigate=useNavigate()
  const fetchData=async()=>{
    try {
      const res=await axios.get(apis.customer_service)
      console.log(res?.data);
      setDataSection(res?.data?.chat_section);
      setSupportSection(res?.data?.support_section);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div className="min-h-screen bg-gray-100 lg2:bg-transparent px-4 py-8 flex flex-col items-center lg2:items-start lg2:py-0  hide-scrollbar">
      {/* Title */}
      <div className="lg2:flex lg2:gap-4 ">
        <div
          className="hidden lg2:block cursor-pointer"
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
        <div className="lg2:flex lg2:flex-col">
          <h2 className="text-xsm font-semibold text-gray-900 text-center lg2:text-start lg2:-mt-2">
            Need Help? Chat With Us
          </h2>
          <p className="text-ssm text-gray-600 text-center mt-1">
            Choose your favorite platform to connect instantly
          </p>
        </div>
      </div>

      {/* Chat on WhatsApp */}
      {/* <div className="w-full  mt-4 hide-scrollbar">
        <button className="w-full bg-white rounded-xl shadow p-8 flex items-center justify-between">
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
      </div> */}
      {dataSection &&
        dataSection.map((item) => (
          <div key={item.id} className="w-full mt-4 hide-scrollbar">
            <button
              className="w-full bg-white rounded-xl shadow p-8 flex items-center justify-between"
              onClick={() => {
                if (item?.link) {
                  window.open(item.link, "_self");
                } else {
                  console.log("No  link found");
                }
              }}
            >
              <div className="flex items-center gap-4">
                <div className=" rounded-[15px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-36 h-20 object-cover rounded-[15px]"
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-ssm text-gray-500">{item.description}</p>
                </div>
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <ArrowRight className="w-14 h-5 text-darkGray" />
              </a>
            </button>
          </div>
        ))}

      {/* Other Ways */}
      <div className="w-full bg-white rounded-xl shadow p-4 mt-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          Other Ways to Reach Us
        </h3>
        {/* Email */}
        {/* <div className="flex items-center gap-3 mb-3">
          <div className="bg-red p-2 rounded-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 7.53491V16.9999C22 17.7651 21.7077 18.5014 21.1827 19.0582C20.6578 19.6149 19.9399 19.95 19.176 19.9949L19 19.9999H5C4.23479 20 3.49849 19.7076 2.94174 19.1826C2.38499 18.6577 2.04989 17.9398 2.005 17.1759L2 16.9999V7.53491L11.445 13.8319L11.561 13.8979C11.6977 13.9647 11.8478 13.9994 12 13.9994C12.1522 13.9994 12.3023 13.9647 12.439 13.8979L12.555 13.8319L22 7.53491Z"
                fill="white"
              />
              <path
                d="M19.0003 4C20.0803 4 21.0273 4.57 21.5553 5.427L12.0003 11.797L2.44531 5.427C2.6961 5.01982 3.0406 4.6785 3.45008 4.43149C3.85957 4.18448 4.32217 4.03894 4.79931 4.007L5.00031 4H19.0003Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Email Support</p>
            <p className="text-ssm text-gray-500">promo@winbhai.in</p>
          </div>
        </div> */}
        {supportSection &&
          supportSection.map((item) => (
            <div key={item.id} className="flex items-center gap-3 mb-3">
              <div className="rounded-[10px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-11 object-cover rounded-[10px]"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-ssm text-gray-500">
                  {item.description || ""}
                </p>
                {item.link ? (
                  <a href={item.link} className="text-gray-500 text-xs">
                    {item.name} Link
                  </a>
                ) : item.phone ? (
                  <p className="text-xs text-gray-600">Phone: {item.phone}</p>
                ) : null}
              </div>
            </div>
          ))}

        {/* Phone */}
        {/* <div className="flex items-center gap-3">
          <div className="bg-red p-2 rounded-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.3061 14.7614 16.1192 14.7528 15.9406 14.7953C15.762 14.8377 15.599 14.9294 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Phone Support</p>
            <p className="text-ssm text-gray-500">0987654321</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
