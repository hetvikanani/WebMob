import React from "react";
import List from "../List";
import Header from "../Header";
import Cost from "../Cost";
const findCost = (data) => {
  let ans = [...data];
  for (let i = 0; i < data.length; i++) {
    let flag = 0;
    for (
      let j = 0;
      j < data[i].purchased_office_template.purchased_office_services.length;
      j++
    ) {
      if (
        data[i].purchased_office_template.purchased_office_services[j]
          .service_selected === null
      ) {
        ans[i].purchased_office_template.purchased_office_services[j] = [];
      }
    }
  }
  return ans;
};
const PurchaseService = ({ service, flag }) => {
  const costService = JSON.parse(JSON.stringify(service));
  let sum = 0;
  return (
    <>
      <div className="card">
        <Header title="Purchase service" />
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
        <div className="card">
          <h2 style={{ paddingLeft: "2rem" }}>Cost</h2>
          {findCost(costService).map((cost) => (
            <Cost
              service={cost.purchased_office_template.purchased_office_services}
            />
          ))}
          {findCost(costService).forEach((cost) => {
            cost.purchased_office_template.purchased_office_services.forEach(
              (s) => {
                sum = sum + parseInt(s.price || 0);
              }
            );
          })}
          <div className="listWrapeer">
            <h3>Total Sum</h3>
            <h1>{sum}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default PurchaseService;
