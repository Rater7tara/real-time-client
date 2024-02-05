import React from 'react';

const TaskCart = ({task, index}) => {
    const { title, timestamp, description, completed, _id } = task;
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
              <br/>
              <span className="badge badge-ghost badge-sm">{timestamp}</span>
            </td>
            <th>
            <Link to={`updateTask/${_id}`}><button className="btn bg-purple-500 btn-sm me-3 ">Update</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn bg-lime-500 btn-sm">delete</button>
            </th>
          </tr>
          
        </tbody>
    </>
    );
};

export default TaskCart;