import React from 'react';
import { Link } from 'react-router-dom';

const TaskTable = ({index, handleDetailsModal, task}) => {
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
                        <span className='font-bold'>{title}</span>
                    
                    </td>
                    <td>
                    {description}
                    </td>
                    <td>{completed}</td>
                    <td>{timestamp}</td>
                </tr>
            </tbody>
        </>
    );
};

export default TaskTable;