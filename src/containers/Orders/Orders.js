import React from 'react';
import Order from '../../components/Order/Order/Order';
import classes from './Orders.module.css';
import axios from '../../axios-orders'
import { withErrorHandler } from '../../hoc/withErrorHandler/withErrorHandler';
import { Spinner } from '../../components/UI/Spinner/Spinner';

class Orders extends React.Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get("/orders.json")
            .then(res => {
                const fetchedOrders = []
                for (let key in res.data) {
                    fetchedOrders.push({
                        ingredients: res.data[key].ingredients,
                        price: res.data[key].price,
                        id: key
                    })
                }
                this.setState({ loading: false, orders: fetchedOrders })
            })
            .catch(err => {
                this.setState({ loading: false })
            })
    }


    render() {


        let order = this.state.orders.map(order => {
            return <Order
                key={order.id}
                id={order.id}
                price={order.price}
                ingredients={order.ingredients}
            />
        })


        if (this.state.loading) {
            order = <Spinner />
        }

        if (!this.state.loading && !this.state.orders.length) {
            order = <div style={{textAlign:"center",fontSize:"2em"}}>Please Add  Orders</div>
        }
        return (
            <div className={classes.Orders}>
                {order}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios)