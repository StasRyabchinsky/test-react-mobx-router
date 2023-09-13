import headerProfileImg from "../assets/img/headerProfileImg.png"

const Profilepage =() =>{
    return(
        <div className="mainContainer">
            <h2>mitshubisi77</h2>
            <button className="userInfoEdit">Edit profile</button>

            <div className="userInfoContainer">

                <img src={headerProfileImg} alt="" className="userInfoImg"/>
                <div>
                     <div className="userInfoName">
                    <div className="userInfoNameFirst">
                        <h4>First Name</h4>
                        <h3>John</h3>
                    </div>
                    <div className="userInfoNameLast">
                        <h4 >Last Name</h4>
                        <h3>Widjd</h3>
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
}
export {Profilepage}