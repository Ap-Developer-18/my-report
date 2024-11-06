import React from "react";
import UserLayout from "../components/common/UserLayout";
import UserForm from "../components/dashboard/UserForm";
import ProfileDetails from "../components/dashboard/ProfileDetails";

const MyProfile = () => {
  return (
    <UserLayout title="My Profile">
      <ProfileDetails />
      <UserForm />
    </UserLayout>
  );
};

export default MyProfile;