import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import Card from "../../component/Card";
import "./ProductList.css";
export const ProductList = () => {
  const location = useLocation();
  let filteredProducts = [];
  const products = useSelector((state) => state.productdetails.productList);
  const imagePath = useSelector((state) => state.banner.imagePath);
  if (location.state.tag) {
    const requestedTag = location.state.tag.toUpperCase().replace(" ", "_");
    filteredProducts = products.filter((product) => {
      var tags = JSON.parse(product.product_tags);
      return tags.includes(requestedTag);
      //  console.log(product);
    });
  }
  if (location.state.category) {
    filteredProducts = products.filter((product) => {
      return product.category == location.state.category;
    });
  }
  console.log(filteredProducts);

  return (
    <>
      <div className="productListContainer">
        {filteredProducts.map((product, key) => {
          return (
            <Card
              key={key}
              image={imagePath + product.product_img}
              product_id={product.product_id}
              cardClass="simpleCard"
              productname={product.product_name}
              oldprice={product.old_price}
              newprice={product.selling_price}
              description={product.description}
              productInfo={product}
              viewProduct={true}
            />
          );
        })}
      </div>
    </>
  );
};
