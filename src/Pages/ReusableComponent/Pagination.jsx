// import React from "react";

// export default function Pagination({
//   currentPage,
//   totalPages,
//   onPageChange,
//   rowsPerPage,
//   onRowsPerPageChange,
// }) {
//   const pages = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pages.push(i);
//   }

//   return (
//     <div className="flex items-center justify-center space-x-2 mt-4">
//       {/* Prev button */}
//       <button
//         disabled={currentPage === 1}
//         onClick={() => onPageChange(currentPage - 1)}
//         className="px-3 py-1 rounded-md  bg-[#DBDBDB] "
//       >
//         <span className="text-[#222222] font-semibold">Prev</span>
//       </button>

//       {/* Page numbers */}
//       {pages.map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`px-3 py-1 rounded-md border ${
//             page === currentPage
//               ? "bg-red text-white"
//               : "bg-white text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           {page}
//         </button>
//       ))}
//       {pages.map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`px-3 py-1 rounded-md border ${
//             page === currentPage
//               ? "bg-red text-white"
//               : "bg-white text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           {page +1}
//         </button>
//       ))}

//       {/* Next button */}
//       <button
//         disabled={currentPage === totalPages}
//         onClick={() => onPageChange(currentPage + 1)}
//         className="px-3 py-1 rounded-md  bg-[#DBDBDB] text-[#222222] font-semibold"
//       >
//         Next
//       </button>

//       {/* Rows per page dropdown */}
//       <select
//         value={rowsPerPage}
//         onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
//         className="ml-3 px-2 py-1  rounded-md bg-[#DBDBDB] text-[#222222] font-semibold"
//       >
//         {[10, 20, 50, 100].map((num) => (
//           <option key={num} value={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
}) {
  // 🧮 Logic to show only 2–3 page numbers around current page
  const getVisiblePages = () => {
    const pages = [];

    // If only 1 page, return just that
    if (totalPages <= 1) return [1];

    // If on first page
    if (currentPage === 1) {
      pages.push(1);
      if (totalPages > 1) pages.push(2);
      if (totalPages > 2) pages.push(3);
    }
    // If on last page
    else if (currentPage === totalPages) {
      if (totalPages > 2) pages.push(totalPages - 2);
      if (totalPages > 1) pages.push(totalPages - 1);
      pages.push(totalPages);
    }
    // Otherwise (middle pages)
    else {
      pages.push(currentPage - 1, currentPage, currentPage + 1);
    }

    // Filter to avoid going below 1 or above totalPages
    return pages.filter((p) => p >= 1 && p <= totalPages);
  };

  const pages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 mt-4 mb-6">
      {/* Prev button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 rounded-md bg-[#DBDBDB] font-semibold text-[#222222] disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => {
            console.log("Current page clicked:", page);
            onPageChange(page);
          }}
          className={`px-3 py-1 rounded-md border ${
            page === currentPage
              ? "bg-red text-white border-red"
              : "bg-white text-gray-700 hover:bg-gray-200 border-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 rounded-md bg-[#DBDBDB] font-semibold text-[#222222] disabled:opacity-50"
      >
        Next
      </button>

      {/* Rows per page dropdown */}
      <select
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        className="ml-3 px-2 py-1 rounded-md bg-[#DBDBDB] text-[#222222] font-semibold "
      >
        {[10, 20, 50, 100].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}

