import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from '../Wrapper';
import { Generator } from '../Generator';
import { NoMatch } from './NoMatch';

export const App = () => {
  return (<Routes>
     <Route path={`/`} element={<Wrapper />}>
      <Route index element={<Generator />} />
      <Route path='*' element={<NoMatch />} />
     </Route>
     <Route
        path="/generator"
        element={<Navigate to={`/`} replace />}
      />
     <Route path='*' element={<NoMatch />} />
  </Routes>);
}
