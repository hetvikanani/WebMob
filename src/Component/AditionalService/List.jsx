import React from "react";
import SubService from "./SubService";

const List = ({ name, nestedService, flag }) => {
  return (
    <>
      <h3>{name}</h3>
      {nestedService.map((s) => (
        <SubService flag service={s} />
      ))}
    </>
  );
};
export default List;
