import React from 'react';
import { Aux } from '../Auxillary/Auxillary';
import { Modal } from '../../components/UI/Modal/Modal';



export const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {

        state = {
            error: null
        }

        componentWillMount() {
            this.reqinterCeptor = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            })

            this.resinterCeptor = axios.interceptors.response.use(res => res, err => {
                this.setState({ error: err.message })
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqinterCeptor )
            axios.interceptors.request.eject(this.resinterCeptor )
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={() => this.setState({ error: null })}>
                        {this.state.error
                            ?
                            <p style={{ textAlign: "center", fontWeight: "bolder", color: "tomato" }}>{this.state.error}</p>
                            :
                            null
                        }
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}