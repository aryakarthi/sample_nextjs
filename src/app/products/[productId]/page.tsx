import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product - ${params.productId}`,
//     description: `Description for product ${params.productId}`,
//   };
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const product = await fetch(
    `https://dummyjson.com/products/${params.productId}`
  ).then((res) => res.json());

  return {
    title: `Product : ${product?.title}`,
    description: `Description : ${product.description}`,
  };
};

const Product = ({ params }: Props) => {
  return <div>Product {params.productId}</div>;
};

export default Product;
