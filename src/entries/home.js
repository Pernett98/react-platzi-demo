import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home'
import apiMock from '../api-mock.json';

const app = document.getElementById('app');
render(
      <Home data={apiMock}></Home>
      , app);