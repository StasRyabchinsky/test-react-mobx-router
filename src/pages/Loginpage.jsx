
import { useState } from "react";
import { useRootStore } from "../store/root-store-provider";
import { observer } from "mobx-react";

const Loginpage = observer(() =>{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {singInStore} = useRootStore();
    
    return (
        <div className="mainContainer"> 
            <h2>LoginPage</h2>
            <div className="form">
                <form >
                    <div className="inputContainer">
                        <label>Username </label>
                        <input  type="text" 
                                name="uname" 
                                tabIndex={1} 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                                required
                        />
                    </div>
                    <div className="inputContainer">
                        <label>Password </label>
                        <input  type="password" 
                                name="pass" 
                                tabIndex={2} 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                required
                        />
                    </div>
                        <div className="buttonContainer">
                        <button type="submit" 
                                tabIndex={3} 
                                onClick={(e) => {
                                    e.preventDefault()
                                    singInStore.getUserData(username, password)
                                }}
                        >Sing in</button>
                    </div>
                </form>
            </div>
        </div>
    )
})
export {Loginpage}