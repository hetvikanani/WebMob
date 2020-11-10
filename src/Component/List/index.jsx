import React from "react";
import SubService from "../SubService";

const List = ({ name, nestedService, flag }) => {
  return (
    <>
      <h2 style={{ paddingLeft: "2rem" }}>{name}</h2>
      {nestedService.map((s) => (
        <SubService flag={flag} service={s} />
      ))}
    </>
  );
};
export default List;
