import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';


const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingBuyer(null)
    }

    const handleDeleteBuyer = (buyer) => {
        console.log(buyer)
    }

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    })


    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/buyers/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully');
                    refetch();
                }
            })
    }


    return (
        <div>
            <h3 className='text-3xl font-semibold mb-4'>All Buyers</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' &&
                                    <button onClick={() => handleMakeAdmin(user._id)} on className='btn btn-xs btn-primary'>Make Admin</button>
                                }</td>
                                <td>
                                    <label onClick={() => setDeletingBuyer(user)} htmlFor="confirmationModal" className="btn btn-xs">Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyer.name}`}
                    successAction={handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;