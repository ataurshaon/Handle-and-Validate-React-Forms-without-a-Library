import { useState } from 'react';
import './App.css';
import FormInput from './Components/FormInput';

function App() {

  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id:1,
      name:'username',
      type:'text',
      placeholder:'Enter Your User Name',
      errorMessage: 'User Name Should be 3-16 characters and should not include any special character',
      label:'User Name',
      pattern:'^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id:2,
      name:'email',
      type:'email',
      placeholder:'Enter Your Email',
      errorMessage: 'It should be a valid email address',
      label:'Email',
      required: true
    },
    {
      id:3,
      name:'birthday',
      type:'date',
      placeholder:'Enter Your Birthday',
      label:'Birthday'
    },
    {
      id:4,
      name:'password',
      type:'password',
      placeholder:'Enter Your Password',
      errorMessage: 'Password should be 8-10 characters and include at least 1 letter, 1 number, 1 special character',
      label:'Password',
      pattern: '^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,20}$',
      required: true
    },
    {
      id:5,
      name:'confirmPassword',
      type:'text',
      placeholder:'Enter Password Again',
      errorMessage: 'Password do not match',
      label:'Confirm Password',
      pattern:'values.password',
      required: true
    }
  ]
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
