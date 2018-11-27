import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home'
import apiMock from '../api-mock.json';

const homeContainer = document.getElementById('home-container');
render(
      <Home data={apiMock}></Home>
      , homeContainer);