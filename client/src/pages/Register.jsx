import { APP_NAME } from '../constants/constants';
import Form from '../components/form';

const inputElements = [
    {
        label: "Username",
        type: "text",
        placeHolder: "e.g. JohnDoe",
        className: "",
        attribs: {
            maxLength: 20,
            required: true,
        }
    },
    {
        label: "Password",
        type: "password",
        placeHolder: "••••••••",
        className: "",
        attribs: {
            maxLength: 20,
            required: true,
        }
    },
    {
        label: "Confirm Password",
        type: "password",
        placeHolder: "••••••••",
        className: "",
        attribs: {
            maxLength: 20,
            required: true,
        }
    },
    {
        label: "Firstname",
        type: "text",
        placeHolder: "e.g. John",
        className: "",
        attribs: {
            maxLength: 50,
            required: true,
        }
    },
    {
        label: "Lastname",
        type: "text",
        placeHolder: "e.g. Doe",
        className: "",
        attribs: {
            maxLength: 50,
            required: true,
        }
    },
    {
        label: "Email",
        type: "email",
        placeHolder: "e.g. johndoe@email.com",
        className: "",
        attribs: {
            maxLength: 50,
            required: true,
        }
    },
    {
        label: "Address",
        type: "text",
        placeHolder: "e.g. ABBA Street., Qwerty City",
        className: "",
        attribs: {
            maxLength: 100,
            required: true,
        }
    },
]

function Register() {
    return(
        <div className="card bg-base-300 md:w-1/2 md:mx-auto">
            <div className="card-body">
                <h3 className="text-center">{APP_NAME}</h3>
                <Form 
                    inputElements={inputElements}
                    fieldsetLegend="Register"
                    submitLabel="Register"
                />
                <p className='text-xs'>Already have an account? <a href="/login" className='a-default'>Login</a> here!</p>
            </div>
        </div>
    );
}

export default Register;