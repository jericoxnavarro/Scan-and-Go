import React, { useState, useEffect } from "react";

const Logs = ({ bus }) => {
  const [businesses, setBusinesses] = useState({});

  useEffect(() => {
    const getBusiness = async () => {
      const response = await fetch(
        `https://hackfest-2020.herokuapp.com/api/businesses/${bus.businessID}`
      );
      const datas = await response.json();
      setBusinesses(datas);
    };
    getBusiness();
  }, [bus]);
  return (
    <>
      <div className="business-info">
        <div className="infos-business">
          <h2 className="business-name">{businesses.businessName}</h2>
          <p className="location">{`${businesses.barangay} ${businesses.city} ${businesses.province}`}</p>
        </div>
        <div className="date-bus">
          <h2 className="date">{bus.logsDate}</h2>
        </div>
      </div>
    </>
  );
};

export default Logs;
