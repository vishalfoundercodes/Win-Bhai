import axios from "axios";
import React, { useEffect, useState } from "react";
import apis from "../../utils/apis";
import Loader from "../resuable_component/Loader/Loader";

export default function ProfitLossTable({ payload }) {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [data, setData] = useState([]);
  const [gameHistory, setGameHistory] = useState([]); 

  const fetchTable = async () => {
    try {
      setLoading(true);
      const res = await axios.post(apis.profit_loss, payload);
      const d = res?.data?.data;
      console.log("API data:", d);

      setSummary(d);

      if (d) {
        const rows = [
          {
            event: "Wingo",
            total: formatDiff(d.wingo?.total_win - d.wingo?.total_bet),
            info: `Bet: ${d.wingo?.total_bet} | Win: ${d.wingo?.total_win}`,
          },
          {
            event: "Aviator",
            total: formatDiff(d.aviator?.total_win - d.aviator?.total_bet),
            info: `Bet: ${d.aviator?.total_bet} | Win: ${d.aviator?.total_win}`,
          },
          {
            event: "Chicken",
            total: formatDiff(d.chicken?.total_win - d.chicken?.total_bet),
            info: `Bet: ${d.chicken?.total_bet} | Win: ${d.chicken?.total_win}`,
          },
        ];
        setData(rows);
      }
      // ✅ game_history directly set
      setGameHistory(d.game_history || []);
    

    } catch (error) {
      console.error("Error fetching table:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDiff = (val) => {
    if (isNaN(val)) return "0";
    const fixed = val.toFixed(2);
    return val > 0 ? `+${fixed}` : fixed;
  };

  // 👇 Refetch every time payload changes
  useEffect(() => {
    if (payload?.user_id) {
      fetchTable();
    }
  }, [payload]);


  const grandDiff =
    summary?.grand_total?.total_win - summary?.grand_total?.total_bet || 0;
  const pageDiff = grandDiff;

    const gameHistoryRows = gameHistory.map((g) => {
      const diff = g.total_win - g.total_bet;

      return {
        event: g.game_name,
        total: formatDiff(diff), // + / - format
        info: `Bet: ${g.total_bet} | Win: ${g.total_win}`,
      };
    });

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex w-full">
      <div className="w-full justify-between">
        {/* Header Row */}
        <div className="bg-white p-2 text-ssm font-Inter font-semibold">
          <div className="flex justify-between items-center text-gray-700 py-1 px-3 bg-[#F3F4F6]  lg2:rounded-t-2xl">
            <div className="w-2/3">EVENT</div>
            <div className="w-1/3 flex justify-between">
              <div className="text-center w-1/2">TOTAL</div>
              <div className="text-center w-1/2">INFO</div>
            </div>
          </div>

          {/* Totals */}
          <div className="flex justify-between items-center p-3">
            <div className="w-2/3">Grand Total</div>
            <div className="w-1/3 flex justify-between">
              <div
                className={`text-center w-1/2 ${
                  grandDiff >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {formatDiff(grandDiff)}
              </div>
              <div className="text-center w-1/2 text-gray-600">
                -{" "}
                {/* Bet: {summary?.grand_total?.total_bet || 0} | Win:{" "}
                {summary?.grand_total?.total_win || 0} */}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-3">
            <div className="w-2/3">Page Total</div>
            <div className="w-1/3 flex justify-between">
              <div
                className={`text-center w-1/2 ${
                  pageDiff >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {formatDiff(pageDiff)}
              </div>
              <div className="text-center w-1/2"></div>
            </div>
          </div>
        </div>

        {/* Event Rows */}
        {/* {data.map((row, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 text-ssm font-Inter last:border-0"
          >
            <div className="w-2/3 text-gray-800">{row.event}</div>

            <div className="w-1/3 flex justify-between">
              <div
                className={`text-center w-1/2 ${
                  row.total.startsWith("+")
                    ? "text-green-600 font-semibold"
                    : row.total.startsWith("-")
                    ? "text-red-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {row.total}
              </div>
              <div className="text-center w-1/2 text-gray-600">-</div>
            </div>
          </div>
        ))} */}
        {gameHistoryRows.map((row, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 text-ssm font-Inter  last:border-0"
          >
            <div className="w-2/3 text-gray-800">{row.event}</div>

            <div className="w-1/3 flex justify-between">
              <div
                className={`text-center w-1/2 ${
                  row.total.startsWith("+")
                    ? "text-green-600 font-semibold"
                    : row.total.startsWith("-")
                    ? "text-red-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {row.total}
              </div>

              <div className="text-center w-1/2 text-gray-600">-</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
