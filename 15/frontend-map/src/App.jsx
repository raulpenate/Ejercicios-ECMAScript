import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuBar } from './components/MenuBar';
import { FormCreate } from './components/FormCreate'; // Import your FormCreate component
import { FormEdit } from './components/FormEdit'; // Import your FormEdit component
import { Map } from './components/Map'

const App = () => {
    return (
        <Router>
            <MenuBar />
            <Map/>
            <Routes>
                <Route path="/create" element={<FormCreate />} />
                <Route path="/edit" element={<FormEdit />} />
            </Routes>
        </Router>
    );
};

export default App;
