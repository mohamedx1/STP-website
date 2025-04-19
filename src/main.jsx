import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {registerLicense} from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF5cXmRCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWXtfcXVURWhfWUV+WkFWYUA=');

createRoot(document.getElementById('root')).render(
  <App />
)
