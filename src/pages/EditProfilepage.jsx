import { useNavigate } from "react-router-dom";
import headerProfileImg from "../assets/img/headerProfileImg.png";
import { useRootStore } from "../store/root-store-provider";
import { useState } from "react";

const EditProfilepage =() =>{
    const {singInStore} = useRootStore();
    const {editUserDataStore} = useRootStore();
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const [editUsername, setEditUsername] = useState('')
    const [editFirstname, setEditFirstname] = useState('')
    const [editLastname, setEditLastname] = useState('')
    const [editEmail, setEditEmail] = useState('')
    const [editImage, setEditImage] = useState('')
    const [editPassword, setEditPassword] = useState('')

    let LS = JSON.parse(localStorage.getItem('localStorage'))

    const editProfile =(e) => {
        e.preventDefault()

        const id = singInStore.userData.id
        const username = editUsername  || singInStore.userData.username;
        const firstname = editFirstname || singInStore.userData.firstName;
        const lastname = editLastname || singInStore.userData.lastName;
        const email = editEmail || singInStore.userData.email;
        const image = editImage || singInStore.userData.image;
        const password = editPassword || singInStore.userData.password;

        editUserDataStore.getEditUserData(id,username,firstname,lastname,email,image,password)
    }
    return(
        <div className="mainContainer">
            <h2>Edit profile</h2>
            <button onClick={goBack} className="userInfoEdit">Back</button>
            <div className="form">
                <form >
                    <div className="inputContainer">
                        <label>Username </label>
                        <input  type="text" 
                                name="user-name" 
                                tabIndex={1} 
                                placeholder={singInStore.userData.username || LS.username}
                                value={editUsername} 
                                onChange={(e) => setEditUsername(e.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <label>Firstname </label>
                        <input  type="text" 
                                name="first-name" 
                                tabIndex={2} 
                                placeholder={singInStore.userData.firstName || LS.firstName}
                                value={editFirstname} 
                                onChange={(e) => setEditFirstname(e.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <label>Lastname </label>
                        <input  type="text" 
                                name="last-name" 
                                tabIndex={3} 
                                placeholder={singInStore.userData.lastName || LS.lastName}
                                value={editLastname} 
                                onChange={(e) => setEditLastname(e.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <label>Email </label>
                        <input  type="email" 
                                name="email" 
                                tabIndex={4} 
                                placeholder={singInStore.userData.email || LS.email}
                                value={editEmail} 
                                onChange={(e) => setEditEmail(e.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <label>Image </label>
                        <input  type="file" 
                                name="add-image" 
                                id="file1"
                                tabIndex={5} 
                                encType='multipart'
                                method="POST"
                                value={editImage} 
                                onChange={(e) => setEditImage(e.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <label>Password </label>
                        <input  type="password" 
                                name="pass" 
                                tabIndex={6} 
                                value={editPassword} 
                                onChange={(e) => setEditPassword(e.target.value)}
                        />
                    </div>
                        <div className="buttonContainer">
                        <button type="submit" 
                                tabIndex={7} 
                                onClick={(e) => {
                                    editProfile(e)
                                    navigate("/profile")
                                }}
                        >Sing in</button>
                    </div>
                </form>
            </div>
       
        </div>
    )
}
export {EditProfilepage}