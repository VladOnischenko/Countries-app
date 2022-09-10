import axios from 'axios'
import {useState, useEffect} from 'react'
import {filterByCode} from "../../config";
import {useNavigate} from "react-router-dom";
import {InfoImage, InfoTitle, List, ListGroup, ListItem, Meta, Tag, TagGroup, Wrapper} from "./styles";

interface Props {
    name: string,
    nativeName: string,
    flag: string,
    capital: string,
    population: number,
    region: string,
    subregion: string,
    topLevelDomain: Array<string>,
    currencies: Array<{code: string, name: string}>,
    languages: Array<{name: string}>,
    borders: Array<string>
}

export const Info = (props: Props) => {
    const [neighbors, setNeighbors] = useState([])
    const navigate = useNavigate()
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
    } = props

    useEffect(() => {
        if(!!borders.length)
            axios.get(filterByCode(borders))
                .then(({data}) => setNeighbors(data.map((c: {name: string}) => c.name)))
    }, [borders])

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name}/>

            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                <List>
                    <ListItem>
                        <b>Native name:</b> {nativeName}
                    </ListItem>
                    <ListItem>
                        <b>Population:</b> {population}
                    </ListItem>
                    <ListItem>
                        <b>Region:</b> {region}
                    </ListItem>
                    <ListItem>
                        <b>Sub Region:</b> {subregion}
                    </ListItem>
                    <ListItem>
                        <b>Capital:</b> {capital}
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <b>Top Level Domain</b> {topLevelDomain.map((d): JSX.Element => (<span key={d}>{d}</span>))}
                    </ListItem>
                    <ListItem>
                        <b>Currency</b> {currencies.map((c): JSX.Element => (<span key={c.code}>{c.name} </span>))}
                    </ListItem>
                    <ListItem>
                        <b>Top Level Domain</b> {languages.map((l): JSX.Element => (<span key={l.name}>{l.name}</span>))}
                    </ListItem>
                </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries</b>
                    {!borders.length ? (
                        <span>There is no borders</span>
                        ) : (
                        <TagGroup>
                            {neighbors.map((b): JSX.Element => (
                                <Tag key={b} onClick={() => navigate(`/country/${b}`)}>{b}</Tag>
                            ))}
                        </TagGroup>
                        )}
                </Meta>
            </div>
        </Wrapper>
    )
}