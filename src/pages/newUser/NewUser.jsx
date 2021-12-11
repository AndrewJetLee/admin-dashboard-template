import "./newUser.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const NewUser = () => {
  const NewUserItem = ({ label, placeholder }) => {
    return (
      <div className="newUserItem">
        <label className="">{label}</label>
        <input type="text" placeholder={placeholder} className="newUserItemInput"/>
      </div>
    );
  };

  return (
    <div className="newUserContainer">
      <h2 className="newUserTitle">New User</h2>
      <form className="newUserForm">
        <NewUserItem label="Username" placeholder="bussydestroyer69" />
        <NewUserItem label="Full Name" placeholder="Albert Park" />
        <NewUserItem label="Email" placeholder="bussydestroyer69@gmail.com" />
        <NewUserItem label="Password" placeholder="ieatpoo420" />
        <NewUserItem label="Phone" placeholder="bussydestroyer69" />
        <NewUserItem label="Address" placeholder="bussydestroyer69" />
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" value="male" id="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="female" id="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" value="other" id="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
      </form>
      <button className="newUserButton">Create</button>
    </div>
  );
};

export default NewUser;
