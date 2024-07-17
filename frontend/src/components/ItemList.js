import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items.', error);
        }
    };

    return (
<div className="belowform">
    <h1>Personal Information</h1>
    <ul className="item-list">
        {items.map(item => (
            <li key={item.id} className="list-item">
                <div className="item-details">
                    <span className="item-field">First Name:</span> {item.fname}<br />
                    <span className="item-field">Middle Name:</span> {item.mname}<br />
                    <span className="item-field">Surname:</span> {item.sname}<br />
                    <span className="item-field">Address:</span> {item.address}<br />
                    <span className="item-field">Barangay:</span> {item.barangay}<br />
                    <span className="item-field">Zipcode:</span> {item.zipcode}<br />
                    <span className="item-field">Region:</span> {item.region}<br />
                    <span className="item-field">Municipality:</span> {item.municipality}<br />
                    <span className="item-field">Phone:</span> {item.phone}<br />
                    <span className="item-field">Date of Birth:</span> {item.datebirth}<br />
                    <span className="item-field">Place of Birth:</span> {item.placebirth}<br />
                    <span className="item-field">Gender:</span> {item.gender}<br />
                    <span className="item-field">Civil Status:</span> {item.civilstatus}<br />
                </div>
                <div className="item-actions">
                    <button className="edit-btn" onClick={() => onEdit(item)}>Edit</button>
                    <button className="delete-btn" onClick={() => onDelete(item.id)}>Delete</button>
                </div>
            </li>
        ))}
    </ul>
</div>

    );
};

export default ItemList;
