import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';


const MyOrders = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useHistory();
    console.log(myBookings);

    useEffect(() => {

        fetch(`https://hidden-savannah-51184.herokuapp.com/myBooking/${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })

            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    return res.json()
                }
                else if (res.status === 401) {
                    navigate.push('/login')
                }
            })
            .then(data => {
                console.log(data)
                setMyBookings(data)
                setLoading(false);
            })

    }, [])
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete!",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true,
        }).then(wantDelete => {
            if (wantDelete) {
                const loadingId = toast.loading("Deleting...");
                const url = `https://hidden-savannah-51184.herokuapp.com/deletedBooking/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success('Deleted', {
                            id: loadingId,
                        });
                        if (data.deletedCount > 0) {
                            const remaining = myBookings.filter(booking => booking?._id !== id)
                            setMyBookings(remaining);
                            return swal("Successfully Delete!", "Your order has been successfully deleted.", "success");
                        }
                    })
                    .catch(err => {
                        toast.dismiss(loading);
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                    })
            }
        })
    }
    return (
        <div>
            <div className="cardHeader">
                <h2>Recent Orders</h2>
                <Link to="" className="view-all-btn">View All</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Car Name</td>
                        <td>Address</td>
                        <td>Test Drive Date</td>
                        <td>Status</td>
                        <td>Cancel Order</td>
                    </tr>
                </thead>
                {loading ? <Spinner animation="border" variant="danger" /> :
                    myBookings.map(order => (
                        <tbody>
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.CarName}</td>
                                <td>{order.address}</td>
                                <td>{order.testDriveDate}</td>
                                <td><span className={order.status === "pending" ? "status pending" : order.status === "Pending" ? "status pending" : order.status === "On going" ? "status inprogress" : order.status === "Done" ? "status delivered" : null}>{order.status}</span></td>
                                <Button onClick={() => handleDelete(order._id)} variant="danger bg-danger m-1">Order Cancel</Button>
                            </tr>

                        </tbody>
                    ))}
            </table>
            <Toaster />
        </div>
    );
};

export default MyOrders;










