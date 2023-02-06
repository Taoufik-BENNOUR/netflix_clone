import {  DateRange, EmailOutlined, PermIdentity, PhoneAndroidOutlined, Publish } from "@material-ui/icons"
import "./user.scss"
import {Link} from "react-router-dom"

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userTitleButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userInfoLeft">
          <div className="userInfoTop">
            <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
            <div className="userGeneralInfo">
              <span className="userInfoUsername">Hound</span>
              <span className="userInfoTitle">Kings Dog</span>
            </div>
          </div>
          <div className="userInfoBottom">
              <span className="userInfoTitle">Account Details</span>
              <div className="userInfoDetails">
                <PermIdentity className="userInfoIcon" />
                <span>Hound</span>
              </div>
              <div className="userInfoDetails">
                <DateRange className="userInfoIcon" />
                <span>10.10.1990</span>
              </div>
              <span className="userInfoTitle" >Contact Details</span>
              <div className="userInfoDetails">
                <EmailOutlined className="userInfoIcon" />
                <span>houd@gmail.com</span>
              </div>
              <div className="userInfoDetails">
                <PhoneAndroidOutlined className="userInfoIcon" />
                <span className="userInfoEmail">+5151 5115</span>
              </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input type="text" placeholder="username" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input type="text" placeholder="fullname" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder="email" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input type="text" placeholder="phone number" className="userUpdateInput" />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img className="userUpdateImage" src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                  <label htmlFor="file"><Publish className="icon" /> </label>
                  <input style={{display:"none"}} type={"file"} id="file"/>
                </div>
                 <button className="userUpdateButton">Update</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default User