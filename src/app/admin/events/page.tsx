'use client'    
import React, { useState } from 'react';
import { TextField, Button, Typography, AppBar, Toolbar, Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CustomInput from '@/components/customInput';
import TitleBar from '@/components/titleBar';
import FormBox from '@/components/formBox';
import JsonDisplay from '@/components/jsonDisplay';
import { sh_event, sh_eventUpdated, event_supabase } from '@/data/event';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CustomizedAccordions from '@/components/accordion';
// date stuff
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MultiLineFormInput from '@/components/multiLineFormInput';
import FormInput from '@/components/formInput';
import { WidthFull } from '@mui/icons-material';
import { TimePicker } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';




function Page(){
    
    // form inputs
    const [eventName, setEventName] = useState('')
   
   
    const [eventInput, setEventInput] = useState<event_supabase>({
        event_id:0,
        event_name:'',
        description:'',
        document:undefined,
        event_date:'',
        created_at:'',
        created_by:0
    });


    const handleDateChange = (date: any) => {
        const formattedDate = date ? date.toISOString() : ''; 
        setEventInput((prevState) => ({
            ...prevState,
            event_date: formattedDate, 
        }));
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('event handler called')
        setEventName(e.target.value)
        console.log(`event name changed to ${eventName}`)
    }
    
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEventInput((prevState) => ({
          ...prevState,
          [name]: value,  // Dynamically update the corresponding field (event_name or description)
        }));
      };
    // handle state change
    // function handleEventNameChange(name:any){
    //     setEventInput({
    //         ...eventInput,
    //         event_name: name as string
    //     })
    // }

    // const handleEventDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    //     e.preventDefault()
    //     console.log('event desription change hanlder called')
    //     setEventInput({
    //         ...eventInput,
    //         description: e.target.value
    //     })
    // }

    
    // handle form submission
    function handleSubmit(){
        
    }
    console.log(`${eventInput.event_name}`)
    return (
        
        <Box sx={{
            height:'100vh',
            width:'100wh'
        }}>
            <TitleBar title={'Admin Integration APIs for Events'}></TitleBar>
            <TitleBar title={'to test, enter each field and submit, resulting DB queries will appear on the right'}></TitleBar>

            {/* OUTER GRID */}
            <Grid container columnSpacing={3}>
            {/* INNER GRID 1: grid with forms to test APIs */}
                <Grid size={6} columnSpacing={1}>
                    {/* CREATE, select fields are mandatory */}
                    <CustomizedAccordions accordionTitle='Create Event'>
                        {/* create event form */}
                        <form id={'create'} style={{height:'20vh', width:'100wh', display:'flex'}} onSubmit={handleSubmit}>
                            {/* grid to arrange the form inputs */}
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} >
                                {/* first row of inputs for this form */}
                                <Grid size={6}>
                                    <FormInput 
                                        label={'Event Name'} 
                                        name='event_name' 
                                        value={eventName} 
                                        onChange={handleChange} />
                                </Grid>
                                {/* wrap the next input field in a localization adapter in order to provide support for dates*/}
                                <Grid size={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker label={'Event Date'} name='event_date' value={eventInput.event_date ? dayjs(eventInput.event_date) : null} onChange={handleDateChange} sx={{width:'100%'}}/>
                                    </LocalizationProvider>
                                </Grid>
                                {/* second row of inputs for this form */}
                                <Grid size={12}>
                                    <MultiLineFormInput label={'Description'} name='description' value={eventInput.description} onChange={handleChange} fullWidth></MultiLineFormInput>
                                </Grid>
                                <Grid size={8}>

                                </Grid>
                            </Grid>

                              

                        </form>
                    </CustomizedAccordions>
                        
                    {/* UPDATE by event_id */}
                    <CustomizedAccordions accordionTitle='Update Event'>
                        <form>
                            <input type="text" />
                        </form>
                    </CustomizedAccordions>
                    {/* DELETE by event_id */}
                    <CustomizedAccordions accordionTitle='Delete Event'>

                    </CustomizedAccordions>
                    {/* GET by event_id */}
                    <CustomizedAccordions accordionTitle='Get Event By id'>

                    </CustomizedAccordions>
                    {/* GET */}
                    <CustomizedAccordions accordionTitle='Get all Events'>

                    </CustomizedAccordions>
                </Grid>
            {/* INNER GRID 2: Grid for jsonDisplay, which displays the result of a given operation */}
                <Grid size={6}>
                <JsonDisplay/>
                
                </Grid>
            </Grid>
            
            
            
            

        </Box>

  );
};

export default Page;
