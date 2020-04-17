import React, { Component } from 'react'
import { Burger } from '../../components/Burger/Burger'
import { BuildControls } from '../../components/Burger/BurgerControls/BuildControls'
import { Modal } from '../../components/UI/Modal/Modal'
import { OrderSummary } from '../../components/Burger/OrderSummary/OrderSummary'
import { Aux } from '../../hoc/Auxillary/Auxillary'
import { Spinner } from '../../components/UI/Spinner/Spinner'
import { withErrorHandler } from '../../hoc/withErrorHandler/withErrorHandler'
import { addIngredient, removeIngredient, initIngredients, fetchIngredientsFailed } from '../../store/actions/index'
import { connect } from 'react-redux'
import axios from '../../axios-orders'

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
    }


    componentDidMount() {
        this.props.onInitIngredients()
    }


    purchaseHandler = () => this.setState({ purchasing: true })
    purchaseCancelHandler = () => this.setState({ purchasing: false })

    purchaseContinueHandler = () => {
        this.props.history.push("/checkout")
    }

    render() {
        const disabledInfo = { ...this.props.ingrd }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null
        let burger = this.props.error ? <p>ingredients cant be loaded</p> : <Spinner />

        if (this.props.ingrd) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingrd} />
                    <BuildControls
                        onIncrement={this.props.onIncrementHandler}
                        onDecrement={this.props.onDecrementHandler}
                        disabledInfo={disabledInfo}
                        totalPrice={this.props.prc}
                        onPurchase={this.purchaseHandler}
                    />
                </Aux>);

            orderSummary = (<OrderSummary
                ingredients={this.props.ingrd}
                cancel={this.purchaseCancelHandler}
                continues={this.purchaseContinueHandler}
                totalPrice={this.props.prc}
            />)
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {orderSummary}
                </Modal>
                <div style={{ marginTop: "100px" }}>
                    {burger}
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = (state) => ({
    ingrd: state.ingredients,
    prc: state.totalPrice,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    onIncrementHandler: (name) => dispatch(addIngredient(name)),
    onDecrementHandler: (name) => dispatch(removeIngredient(name)),
    onInitIngredients: () => dispatch(initIngredients()),
})



export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))