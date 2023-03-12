import React,{useContext, useEffect} from 'react'
import AdminLogin from '../Components/adminLogin';
import { Context } from '../Context/Context';
import BasicTabs from '../containers/adminContainer';

const Admin = () => {

const{toggleIsAdmin,isAdmin} = useContext(Context);

 useEffect(()=>{
  if( window.localStorage.getItem("admin")) {
    toggleIsAdmin(true)
  }
 },[])
   if(!isAdmin) return <AdminLogin/>
    return (
    <BasicTabs/>
    );
  };

export default Admin;
