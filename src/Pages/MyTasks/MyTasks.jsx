import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';
import TaskCart from '../TaskCart/TaskCart';

const MyTasks = () => {
    const [myTasks, setMyTasks] = useState([]);
    const [asc, setAsc] = useState(true);
  const {user} = useContext(AuthContext)

  // const url = `http://localhost:5000/alltask`;

    useEffect(() => {
      fetch(`http://localhost:5000/alltask`)
          .then(res => res.json())
          .then(data => setMyTasks(data))
          .catch(error => console.error(error))
  }, [user]);


    useEffect(() => {
      fetch(`http://localhost:5000/alltask?sort=${asc ? 'asc' : 'desc'}`)
          .then(res => res.json())
          .then(data => setMyTasks(data))
          .catch(error => console.error(error))
  }, [asc]);


    return (
        <div className='pt-20'>
        <h1 className='text-6xl font-bold text-center mb-4  text-rose-500'>My Tasks</h1>
        <div className="overflow-x-auto w-full">
<table className="table w-full">
{/* head */}
<thead>
                    <tr>
                        <th>
                        #
                        </th>
                        <th>Title</th>
                        <th>completed</th>
                        
                        <th>timestamp</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
        {
            myTasks.map((task, index) => (<TaskCart
            key={task._id}
            task={task}
            index={index}
            ></TaskCart>))
        }
        </table>
        </div>
    </div>
    );
};

export default MyTasks;