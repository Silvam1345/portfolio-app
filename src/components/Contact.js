import { Link } from 'react-router-dom';
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact( {addContact} ) {

    //const contact_api = "https://jsonhost.com/json/9550b2fc6a2097d8e92ce8299999d6da";

    const [contactData, setContactData] = useState(
        {
            first_name: "",
            last_name: "",
            email: "",
            company: "",
            phone: "",
            availability: "",
            description: ""
        }
    );

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setContactData(prevState => ({...prevState, [name]: value}))
    };

    const validate = () => {
        const newErrors = {};

        //name field
        if (!contactData.first_name.trim()) newErrors.first_name = "First name is required";

        // set errors
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(validate()){
            //add contact data to json
            addContact(contactData);
            setContactData({
                first_name: "",
                last_name: "",
                email: "",
                company: "",
                phone: "",
                availability: "",
                description: ""
            })
            setErrors({});
            setSuccess(true);

            setTimeout(() => {
                navigate('/');
            }, 2000);

        }
    }

    return (
        <div className='contact-container'>
            <h1>Add your Contact Info</h1>
            {success ? <h2>Contact added Successfully! Redirecting...</h2> 
                :
                 <form onSubmit={handleSubmit}>
                 <div>
                     <label>First Name</label>
                     <input 
                         type="text"
                         name="first_name"
                         value={contactData.first_name}
                         onChange={handleChange}
                     />
                     {errors.first_name && <p style={{color:'red'}}>{errors.first_name}</p>}
                 </div>
                 <div>
                     <label>Last Name</label>
                     <input
                         type="text"
                         name="last_name"
                         value={contactData.last_name}
                         onChange={handleChange}
                     />
                 </div>
                 <div>
                     <label>Email</label>
                     <input
                         type="text"
                         name="email"
                         value={contactData.email}
                         onChange={handleChange}
                     />
                 </div>
                 <div>
                     <label>Company</label>
                     <br />
                     <input
                         type="text"
                         name="company"
                         value={contactData.company}
                         onChange={handleChange}
                     />
                 </div>
                 <div>
                     <label>Phone Number</label>
                     <br />
                     <input
                         type="text"
                         name="phone"
                         value={contactData.phone}
                         onChange={handleChange}
                     />
                 </div>
                 <div>
                     <label>Availability</label>
                     <br />
                     <input
                         type="text"
                         name="availability"
                         value={contactData.availability}
                         onChange={handleChange}
                     />
                 </div>
                 <div>
                     <label>Description</label>
                     <br />
                     <input
                         type="text"
                         name="description"
                         value={contactData.description}
                         onChange={handleChange}
                     />
                 </div>
 
                 <button type="submit" style={{ marginTop: '10px'}}>
                     Send Contact Info
                 </button>
             </form>
            }
        </div>
    )
}