import React, { PropTypes } from 'react';
import { isElement } from 'react-addons-test-utils';

const IfChild = ({children, className}) => {
    const childCount = React.Children.count(children);
    const firstChildIsElement = isElement(children);

    if (childCount === 1 && firstChildIsElement && !className) {
        return children;
    }
    return <div className={className}>{children}</div>;
};

IfChild.propTypes = {
    children: PropTypes.node.isRequired,
};

export default IfChild;
