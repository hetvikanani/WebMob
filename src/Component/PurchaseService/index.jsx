import React from "react";
import List from "../List";
import Header from "../Header";
import Cost from "../Cost";

const PurchaseService = ({ service, flag }) => {
  return (
    <>
      <Header title="Purchase service" />
      {service.map((s) => (
        <List
          key={s.id}
          name={s.name}
          nestedService={s.purchased_office_template.purchased_office_services}
          flag={flag}
        />
      ))}
      <Cost />
    </>
  );
};
export default PurchaseService;
