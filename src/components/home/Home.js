import React, { useEffect, useState } from 'react';
import style from './home.module.css';
import axios from 'axios';


const Home = () => {
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [filterPrice, setFilterPrice] = useState(2000);

    const [mensFashionChecked, setMensFashionChecked] = useState(false);
    const [womensFashionChecked, setWomensFashionChecked] = useState(false);
    const [jeweleryChecked, setJeweleryChecked] = useState(false);
    const [electronicsChecked, setElectronicsChecked] = useState(false);

    console.log(filterPrice)
    const fetchProduct = async () => {
        try {
            const product = await axios.get(`https://fakestoreapi.com/products`);
            setProduct(product.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, []);

    // Input Search
    const filteredProducts = product.filter((data) => {
        const matchSearch = data.title.toLowerCase().includes(search.toLowerCase());
        const matchPrice = data.price <= filterPrice;

        // Category filter logic
        const matchCategory =
            (mensFashionChecked && data.category === "men's clothing") ||
            (womensFashionChecked && data.category === "women's clothing") ||
            (jeweleryChecked && data.category === "jewelery") ||
            (electronicsChecked && data.category === "electronics");

        return matchSearch && matchPrice && (matchCategory || (!mensFashionChecked && !womensFashionChecked && !jeweleryChecked && !electronicsChecked));
    });



    return (
        <div className={style.HomePage_homePageContainer}>

            <aside className={style.FilterSidebar_filterContainer}>
                <h2>Filter</h2>
                <form>
                    <label for="price">Price: {filterPrice}</label>
                    <input type="range" name="price" min="1" value={filterPrice} onChange={(e) => setFilterPrice(Number(e.target.value))} max="2000" className={style.FilterSidebar_priceRange} step="10" />
                    <h2>Category</h2>
                    <div className={style.FilterSidebar_categoryContainer}>
                        <div>
                            <input type="checkbox" id="mensFashion" checked={mensFashionChecked} onChange={(e) => setMensFashionChecked(e.target.checked)} name="mensFashion" />
                            <label for="mensFashion">Men's Clothing</label>
                        </div>
                        <div>
                            <input type="checkbox" id="womensFashion" checked={womensFashionChecked} onChange={(e) => setWomensFashionChecked(e.target.checked)} name="womensFashion" />
                            <label for="womensFashion">Women's Clothing</label>
                        </div>
                        <div>
                            <input type="checkbox" checked={jeweleryChecked} onChange={(e) => setJeweleryChecked(e.target.value)} name="jewelery" />
                            <label for="jewelery">Jewelery</label>
                        </div>
                        <div>
                            <input type="checkbox" value={electronicsChecked} onChange={(e) => setElectronicsChecked(e.target.value)} id="electronics" name="electronics" />
                            <label for="electronics">Electronics</label>
                        </div>
                    </div>
                </form>
            </aside>
            <form className={style.HomePage_form}>
                <input type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search By Name" className={style.HomePage_searchInput} />
            </form>
            <div className={style.ProductGrid_grid}>
                {filteredProducts.map((data, index) => (
                    <div className={style.ProductContainer_productContainer} key={index}>
                        <div className={style.ProductImage_imageContainer}>
                            <img src={data.image} alt={data.image} width="100%" height="100%" style={{ objectFit: 'contain' }} />
                        </div>
                        <div className={style.ProductDetails_productDetails}>
                            <div className={style.ProductDetails_productName}>
                                <p>{data.title.substring(0, 30)}..</p>
                            </div>
                            <div className={style.ProductDetails_productOptions}>
                                <p>₹ {data.price}</p>
                            </div>
                            <button className={style.ProductDetails_addBtn} title="Add to Cart">Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default Home