import React from 'react';
import style from './order.module.css';

const Order = () => {
    return (
        <div className={style.OrdersPage_ordersContainer}>
            <h1>Your Orders</h1>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h2>Ordered On:- 2023-12-13</h2>
                <table className={style.OrderTable_table}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fjallraven - Foldsack No....</td>
                            <td>₹ 1099 </td>
                            <td>1 </td>
                            <td>₹ 1099</td>
                        </tr>
                        <tr>
                            <td>SanDisk SSD PLUS 1TB Inte...</td>
                            <td>₹ 699 </td>
                            <td>2 </td>
                            <td>₹ 1398</td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                    <tbody><tr className={style.OrderTable_totalPrice}>
                        <td>₹ 2497</td>
                    </tr>
                    </tbody></table>
            </div>
        </div>

    )
}

export default Order