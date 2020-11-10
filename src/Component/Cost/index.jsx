import React from "react";

const Cost = ({ service }) => {
  console.log(service);
  return (
    <>
      {service?.map((s) => {
        if (s.name && s.price)
          return (
            <>
              <div className="listWrapeer">
                <h3>{s?.name}</h3>
                <p>{s?.price}</p>
              </div>
            </>
          );
        else return <></>;
      })}
    </>
  );
};
export default Cost;
