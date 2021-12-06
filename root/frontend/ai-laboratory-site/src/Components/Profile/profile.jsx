import React from "react";
import n from "./profile.module.css";
import ProfileHeader from "./ProfileHeader/profileHeader";
import ProfileSection from "./ProfileSection/profileSection";

const Profile = () => {
  return(
      <body className={n.body}>
      <div className={n.profileHeader}>
          <ProfileHeader />
      </div>
        <div className={n.profileSection}>
            <ProfileSection />
        </div>
      <div className={n.profileSection}>
          <ProfileSection />
      </div>
      </body>
  );
}

export default Profile;