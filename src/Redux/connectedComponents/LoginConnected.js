import Login from '../../Components/common/Login';
import { connect } from 'react-redux';
import { loginTrigger } from '../actions/actionTriggers';
import { bindActionCreators } from 'redux';

const mapStateToProps =(state) =>{
    return {status: state.login.loginstatus, servermessages:state.login.errormessages}
}

const mapActiontoProps = (dispatch) =>{
    return bindActionCreators({performLogin:loginTrigger},dispatch)
}

export const LoginConnected = connect(mapStateToProps,mapActiontoProps)(Login);