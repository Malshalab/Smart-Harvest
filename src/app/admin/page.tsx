'use client'
import React from "react"
import { updateContent } from "@/api/content/contentActions"

import { Button } from "@mui/material"
import { sh_contentUpdated } from "@/data/content"
function Page(){
    const myupdate : sh_contentUpdated = {
        contentId: 35,
        contentTitle: 'testing',
        contentType: 'Article',
        contentCategory: 'API',
        contentContent:'dummy content',
        contentUpdatedAt: new Date()
    }
    const updateFunc = async () => {
        let res
        try {
            res = await updateContent(myupdate)
            
        } catch (error) {
            console.log(error)
        }
        finally{
            console.log(res)
        }
    }
    
    return(
        <div>
            <Button variant='outlined' onClick={updateFunc}></Button>
        </div>
    )
}

export default Page