import "./featuredInfo.scss";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material/"


const FeaturedInfo = () => {
  return (
    <div className="featuredContainer">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyWrapper">
          <span className="featuredMoney">$2,312</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyWrapper">
          <span className="featuredMoney">$4,312</span>
          <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyWrapper">
          <span className="featuredMoney">$2,212</span>
          <span className="featuredMoneyRate">+3.4 <ArrowUpward className="featuredIcon positive"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;