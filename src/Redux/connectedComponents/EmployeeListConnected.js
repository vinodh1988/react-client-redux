
import { connect } from 'react-redux';
import { resourceTrigger, filterResources } from '../actions/actionTriggers';
import { bindActionCreators } from 'redux';
import { EmployeeList } from '../../Components/admin/EmployeeList';

const mapStateToProps =(state) =>{
    return {resources: state.resourcedata.resources,skills : state.resourcedata.skills}
}

const mapActiontoProps = (dispatch) =>{
    return bindActionCreators({loadResources:resourceTrigger,skillFilter :filterResources},dispatch)
}

export const EmployeeListConnected = connect(mapStateToProps,mapActiontoProps)(EmployeeList);