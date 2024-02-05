import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import TaskCart from '../TaskCart/TaskCart';

const MyTasks = () => {
    const [myTasks, setMyTasks] = useState([]);
    const { user } = useContext(AuthContext)

    const url = `https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
            .catch(error => console.error(error))
    }, [user]);


    useEffect(() => {
        fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
            .catch(error => console.error(error))
    }, [asc]);


    return (
        <div className='pt-20'>
            <h1 className='text-6xl font-bold text-center mb-4  text-purple-500'>My Tasks</h1>
            <div className="overflow-x-auto w-full">
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