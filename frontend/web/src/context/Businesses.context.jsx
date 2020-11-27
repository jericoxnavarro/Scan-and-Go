import React, { useState, createContext, useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const BusinessesContext = createContext();

export const BusinessesProvider = (props) => {
  const [business, setBusiness] = useState("");

  useEffect(() => {
    if (cookies.get("businesseID")) {
      setBusiness(cookies.get("businesseID"));
    }
  }, []);
  return (
    <BusinessesContext.Provider value={[business, setBusiness]}>
      {props.children}
    </BusinessesContext.Provider>
  );
};
