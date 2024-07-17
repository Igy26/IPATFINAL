import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [sname, setSname] = useState('');
    const [address, setAddress] = useState('');
    const [barangay, setBarangay] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [region, setRegion] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [datebirth, setDatebirth] = useState('');
    const [placebirth, setPlacebirth] = useState('');
    const [gender, setGender] = useState('');
    const [civilstatus, setCivilstatus] = useState('');

    useEffect(() => {
        if (item) {
            setFname(item.fname);
            setMname(item.mname);
            setSname(item.sname);
            setAddress(item.address);
            setBarangay(item.barangay);
            setZipcode(item.zipcode);
            setRegion(item.region);
            setMunicipality(item.municipality);
            setEmail(item.email);
            setPhone(item.phone);
            setDatebirth(item.datebirth);
            setPlacebirth(item.placebirth);
            setGender(item.gender);
            setCivilstatus(item.civilstatus);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {fname, mname, sname, address, barangay, zipcode, region, municipality, email, phone, datebirth, placebirth, gender, civilstatus };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div class="form-container">  
        <form onSubmit={handleSubmit}>
            <div>
                <label for="fname">First Name:</label>
                <input type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
            </div>
            <div>
                <label for="mname">Middle Name:</label>
                <input type="text" id="mname" value={mname} onChange={(e) => setMname(e.target.value)} />
            </div>
            <div>
                <label for="sname">Surname:</label>
                <input type="text" id="sname" value={sname} onChange={(e) => setSname(e.target.value)} />
            </div>
            <div>
                <label for="address">Address:</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label for="barangay">Barangay:</label>
                <input type="text" id="barangay" value={barangay} onChange={(e) => setBarangay(e.target.value)} />
            </div>
            <div>
                <label for="zipcode">Zipcode:</label>
                <input type="text" id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <div>
                <label for="region">Region:</label>
                <input type="text" id="region" value={region} onChange={(e) => setRegion(e.target.value)} />
            </div>
            <div>
                <label for="municipality">Municipality:</label>
                <input type="text" id="municipality" value={municipality} onChange={(e) => setMunicipality(e.target.value)} />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label for="datebirth">Date of Birth mm/dd/yy:</label>
                <input type="text" id="datebirth" value={datebirth} onChange={(e) => setDatebirth(e.target.value)} />
            </div>
            <div>
                <label for="placebirth">Place of Birth:</label>
                <input type="text" id="placebirth" value={placebirth} onChange={(e) => setPlacebirth(e.target.value)} />
            </div>
            <div>
                <label for="gender">Gender:</label>
                <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div>
                <label for="civilstatus">Civil Status:</label>
                <input type="text" id="civilstatus" value={civilstatus} onChange={(e) => setCivilstatus(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default ItemForm;
