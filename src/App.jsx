import { lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import AppNavigation from './components/Navigation/AppNavigation';

//Pages
const Details = lazy(() => import('./pages/ProjectDetails/Details'));
const Home = lazy(() => import('./pages/Home/Home'));

//App Routes;
const routes = [
  {
    name: 'home',
    path: '/',
    title: 'Home Page',
    component: Home
  },

  {
    name: 'project details',
    path: '/:project',
    title: 'Project Details',
    component: Details
  }
];


const loading = () => <h1>Loading Component</h1>



function App() {
  return (
    <>
      <Suspense fallback={loading}>
        <AppNavigation />
        {/* <Router>
          <Switch>
            {routes.map(route => <Route exact={route.exact ?? null} path={route.path} component={route.component} />)}
            <Route>
              <h1>Omo! You don loss ooo</h1>
            </Route>
          </Switch>
        </Router> */}
      </Suspense>
    </>
  );
}

export default App;
