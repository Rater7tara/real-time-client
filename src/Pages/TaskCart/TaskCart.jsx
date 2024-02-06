import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useEffect } from 'react';

const TaskCart = ({task, index}) => {
    const { title, timestamp, description, completed, _id } = task;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
    
            fetch(`http://localhost:5000/alltask/${_id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your Task has been deleted.',
                    'success'
                  )
                  const remaining = myTasks.filter(data => data._id !== _id);
                  setMyTasks(remaining);
                }
              })
    
          }
        })
    
      }



    return (
        <>
      
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              {index + 1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{title}</div>
                  <div className="text-sm opacity-50">{description}</div>
                </div>
              </div>
            </td>
            <td>
              {completed}
            </td>
            <td>
            {timestamp}
            </td>
            <th>
            <Link to={`updateTask/${_id}`}><button className="btn btn-success btn-sm me-3 mb-2 ">Update</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm me-3">Delete</button>
            </th>
          </tr>
          
        </tbody>
    </>
    );
};

export default TaskCart;