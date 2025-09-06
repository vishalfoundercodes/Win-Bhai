import React from "react";

export default function PersonalInfo() {
  return (
    <div className="p-4">
      <form className="space-y-4 bg-white p-6 rounded-2xl">
        {/* User Name */}
        <div>
          <label className="block text-ssm font-semibold text-red mb-1">
            User Name
          </label>
          <input
            type="text"
            placeholder="Enter name"
            defaultValue="Vikas"
            className="w-full rounded-md bg-gray-100 px-3 py-2 text-ssm focus:outline-none border border-grayBorder font-semibold text-grayBorder"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-ssm font-semibold text-red mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            defaultValue="Vikas Sharma"
            className="w-full rounded-md bg-gray-100 px-3 py-2 text-ssm font-semibold text-grayBorder focus:outline-none border border-grayBorder"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-ssm font-semibold text-red mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full rounded-md bg-gray-100 px-3 py-2 text-ssm focus:outline-none border border-grayBorder font-semibold text-grayBorder"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-ssm font-semibold text-red mb-1">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            defaultValue="098764321"
            className="w-full rounded-md bg-gray-100 px-3 py-2 text-ssm focus:outline-none border border-grayBorder font-semibold text-grayBorder"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-ssm font-semibold text-red mb-1">
            Address
          </label>
          <input
            type="text"
            placeholder="Enter address"
            className="w-full rounded-md bg-gray-100 px-3 py-2 text-ssm focus:outline-none border border-grayBorder font-semibold text-grayBorder"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-ssm font-semibold text-red mb-1">
            City
          </label>
          <input
            type="text"
            placeholder="Enter city"
            className="w-full rounded-md bg-gray-100 px-3 py-2 text-ssm focus:outline-none border border-grayBorder font-semibold text-grayBorders"
          />
        </div>

        {/* Pin Code */}
        <div>
          <label className="block text-ssm font-semibold text-red mb-1">
            Pin Code
          </label>
          <input
            type="text"
            placeholder="Enter pin code"
            className="w-full rounded-md bg-gray-100 px-3 py-2 text-ssm focus:outline-none border border-grayBorder font-semibold text-grayBorder"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            className="flex-1 border border-darkGray rounded-md py-2 text-ssm font-medium text-darkGray  "
          >
            Confirm
          </button>
          <button
            type="submit"
            className="flex-1 bg-red text-white rounded-md py-2 text-ssm "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
