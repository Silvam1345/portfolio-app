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

    const isValidEmail = (email) => {
        return /[@]/.test(email);
    }

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^(\+1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

        return phoneRegex.test(phoneNumber);
    }

    const validate = () => {
        const newErrors = {};

        //first name field
        if (!contactData.first_name.trim()) newErrors.first_name = "⚠️First name is required";

        //name field
        if (!contactData.last_name.trim()) newErrors.last_name = "⚠️Last name is required";
        
        if (!isValidEmail(contactData.email.trim())) newErrors.email = "⚠️Invalid email address. Must contain the @ symbol.";
        
        if (!contactData.company.trim()) newErrors.company = "⚠️Company name is required";
        
       //phone field
        if (!isValidPhoneNumber(contactData.phone.trim())) newErrors.phone = "⚠️Invalid phone number. Must be US-format";
        

        
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
            <h1>Add Contact Info</h1>
            <h3>If you would like to chat or discuss any job opportunities,
                feel free to send your contact information!
            </h3>
            {success ? <h2>Contact added Successfully! Redirecting...</h2> 
                :
                
                 <form onSubmit={handleSubmit}>
                 <div>
                     <label>First Name</label>
                     <br />
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
                     <br />
                     <input
                         type="text"
                         name="last_name"
                         value={contactData.last_name}
                         onChange={handleChange}
                     />
                     {errors.last_name && <p style={{color:'red'}}>{errors.last_name}</p>}
                 </div>
                 <div>
                     <label>Email</label>
                     <br />
                     <input
                         type="text"
                         name="email"
                         value={contactData.email}
                         onChange={handleChange}
                     />
                     {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
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
                     {errors.company && <p style={{color:'red'}}>{errors.company}</p>}
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
                     {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}
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
 
                 <button className="send-contact-button" type="submit">
                     Send
                 </button>
             </form>
            }
        </div>
    )
}