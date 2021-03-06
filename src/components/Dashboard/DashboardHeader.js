import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import auth from 'services/gqlAuth';

import Header from 'components/Shared/Header';
import TopBar from 'components/Shared/TopBar';
import UserControls from 'components/Shared/Header/UserControls';

export default function DashboardHeader({ location, currentUser, ...props }) {
  return (
    <div>
      <TopBar>
        <UserControls {...props} />
      </TopBar>
      <Header title="Dashboard" location={location}>
        <li
          className={
            location.pathname.includes('/map')
              ? 'Header__tab--active'
              : 'Header__tab'
          }
        >
          <Link to="/dashboard/map">Crossings Map</Link>
        </li>
        <li
          className={
            location.pathname.endsWith('crossings/list')
              ? 'Header__tab--active'
              : 'Header__tab'
          }
        >
          <Link to="/dashboard/crossings/list">Crossings List</Link>
        </li>
        <li
          className={
            location.pathname.endsWith('crossings/history')
              ? 'Header__tab--active'
              : 'Header__tab'
          }
        >
          <Link to="/dashboard/crossings/history">History</Link>
        </li>
        {['floods_community_admin','floods_super_admin'].includes(auth.getRole()) &&
          <li
            className={
              location.pathname.endsWith('crossings/add')
                ? 'Header__tab--active'
                : 'Header__tab'
            }
          >
            <Link to="/dashboard/crossings/add">Add Crossing</Link>
          </li>
        }
        <li
          className={
            location.pathname.endsWith('new')
              ? 'Header__tab--active'
              : 'Header__tab'
          }
        >
          <Link to="/dashboard/new">What's New</Link>
        </li>
        {(currentUser.role === 'floods_community_admin' ||
          currentUser.role === 'floods_super_admin') && (
          <li
            className={
              location.pathname.endsWith('users')
                ? 'Header__tab--active'
                : 'Header__tab'
            }
          >
            <Link to="/dashboard/users">Manage Users</Link>
          </li>
        )}
      </Header>
    </div>
  );
}

DashboardHeader.propTypes = {
  location: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};
