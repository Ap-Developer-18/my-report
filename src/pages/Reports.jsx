import React from "react";
import UserLayout from "../components/common/UserLayout";
import ProfileDetails from "../components/dashboard/ProfileDetails";
import ReportTable from "../components/reports/ReportTable";

const Reports = () => {
  return (
    <UserLayout title="Reports">
      <div className="flex flex-col gap-10">
        <ProfileDetails />
        <ReportTable />
      </div>
    </UserLayout>
  );
};

export default Reports;