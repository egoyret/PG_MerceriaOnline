import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddressFrom from "../../components/ShopCart/AddressForm"
import CartReceipt from "../../components/ShopCart/CartReceipt"
import CreateCheckoutButton from '../../components/MPago/index';
import { getCart } from "../../redux/actions/cart";

export default function CartForm(){
    const dispatch = useDispatch()
    const [address, setAddress] = useState("")
    const cart = useSelector(state => state.cartReducer.cart)

    useEffect(() => {
        dispatch(getCart())
    }, [address])

    return (
        <div>
            {!address ? 
            <AddressFrom setAddress={setAddress}/>
            :
            <div>
                <CartReceipt/>
                <br/>
                <CreateCheckoutButton products={cart}/>
            </div>
            }   
        </div>
    )
} 