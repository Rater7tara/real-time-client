import React from 'react';

const TaskTable = ({index, task}) => {
    const { title, timestamp, description, completed, 
    _id } = task;
    return (
        <>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th>
                       {index}
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div>
                                <div className="font-bold">{title}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                    {description}
                    </td>
                    <td>{completed}</td>
                    <td>{timestamp}</td>
                    <th>
                        <label onClick={() => handleDetailsModal(_id)} htmlFor="my-modal-5" className="btn bg-purple-500">View details</label>
                        
                        {/* <Link to={`/singleToy/${_id}`}><label htmlFor="my-modal-5" className="btn bg-purple-500">View details</label>
                        </Link> */}

                    </th>
                </tr>
            </tbody>

            <div>
            

                
            
            </div>
        </>
    );
};

export default TaskTable;