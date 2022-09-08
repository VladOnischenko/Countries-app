import React, {useEffect, useState} from 'react';
import {Params, useParams} from "react-router-dom";
import axios from "axios";
import {searchByCountry} from "../config";

export const Details = () => {
    let {id}: Readonly<Params> = useParams()
    const [country, setCountry] = useState([])

    useEffect(() => {
        axios.get(searchByCountry(id))
            .then(({data}) => setCountry(data))
    },[id])

    return (
        <div>

        </div>
    );
};
