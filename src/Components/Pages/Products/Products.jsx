import ProductCard from "./ProductCard/ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../../../Redux/Store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../../Redux/Store/ProductSlice";
import "./Products.css";
const Products = () => {
  const dispatch = useDispatch();
  const productsItems = useSelector((state) => state.product.data);
  const status = useSelector((state) => state.product.status);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (status === STATUS.LOADING) {
    return <h1>Loading..............</h1>;
  } else if (status === STATUS.ERROR) {
    return <h1>Error.................</h1>;
  }
  return (
    <div className="Products_main">
      <div className="products">
        <div className="row">
          {productsItems?.map((item) => (
            <div className="col" key={item.id}>
              <div>
                <ProductCard
                  name={item.title}
                  description={item.description}
                  price={item.price}
                  id={item.id}
                ></ProductCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
