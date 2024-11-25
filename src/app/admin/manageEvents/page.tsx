'use client'    
import React, { useCallback, useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';
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
    // form inputs
    const [eventInput, setEventInput] = useState<event_supabase>({
        event_name:'',
        description:'',
        document:undefined,
        event_date:'',
    });
    // json response
    const [jsonResponse, setJsonResponse] = useState<object>({'default':'this is a dummy output'})
    // input error states
    const [eventIdInputError, setEventIdInputError] = useState<boolean>(false);
    const [eventNameInputError, setEventNameInputError] = useState<boolean>(false);
    // accordion expanding, reset the eventInput upon expansion of each
    const handleAccordionChange = (panel: string) => {
        setExpandedPanel((prev) => (prev === panel ? false : panel)); 
        setEventInput(({
            event_id:undefined,
            event_name: '',
            description: '',
            document:undefined,
            event_date:''
        }));
    };
    

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
     // change handler for event_id for updating, getting and deleting events
    const handleEventIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== '' && ( Number(e.target.value) > 0 && !isNaN(Number(e.target.value) ))){ // if the input is a non empty number greater than 0
            setEventIdInputError(false)
            setEventInput((prevState) => ({
                ...prevState,
                event_id: Number(e.target.value)
            }))
        }
        else{
            setEventIdInputError(true)
        }   
    }

    
    // handle form submission
    const handleCreate = async (e:any) =>{
        e.preventDefault() // stop my frontend page from reloading

        if(!eventInput.event_name || eventInput.event_name === '' || eventInput.event_name === undefined){
            setEventNameInputError(true);
            return;
        }
        setEventNameInputError(false);
        const evDate = new Date(eventInput.event_date!) //convert date into string

        // convert my inputs into an object of type sh_event
        const newEvent:sh_event = {
            eventName: eventInput.event_name!,
            eventDescription: eventInput.description!,
            eventDate: evDate,
            creatingUser:894998
        }
        console.log('newEvent:',newEvent)
        let res:any = {}
        try{
            res = await createEvent(newEvent)
        }
        catch(error){
            console.log("error creating event:", error)
            setJsonResponse({'error, res:':error})
        }
        finally{
            console.log('received response:', res)
            setJsonResponse(res.data)
        }
    }

    // handle updating an event by id
    const handleUpdate = async (e:any) => {
        e.preventDefault()
        // event id is mandatory, if we don't have it, don't update anything
        if(!eventInput.event_id || eventInput.event_id === null){
            setEventIdInputError(true)
            return
        }
        setEventIdInputError(false)
        console.log('no error')
        const evDate = new Date(eventInput.event_date!)
        let updatedEvent: sh_eventUpdated = {
            eventId: eventInput.event_id,
            eventName: eventInput.event_name,
            eventDate: (eventInput.event_date !== null && eventInput.event_date) ? new Date(eventInput.event_date) : null,
            eventDescription: eventInput.description
        }
        console.log('updated event:', updatedEvent)
        let res:any = {}
        try {
            res = await updateEvent(updatedEvent)
        } 
        catch (error) {
            console.error('error', error)
            setJsonResponse({'error, res:':error})
        }
        finally{
            console.log('received response:', res)
            setJsonResponse(res.data)
        }
    }

    // handle deleting an event by id
    const handleDelete = async (e:any) => {
        e.preventDefault()
        // event id is mandatory, if we don't have it, don't update anything
        if(!eventInput.event_id || eventInput.event_id === null){
            setEventIdInputError(true)
            return
        }
        setEventIdInputError(false)
        let res:any = {}
        try {
            res = await deleteEvent(Number(eventInput.event_id))
        }
        catch (error) {
            console.error('error', error)
            setJsonResponse({'error, res:':error})
        }
        finally{
            console.log('received response:', res)
            setJsonResponse(res.data)
        }


    }
    // handle getting a single event by id
    const handleGetById = async (e:any) => {
        e.preventDefault()
        // event id is mandatory, if we don't have it, don't update anything
        if(!eventInput.event_id || eventInput.event_id === null){
            setEventIdInputError(true)
            return
        }
        setEventIdInputError(false)
        let res:any = {}
        try{
            res = await getEventById(Number(eventInput.event_id))
        }
        catch (error) {
            console.error('error', error)
            setJsonResponse({'error, res:':error})
        }
        finally{
            console.log('received response:', res)
            setJsonResponse(res.data)
        }
    }

    // handle getting all events
    const handleGet = async (e:any) => {
        e.preventDefault()
        console.log('inside handleGet')
        let res:any = {}
        try {
            res = await getEvents()
        }
        catch (error) {
            console.error('error', error)
            setJsonResponse({'error, res:':error})
        }
        finally{
            console.log('received response:', res)
            setJsonResponse(res.data)
        }
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
                        <form id={'create'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleCreate}>
                            {/* grid to arrange the form inputs */}
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                {/* first row of inputs for this form */}
                                <Grid size={6}>
                                    <FormInput 
                                        label={'Event Name'} 
                                        name='event_name' 
                                        value={eventInput.event_name!} 
                                        onChange={handleNameChange} 
                                        required
                                        error = {eventNameInputError || !eventInput.event_name}
                                        helperText = {eventNameInputError ? 'event name required' : ''}
                                        />
                                </Grid>
                                {/* wrap the next input field in a localization adapter in order to provide support for dates*/}
                                <Grid size={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker 
                                            label={'Event Date'} 
                                            name='event_date' 
                                            value={eventInput.event_date ? dayjs(eventInput.event_date) : null} 
                                            onChange={handleDateChange} 
                                            sx={{width:'100%'}}
                                            />
                                    </LocalizationProvider>
                                </Grid>
                                {/* second row of inputs for this form */}
                                <Grid size={12}>
                                    <MultiLineFormInput 
                                        label={'Description'} 
                                        name='description' 
                                        value={eventInput.description!} 
                                        onChange={handleDescriptionChange} 
                                        fullWidth
                                        />
                                </Grid>
                                <Grid size={12}>
                                    <Button variant='outlined' type='submit' fullWidth>Create</Button>
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
                        <form id={'update'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleUpdate}>
                            {/* <input type="text" /> */}
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                <Grid size={12}>
                                    <FormInput
                                        type='number'
                                        label={'Event Id'}
                                        name='event_id'
                                        value={eventInput.event_id!}
                                        onChange={handleEventIdChange}
                                        required
                                        slotProps={{
                                            input:{
                                                inputMode:'numeric',
                                            }
                                        }}
                                        error={eventIdInputError || !eventInput.event_id}
                                        helperText={eventIdInputError ? 'Please enter a number greater than 0' : ''}
                                    />
                                </Grid>
                                {/* second row of inputs for this form */}
                                <Grid size={6}>
                                    <FormInput 
                                        label={'Event Name'} 
                                        name='event_name' 
                                        value={eventInput.event_name!} 
                                        onChange={handleNameChange} 
                                    />
                                </Grid>
                                {/* wrap the next input field in a localization adapter in order to provide support for dates*/}
                                <Grid size={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker label={'Event Date'} name='event_date' value={eventInput.event_date ? dayjs(eventInput.event_date) : null} onChange={handleDateChange} sx={{width:'100%'}}/>
                                    </LocalizationProvider>
                                </Grid>
                                {/* third row of inputs for this form */}
                                <Grid size={12}>
                                    <MultiLineFormInput label={'Description'} name='description' value={eventInput.description!} onChange={handleDescriptionChange} fullWidth></MultiLineFormInput>
                                </Grid>
                                <Grid size={12}>
                                    <Button variant='outlined' type='submit' fullWidth>Update</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CustomizedAccordions>
                    {/* DELETE by event_id */}
                    <CustomizedAccordions 
                        accordionTitle='Delete Event'
                        panelName='DELETE'  
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}
                    >
                        <form id={'delete'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleDelete}>
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                <Grid size={12}>
                                    <FormInput
                                        type='number'
                                        label={'Event Id'}
                                        name='event_id'
                                        value={eventInput.event_id!}
                                        onChange={handleEventIdChange}
                                        required
                                        slotProps={{
                                            input:{
                                                inputMode:'numeric',
                                            }
                                        }}
                                        error={eventIdInputError || !eventInput.event_id}
                                        helperText={eventIdInputError ? 'Please enter a number greater than 0' : ''}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Button variant='outlined' type='submit' fullWidth>Delete</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CustomizedAccordions>
                    {/* GET by event_id */}
                    <CustomizedAccordions 
                        accordionTitle='Get Event By id'
                        panelName='GET-BY-ID'  
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}>
                        <form id={'get-by-id'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleGetById}>
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                <Grid size={12}>
                                    <FormInput
                                        type='number'
                                        label={'Event Id'}
                                        name='event_id'
                                        value={eventInput.event_id!}
                                        onChange={handleEventIdChange}
                                        required
                                        slotProps={{
                                            input:{
                                                inputMode:'numeric',
                                            }
                                        }}
                                        error={eventIdInputError || !eventInput.event_id}
                                        helperText={eventIdInputError ? 'Please enter a number greater than 0' : ''}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Button variant='outlined' type='submit' fullWidth>Get By Id</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CustomizedAccordions>
                    {/* GET */}
                    <CustomizedAccordions 
                        accordionTitle='Get all Events'
                        panelName='GET'  
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}
                        >
                        <form id={'get'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleGet}>
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                <Button fullWidth variant='outlined' sx={{maxHeight:'min(37px, 15vh)'}} type='submit'>Get All Events</Button>
                            </Grid>
                        </form>
                    </CustomizedAccordions>
                </Grid>
            {/* INNER GRID 2: Grid for jsonDisplay, which displays the result of a given operation */}
                <Grid size={6} sx={{maxHeight:'80vh'}}> 
                    <JsonDisplay jsonData={jsonResponse}/>
                    <Typography></Typography>
                </Grid>
            </Grid>
        </Box>

  );
};

export default Page;
