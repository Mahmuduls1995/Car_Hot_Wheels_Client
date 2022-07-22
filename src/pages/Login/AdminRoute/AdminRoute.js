import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../components/hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user,admin, isLoading } = useAuth();
    if (isLoading) {
        return <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        ></Route>
    );
};

export default AdminRoute;