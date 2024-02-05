import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';


import TaskTable from './TaskTable';


const AllTasks = () => {
    // const task = useLoaderData();
    const [search, setSearch] = useState('');
    const [tasks, setTasks] = useState([]);
    // const [gym, setGym] = useState([]);

    useEffect(() => {
        // Fetch places data from the JSON file
        fetch('data.json')
          .then((response) => response.json())
          .then((data) => setTasks(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

    // const handleDetailsModal = (id) =>{
    //     console.log(id)
    //     fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setTasks(data));

    // }

    // const handleSearch = () => {
    //     fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys/${search}`)
    //     .then((res) => res.json())
    //     .then((data) => setTasks(data));
    // };


    // console.log(search);


    return (
        <div className='pt-16'>
            <h1 className='text-6xl text-black font-bold text-center mb-5'>All Tasks</h1>

            <div className='form-control p-5'>
                <div className='text-center'>
                    <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="search" name="" id="" placeholder='Search...' className='input input-bordered w-1/2'/>
                    {/* <button onClick={handleSearch}
                    className='btn btn-primary ms-1'>Search Tasks</button> */}
                </div>

            </div>
            <div  className="overflow-x-auto w-full">
            <table className="table w-full">
                   {/* head */}
                   <thead>
                    <tr>
                        <th>
                        #
                        </th>
                        <th>Title</th>
                        
                        <th>description</th>
                        <th>completed</th>
                        
                        <th>timestamp</th>
                        <th>Action</th>
                        {/* <th>Price</th> */}
                        
                    </tr>
                </thead>
                
                {
  tasks.map((task, index) => (
    <TaskTable
      key={task._id}
      task={task}
      index={index + 1}
    //   handleDetailsModal ={handleDetailsModal}
    ></TaskTable>
  ))
}
            </table>
            </div>
            <div>
            {/* <DetailsModal task={task} /> */}
            </div>
        </div>
    );
};

export default AllTasks;