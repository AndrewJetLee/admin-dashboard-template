import React from "react";
import "./sidebar.scss";
import { Home, TrendingUp, Insights,
         PermIdentity, Storefront, AttachMoney, BarChart,
         MailOutline, Feedback, ChatBubbleOutline,
        WorkOutline, Report

        } from "@mui/icons-material/";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarContent">
        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Dashboard</h4>
          <ul className="sidebarList">
            <li>
              <Home className="sidebarIcon"/>
              Home
            </li>
            <li>
              <Insights className="sidebarIcon"/>
              Analytics
            </li>
            <li>
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Quick Menu</h4>
          <ul className="sidebarList">
            <li>
              <PermIdentity className="sidebarIcon"/>
              Users
            </li>
            <li>
              <Storefront className="sidebarIcon"/>
              Products
            </li>
            <li>
              <AttachMoney className="sidebarIcon"/>
              Transactions
            </li>
            <li>
              <BarChart className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Notifications</h4>
          <ul className="sidebarList">
            <li>
              <MailOutline className="sidebarIcon"/>
              Mail
            </li>
            <li>
              <Feedback className="sidebarIcon"/>
              Analytics
            </li>
            <li>
              <ChatBubbleOutline className="sidebarIcon"/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Staff</h4>
          <ul className="sidebarList">
            <li>
              <WorkOutline className="sidebarIcon"/>
              Manage
            </li>
            <li>
              <Insights className="sidebarIcon"/>
              Analytics
            </li>
            <li>
              <Report className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
