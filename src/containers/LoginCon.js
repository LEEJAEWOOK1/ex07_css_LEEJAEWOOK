import {useDispatch, useSelector} from "react-redux";
import HeaderCom from "../components/common/HeaderCom"
import LoginCom from "../components/LoginCom";
import inputSlice from "../redux/inputSlice";

const LoginCon = () => {
    const dispatch = useDispatch();
    const {username, password} = useSelector(state => {
        //console.log("login state : ", state)
        return state.input.login;
    })

    const onChange = (e) => {
        const {name, value} = e.target;
        console.log("username : ", value)
        console.log(value)
        dispatch(inputSlice.actions.changeinput({name, value, form:"login"}))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target)
    }
    return (<>
        <HeaderCom/>
        <LoginCom onSubmit={onSubmit} onChange={onChange} username={username} password={password}/>
    </>)    
}
export default LoginCon;