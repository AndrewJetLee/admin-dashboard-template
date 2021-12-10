import "./widgetLg.scss";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const WidgetLgRow = ({status}) => {
    return (
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img
            className="widgetLgImg"
            src="http://placekitten.com/200/300"
            alt=""
          />
          <span className="widgetLgName">Susan Carol</span>
        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount">$122.00</td>
        <td className="widgetLgStatus">
          <Button type={status} />
        </td>
      </tr>
    );
  };

  return (
    <div className="widgetLgContainer">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <WidgetLgRow status="Approved"/>
        <WidgetLgRow status="Declined"/>
        <WidgetLgRow status="Pending"/>
        <WidgetLgRow status="Approved"/>
      </table>
    </div>
  );
};

export default WidgetLg;
