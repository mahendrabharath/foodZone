import React from 'react';
import './CheckoutPopUp.scss';
import { Button } from 'antd';
import { withRouter } from 'react-router';
import defaultSearch from '../../../mockdata/defaulSearch';

const data = defaultSearch.slice(3);


const CheckOutPopUp = props => {
    var price = 0;
    const total = data.map(el => price += Number(el.price))
// for (var i=0; i <total.length; i++) {
// total[i]
// }
    return <div class='checkout-container'>
        <div class='window'>
            <div class='order-info'>
                <div class='order-info-content'>
                    <h2>Order Summary</h2>
                    <div className='order-dish-list'>
                        {data.map(el => <>
                            <div class='line'></div>
                            <table class='order-table'>
                                <tbody>
                                    <tr>
                                        <td><img src={el.imageURL} class='full-width' />
                                        </td>
                                        <td>
                                            <br /> <span class='thin'>{el.cuisine}</span>
                                            {/* <br /> Free Run 3.0 Women<br /> <span class='thin small'> Color: Grey/Orange, Size: 10.5<br /><br /></span> */}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <div class='price'>{el.price}</div>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </>)}

                        {/* <div class='line'></div>
                        <table class='order-table'>
                            <tbody>
                                <tr>
                                    <td><img src='https://dl.dropboxusercontent.com/s/qbj9tsbvthqq72c/Vintage-20L-Backpack-by-Fj%C3%A4llr%C3%A4ven.jpg' class='full-width' />
                                    </td>
                                    <td>
                                        <br /> <span class='thin'>Fjällräven</span>
                                        <br />Vintage Backpack<br /> <span class='thin small'> Color: Olive, Size: 20L</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class='price'>$235.95</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class='line'></div>
                        <table class='order-table'>
                            <tbody>
                                <tr>
                                    <td><img src='https://dl.dropboxusercontent.com/s/nbr4koso8dpoggs/6136C1p5FjL._SL1500_.jpg' class='full-width' />
                                    </td>
                                    <td>
                                        <br /> <span class='thin'>Monobento</span>
                                        <br />Double Lunchbox<br /> <span class='thin small'> Color: Pink, Size: Medium</span>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div class='price'>$25.95</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class='line'></div> */}
                        {/* <table class='order-table'>
                            <tbody>
                                <tr>
                                    <td><img src='https://dl.dropboxusercontent.com/s/nbr4koso8dpoggs/6136C1p5FjL._SL1500_.jpg' class='full-width' />
                                    </td>
                                    <td>
                                        <br /> <span class='thin'>Monobento</span>
                                        <br />Double Lunchbox<br /> <span class='thin small'> Color: Pink, Size: Medium</span>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div class='price'>$25.95</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table> */}
                        <div class='line'></div>
                    </div>
                    <div class='total'>
                        <span style={{ 'float': 'left' }}>
                            {/* <div class='thin dense'>VAT 19%</div>
                            <div class='thin dense'>Delivery</div> */}
            TOTAL
          </span>
                        <span style={{ 'float': 'right', textAlign: 'right' }}>
                            {/* <div class='thin dense'>$68.75</div>
                            <div class='thin dense'>$4.95</div> */}
            {price}
          </span>
                    </div>
                    <div className='proceed-btn'>
                        <Button type="link" onClick={() => props.history.push('/orders')}>Proceed To Checkout</Button>
                    </div>
                </div>

            </div>

        </div>

    </div>
}


export default withRouter(CheckOutPopUp);