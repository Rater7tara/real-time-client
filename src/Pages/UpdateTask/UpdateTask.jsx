import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTask = () => {
    const navigate = useNavigate();
    const task = useLoaderData();
    const { title, timestamp, description, completed, _id } = task;
    console.log(task);

    const handleUpdateTask = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const timestamp = form.timestamp.value;
        const description = form.description.value;
        const completed = form.completed.value;

        const updateTask = {title, timestamp, description, completed}

        console.log(updateTask);

        // send data to the server
        fetch(`http://localhost:5000/alltask/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Successfully Updated',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    }).then(() => {
                        navigate('/mytasks'); 
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error
            });
    }
    return (
        <div className=" p-10 md:flex justify-center ">
           
            <form className='form md:w-2/4 sm:w-full bg-base-200 p-10 rounded' onSubmit={handleUpdateTask}>
            <h2 className="text-4xl font-extrabold text-center mt-2 mb-2">Need To Update?</h2>
                {/* form toy name and row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title"
                            defaultValue={title} placeholder="Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Description row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description"
                            defaultValue={description}placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Timestamp</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="timestamp"
                            defaultValue={timestamp} id="" placeholder='Timestamp' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Sub-Category row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Completed</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="completed"
                            defaultValue={completed}  placeholder="completed" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <input type="submit" value="Update Task" className="btn bg-error hover:bg-rose-500 btn-block" />

            </form>
        </div>
    );
};

export default UpdateTask;