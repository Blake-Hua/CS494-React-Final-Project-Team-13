import { useRouteError } from "react-router-dom"
import React from 'react'

export function ErrorPage() {
    const error = useRouteError()
    console.log(error)
    return (
        <>
            <h1 className="title">Error: 404 Page Not Found</h1>      
        </>
    )
}