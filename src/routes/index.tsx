import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout.tsx';

import Home from '../pages/Home.tsx';
import About from '../pages/About.tsx';
import Contact from '../pages/Contact.tsx';
import PropertyOwners from '../pages/PropertyOwners.tsx';

import Rentals from '../pages/rentals/Rentals.tsx';
import AreaPage from '../pages/rentals/AreaPage.tsx';
import PropertyDetail from '../pages/rentals/PropertyDetail.tsx';

import CarLeasing from '../pages/services/CarLeasing.tsx';
import Support from '../pages/services/Support.tsx';

import NotFound from '../pages/errors/NotFound.tsx';

import { ProxyBrowser } from '../components/ProxyBrowser.tsx';
import { NetworkInspector } from '../components/NetworkInspector.tsx';
import { SplitView } from '../components/SplitView.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'property-owners',
        element: <PropertyOwners />,
      },
      {
        path: 'rentals',
        element: <Rentals />,
      },
      {
        path: 'rentals/:area',
        element: <AreaPage />,
      },
      {
        // Support Drupal upstream URLs directly
        path: 'rent-apartments-athens-:area',
        element: <AreaPage />,
      },
      {
        path: 'property/:propertyId',
        element: <PropertyDetail />,
      },
      {
        path: 'services/car-leasing',
        element: <CarLeasing />,
      },
      {
        path: 'services/support',
        element: <Support />,
      },
      // Proxy & Diagnostics Suite routes
      {
        path: 'proxy',
        element: (
          <div className="h-[calc(100vh-140px)] flex flex-col">
            <ProxyBrowser initialPath="/" />
          </div>
        ),
      },
      {
        path: 'diagnostics',
        element: <NetworkInspector />,
      },
      {
        path: 'split',
        element: (
          <div className="h-[calc(100vh-140px)] flex flex-col">
            <SplitView initialPath="/" />
          </div>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
