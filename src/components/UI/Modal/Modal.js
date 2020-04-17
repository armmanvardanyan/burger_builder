import React from 'react';
import classes from './Modal.module.css';
import { Backdrop } from '../Backdrop/Backdrop';
import { Aux } from '../../../hoc/Auxillary/Auxillary';


export class Modal extends React.Component {
    
    shouldComponentUpdate(prevP,prevS){
      if (this.props.show !== prevP.show || this.props.children !== prevP.children ){
        return true
      }
      return false
    }

  render(){
    return (
        <Aux>
            <Backdrop modalClosed = {this.props.modalClosed}  show = {this.props.show} />
        <div 
             className = {classes.Modal}
             style={{
                transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity:this.props.show? "1": "0"
             }}
        >
            {this.props.children}
        </div>
        </Aux>
    )
  }
}