import React from 'react';
import style from './home.module.css';

const Home = () => {
    return (
        <div className={style.HomePage_homePageContainer}>
            <aside className={style.FilterSidebar_filterContainer}>
                <h2>Filter</h2>
                <form>
                    <label for="price">Price: 75000</label>
                    <input type="range" id="price" name="price" min="1" max="100000" className={style.FilterSidebar_priceRange} step="10" value="75000" />
                    <h2>Category</h2>
                    <div className={style.FilterSidebar_categoryContainer}>
                        <div>
                            <input type="checkbox" id="mensFashion" name="mensFashion" />
                            <label for="mensFashion">Men's Clothing</label>
                        </div>
                        <div>
                            <input type="checkbox" id="womensFashion" name="womensFashion" />
                            <label for="womensFashion">Women's Clothing</label>
                        </div>
                        <div>
                            <input type="checkbox" id="jewelery" name="jewelery" /><label for="jewelery">Jewelery</label>
                        </div>
                        <div>
                            <input type="checkbox" id="electronics" name="electronics" />
                            <label for="electronics">Electronics</label>
                        </div>
                    </div>
                </form>
            </aside>
            <form className={style.HomePage_form}>
                <input type="search" placeholder="Search By Name" className={style.HomePage_searchInput} value="" />
            </form>
            <div className={style.ProductGrid_grid}>
                <div className={style.ProductContainer_productContainer}>
                    <div className={style.ProductImage_imageContainer}>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product" width="100%" height="100%" style={{ objectFit: 'contain' }} />
                    </div>
                    <div className={style.ProductDetails_productDetails}>
                        <div className={style.ProductDetails_productName}>
                            <p>Fjallraven - Foldsack No. 1 Backpac...</p>
                        </div>
                        <div className={style.ProductDetails_productOptions}>
                            <p>₹ 1099</p>
                        </div>
                        <button className={style.ProductDetails_addBtn} title="Add to Cart">Add To Cart</button>
                    </div>
                </div>
                <div className={style.ProductContainer_productContainer}>
                    <div className={style.ProductImage_imageContainer}>
                        <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="Product" width="100%" height="100%" style={{ objectFit: 'contain' }} />
                    </div>
                    <div className={style.ProductDetails_productDetails}>
                        <div className={style.ProductDetails_productName}>
                            <p>SanDisk SSD PLUS 1TB Internal SSD...</p>
                        </div>
                        <div className={style.ProductDetails_productOptions}>
                            <p>₹ 1029</p>
                        </div>
                        <button className={style.ProductDetails_addBtn} title="Add to Cart">Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Home