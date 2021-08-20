import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/actions/cart/index";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { deleteWishlist } from "../../redux/actions/wishlist/index";
import { createWishlist } from "../../redux/actions/wishlist/index";
//import {} from "../../redux/actions/"
import "./CardProduct.css";
import { getWishlist } from "../../redux/actions/wishlist/index";
import { getAllProduct } from "../../redux/actions/product";
=======
import "./CardProduct.css";
import Swal from "sweetalert2";
>>>>>>> develop

function CardProduct(props) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
<<<<<<< HEAD
  const user =  useSelector(state => state.userReducer.user);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  console.log(wishlist)
  const[Fav,addFav] = useState(false)
  const[add,setAdd] = useState(false)

  useEffect(() => user.id ? dispatch(getCart(user.id)) : dispatch(getCart()), [])
=======
  const user =  useSelector(state => state.userReducer.user)
  const [add,setAdd] = useState(cart.find(prod => props.id == prod.id) ? true : false)
  
  useEffect(
    () => (user.id ? dispatch(getCart(user.id)) : dispatch(getCart())),
    []
  );
  const handleAdd = () => {
    Swal.fire({
      icon: "success",
      title: "¡Enhorabuena!",
      text: "El producto se agrego correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };
>>>>>>> develop

  useEffect(()=>{
    if(typeof wishlist.find != undefined &&typeof wishlist.find == "function"&&typeof wishlist.map == "function" ){
      if( wishlist.find(wish => wish.productId == props.id))addFav(true); else addFav(false) ;}
    
  
  },[wishlist])
  const handleAddCart = () => {
    const prod = {
      id: props.id,
      title: props.title,
      price: props.price,
      cant: 1,
      img: props.url,
    };

    if (cart) {
      if (cart.find((e) => e.id == prod.id))
        alert("El producto ya esta agregado al carrito");
      else {
        localStorage.setItem("cart", JSON.stringify([...cart, prod]));
        setAdd(true);
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([prod]));
    }

    user.id ? dispatch(getCart(user.id)) : dispatch(getCart())
  }
const handleSubmit = (e) => {
  console.log(typeof(e.target.value))
  if(e.target.value == "true" )  {
    console.log("aca a punto de entrar al dispatch para deletearlo")
    if(user.id != undefined && props.id != undefined)
    {
       dispatch(deleteWishlist({userId:user.id,productId:props.id})).then(()=> {
        if(document.getElementById("wishlist") !=undefined ){
          console.log("magia de jacobo");
          console.log(document.getElementById("wishlist"))
          dispatch(getWishlist(user.id))
        }
       })
        addFav(false)  
        
          
    }       
                          }
  
  if(e.target.value == "false"){
    console.log("aca a punto de entrar al dispatch para crearlo")
    if(user.id != undefined && props.id != undefined)
    {
      dispatch(createWishlist({productId:props.id,userId:user.id, })).then(()=>{
        if(document.getElementById("wishlist") !=undefined )
        dispatch(getWishlist(user.id))
      })
      addFav(true)
      
    }
   
  }
 
}
  // return (
  //       <div class="card" >
  //         <div class="text-center p-4">
  //           <img id="main-image" src={props.url} width="300" />
  //         </div>
  //         <div class="about text-center">
  //           <NavLink style={{ textDecoration: 'none', color: "black"}} to={`/product/${props.id}`}>
  //               <h6>{props.title}</h6>
  //           </NavLink>
  //           <span>${props.price}</span>
  //          {props.stock > 0 && <h6>Stock Disponible </h6> }
  //         </div>
  //         <div class="cart-button mt-3 px-2 d-flex justify-content-around align-items-center">
  //           <button class="btn btn-dark text-uppercase " disabled={add} onClick={handleAddCart}>Añadir al carro</button>
  //           <div class="add">
  //   user.id ? dispatch(getCart(user.id)) : dispatch(getCart());
  //   handleAdd();
  // };

  return (
    <div class="card">
      <div class="text-center p-4">
        <img id="main-image" src={props.url} width="300" />
      </div>
      <div class="about text-center">
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={`/product/${props.id}`}
        >
          <h6>{props.title}</h6>
        </NavLink>
        <span>${props.price}</span>
        {props.stock > 0 && <h6>Stock Disponible </h6>}
      </div>
      <div class="cart-button mt-3 px-2 d-flex justify-content-around align-items-center">
        <button
          class="btn btn-dark text-uppercase "
          disabled={add}
          onClick={handleAddCart}
        >
          Añadir al carro
        </button>
        <div class="add">
              <span class="product_fav">
                { 
                  <button class={Fav===true ? "fa fa-heart":"fa fa-heart-o"} value={Fav} onClick={handleSubmit} ></button>  
                  
                  }
              
              </span>
            </div>
          </div>
        </div>
            </div>
      </div>
    </div>
  );
}

export default CardProduct;
