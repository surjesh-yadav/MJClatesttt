import React from 'react'
import { Route,  Routes } from 'react-router-dom';

import Dashboard from './component/Dashboard';

import Forsage1 from './page/Forsage1';
import Forsage2 from './page/Forsage2';
import Forsage3 from './page/Forsage3';
import Landingpage from './Landingpage/Landingpage';
import Registration from './component/Registration';

const App = () => {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Forsage_xxx" element={<Forsage1 />} />
          <Route path="/Forsage_xxx2" element={<Forsage2 />} />
          <Route path="/Forsage_xxx3" element={<Forsage3 />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Registration" element={<Registration />} />

        </Routes>
      </React.Fragment>

      
    </div>
  )
}

export default App
