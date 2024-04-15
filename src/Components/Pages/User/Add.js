import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const {register, handleSubmit} = useForm();

  const navi = useNavigate();

  function saveData(data){
    axios.post('http://localhost:5000/users', data);
    //alert('record added.....')
    navi('/user/show')
  }
  return (
    <>
        <div className='container'>
          <center><u><h2>STUDENT FORM:</h2></u></center>
          <form onSubmit={handleSubmit(saveData)} className='mt-5'>
            <label htmlFor='r'>ENTER ROLL NO:</label>
            <input type='number' id='r' className='form-control'
            {...register('roll')}/>
            <br/><br/>
            <label htmlFor='n'>ENTER NAME:</label>
            <input type='text' id='n' className='form-control'
            {...register('name')}/>
            <br/><br/>
            <label htmlFor='m'>ENTER MARKS:</label>
            <input type='number' id='m' className='form-control'
            {...register('marks')}/>
            <br/><br/>
            <label htmlFor='c'>ENTER CITY:</label>
            <input type='text' id='c' className='form-control'
            {...register('city')}/>
            <br/><br/>
            <input type='submit' value='Add Student' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg'/>
          </form>
        </div>
    </>
  )
}

export default Add