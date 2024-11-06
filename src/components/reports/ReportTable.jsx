import React from "react";
import { reportsTableContent, tableData } from "./Helper";
const ReportTable = () => {
  return (
    <div className="w-full flex items-center mx-auto">
      <div className="shadow-reports w-full mx-auto rounded-[10px] h-[660px] lg:h-[710px] overflow-scroll">
        <table className="min-w-[1000px] xl:min-w-full table-auto">
          <thead className="border-b border-tableBorder">
            <tr>
              <th className="font-bold leading-136 font-manrope py-4 text-center">Name</th>
              <th className="font-bold leading-136 font-manrope py-4 text-center">Last 4</th>
              <th className="font-bold leading-136 font-manrope py-4 text-center">Date</th>
              <th className="font-bold leading-136 font-manrope py-4 text-center">Mcc</th>
              <th className="font-bold leading-136 font-manrope py-4 text-center">Amount</th>
              <th className="font-bold leading-136 font-manrope py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {reportsTableContent.map((obj, i) => (
              <tr className="border-b border-[#F2F4F7]">
                <td className="py-4 text-center" key={i}>
                  {obj.name}
                </td>
                <td className="py-4 text-center" key={i}>
                  {obj.last}
                </td>
                <td className="py-4 text-center" key={i}>
                  {obj.date}
                </td>
                <td className="py-4 text-center" key={i}>
                  {obj.mcc}
                </td>
                <td className="py-4 text-center" key={i}>
                  {obj.amount}
                </td>
                <td className="py-4 flex justify-center items-center" key={i}>
                  <span
                    className={`h-[27px] w-[100px] text-[15px] font-medium flex items-center justify-center rounded-full ${obj.status === "Settled"
                        ? "text-[#3766EA] bg-[#DAE4FF]"
                        : obj.status === "Declined"
                          ? "text-[#DA0303] bg-[#FFD3D3]"
                          : "text-[#007A00] bg-[#BAFFB7]"
                      }`}>
                    {obj.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
