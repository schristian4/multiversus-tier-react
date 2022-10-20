// import { render } from 'react-dom';

import Application from './Application';

// import './style.css';

// const rootElement = document.getElementById('root');
// render(<Application />, rootElement);
// const container = document.getElementById('root');
// const root = hydrateRoot(container, <Application/>);


// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Application />);