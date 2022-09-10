import React, {useEffect, useState} from 'react';
import {Search} from "./Search";
import {CustomSelect} from "./CustomSelect";
import styled from "styled-components";

const options = [
    {value: "Africa", label: "Africa"},
    {value: "Asia", label: "Asia"},
    {value: "America", label: "America"},
    {value: "Europe", label: "Europe"},
    {value: "Oceania", label: "Oceania"},
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Controls = ({onSearch}) => {
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue)
  },[search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion} //TODO ---> Problems with onChange and typescript (In the future I need to fix this)
            />
        </Wrapper>
    );
};
