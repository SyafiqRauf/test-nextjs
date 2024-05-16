import React from "react";

const page = (params: any) => {
  return (
    <div>
      {params.productId} test nested {params.test}
    </div>
  );
};

export default page;
