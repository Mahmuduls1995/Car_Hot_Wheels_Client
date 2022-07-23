import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const ManageAllCar = () => {
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);
    const { user } = useAuth();
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/availableCars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setLoading(false);
            })
            .catch(error => toast.error(error.message))
    }, [])

    // HANDLE RESTRICTPERMISSION 
    const restrictPermission = (id) => {
        let matchedID = false;
        for (let i = 0; i < 6; i++) {
            const { _id } = cars[i];
            if (id === _id) {
                matchedID = true;
            }
        }
        if (user.email === "admin@admin.com" && matchedID) {
            return true;
        }
        return false;
    }

    // CAR DETELE HANDLER
    const handleDelete = (id) => {
        if (restrictPermission(id)) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
        }
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this service?",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true,
        }).then(proceed => {
            if (proceed) {
                const loading = toast.loading("Deleting...")
                const url = `http://localhost:5000/deletedCar/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            toast.success('Car Details Deteled', {
                                id: loading,
                            })
                            const remaining = cars.filter(car => car?._id !== id)
                            setCars(remaining);
                        }
                    })
                    .catch(err => {
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                        toast.error('Something went wrong!', {
                            id: loading,
                        });
                    })
            }
        })
    }
    // CAR UPDATE HANDLER
    const handleUpdate = (id) => {
        if (restrictPermission(id)) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
        }
        const uri = `update/${id}`;
        history.push(uri)
    }
    return (
        <div>
            <div className="cardHeader">
                <h2>Manage All Car</h2>
                <h2>Total Cars {cars.length}</h2>
                <Link to="" className="view-all-btn">View All</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>SL NO</td>
                        <td>Car Photo</td>
                        <td>Car Name</td>
                        <td>Price</td>
                        <td>UPDATE</td>
                        <td>DELETE</td>
                    </tr>
                </thead>
                {loading ? <Spinner animation="border" variant="success" /> :
                    cars.map((car, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td style={{ width: '180px' }}><img src={car.img} style={{ width: '130px', height: '100px', borderRadius: '5px' }} alt="" /> </td>
                                <td>{car.name?.toUpperCase()}</td>
                                <td>{car.price}</td>
                                <td><Button onClick={() => handleUpdate(car._id)} variant="warning bg-warning m-1">Update</Button></td>
                                <td><Button onClick={() => handleDelete(car._id)} variant="danger bg-danger text-light m-1">Delete</Button></td>
                            </tr>
                        </tbody>
                    ))}
            </table>
            <Toaster />
        </div>
    );
};

export default ManageAllCar;