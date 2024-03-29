import { combineReducers } from "redux";
import loginReducer from "./views/Login/loginReducer.js";
import homeReducer from "./views/Home/homeReducer.js";
import LiveDeliveryReducer from "./views/LiveDelivery/liveDeliveryReducer";
import postOfficeReducer from "./views/RecepFunc/postOfficeReducer";
import registrationReducer from "./views/Registration/registrationReducer";
import dashboardReducer from "./views/Home/Dashboard/dashboardReducer";
import statisticsReducer from "./views/Statistics/statisticsReducer.js";
import complainsReducer from "./views/Complains/complainsReducer.js";
import MailAssignmentsReducer from "./views/MailAssignments/mailAssignmentsReducer.js";

export default combineReducers({
  loginReducer,
  homeReducer,
  LiveDeliveryReducer,
  postOfficeReducer,
  registrationReducer,
  dashboardReducer,
  statisticsReducer,
  complainsReducer,
  MailAssignmentsReducer
});
