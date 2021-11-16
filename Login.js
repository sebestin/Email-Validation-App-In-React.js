import React,{useEffect, useReducer, useState} from "react";
import Card from "../UI/Card/Card";
import classes from './Login.module.css'
import Button from '../UI/Button/Button'


const emailReducer=(state,action)=>
{

    if(action.type==="USER_INPUT")
    {
        return {value:action.val,isValid:action.val.includes("@")}
    }

    if(action.type==="USER_BLUR"){
        return {value:state.value,isValid:state.value.includes("@")}
    }
    return {value:"",isValid:false}
}


const passwordReducer=(state,action)=>
{
    if(action.type==="USER_INPUT")
    {
        return {value:action.val,isValid:action.val.trim().length>6}
    }

    if(action.type==="USER_BLUR"){
        return {value:state.value,isValid:state.value.trim().length>6}
    }
    return {value:"",isValid:false}
}



const Login =(props)=>
{
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState('');

    // const [enteredPassword, setEnteredPassword]=useState('')
    // const [passwordIsValid,setPasswordIsValid]=useState('');

    const [formIsValid,setFormIdValid]=useState(false);
    
    const [emailState,dispatchEmail]=useReducer(emailReducer,{value:"",isValid:null});

    const [passwordState, dispatchPassword]=useReducer(passwordReducer,{value:"",isValid:null})




    useEffect(()=>{

        const timer =setTimeout(()=>{
            //Debouncing
            console.log("This is in useeffect");
            //Erite the code to connect to the rest api and check it
            setFormIdValid(
               // enteredEmail.includes('@') && enteredPassword.trim().length>6
               emailState.isValid && passwordState.isValid
            );

        },500);

        return()=>{
            clearTimeout(timer);
        }
        
    // },[enteredEmail,enteredPassword])

    },[emailState.isValid,passwordState.isValid]);


    const emailChangeHandler=(event)=>
    {
        // setEnteredEmail(event.target.value);

        dispatchEmail({type:"USER_INPUT",val:event.target.value})

        setFormIdValid(event.target.value.includes('@') && passwordState.value.trim().length>6);
    }


    const passwordChangeHandler=(event)=>
    {
       // setEnteredPassword(event.target.value);

       dispatchPassword({type:"USER_INPUT",val:event.target.value})


        setFormIdValid(event.target.value.trim().length>6 && emailState.value.includes('@'));
    };

    const validateEmailHandler=()=>{
        // setEmailIsValid(emailState.value.includes('@'));

        dispatchEmail({type:"USER_BLUR"});
    }

    const validatePasswordHandler=()=>
    {
       // setPasswordIsValid(passwordState.value.trim().length>6);
       dispatchEmail({type:"USER_BLUR"});

    }

    const submitHandler =(event)=>{
        event.preventDefault();
        props.onLogin(emailState.value,passwordState.value);
        localStorage.setItem("isLogged","1");
    }


    return(
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid ===false ? classes.invalid:''}`}>

                <label htmlFor="email">Email</label>
                <input type="email" id="email
                " value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}></input>

            <div className={`${classes.contol} ${passwordState.isValid===false ? classes.invalid: ''}`}></div>

                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" 
                value={passwordState.value}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}></input>
                </div>

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>Login </Button>

                </div>
            </form> 
        </Card>
    )
}

export default Login;