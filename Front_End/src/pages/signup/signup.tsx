import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup';

interface Inputs {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
}

const Signup = () => {

    const [inputs, setInputs] = useState<Inputs>({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const {loading, signup} = useSignup()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signup(inputs);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
    <div className = "flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className = "w-full p-6 rounded-lg shadow-md text-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className = "text-3xl font-semibold text-center text-gray-600">Sign Up to
                <span className = "text-red-400"> Chat!</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
              <label className = "label p-2">
                <span className = "text-base label-text text-blue-600">Full Name</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
              </label>
                       
              <input type = "text" name = "fullName" placeholder = "Full Name" className = "w-full input input-bordered h-10"
                    value={inputs.fullName}
                    onChange={handleChange}
                />
          </div>
                <div>
                    <label className = "label p-2">
                        <span className = "text-base label-text text-blue-600">Username</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                    </label>
                        
                    <input type = "text" name="username" placeholder = "Username" className = "w-full input input-bordered h-10"
                        value={inputs.username}
                        onChange={handleChange}
                    /> 
                </div>
                <div>
                    <label className = "label p-2">
                    <span className = "text-base label-text text-blue-600">Password</span>
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    </label>
                    <input type = "password" name="password" placeholder = "Password" className = "w-full input input-bordered h-10"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className = "label p-2">
                    <span className = "text-base label-text text-blue-600">Confrim Password</span>
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    </label>
                    <input type = "password" name="confirmPassword" placeholder = "Confrim Password" className = "w-full input input-bordered h-10"
                        value={inputs.confirmPassword}
                        onChange={handleChange}
                    /> 
                </div>
                <Link to="/login" className = "text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Login</Link>
                <div>
                    {!loading? <button className = "btn btn-block btn-md mt-2">Sign Up</button> :
                        <span className="loading loading-spinner"></span>
                    }
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup