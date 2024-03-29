import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailVerify from './component/Authentication/EmailVerify/emailVerify';
import ForgotPwd from './component/Authentication/ForgotPassword/forgotPwd';
import Login from './component/Authentication/Login/login';
import AuthOtp from './component/Authentication/OTP/otp';
import ResetPwd from './component/Authentication/ResetPassword/resetPwd';
import SignUp from './component/Authentication/SignUp/signUp';
import Error from './component/Assets/Error404/Error';
import SignUpTwo from './component/Authentication/SignUpTwo/SignUpTwo';
import Sidebar from './component/Sidebar/SideBar';
import HomePage from './component/Home Page/homePage';
import CreateTweet from './component/Home Page/createTweet';
import Bookmarks from './component/Bookmarks/bookmarks';
import ProfilePage from './component/Profile/profilePage';
import EditProfile from './component/Profile/EditProfile';
import LogOut from './component/logOut/logOut';
import Google from "./component/Authentication/GoogleSign/Google"
import TagTweets from './component/Sidebar/TagTweets';
import OneTweet from './component/Reply/OneTweet';
import GoogleSignin from './component/Authentication/GoogleSign/GoogleSignIn';
import Messages1 from './component/Messages/Messages1';
import Chats from './component/Messages/Chats';
import PrivateRoute from './component/PrivateRoute';
import PhoneSearch from './component/Sidebar/PhoneSearch';
import Notifications from './component/Notification/Notification';
import AuthHome from './component/Authentication/AuthHome';
import NotifTweet from './component/Notification/NotifTweet';
import './App.css';

function App() {

  const isUser = localStorage.getItem("access token") ? true : false;
  return <>
    <BrowserRouter>
      <Routes>
        {/* {isUser?():(<Route path="/login" exact element={<Login />} />)} */}
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<Login />} />
        <Route exact path="/fgtpwd" element={<ForgotPwd />} />
        <Route exact path="/otp" element={<AuthOtp />} />
        <Route exact path="/verifyemail" element={<EmailVerify />} />
        <Route exact path="/reset" element={<ResetPwd />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signuptwo" element={<SignUpTwo />} />
        <Route exact path="/googlesign" element={<GoogleSignin />} />
        {/* <Route path="/" exact element={<AuthHome />} /> */}
       
        {/* {isUser ? ( <Route path="" exact element={<HomePage />} />) : (<Route path="/login" element={<Login />} />)} */}
        {isUser ? (<Route path="/chats/:userid" element={<Chats />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/messages" element={<Messages1 />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/profile/:apiname" element={<ProfilePage />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/toTweet/:TweetId" element={<OneTweet />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/notiftweet/:TweetId" element={<NotifTweet />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/tagtweet" exact element={<TagTweets />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/bookmark" exact element={<Bookmarks />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/sidebar" exact element={<Sidebar />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/editprofile" exact element={<EditProfile />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/phonesearch" element={<PhoneSearch />} />) : (<Route path="/error" element={<Error />} />)}
        {isUser ? (<Route path="/notification" exact element={<Notifications />} />) : (<Route path="/error" element={<Error />} />)}
        <Route path="/google" element={<Google />} />
        <Route path="/logout" exact element={<LogOut />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
