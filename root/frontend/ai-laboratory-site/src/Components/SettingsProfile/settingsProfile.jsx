import React from "react";
import n from "./settingsProfile.module.css";
import ProfileHeader from "../Profile/ProfileHeader/profileHeader";
import SettingsProfileForm from "./settingsProfileForm/settingsProfileForm";

const SettingsProfile = () => {
  return(
      <body className={n.body}>
      <div>
          <ProfileHeader/>
      </div>
      <div className={n.settingsProfileForm}>
          <SettingsProfileForm />
      </div>
      </body>
  );
}

export default SettingsProfile;