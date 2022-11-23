import React, { useState, useEffect} from "react";
import userProfileStore from "../../store/userProfile";
import { getAllUsers } from "../../api/api";

const MainPage = () => {
  const { profile, overwriteProfile, clearProfile } = userProfileStore(
    (state) => ({
      profile: state.profile,
      overwriteProfile: state.overwriteProfile,
      clearProfile: state.clearProfile,
    })
  );

  const [allUsers, setAllUsers] = useState([]);

  const handleLogout = () => {
    clearProfile();
  }

  useEffect(() => {
    LoadUsers();
  },[])

  const LoadUsers = async () => {
   await setAllUsers([]);
   const arrVal = await getAllUsers(profile)   
   await setAllUsers(arrVal)   
  }

  const tableContainer = {
    border: "1px solid black",
    width:"fit-content",
    height:"fit-content",
    maxHeight:"20rem",
    overflow:"auto",
  }
  
  const tableHeader = {
    display:"flex",
    width:"100%",
    justifyContent:"space-around"
  }

  const tableRow = {
    justifyContent:"space-around",
    borderBottom:"1px solid black",
  }

  const tableCell = {
    width:"20rem",
    display:"flex",
    aligntItems:"center",
    justifyContent:"center",
    padding:"1rem"
  }
  return (
    <div>
      This is the MainPage
      <button onClick={handleLogout}>Logout</button>
      <div style={tableContainer}>      
        { allUsers.length > 0 &&
          allUsers.map((obj,idx) => {
            return(
              <div key={idx} className="flex-row" style={tableRow}>
                <div style={tableCell}>
                  {obj.id}
                </div>
                <div style={tableCell}>
                  {obj.uid}
                </div>
                
              </div>
            )
          })
        }
        {allUsers.length === 0 && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default MainPage;
