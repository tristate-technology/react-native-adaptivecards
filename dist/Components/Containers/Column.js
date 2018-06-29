import * as React from 'react';
import { FlexBox } from '../Basic/FlexBox';
export class Column extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(FlexBox, { flexDirection: 'column', relativeWidth: true, alignSelf: 'stretch', alignContent: 'flex-start', alignItems: 'stretch', justifyContent: 'space-between', width: this.props.width, vIndex: this.props.vIndex, hIndex: this.props.hIndex, style: this.props.style, vSpace: this.props.spacing, onPress: this.props.onPress }, this.props.children));
    }
}
