import React from "react";
import SimpleReactFooter from "simple-react-footer";

function Footer(){
    const description = "Lorem ipsum dolor sit amet, minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun";
    const title = "Title";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
                {
                    name: "Admin",
                    link: "/admin"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Visit",
            resources: [
                {
                    name: "Locations",
                    link: "/locations"
                },
                {
                    name: "Culture",
                    link: "/culture"
                }
            ]
        }
     ];
     return <SimpleReactFooter 
     description={description} 
     title={title}
     columns={columns}
     linkedin="fluffy_cat_on_linkedin"
     facebook="fluffy_cat_on_fb"
     twitter="fluffy_cat_on_twitter"
     instagram="fluffy_cat_live"
     youtube="UCFt6TSF464J8K82xeA?"
     pinterest="fluffy_cats_collections"
     copyright="2021"
     iconColor="#ffffff"
     backgroundColor="#154e99"
     fontColor="black"
     copyrightColor="darkgrey"
     fontColor = "#ffffff"
  />
  
}

export default Footer ;