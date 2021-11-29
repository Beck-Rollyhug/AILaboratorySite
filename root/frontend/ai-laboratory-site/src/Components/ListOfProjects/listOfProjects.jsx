import React from "react";
import n from "./listOfProjects.module.css";
import ProfileHeader from "../Profile/ProfileHeader/profileHeader";
import ListOfProjectsSection from "./listOfProjectsSection/listOfProjectsSection";

const ListOfProjects = () => {
  return(
      <body className={n.body}>
      <div className={n.profileHeader}>
          <ProfileHeader />
      </div>
      <div className={n.listOfProjectsSection}>
        <ListOfProjectsSection/>
      </div>
      </body>
  );
}

export default ListOfProjects;