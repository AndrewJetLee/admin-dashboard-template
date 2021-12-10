import React from "react";
import "./home.scss";
import FeaturedInfo from "../../components/FeaturedInfo";
import Chart from "../../components/Chart";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/WidgetLg";
import WidgetSm from "../../components/WidgetSm";

const Home = () => {
  return (
    <div className="homeContainer">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
