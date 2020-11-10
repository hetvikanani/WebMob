import React from "react";
import List from "./List";
import Header from "../Header";
import Cost from "../Cost";

const AdditionlaService = ({ service, flag }) => {
  return (
    <>
      <div className="card">
        <Header title="Additional service" />
        {service.map((s) => (
          <List
            key={s.id}
            name={s.name}
            nestedService={
              s.purchased_office_template.purchased_office_services
            }
            flag={flag}
          />
        ))}
        <Cost />
      </div>
    </>
  );
};
export default AdditionlaService;
