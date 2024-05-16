import React from "react";

const page = ({ params }: any) => {
  {
    if (params.slug?.length === 2) {
      return (
        <>
          <div>test slug length 2</div>
        </>
      );
    } else if (params.slug?.length === 1) {
      return (
        <>
          <div> length 1</div>
        </>
      );
    }
  }
  return <div>testslug base</div>;
};

export default page;
