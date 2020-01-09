import React from 'react';
import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 3% 0;
    /* border: 1px solid green; */
    justify-content: center;
 `

export const FormContainer = styled.div`
    margin: 1% 0;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;   
    /* border: 2px solid blue;  */
`

export const TextInput = styled.input`
    margin: 0 1%;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
`

export const SelectInput = styled.select`
    margin: 0 1%;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
`

export const WorkoutPlanInput = styled.input`
    width: 40%;
    height: 45px;
    border-radius: 5px;
    border: 2px solid lightgray;
    font-size: 1.2rem;
    padding: 0 2%;
    margin-top: 1%;
    margin: 0% 1%;
`

export const ButtonStyle = styled.button`
    width: 60%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #5ccc6e;
    color: #FFF;
    margin-top: 3%;
`
export const AddButton = styled.button`
    width: 25%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #3d94ff;
    color: #FFF;
    margin-top: 2%;
`

export const DeleteButton = styled.button`
    width: 10%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #ff3d41;
    color: #FFF;
    margin-left: 5%;
`
export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const CardContainer = styled.div`
    border: 1px solid lightgray;
    width: 100%;
    display: flex;
    align-content: center;
    margin: 2% 2%;
    padding: 2% 1%;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

export const CardTextStyle = styled.p`
    font-size: 1.2rem;
    /* margin: 2% 2%; */
    /* border: 1px solid red; */
    /* padding: 0% 1%; */
    width: 100%;
`

export const CardTextSpan = styled.span`
    font-weight: bold;
    /* border: 1px solid green; */
`

export const LabelStyle = styled.label`
    font-weight: bold;
    font-size: 1.2rem;
    width: 20%;
    /* border: 1px solid blue; */
    text-align: left;
`