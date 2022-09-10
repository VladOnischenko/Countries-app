import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ALL_COUNTRIES} from "../config";
import {Controls} from "../components/Controls/Controls";
import {List} from "../components/List/List";
import {Card} from "../components/Card/Card";
import {useNavigate} from "react-router-dom";

interface Props {
    countries: Array<any>,
    setCountries: (data: any) => void
}

export const Home = ({countries,setCountries}: Props) => {
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const navigate = useNavigate()

    const handleSearch = (search: string, region: string) => {
        let data = [...countries]

        if(region) {
            data = data.filter((c) => c.region.includes(region))
        }

        if(search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data)
    }

    useEffect(() => {
        if(!countries.length)
            axios.get(ALL_COUNTRIES)
                .then(({data}) => setCountries(data))
    },[])

    useEffect(() => {
        // @ts-ignore
        handleSearch()
    },[countries])

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {filteredCountries.map((el: any): JSX.Element => {
                    const countryInfo = {
                        img: el.flags.png,
                        name: el.name,
                        info: [
                            {
                                title: 'Population',
                                description: el.population
                            },
                            {
                                title: 'Region',
                                description: el.region
                            },{
                                title: 'Capital',
                                description: el.capital
                            }
                        ],
                    }
                    return (
                        <Card key={el.name} onClick={() => navigate(`/country/${el.name}`)} {...countryInfo}/>
                    )})}
            </List>
        </>
    );
};
