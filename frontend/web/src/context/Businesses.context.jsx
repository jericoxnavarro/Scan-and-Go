import React, { useState, createContext } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const BusinessesContext = createContext();

export const BusinessesProvider = (props) => {
  const [business, setBusiness] = useState(cookies.get("businesseID"));

  return (
    <BusinessesContext.Provider value={[business, setBusiness]}>
      {props.children}
    </BusinessesContext.Provider>
  );
};
