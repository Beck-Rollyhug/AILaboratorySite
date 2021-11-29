import React from "react";
import n from "./pageOfProject.module.css";
import ProfileHeader from "../Profile/ProfileHeader/profileHeader";
import PageOfProjectSection from "./PageOfProjectSection/pageOfProjectSection";
import ListOfProjectsSection from "../ListOfProjects/listOfProjectsSection/listOfProjectsSection";

const PageOfProject = () => {
  return(
            <body className={n.body}>
            <div className={n.profileHeader}>
                <ProfileHeader />
            </div>
            <div className={n.pageOfProjectSection}>
                <ListOfProjectsSection/>
            </div>
            </body>
        );
    }
export default PageOfProject;