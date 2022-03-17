import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import Details from "../components/Details";
import {createMemoryHistory} from 'history';

test('Render details component', async () => {

    const history = createMemoryHistory();
    history.push("/details", {title: "", url: "", created_at: Date(), author: ""});

    const {debug} = render(
        <Router history={history}>
            {/* <Details/> */}
            <Switch>
                <Route exact component={Details}/>
                <Route path="/details" render={() => <div>created</div>} />
            </Switch>
        </Router>
    );
    const details = screen.getByTestId("details");
    expect(details).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();
});