'use strict';

import React from 'react';

require('pieces_css/base.css');

var TestComponent = React.createClass({
    render () {
        return (<div>
            <h1>It works!</h1>
            <p> This is some text</p>
        </div>);
    }
});

React.render(<TestComponent />, document.querySelector('#content'));
