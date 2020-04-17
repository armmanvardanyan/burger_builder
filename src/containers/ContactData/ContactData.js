import React, { Component } from 'react';
import classes from './ContactData.module.css';
import { Button } from '../../components/UI/Button/Button';
import axios from '../../axios-orders'
import { Spinner } from '../../components/UI/Spinner/Spinner';
import { Aux } from '../../hoc/Auxillary/Auxillary';
import { withRouter } from 'react-router-dom'
import Input from '../../components/UI/Input/Input';
import { connect } from 'react-redux'
import {withErrorHandler} from '../../hoc/withErrorHandler/withErrorHandler'
import { purchaseBurgerStart } from '../../store/actions';


class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name"
                },
                validation: {
                    required: true
                },
                valid: false,
                value: ""
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "Street"
                },
                validation: {
                    required: true
                },
                valid: false,
                value: ""
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "Zip Code"
                },
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                value: ""
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "Country"
                },
                validation: {
                    required: true
                },
                valid: false,
                value: ""
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: "email",
                    placeholder: "Your Email"
                },
                validation: {
                    required: true,
                    checkEmail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                },
                valid: false,
                value: ""
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: "Fastest" },
                        { value: 'cheapest', displayValue: "Cheapest" }
                    ]
                },
                valid: true,
                validation: {},
                value: "cheapest"
            },
        },
        loading: false,
        formIsValid: false
    }

    onInputHandler = (e, name) => {
        const updatedForm = { ...this.state.orderForm }
        updatedForm[name].value = e.target.value
        updatedForm[name].valid = this.checkValidaty(e.target.value, updatedForm[name].validation)

        let formIsValid = true;
        for (let key in updatedForm) {
            formIsValid = updatedForm[key].valid && formIsValid
        }
        this.setState({ orderForm: updatedForm, formIsValid })

    }
    checkValidaty = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.minLength && isValid
        }
        if (rules.checkEmail) {
            isValid = rules.checkEmail.test(value) && isValid
        }

        return isValid
    }

    orderhandler = (e) => {
        e.preventDefault()
        const formData = {}
        for (let formId in this.state.orderForm) {
            formData[formId] = this.state.orderForm[formId].value
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        this.props.onOrderBurger(order)
    }


    render() {
        let formElemetsArr = Object.entries(this.state.orderForm).map(item => {
            return { id: item[0], config: item[1] };
        })

        let formElems = formElemetsArr.map(({ config: { elementType, elementConfig, validation, value, valid }, id }) => {
            return <Input
                key={id}
                elementtype={elementType}
                elementconfig={elementConfig}
                value={value}
                shouldValidate={validation}
                valid={valid}
                changed={(e) => this.onInputHandler(e, id)}
            />
        });

        let form = <Aux>
            <form className={classes.Form} onSubmit={this.orderhandler}>
                {formElems}
                <Button classNames="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        </Aux>

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your contact data</h4>
                {form}
            </div>

        )
    }
}


const mapStateToProps = (state) => ({
    ings: state.ingredients,
    price: state.totalPrice
})


const mapDispatchToProps = dispatch => ({
    onOrderBurger: (orderData) => dispatch(purchaseBurgerStart(orderData))  
})


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler((withRouter(ContactData),axios)))