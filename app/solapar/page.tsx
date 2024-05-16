import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Link href="/solapar/1" className="bg-green-500 p-4">
        Fatir
      </Link>
      <Link href="/solapar/10" className="bg-green-500 p-4">
        Fatir
      </Link>
      <Link href="/solapar/100" className="bg-green-500 p-4">
        Fatir
      </Link>
    </>
  );
};

export default page;
