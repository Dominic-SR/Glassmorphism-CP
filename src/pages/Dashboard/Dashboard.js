import React from "react";
import "./Dashboard.css"
const Dashboard = () =>{
    return(<>   

        <div className="cardBox">
            <div className="card">
                <div>
                    <div className="numbers">1,504</div>
                    <div className="cardName">Daily Views</div>
                </div>

                <div className="iconBx">
                    <ion-icon name="eye-outline"></ion-icon>
                </div>
            </div>

            <div className="card">
                <div>
                    <div className="numbers">80</div>
                    <div className="cardName">Sales</div>
                </div>

                <div className="iconBx">
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
            </div>

            <div className="card">
                <div>
                    <div className="numbers">284</div>
                    <div className="cardName">Comments</div>
                </div>

                <div className="iconBx">
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                </div>
            </div>

            <div className="card">
                <div>
                    <div className="numbers">$7,842</div>
                    <div className="cardName">Earning</div>
                </div>

                <div className="iconBx">
                    <ion-icon name="cash-outline"></ion-icon>
                </div>
            </div>
        </div>

        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Recent Orders</h2>
                    <a href="#" className="btn">View All</a>
                </div>

                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Payment</td>
                            <td>Status</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Star Refrigerator</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span className="status delivered">Delivered</span></td>
                        </tr>

                        <tr>
                            <td>Dell Laptop</td>
                            <td>$110</td>
                            <td>Due</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>

                        <tr>
                            <td>Apple Watch</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span className="status return">Return</span></td>
                        </tr>

                        <tr>
                            <td>Addidas Shoes</td>
                            <td>$620</td>
                            <td>Due</td>
                            <td><span className="status inProgress">In Progress</span></td>
                        </tr>

                        <tr>
                            <td>Star Refrigerator</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span className="status delivered">Delivered</span></td>
                        </tr>

                        <tr>
                            <td>Dell Laptop</td>
                            <td>$110</td>
                            <td>Due</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>

                        <tr>
                            <td>Apple Watch</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span className="status return">Return</span></td>
                        </tr>

                        <tr>
                            <td>Addidas Shoes</td>
                            <td>$620</td>
                            <td>Due</td>
                            <td><span className="status inProgress">In Progress</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Recent Orders</h2>
                    <a href="#" className="btn">View All</a>
                </div>

                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Payment</td>
                            <td>Status</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Star Refrigerator</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span className="status delivered">Delivered</span></td>
                        </tr>

                        <tr>
                            <td>Dell Laptop</td>
                            <td>$110</td>
                            <td>Due</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>

                        <tr>
                            <td>Apple Watch</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span className="status return">Return</span></td>
                        </tr>

                        <tr>
                            <td>Addidas Shoes</td>
                            <td>$620</td>
                            <td>Due</td>
                            <td><span className="status inProgress">In Progress</span></td>
                        </tr>

                        <tr>
                            <td>Star Refrigerator</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span className="status delivered">Delivered</span></td>
                        </tr>

                        <tr>
                            <td>Dell Laptop</td>
                            <td>$110</td>
                            <td>Due</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>

                        <tr>
                            <td>Apple Watch</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span className="status return">Return</span></td>
                        </tr>

                        <tr>
                            <td>Addidas Shoes</td>
                            <td>$620</td>
                            <td>Due</td>
                            <td><span className="status inProgress">In Progress</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        </>
    )
} 

export default Dashboard;