import React from "react";

const SubService = ({ service, flag }) => {
  return (
    <>
      {service.service_selected && flag ? (
        <>
          <div className="listWrapeer">
            <div className="customImg">
              <img className="customImg" src={service.image} />
            </div>
            <div className="listContent">
              <div className="listWrapeer2">
                <h3>{service.name}</h3>
                <p>Price : {service.price}</p>
              </div>
              <p>{service.description}</p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default SubService;
