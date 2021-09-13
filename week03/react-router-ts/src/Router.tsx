import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Top from './Features/Top';
import Page1 from './Features/Page1';
import Page2 from './Features/Page2';

const Router = () => {
    return (
        // BrowserRouter = for using react-router on Web
        <BrowserRouter>
            {/* show first component corresponding the route */}
            <Switch>
                {/* show the component depends on the URL */}
                <Route exact={true} path="/" component={Top} />
                <Route path="/page1" component={Page1} />
                <Route path="/page1" component={Page2} />
                <Route path="/page2" component={Page2} />
                {/* Not Found */}
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;