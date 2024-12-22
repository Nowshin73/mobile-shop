import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
//import Lottie from "lottie-react";
//import regAnim from "../../assets/animation_llgf060i.json";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  
  return (
    <div className="login-registration grid md:grid-cols-2">
      {/* <Lottie className="hidden md:block " animationData={regAnim} /> */}
      <div style={{ background: "linear-gradient(90deg, #7209b7 0%, #3a0ca3 100%)"}} className="bg-[#390ca386] flex flex-col justify-center items-center ">
        <div className="login-headline text-white flex flex-col justify-center items-center">
          <h1 className="font-semibold text-3xl">Welcome!</h1>
          <p className="font-semibold text-normal mt-5 p-4 text-center">To keep connected with us, please Sign In / Sign Up</p>
        </div>
      </div>
      <div className="text-center">
        <Tabs className="">
          <TabList className="w-1/2 flex justify-between mx-auto">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>

          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
