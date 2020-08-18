import React, { useState, useEffect } from "react";
import { changeStateToFalse } from "../../assets/functions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import HomepageJSX from "./subcomponents/homepageJSX/homepage.JSX";



const HomepageJsx = WithSpinner(HomepageJSX)
const HomePage = () => {
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        changeStateToFalse(setIsLoading,2000)
    }, []);
  return <div className="homepage">
      <HomepageJsx isLoading={isLoading}/>
  </div>;
};

export default HomePage;
