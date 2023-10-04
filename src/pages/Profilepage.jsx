import { Link, useNavigate } from "react-router-dom";
import { useRootStore } from "../store/root-store-provider";
import { observer } from "mobx-react";

const Profilepage =observer(() =>{
    const {singInStore, editUserDataStore} = useRootStore();

    let LS = JSON.parse(localStorage.getItem('localStorage'))

    const username = editUserDataStore.newUserData.username || LS.username || singInStore.userData.username;
    const firstname = editUserDataStore.newUserData.firstName || LS.firstName || singInStore.userData.firstName;
    const lastname = editUserDataStore.newUserData.lastName || LS.lastName || singInStore.userData.lastName;
    const email = editUserDataStore.newUserData.email || LS.email || singInStore.userData.email;
    const image = editUserDataStore.newUserData.image || LS.image || singInStore.userData.image;

    return(
        <div className="mainContainer">
            <h2>{username}</h2>
            <Link to={'/profile/edit'} className="userInfoEdit">Edit profile</Link>
            <div className="userInfoContainer">
                <img src={image} alt="" className="userInfoImg"/>
                <div>
                    <div className="userInfoName">
                    <div className="userInfoNameFirst">
                        <h4>First Name</h4>
                        <h3>{firstname}</h3>
                    </div>
                    <div className="userInfoNameLast">
                        <h4 >Last Name</h4>
                        <h3>{lastname}</h3>
                    </div>
                    <div className="userInfoNameLast">
                        <h4 >Email</h4>
                        <h3>{email}</h3>
                    </div>
                </div>
                <div className="userInfoStatus">
                    <h4>Status</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, velit? Recusandae ea accusantium earum, est culpa quod ipsam vero aut!</p>                
                    </div>
                </div>
            </div>
        </div>
    )
})
export {Profilepage}