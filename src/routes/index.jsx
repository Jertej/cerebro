import HomePage from "views/HomePage/HomePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignupPage from "views/SignupPage/SignupPage";
import UploadPage from "views/UploadPage/UploadPage";

var indexRoutes = [
  { path: "/upload-page", name: "ProfilePage", component: UploadPage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/signup-page", name: "SignupPage", component: SignupPage },
  { path: "/", name: "HomePage", component: HomePage }
];

export default indexRoutes;
