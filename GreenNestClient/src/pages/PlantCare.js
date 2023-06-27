import Card from "../component/Card";
import { useSelector } from "react-redux";
export const PlantCare = () => {
  const products = useSelector((state) => state.productdetails.productList);
  // console.log(products);
  const imagePath = useSelector((state) => state.banner.imagePath);
  return (
    <>
      <div className="product-container">
        <div className="headding-container">
          <div className="label-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJu4LHlQXXwzsq3ERt7M_2qUQRQfDc1WhDKA&usqp=CAU"
              alt="label-img"
            />
          </div>
          <div className="product-headding topheadding">Plant Care</div>
          <div className="arrow-container"></div>
        </div>

        <div className="card-container">
          {/* <div className="plants-row"> */}
          {products.map((item, key) => {
            return item.category == "plantcares" ? (
              <Card
                key={key}
                image={imagePath + item.product_img}
                product_id={item.product_id}
                cardClass="simpleCard"
                productname={item.product_name}
                oldprice={item.old_price}
                newprice={item.selling_price}
                description={item.description}
              />
            ) : null;
          })}

          {/* </div> */}
        </div>
      </div>
    </>
  );
};
