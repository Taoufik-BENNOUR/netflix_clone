import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { AuthContextProvider } from './context/authContext/AuthContext';
import MovieContextProvider from './context/movieContext/MovieContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <AuthContextProvider>
        <MovieContextProvider>
          <App />
        </MovieContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
);
