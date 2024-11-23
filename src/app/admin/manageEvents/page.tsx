'use client'    
import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
// form stuff
import MultiLineFormInput from '@/components/multiLineFormInput';
import FormInput from '@/components/formInput';
import TitleBar from '@/components/titleBar';
// request results console
import JsonDisplay from '@/components/jsonDisplay';
import { sh_event, sh_eventUpdated, event_supabase } from '@/data/event';
import CustomizedAccordions from '@/components/accordion';
// date stuff
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

//APIs
import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from '@/api/events/eventsActions';

function Page(){
    // accordion states
    const [expandedPanel, setExpandedPanel] = useState<string | false>('CREATE');
    const handleAccordionChange = (panel: string) => {
        setExpandedPanel((prev) => (prev === panel ? false : panel)); 
      };
    // form inputs
    const [supaRespones, setSupaResponse] = useState('')
    // json response
    const [jsonResponse, setJsonResponse] = useState({})
    const [eventInput, setEventInput] = useState<event_supabase>({
        event_id:0,
        event_name:'',
        description:'',
        document:undefined,
        event_date:'',
        created_at:'',
        created_by:0
    });

    // change handler for date
    const handleDateChange = (date: any) => {
        const formattedDate = date ? date.toISOString() : ''; 
        setEventInput((prevState) => ({
            ...prevState,
            event_date: formattedDate, 
        }));
    };
    // change handler for event name
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventInput((prevState) => ({
            ...prevState,
            event_name:e.target.value
        }))
    };
    // change handler for description
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventInput((prevState) => ({
            ...prevState,
            description: e.target.value
        }))
    }
    // handle document change
    // const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setEventInput((prevState) => ({
    //         ...prevState,
    //         document: e.target.value
    //     }))
    // }

    
    // handle form submission
    function handleCreate(e:any){
        const evDate = new Date(eventInput.event_date!)
        const newEvent:sh_event = {
            eventName: eventInput.event_name!,
            eventDescription: eventInput.description!,
            eventDate: evDate,
            creatingUser:894998
        }
        setJsonResponse(createEvent(newEvent))
    }

    function handleUpdate(e:any){
        const evDate = new Date(eventInput.event_date!)
        // const updatedEvent: sh_eventUpdated = {

        // }
    }

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
                    <CustomizedAccordions 
                        accordionTitle='Create Event'
                        panelName='CREATE'
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}>
                        {/* create event form */}
                        <form id={'create'} style={{height:'20vh', width:'100wh', display:'flex'}} onSubmit={handleCreate}>
                            {/* grid to arrange the form inputs */}
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} >
                                {/* first row of inputs for this form */}
                                <Grid size={6}>
                                    <FormInput 
                                        label={'Event Name'} 
                                        name='event_name' 
                                        value={eventInput.event_name!} 
                                        onChange={handleNameChange} />
                                </Grid>
                                {/* wrap the next input field in a localization adapter in order to provide support for dates*/}
                                <Grid size={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker label={'Event Date'} name='event_date' value={eventInput.event_date ? dayjs(eventInput.event_date) : null} onChange={handleDateChange} sx={{width:'100%'}}/>
                                    </LocalizationProvider>
                                </Grid>
                                {/* second row of inputs for this form */}
                                <Grid size={12}>
                                    <MultiLineFormInput label={'Description'} name='description' value={eventInput.description!} onChange={handleDescriptionChange} fullWidth></MultiLineFormInput>
                                </Grid>
                                <Grid>
                                    <Button variant='outlined' type='submit'>Test API</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CustomizedAccordions>
                    {/* UPDATE by event_id */}
                    <CustomizedAccordions 
                        accordionTitle='Update Event'
                        panelName='UPDATE'
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}>
                        <form>
                            <input type="text" />
                        </form>
                    </CustomizedAccordions>
                    {/* DELETE by event_id */}
                    <CustomizedAccordions 
                        accordionTitle='Delete Event'
                        panelName='DELETE'  
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}
                    >
                        <div>temp</div>
                    </CustomizedAccordions>
                    {/* GET by event_id */}
                    <CustomizedAccordions 
                        accordionTitle='Get Event By id'
                        panelName='GET-BY-ID'  
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}>
                        <div>temp</div>
                    </CustomizedAccordions>
                    {/* GET */}
                    <CustomizedAccordions 
                        accordionTitle='Get all Events'
                        panelName='GET'  
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}
                        >
                        <div>temp</div>
                    </CustomizedAccordions>
                </Grid>
            {/* INNER GRID 2: Grid for jsonDisplay, which displays the result of a given operation */}
                <Grid size={6}>
                <JsonDisplay jsonData={jsonResponse}/>
                
                </Grid>
            </Grid>
            
            
            
            

        </Box>

  );
};

export default Page;
