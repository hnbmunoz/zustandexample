import React, { useState } from "react";
import LoginPage from "./pages/Login";
import APISample from "./pages/APISample/APISample";
import MainPage from "./pages/MainPage/MainPage";
import userProfileStore from "./store/userProfile";

const App = () => {
  const { profile, overwriteProfile, clearProfile } = userProfileStore(
    (state) => ({
      profile: state.profile,
      overwriteProfile: state.overwriteProfile,
      clearProfile: state.clearProfile,
    })
  );

  return (
    <div className="App">
      {/* <APISample /> */}
      {/* <MailChimpSample /> */}
      {profile ? <MainPage /> : <LoginPage />}
    </div>
  );
};

export default App;
