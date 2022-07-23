import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManageAllBooking = () => {
    const [booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://hidden-savannah-51184.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {

                setBooking(data)
                setLoading(false)
            })
    }, [])
    // ORDER DETELE HANDLER
    const handleDelete = (id) => {
        // const proceed = window.confirm('Are You sure to Cancel the Booking?')
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
                            const remaining = booking.filter(booking => booking?._id !== id)
                            setBooking(remaining);
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
    // HANDLE STATUS CHANGE
    const handleStatusChange = (id, status) => {
        let modifiedBooking = [];
        booking.forEach(order => {
            if (order._id === id) {
                order.status = status;
            }
            modifiedBooking.push(order)
        })
        setBooking(modifiedBooking)

        const modifiedStatus = { id, status }

        axios.patch(`https://hidden-savannah-51184.herokuapp.com/booking/${id}`, modifiedStatus)
            .then(res => res.data && toast.success(`Set to ${status}`))
            .catch(error => alert(error.message))
    }
    return (
        <div className="px-3 manage-booking">
            <div className="cardHeader">
                <h2>Recent Orders</h2>
                <h2>Total Booking {booking.length}</h2>
                <Link to="" className="view-all-btn">View All</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>SL NO</td>
                        <td>Car Name</td>
                        <td>Email</td>
                        <td>Test Drive Date</td>
                        <td>Status</td>
                        <td>Cancel Order</td>
                    </tr>
                </thead>
                {loading ? <Spinner animation="border" variant="success" /> :
                    booking.map((order, index) => (

                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{order?.name?.toUpperCase()}</td>
                                <td>{order?.email}</td>
                                <td>{order?.orderTime}</td>
                                <td>
                                    <select
                                        className={order.status === "pending" ? "btn btn-danger" : order.status === "Done" ? "btn btn-success" : "btn btn-info"}
                                        defaultValue={order?.status}
                                        onChange={e => handleStatusChange(order._id, e.target.value)}>
                                        <option className="bg-white text-muted">Pending</option>
                                        <option className="bg-white text-muted">On going</option>
                                        <option className="bg-white text-muted">Done</option>
                                    </select>
                                    <Toaster />
                                </td>
                                <Button onClick={() => handleDelete(order._id)} variant="danger bg-danger m-1">CANCEL</Button>
                            </tr>
                        </tbody>
                    ))}
            </table>
        </div>

    );
};

export default ManageAllBooking;



