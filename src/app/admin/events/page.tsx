import React, { useState } from 'react';
import { TextField, Button, Typography, AppBar, Toolbar, Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CustomInput from '@/components/customInput';
import TitleBar from '@/components/titleBar';
import FormBox from '@/components/formBox';
import JsonDisplay from '@/components/jsonDisplay';


async function Page(){
  return (
    <Grid container spacing = {12}>
        <Grid size={6}>
            <Container>
                {/* create event form */}
                <FormBox>
                    <form 
                    style={{
                        paddingBottom: 'min(10vh, 10px)',
                    }}>
                        <TitleBar title={"Create Event"}></TitleBar>
                        <CustomInput placeholder={"eventName"} ></CustomInput>
                        
                    </form>
                </FormBox>
                {/* update event form */}
                <FormBox>
                    <form
                    style={{
                        paddingBottom: 'min(10vh, 10px)',
                    }}
                    >
                        <TitleBar title={"Update Event"}></TitleBar>
                        <CustomInput ></CustomInput>
                    </form>
                </FormBox>
                {/* delete event form */}
                <FormBox>
                    <form
                    style={{
                        paddingBottom: 'min(10vh, 10px)',
                    }}
                    >
                        <TitleBar title={"Delete Event"}></TitleBar>
                        <CustomInput ></CustomInput>
                    </form>
                </FormBox>
                {/* get event by id form */}
                <FormBox>
                    <form
                    style={{
                        paddingBottom: 'min(10vh, 10px)',
                    }}
                    >
                        <TitleBar title={"Get Event"}></TitleBar>
                        <CustomInput ></CustomInput>
                    </form>
                </FormBox>
                {/* get all events */}
                <FormBox>
                    <form
                    style={{
                        paddingBottom: 'min(10vh, 10px)',
                    }}
                    >
                        <TitleBar title={"Get All Events"}></TitleBar>
                        <CustomInput ></CustomInput>
                    </form>
                </FormBox>
            </Container>
        </Grid>
        <Grid size={6}>
            <FormBox>
                <JsonDisplay>

                </JsonDisplay>
            </FormBox>
        </Grid>
    </Grid>
  );
};

export default Page;
