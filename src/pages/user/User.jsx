import "./user.scss";
import {
  PersonOutline,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@mui/icons-material/";
import { Link } from "react-router-dom"

const User = () => {
  const UserUpdateItem = ({ placeholder, label }) => {
    return (
      <div className="userUpdateItem">
        <label>{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          className="userUpdateInput"
        />
      </div>
    );
  };
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userCreateButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowContent">
            <div className="userShowUser">
              <img
                src="http://placekitten.com/200/300"
                alt=""
                className="userShowUserImage"
              />
              <div className="userShowUserInfo">
                <h3 className="userShowUserName">Anna Becker</h3>
                <span className="userShowUserJob">Software Engineer</span>
              </div>
            </div>

            <div className="userShowInfoWrapper">
              <h5 className="userShowTitle">Account Details</h5>
              <div className="userShowInfo">
                <PersonOutline className="userShowIcon" />
                <span className="userShowInfoTitle">bingchilling671</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>
            </div>

            <div className="userShowInfoWrapper">
              <h5 className="userShowTitle">Contact</h5>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+1 928 374 191</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <h2 className="userUpdateTitle">Edit</h2>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <UserUpdateItem placeholder="ihateallmen671" label="Username" />
              <UserUpdateItem placeholder="Junji Chong" label="Full name" />
              <UserUpdateItem
                placeholder="bingchilling@gmail.com"
                label="Email"
              />
              <UserUpdateItem placeholder="1 671 646 7575" label="Phone" />
              <UserUpdateItem placeholder="New York | USA" label="Address" />
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="http://placekitten.com/g/200/300"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
