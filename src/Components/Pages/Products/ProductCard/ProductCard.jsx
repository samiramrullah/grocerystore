import "./ProductCard.css";
import image from "../../../../Images/apple.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../Redux/Store/CartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const addItemHandler = (data) => {
    dispatch(cartActions.addItemToCart(data));
  };
  const removeHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id))
  };
  return (
   <div>
     <div class="container d-flex justify-content-center">
    <figure class="card card-product-grid card-lg"> <i  class="img-wrap" data-abc="true"> <img src={image} alt='ggg'></img> </i>
        <figcaption class="info-wrap">
            <div class="row">
                <div class="col-md-9 col-xs-9"> <i  class="title" data-abc="true">{props.name}</i> <span class="rated">Laptops</span> </div>
                <div class="col-md-3 col-xs-3">
                    <div class="rating text-right"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <span class="rated">Rated 4.0/5</span> </div>
                </div>
            </div>
        </figcaption>
        <div class="bottom-wrap-payment">
            <figcaption class="info-wrap">
                <div class="row">
                    <div class="col-md-9 col-xs-9"> <i class="title" data-abc="true">Rs.{props.price}</i> <span class="rated">VISA Platinum</span> </div>
                    <div class="col-md-3 col-xs-3">
                        <div class="rating text-right"> #### 8787 </div>
                    </div>
                </div>
            </figcaption>
        </div>
        <div className="d-flex justify-content-between">
        <div onClick={()=>addItemHandler(props)} class="bottom-wrap"> <i  class="btn btn-primary " data-abc="true"> Add Item </i>
         
        </div>
        <div onClick={()=>removeHandler(props.id)} class="bottom-wrap"> <i  class="btn btn-warning " data-abc="true"> Delete Item </i> </div>
        </div>
    </figure>
</div>
   </div>
  );
};

export default ProductCard;
