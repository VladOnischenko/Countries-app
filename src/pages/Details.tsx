import axios from "axios";
import React, {useEffect, useState} from 'react';
import {Params, useNavigate, useParams} from "react-router-dom";
import {searchByCountry} from "../config";
import {IoArrowBack} from 'react-icons/io5'
import {Button} from "../components/Button/Button";
import {Info} from "../components/Info/Info";

export const Details = () => {
    let {id}: Readonly<Params> = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState([])

    useEffect(() => {
        axios.get(searchByCountry(id))
            .then(({data}) => setCountry(data[0]))
    },[id])

    return (
        <>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/> <span>Back</span>
            </Button>
            {country && <Info name={""} nativeName={""} flag={""} capital={""} population={0} region={""} subregion={""}
                              topLevelDomain={[]} currencies={[]} languages={[]} borders={[]} {...country}/>}
        </>
    );
};

//Todo --->>> Need to fix <Info {...country}/>
