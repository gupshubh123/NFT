import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
/**
 * 
 * @param {*} Component 
 * @returns a component which returns a containwe with header or footer
 * This is done so that if we have some other pages which do not require header and footer, those containers 
 * can be used without HOC
 */
const withHeaderFooter = Component => ({ ...props }) =>  (
        <>
        <Header />
        <Component {...props} />
        <Footer />
        </>
    )


export default withHeaderFooter;


   
