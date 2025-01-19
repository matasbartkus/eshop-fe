import { Link, Typography } from "@mui/material";
import React from "react";

export default function Copyright(){
    return (
        <Typography color="inherit">
            {"© Visos teisės saugomos. "}
        <Link color="inherit" href="mailto:info@modwatches.lt">
            info@modwatches.lt
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
        </Typography>
    )
}