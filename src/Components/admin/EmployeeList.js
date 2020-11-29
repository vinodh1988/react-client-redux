import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FullScreenDialog from './RequestForm'
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

const useStyles = makeStyles((theme)=>
({ skill : {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: "black",
      color: "white",
      padding: 3,
      marginLeft: 10,
      width:100
  },
  scontainer:{
      width: 300
  },
  table : {
      width: 1000,
      margin: 20
  }
 })
);



function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export const EmployeeList = ({resources,skills,loadResources,skillFilter}) =>{
    useEffect(()=>{
        loadResources();
    },[])

    const handleAuto =(value) =>{
       console.log(value)
       if(value==null) 
            skillFilter(resources,"");
       else
            skillFilter(resources,value);
       console.log(value);
    }
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [openstate,setOpenstate] =React.useState(false);
    const [current,setCurrent] = React.useState();

    const changeState= (row)=>{
      console.log("running")
       setOpenstate(true);
       setCurrent(row);
    }
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const classes = useStyles();
    return (
     <div>
      <div className="alert alert-info" style ={{marginTop: "20px"}}>
        <form>
           Filter Based on Skills
           <Autocomplete
      id="skills-filter"
      options={skills}
      onChange={(e,nv)=> handleAuto(nv)}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Skill" variant="outlined"/>}
      />
      </form>
    
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Manager</TableCell>
              <TableCell align="right">WFM Manager</TableCell>
             
              <TableCell align="right">Status</TableCell>
              <TableCell align="right" className={classes.scontainer}>Skills</TableCell>
              <TableCell align="right">Experience</TableCell>
              <TableCell align="right">Lock Request</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         { (rowsPerPage > 0
            ? resources.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : resources
          )
          .map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.employee_id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.manager}</TableCell>
                <TableCell align="right">{row.wfm_manager}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
            <TableCell align="right">{row.skills.map((x)=><span key={x.skillid} className={classes.skill}>{x.name}</span>)}</TableCell>
            <TableCell align="right">{row.experience}</TableCell>
            <TableCell align="right"><Button  onClick={()=>changeState(row)} variant="contained" color="primary">
Request
</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
       {   resources.length>0?  <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={7}
              count={resources.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            /> : <TableCell component="th" scope ="row">No Data</TableCell>}
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
      <FullScreenDialog openstate={openstate} resource={current}></FullScreenDialog>
      </div>
    );
}