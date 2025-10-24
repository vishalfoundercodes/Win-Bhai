import axios from "axios";
import React, { useState, useEffect } from "react";
import apis from "../../utils/apis";

export default function ResponsibleGambling() {
  const [data, setData] = useState(null);

  // Fetch data from API
  const fetchData = async () => {
    try {
      const type = 11;
      const res = await axios.get(`${apis.policy}${type}`);
      // console.log(res?.data?.data);
      // Assuming the HTML content is under res.data.data.description
      setData(res?.data?.data[0]?.description);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="responsible-gambling-container min-h-screen">
      {data ? (
        <div
          className="html-content"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
}
