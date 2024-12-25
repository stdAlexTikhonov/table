import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from '../Wrapper';
import { Generator } from '../Generator';
import { NoMatch } from './NoMatch';
import { Basic, RowSelection } from '../../pages';

export const App = () => {
  return (<Routes>
     <Route path={`/table`} element={<Wrapper />}>
      <Route index element={<Generator />} />
      <Route path={`/table/basic`} element={<Basic />} />
      <Route path={`/table/rowselection`} element={<RowSelection />} />
      <Route path='*' element={<NoMatch />} />
     </Route>
     <Route
        path="/table/generator"
        element={<Navigate to={`/table`} replace />}
      />
      <Route
        path="/"
        element={<Navigate to={`/table`} replace />}
      />
  </Routes>);
}
