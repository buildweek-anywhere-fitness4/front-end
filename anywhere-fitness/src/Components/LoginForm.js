import React, {useState} from 'React';   
//import axiosWithAuth from "../utils/axiosWithAuth"

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //Handle button click of login form
    const handleLogin = () => {
        props.history.push('');
        // axiosWithAuth
        // .post("https://anywhere-fitness4.herokuapp.com/api/auth/client_login", )
    }

    return (
        <div>
            Login<br/><br/>
            <div>
                Username<br/>
                <input type='text'{...username} autoComplete='new-password'/>
            </div>
            <div>
                Password<br/>
                <input type='password' {...password} autoComplete='new-password'/>
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>
    );
}

const useFormInput = intialValue => {
    const [value, setValue] = useState(intialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;

