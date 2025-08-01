import { useProduct } from "@/hooks";
import { useParams } from "next/navigation";
import React from "react";

import cls from "./Product.module.css";

const ProductsDetails = () => {
  const params = useParams();
  const { data, isLoading } = useProduct(params?.productId as string);
  return (
    <div className="container">
      {isLoading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : null}
      <div className={cls.post}>
        <img className={cls.img} src={data?.image} alt="" />
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
        <p>
          <strong>Price:</strong>
          {data?.price}
        </p>
        <p>
          <strong>Count:</strong>
          {data?.rating.count}
        </p>
        <p>
          <strong>Rating:</strong>
          {data?.rating.rate}
        </p>
      </div>
    </div>
  );
};

export default ProductsDetails;
