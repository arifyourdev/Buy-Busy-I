import React from 'react';
import style from './cart.module.css';
import MinuseImg from "../../images/minuse.png";
import PlusImg from "../../images/plus.png";

const Cart = () => {
    return (
        <div className={style.CartPage_cartPageContainer}>
            <aside className={style.CartPage_totalPrice}>
                <p>TotalPrice:- ₹1099/-</p>
                <button className={style.CartPage_purchaseBtn}>Purchase</button>
            </aside>
            <div className={style.ProductGrid_grid}>
                <div className={style.ProductContainer_productContainer}>
                    <div className={style.ProductImage_imageContainer}>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product" width="100%" height="100%" style={{ objectFit: 'contain' }} />
                    </div>
                    <div className={style.ProductDetails_productDetails}>
                        <div className={style.ProductDetails_productName}>
                            <p>Fjallraven - Foldsack No. 1 Backpac...</p>
                        </div>
                        <div className={style.ProductDetails_productOptions}><p>₹ 1099</p>
                            <div className={style.ProductDetails_quantityContainer}>
                                <img src={MinuseImg} alt={MinuseImg} />
                                0
                                <img src={PlusImg} alt={PlusImg} />
                            </div>
                        </div>
                        <button className={style.ProductDetails_removeBtn} title="Remove from Cart">Remove From Cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart