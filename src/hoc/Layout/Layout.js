import React from "react";
import classes from "./Layout.module.css"
import { ToolBar } from "../../components/Navigation/ToolBar/ToolBar";
import { SideDrawer } from "../../components/Navigation/SideDrawer/SideDrawer";
import { Aux } from "../Auxillary/Auxillary";

export default class Layout extends React.Component {

    state = {
        shown: false
    }
    onMenuHandler = () => {
        this.setState({
            shown: true
        })
    }
    onMenuCloseHandler = () => {
        this.setState({
            shown: false
        })
    }

    render() {
        return (
            <Aux>
                <SideDrawer shown={this.state.shown} modalClosed={this.onMenuCloseHandler} />
                <ToolBar click={this.onMenuHandler} />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        )
    }
}




