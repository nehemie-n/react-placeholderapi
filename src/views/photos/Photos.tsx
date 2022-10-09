import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  brand: "Apple";
  category: "smartphones";
  description: "An apple mobile which is nothing like apple";
  discountPercentage: 12.96;
  id: 1;
  images: [string];
  price: 549;
  rating: 4.69;
  stock: 94;
  thumbnail: string;
  title: string;
}
/**
 *
 */
function Product(prod: Product) {
  return (
    <div className="p-4 bg-white transition-all hover:shadow-md rounded-md">
      <div className="pb-2">
        <img
          className="mx-auto h-64 w-full rounded-md object-cover"
          key={prod.thumbnail}
          src={prod.thumbnail}
          alt=""
        />
      </div>
      <div className="text-sm opacity-80">{prod.description}</div>
      <div className="pt-1 font-bold text-red-900">$ {prod.price}</div>
    </div>
  );
}

/**
 *
 * @returns
 */
export default function () {
  const [prods, setPhotos] = useState<Product[]>([]);

  function fetchPhotos() {
    return axios
      .get<{ products: Array<Product> }>(
        "https://dummyjson.com/products?limit=5"
      )
      .then((resp) => {
        setPhotos(resp.data.products ?? []);
      });
  }

  useEffect(() => {
    fetchPhotos();
  });

  return (
    <div className="py-4 px-4 grid grid-cols-2 items-center justify-between gap-8">
      {prods.map((prod) => {
        return Product(prod);
      })}
    </div>
  );
}
