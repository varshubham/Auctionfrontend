
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Connect from './Components/Connect';
import Bid from './Components/Bid';

import State from './Context/State';
import Auciton from './Components/Auciton';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import HomePage1 from './Components/HomePage/HomePage1';
import Frame2 from './Components/Page1/Page1';
import Frame3 from './Components/Page2/Page2';
import Sell from './Components/Sell';
import AuctionHead from './Components/AuctionHead';
import Card from './Components/Card';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children: [
      {
        index:true,
        element :<Connect/>
        
      },
      {
        path: 'home',
        element:<HomePage1/>
      },
      {
        path:'registerauction',
        element : <Frame2/>
      },
      {
        path : 'auctiondetails',
        element:<Frame3/>
      },
      {
        path: 'login',
        element : <Login/>
      },
      {
        path : 'signup',
        element : <Signup/>
      },
      {
        path: 'bid',
        element:<Bid/>
      },
      {
        path: 'auction',
        element:<Auciton/>
      },
      {
        path : 'sell',
        element : <Sell/>
      },
      {
        path: 'auctionhead',
        element : <AuctionHead/>
      },
      {
        path:'card',
        element:<Card/>
      }
    
    ]
  }
  
])

function App() {


  return (
 
    <State>
    <RouterProvider router={router} />
    
    </State>
  );
}

export default App;


