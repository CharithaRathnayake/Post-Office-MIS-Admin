import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {addMoneyOrderStart} from "../../views/RecepFunc/recepActions";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useFormik } from 'formik';
//import GenerateRandomCode from 'GenerateRandomCode';



const useStyles = makeStyles((theme) => ({
    
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

function MoneyOrderForm({postOffice}) {
    let today=new Date();
    let year=today.getFullYear();
    let month=today.getMonth()+1;
    let day=today.getDate();
    let tod=year.toString(10).slice(-2)+(("0"+month.toString(10)).slice(-2))+(("0"+day.toString(10)).slice(-2));
    let num='';
    var store=require('store');

    const dispatch = useDispatch();    
    
    const longitude=postOffice[0].location._long;
    const latitude=postOffice[0].location._lat;
    const POcode=postOffice.map((option)=>(option.code));
    const userID = useSelector((state)=>state.homeReducer.currentUserID);   
    const Pid=tod+POcode[0]+POcode[1];
    const secCode=Math.random().toString().slice(2,11);
    console.log("seccode",secCode);
    
    const initialState=useFormik({
        initialValues:{ 
            senderName:"",
            senderID:"", 
            recipientName:"",
            recipientID:"", 
            cost:"",
            pid:Pid,
            employee:userID,
            acceptedPostOffice:"",
            destinationPostOffice:"",
            long:longitude,
            lat:latitude,
            moneyAmount:"",
            securityCode:secCode     
        },
        onSubmit:(values,{resetForm})=>{
            if ((store.get("pid")==null)||(store.get('pid').date!==tod)){
                store.set("pid",{date:tod,number:'0001'});
                num='0001';
            }else{
                num=('0000'+(parseInt(store.get('pid').number)+1).toString()).slice(-4);
                store.set("pid",{date:tod,number:num});
            }
            initialState.touched.senderName=false;
            initialState.touched.senderID=false;
            initialState.touched.recipientName=false;
            initialState.touched.recipientID=false;
            initialState.touched.cost=false;
            initialState.touched.pid=false;
            initialState.touched.employee=false;
            initialState.touched.acceptedPostOffice=false;
            initialState.touched.destinationPostOffice=false;
            initialState.touched.long=false;
            initialState.touched.lat=false;
            initialState.touched.moneyAmount=false;
            initialState.touched.securityCode=false;
            dispatch(addMoneyOrderStart(initialState,num));
            resetForm({})
        }
    });
    
    //console.log(initialState);
    
    const classes = useStyles();
    
    

    // const handleInputChange = (e)=>{
    //     let{name,value}=e.target;
    //     setState({
    //         ...initialState,
    //         [name]:value,
    //     });
    //     console.log("initial",initialState);
    // };
    
                        
    
    return ( 
        <>
            
                
                <Container maxWidth="sm">
                    <h1>Money Order</h1>
                    <form  onSubmit={initialState.handleSubmit}>                            
                        <div className="form-group">
                            <TextField
                                required
                                id="filled-full-width"
                                label="required"
                                variant="filled"
                                type="text"
                                className="form-control"
                                name="senderName"
                                value={initialState.values.senderName}
                                onChange={initialState.handleChange}
                                style={{ margin: 8 }}
                                placeholder="Sender's Name"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group">
                            <TextField
                                required
                                id="filled-full-width"
                                label="required"
                                variant="filled"
                                type="text"
                                className="form-control"
                                name="senderID"
                                value={initialState.values.senderID}
                                onChange={initialState.handleChange}
                                
                                style={{ margin: 8 }}
                                placeholder="Sender's ID No:"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group">
                            <TextField
                                required
                                id="filled-full-width"
                                label="required"
                                variant="filled"
                                type="text"
                                className="form-control"
                                name="recipientName"
                                value={initialState.values.recipientName}
                                onChange={initialState.handleChange}
                                style={{ margin: 8 }}
                                placeholder="Recipient's Name"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group">
                            <TextField
                                required
                                id="filled-full-width"
                                label="required"
                                variant="filled"
                                type="text"
                                className="form-control"
                                name="recipientID"
                                value={initialState.values.recipientID}
                                onChange={initialState.handleChange}
                                
                                style={{ margin: 8 }}
                                placeholder="Recipient's ID No:"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group">
                            <TextField
                                required
                               
                                label="required"
                                variant="filled"
                                type="float"
                                className="form-control"
                                name="cost"
                                value={initialState.values.cost}
                                onChange={initialState.handleChange}
                                id="filled-full-width"
                                style={{ margin: 8 }}
                                placeholder="Cost"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <div className="form-group">
                            <TextField
                                required
                               
                                label="required"
                                variant="filled"
                                type="float"
                                className="form-control"
                                name="moneyAmount"
                                value={initialState.values.moneyAmount}
                                onChange={initialState.handleChange}
                                id="filled-full-width"
                                style={{ margin: 8 }}
                                placeholder="Amount of Money"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                               
                            />
                            
                        </div>
                        <FormControl variant="filled" fullWidth required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">Accepted PostOffice</InputLabel>
                            
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            name="acceptedPostOffice"
                            value={initialState.values.acceptedPostOffice}
                            onChange={initialState.handleChange}
                            
                            >
                            
                            {postOffice.map((option)=> (
                                <MenuItem value={option.code}>{option.city}</MenuItem>
                            ))}
                            
                            </Select>
                           
                        </FormControl><br/>
                        
                        <FormControl variant="filled" fullWidth required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">Destination PostOffice</InputLabel>
                            
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            name="destinationPostOffice"
                            value={initialState.values.destinationPostOffice}
                            onChange={initialState.handleChange}
                            fullWidth 
                            >
                            
                            {postOffice.map((option)=> (
                                <MenuItem value={option.code}>{option.city}</MenuItem>
                            ))}
                            
                            </Select>
                           
                        </FormControl><br/>
                            
                        <Button type="submit"  variant="contained"color="secondary" >Submit</Button>
                        <br/><br/>
                    </form>

                </Container>
        
        </>
     );
     
                            
    
}

export default MoneyOrderForm;