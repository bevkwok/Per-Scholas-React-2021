import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import logging from './config/logging';
import routes from './config/routes';


const App: React.FC<{}> = props => {
  useEffect(() => {
    logging.info('Loading application.');
  }, [])
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route 
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                )}>
                </Route>
              )
            })}
          </Switch>
        </BrowserRouter>
      </div>
      );
}

export default App;