import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <h2>
        Docs: {params.slug[0]} / {params.slug[1]}
      </h2>
    );
  } else if (params.slug?.length === 1) {
    return <h2>Docs: {params.slug[0]}</h2>;
  }
  return <h2>Docs Page</h2>;
};

export default Docs;
