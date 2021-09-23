import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

export default function  OrderListCard ({toggle, setToggle, orderList }) {
    const [statusChange, setStatusChange] = useState(orderList.status);
    const { email, payment, title, status} = orderList;
    
    const handleChange =(value) => {setStatusChange(value)}
    
    useEffect(() => {
        fetch(`http://localhost:5000/${orderList._id}`, {
            method : "PATCH",
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify({status:statusChange})
        })
        .then(res => res.json())
        .then(data => {setToggle(!toggle)})
    }, []);

    return (
        <>
            <tr>
                <td>{payment.name}</td>
                <td>{email}</td>
                <td>{title}</td>
                <Select defaultValue={status} style={{ width: 120}} onChange={handleChange}>
                    {status === "pending" ? <Option value="pending">pending</Option> : <Option value="pending">pending</Option>} 
                    {status === "ongoing" ? <Option value="ongoing">Ongoing</Option> : <Option value="ongoing">Ongoing</Option>}
                    {status === "done" ?  <Option value="done">Done</Option> : <Option value="done">Done</Option>}
                </Select>
            </tr> 
        </>
    );
};

