import { useProducts } from "@/hooks";
import Link from "next/link";
import React from "react";

import cls from "./Products.module.css";

const Products = () => {
  const { data, isLoading } = useProducts();
  return (
    <div className="container">
      <h1>Posts</h1>
      {isLoading ? (
        <div>
          {" "}
          <h1>Loading!</h1>
        </div>
      ) : null}
      <div className={cls.posts}>
        {data?.map((e) => (
          <div key={e.id} className={cls.post}>
            <img src={e.image} alt="" className={cls.img} />
            <Link className={cls.link} href={`/products/${e.id}`}>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              <p>{e.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
