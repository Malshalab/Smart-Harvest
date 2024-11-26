'use client'
import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Select, MenuItem, SelectChangeEvent, InputLabel, FormControl, Input } from '@mui/material';
import Grid from '@mui/material/Grid2';
// form stuff
import MultiLineFormInput from '@/components/multiLineFormInput';
import FormInput from '@/components/formInput';
import TitleBar from '@/components/titleBar';
// request results console
import JsonDisplay from '@/components/jsonDisplay';
import { sh_content, sh_contentUpdated, content_supabase } from '@/data/content';
import CustomizedAccordions from '@/components/accordion';
// date stuff
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

// APIs
import { createContent, getContent, getContentById, deleteContent, updateContent } from '@/api/content/contentActions';
import { contentType } from '@/app/configs/libraryConfigs';


function Page(){
    // accordion states
    const [ expandedPanel, setExpandedPanel] = useState<string | false>('CREATE');
    // form inputs
    const [ contentInput, setContentInput] = useState<content_supabase>({
        title:'',
        content:'',
        content_type:''
    });
    // json response
    const [ jsonResponse, setJsonResponse] = useState<object>({'default':'this is a dummy output'})
    // input error states
    const [ contentIdInputError, setContentIdInputError] = useState<boolean>(false);
    const [ contentTitleInputError, setContentTitleInputError] = useState<boolean>(false);
    const [ contentTypeInputError, setContentTypeInputError] = useState<boolean>(false);
    // content_type array
    const contType: string[] = ['Article', 'Tutorial', 'Video']
    // accordion expanding, reset the contentInput upon expansion of each, that way forms don't share state
    const handleAccordionChange = (panel: string) => {
        setExpandedPanel((prev) => (prev === panel ? false : panel)); 
        setContentInput(({
            content_id: undefined,
            title: '', 
            content_type: '',
            content: '',
            category: '',
        }));
    };

    // CHANGE HANDLERS:

    // change hanlder for a string input, use this for all string inputs
    const handleStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('target.name:',e.target.name)
        setContentInput((prevState) =>({
            
            ...prevState,
            [e.target.name]:e.target.value
        }))
        console.log(contentInput)
    }
    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('content change handler')
        setContentInput((prevState) => ({
            ...prevState,
            content:e.target.value
        }))
    }
    // change handler for select menu
    const handleSelectChange = ( e: SelectChangeEvent<unknown>) => {
        const checkType = e.target.value as string
        if( checkType !== contType[0] &&  checkType !== contType[1] &&  checkType !== contType[2] ){
            setContentTypeInputError(true)
            console.log(contentTypeInputError)
            return
        }
        setContentTypeInputError(false)
        const idx = contType.indexOf(checkType)
        setContentInput((prevState) => ({
            ...prevState,
            content_type:contType[idx]
        }))
        console.log("type:",contentInput.content_type)
    }
    // change handler for content_id for updating, getting and deleting content
    const handleContentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === ''){}
        if (e.target.value !== '' && ( Number(e.target.value) > 0 && !isNaN(Number(e.target.value) ))){ // if the input is a non empty number greater than 0
            setContentIdInputError(false)
            setContentInput((prevState) => ({
                ...prevState,
                content_id: Number(e.target.value)
            })) 
        }
        else{
            setContentIdInputError(true)
            setContentInput((prevState) => ({
                ...prevState,
                content_id: undefined
            })) 
        }  
    }
    // FORM SUBMISSION HANDLERS:

    // handle creating content:
    const handleCreate = async (e:any) =>{
        e.preventDefault() // stop my frontend page from reloading

        if(!contentInput.title || contentInput.title === '' || contentInput.title === undefined || contentIdInputError){
            setContentTitleInputError(true);
            return;
        }
        setContentTitleInputError(false);
        // convert my inputs into an object of type sh_content
        const newContent:sh_content = {
            contentTitle: contentInput.title,
            contentType: contentInput.content_type!,
            contentCategory: contentInput.category!,
            contentContent: contentInput.content!,
        }
        console.log('newContent:',newContent)
        let res:any = {}
        try{
            res = await createContent(newContent)
        }
        catch(error){
            console.log("error creating content:", error)
            setJsonResponse({'error, res:':error})
        }
        finally{
            console.log('received response:', res)
            setJsonResponse(res.data)
        }
    }
    // updating content
    const handleUpdate = async (e:any) => {
        e.preventDefault()
        // content id is mandatory, if we don't have it, don't update anything
        if(!contentInput.content_id || contentInput.content_id === null || contentIdInputError){
            setContentIdInputError(true)
            return
        }
        setContentIdInputError(false)
        console.log('no error')
        const updatedAt = new Date()
        let updatedContent: sh_contentUpdated = {
            contentId: contentInput.content_id,
            contentTitle: contentInput.title,
            contentType: contentInput.content_type,
            contentContent: contentInput.content,
            contentCategory: contentInput.category,
            contentUpdatedAt: updatedAt,
        }
        console.log('updatedContent:', updatedContent)
        let res:any = {}
        try {
            res = await updateContent(updatedContent)
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
    // deleting content by id
    const handleDelete = async (e:any) => {
        e.preventDefault()
        // content id is mandatory, if we don't have it, don't update anything
        if(!contentInput.content_id || contentInput.content_id === null || contentIdInputError){
            setContentIdInputError(true)
            return
        }
        setContentIdInputError(false)
        let res:any = {}
        try {
            res = await deleteContent(Number(setContentIdInputError))
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
    // handle getting a single content by id
    const handleGetById = async (e:any) => {
        e.preventDefault()
        // content id is mandatory, if we don't have it, don't update anything
        if(!contentInput.content_id || contentInput.content_id === null || contentIdInputError){
            setContentIdInputError(true)
            return
        }
        setContentIdInputError(false)
        let res:any = {}
        try{
            res = await getContentById(Number(contentInput.content_id))
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
    // handle getting all contents
    const handleGet = async (e:any) => {
        e.preventDefault()
        console.log('inside handleGet')
        let res:any = {}
        try {
            res = await getContent()
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
    // the page to be rendered
    return(
        <Box sx={{
            height:'100vh',
            width:'100wh'
        }}>
            <TitleBar title={'Admin Integration APIs for Content'}></TitleBar>
            <TitleBar title={'to test, enter each field and submit, resulting DB queries will appear on the right'}></TitleBar>

            {/* OUTER GRID */}
            <Grid container columnSpacing={3}>
            {/* INNER GRID 1: grid with forms to test APIs */}
                <Grid size={6}>
                    {/* CREATE, select fields are mandatory */}
                    <CustomizedAccordions
                        accordionTitle='Create Content'
                        panelName='CREATE'
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}
                    >
                        {/* create content form  */}
                        <form id={'create'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleCreate}>
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                <Grid size={6}>
                                    <FormInput
                                        label={'Title'}
                                        name='title'
                                        value={contentInput.title!}
                                        onChange={handleStringChange}
                                        required
                                        error = {contentTitleInputError}
                                        helperText = {contentTitleInputError ? 'a title is required' : ''}
                                    />
                                </Grid>
                                <Grid size={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id='contentTypeLabelId'>Content Type</InputLabel>
                                        <Select
                                            labelId='contentTypeLabelId'
                                            label='Content Type'
                                            name='content_type'
                                            value={contentInput.content_type}
                                            onChange={handleSelectChange}
                                            error = {contentTypeInputError}
                                            fullWidth
                                            variant='outlined'
                                        >
                                            <MenuItem value={contType[0]}>{contType[0]}</MenuItem>
                                            <MenuItem value={contType[1]}>{contType[1]}</MenuItem>
                                            <MenuItem value={contType[2]}>{contType[2]}</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid size={12}>
                                    <FormInput
                                        label={'content category'}
                                        name='category'
                                        value={contentInput.category!}
                                        onChange={handleStringChange}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <MultiLineFormInput 
                                        label={'Content'} 
                                        name='content' 
                                        value={contentInput.content!} 
                                        onChange={handleContentChange} 
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Button variant='outlined' type='submit' fullWidth>Create</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CustomizedAccordions>
                    {/* UPDATE by content_id */}
                    <CustomizedAccordions
                        accordionTitle='Update Content'
                        panelName='UPDATE'
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}
                    >
                        {/* update content form  */}
                        <form id={'update'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleUpdate}>
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                <Grid size={4}>
                                    <TextField 
                                        label={'content id'}
                                        type='number' 
                                        value={contentInput.content_id} 
                                        onChange={handleContentIdChange}
                                        required
                                        error = {contentIdInputError}
                                        helperText = {contentIdInputError ? 'please enter a valid content id' : ''} 
                                        fullWidth   
                                    />
                                </Grid>
                                <Grid size={4}>
                                    <FormInput
                                        label={'Title'}
                                        name='title'
                                        value={contentInput.title!}
                                        onChange={handleStringChange}
                                    />
                                </Grid>
                                <Grid size={4}>
                                    <FormControl fullWidth>
                                        <InputLabel id='contentTypeLabelId'>Content Type</InputLabel>
                                        <Select
                                            labelId='contentTypeLabelId'
                                            label='Content Type'
                                            name='content_type'
                                            value={contentInput.content_type}
                                            onChange={handleSelectChange}
                                            error = {contentTypeInputError}
                                            fullWidth
                                            variant='outlined'
                                        >
                                            <MenuItem value={contType[0]}>{contType[0]}</MenuItem>
                                            <MenuItem value={contType[1]}>{contType[1]}</MenuItem>
                                            <MenuItem value={contType[2]}>{contType[2]}</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid size={12}>
                                    <FormInput
                                        label={'content category'}
                                        name='category'
                                        value={contentInput.category!}
                                        onChange={handleStringChange}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <MultiLineFormInput 
                                        label={'Content'} 
                                        name='content' 
                                        value={contentInput.content!} 
                                        onChange={handleContentChange} 
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Button variant='outlined' type='submit' fullWidth>Update</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CustomizedAccordions>
                    {/* DELETE by content_id */}
                    <CustomizedAccordions
                        accordionTitle='Delete Content'
                        panelName='DELETE'
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}
                    >
                        {/* delete content form  */}
                        <form id={'delete'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleDelete}>
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                <Grid size={12}>
                                    <TextField 
                                        label={'content id'}
                                        type='number' 
                                        value={contentInput.content_id} 
                                        onChange={handleContentIdChange}
                                        required
                                        error = {contentIdInputError}
                                        helperText = {contentIdInputError ? 'please enter a valid content id' : ''}  
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Button variant='outlined' type='submit' fullWidth>Delete</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CustomizedAccordions>
                    {/* GET by content_id */}
                    <CustomizedAccordions
                        accordionTitle='Get Content By id'
                        panelName='GET-BY-ID'
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}
                    >
                        {/* get content by id form  */}
                        <form id={'get-by-id'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleGetById}>
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                <Grid size={12}>
                                    <TextField 
                                        label={'content id'}
                                        type='number' 
                                        value={contentInput.content_id} 
                                        onChange={handleContentIdChange}
                                        required
                                        error = {contentIdInputError}
                                        helperText = {contentIdInputError ? 'please enter a valid content id' : ''}    
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <Button variant='outlined' type='submit' fullWidth>Get By id</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CustomizedAccordions>
                    {/* GET all content */}
                    <CustomizedAccordions
                        accordionTitle='Get all Contents'
                        panelName='GET'
                        expanded={expandedPanel}
                        onChange={handleAccordionChange}
                    >
                        {/* get content form  */}
                        <form id={'get'} style={{height:'100%', minHeight:'200px', overflow:'auto', width:'100wh', display:'flex'}} onSubmit={handleGet}>
                            <Grid container rowSpacing={1} columnSpacing={2} size={12} sx={{marginTop:'10px'}}>
                                <Grid size={12}>
                                    <Button variant='outlined' type='submit' fullWidth>Get All Content</Button>
                                </Grid>
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
}

export default Page;