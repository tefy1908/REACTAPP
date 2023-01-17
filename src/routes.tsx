import { Route } from 'react-router-dom';
import Private from './Views/Private';
import Public from './Views/Public';


//import { ReactComponent as partnerIcon } from "assets/img/menu/partner.svg";

const routes = [
  // PRIVATE
  // {
  //   path: "/offer",
  //   layout: "/private",
  //   name: "Demandes",
  //   icon: incomingIcon,
  //   component: InComingRides,
  // },
  {
    path: "/reservation",
    layout: "/private",
    name: "Réservation",
    
    component: Private.Ongoing, // component c element
  },
  {
    path: "/RideHistory",
    layout: "/private",
    name: "Historique",
    
    component: Private.RideHistory,
  },
  {
    path: "/TestPage",
    layout: "/private",
    name: "testpage",
    
    component: Private.TestPage,
  },
    {
      path: "/new-ride",
      layout: "/private",
      name: "Réserver un transport",
      
      style: "primary",
      component: Private.NewRide,
  },
  // {
  //   path: "/staff",
  //   layout: "/private",
  //   name: "staff list",
  //   component: StaffPage,
  // },
  {
    path: "/OngoingRide",
    layout: "/private",
    name: "Réservations en cours",
    
    component: Private.OngoingRide,
  },
  
  
  {
    hidden: true,
    path: "*",
    layout: "/private",
    name: "not found 404",
    component: Private.Ongoing,
  },
  // PUBLIC
  {
    path: "/login",
    layout: "/public",
    name: "Page login",
    component: Public.Login,
  },
  {
    path: "/forgot",
    layout: "/public",
    name: "Forgot password",
    component: Public.Forgot,
  },
  {
    layout: "/public",
    path: `*`,
    component: Public.Login,
  },
];
    export function getRoutes(layout: '/private' |'/public' ) {
    return routes.map((prop, key) => {
      if (prop.layout === layout) {
        const View = prop.component;
        return (
          <Route
            path={prop.path}
            element={<View/>}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  }

export default routes;