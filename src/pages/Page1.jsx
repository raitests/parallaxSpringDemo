import React from "react";
import { useParams } from "react-router-dom";

function Page1() {
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      Page1
      <h1>{id}</h1>
    </div>
  );
}

export default Page1;
