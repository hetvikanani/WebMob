import React, { useEffect, useState } from "react";
import PurchaseService from "./Component/PurchaseService";
import AdditionlaService from "./Component/AditionalService";

const App = () => {
  const [service, setService] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.jsonbin.io/b/5efdf1000bab551d2b6ab1c9/1").then((data) =>
      data.json().then((data) => {
        setService(data.data.purchased_services);
        setLoading(false);
      })
    );
  }, []);
  console.log(service);
  return (
    <>
      {!loading ? (
        <>
          <PurchaseService service={service} flag />
          <AdditionlaService service={service} flag={false} />
        </>
      ) : null}
    </>
  );
};

export default App;
