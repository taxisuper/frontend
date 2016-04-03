import React, { Component, PropTypes } from 'react';
import every from 'lodash/every';
import isArray from 'lodash/isArray';
import { isElementOfType } from 'react-addons-test-utils';
import IfChild from './IfChild.jsx';

function isIfChild(element) {
    return isElementOfType(element, IfChild);
}

class If extends Component {
    constructor(props) {
        super(props);
        this.hasElseCondition = this.hasElseCondition.bind(this);
    }

    hasElseCondition() {
        return React.Children.count(this.props.children) === 2 && every(this.props.children, isIfChild);
    }

    render() {
        if (this.hasElseCondition()) {
            return this.props.children[this.props.condition ? 0 : 1];
        }

        const shouldBeVisible = this.props.condition;
        const hasCustomClassOrStyle = this.props.className || this.props.style;
        const hasMoreThanOneChild = React.Children.count(this.props.children) > 1;

        if (!shouldBeVisible) {
            return null;
        }

        if (!hasCustomClassOrStyle && !hasMoreThanOneChild) {
            if (isArray(this.props.children)) {
                throw Error(`Component If received an array of type: '${this.props.children[0].type.name}' as its only child. A React component's only child can never be an array, wrap the elements in a div or similar.`);
            }
            return this.props.children;
        }

        return (<div className={this.props.className || ''} style={this.props.style}>
            {this.props.children}
        </div>);
    }
}

If.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    condition: PropTypes.bool.isRequired,
};

export default If;