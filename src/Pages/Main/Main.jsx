import React from "react";
import Home from "../Home/Home";
import Schedule from "../Schedule/Schedule";
import Soon from "../Soon/Soon";
import ClubCode from "../Club/ClubCode";
import Footer from "../Footer/Footer";
import Loading from "../../components/Loading/Loading";

const Main = () => {
    return (
        <>
            <Loading />
            <Home />
            <Schedule />
            <Soon />
            <ClubCode />
            <Footer />
        </>
    );
};

export default Main;
