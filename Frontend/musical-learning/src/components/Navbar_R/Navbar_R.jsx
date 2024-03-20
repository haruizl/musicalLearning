import './Navbar_R.css';
import Profile_Photo from '../../assets/Profile-Image.webp';
import Icon_Participants from '../../assets/Icon-Participants.png';
import React, {useState, useEffect, useRef} from 'react';

const Navbar_R = () =>{
    const [open, setOpen] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);

    return(
        <div className="navbar_r">
            <div className={`navbar_r-user-info ${open? 'active' : 'inactive'}`}>
                <User_info/>
            </div>
            <div className="navbar_r-user-photo" onPointerEnter={()=>{setOpen(true)}}>
                <img src={Profile_Photo} alt="Profile Photo" />
            </div>
            <div className="out" onPointerLeave={()=>{setOpen(false)}}>
            </div>
            <div className={`navbar_r-options ${openOptions? 'active' : 'inactive'}`}>
                <Options/>
            </div>
        </div>
    );   
}

function User_info(){
    return(
        <div className="user-info">
            <h2>User Name</h2>
            <h3>username31@gmail.com</h3>
        </div>
    );
}

function Options(){
    const [openSidebar, setOpenSidebar] = useState(false);

    let sidebarRef = useRef();

    useEffect(() =>{
        let handler = (e) =>{
            if (!sidebarRef.current.contains(e.target)) {
                setOpenSidebar(false);
            }
        };

        document.addEventListener("mousedown", handler);
    })
    
    return(
        <div className="options-container">
            <div className="options">
                <div className="option" onClick={()=>{setOpenSidebar(!openSidebar)}}>
                    <span>Participants</span>
                    <div className="option-img">
                        <img src={Icon_Participants} alt="Participants" />
                    </div>
                </div>
                <div className="option" onClick={()=>{setOpenSidebar(!openSidebar)}}>
                    <span>My Profile</span>
                    <div className="option-img">
                        <img src={Icon_Participants} alt="Participants" />
                    </div>
                </div>
                <div className="option" onClick={()=>{setOpenSidebar(!openSidebar)}}>
                    <span>Log Out</span>
                    <div className="option-img">
                        <img src={Icon_Participants} alt="Participants" />
                    </div>
                </div>
            </div>
            <div className={`navbar_r-participants ${openSidebar? 'active' : 'inactive'}`} ref={sidebarRef}>
                <Participants/>
            </div>
        </div>
    );
}
function Participants(){
    const textToChange = document.getElementById('textToChange');
    let changeText = (e)=>{
        textToChange.innerHTML = "New Participant";
    };

    return(
        <div className="participants">
            <h2 id="textToChange">Search</h2>
            <div className="participants-search">
                <input type="text" placeholder='Name' />
                <div className="button-radio" onPointerEnter={changeText}>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar_R;