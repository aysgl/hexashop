import PageRoutes from './routes';
import MainLayout from './common/layout';
import AppRoute from './routes/route';
import { Switch } from 'react-router-dom';
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/templatemo-hexashop.css'
import './assets/css/owl-carousel.css'
import './assets/css/lightbox.css'

// import './assets/js/custom.js'



function App() {
  return (
    <> {/* React Fragment */}
      <Switch>
        {PageRoutes.map((route, id) =>
          <AppRoute
            exact={true}
            path={route.path}
            layout={MainLayout}
            component={route.component}
            key={id}
            isAuthProtected={false}
          />)}
      </Switch>
    </>
  );
}

export default App;
