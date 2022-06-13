import React from "react";

type Props = {
  product: {
    category: string;
    title: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Object;
  };
};

export const Product: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
    </div>
  );
};
