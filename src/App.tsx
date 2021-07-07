import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './style/Global';
import TimeZoneRow from './App/TimeZoneRow/index';

const Header = styled.h1`
    font-size: 35px;
    font-style: italic;
`;

const ApiKey = process.env.REACT_APP_DATE_API;

function App(): JSX.Element {
    const [fromSelected, setFromSelected] = useState('JP');
    const [toSelected, setToSelected] = useState('US');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    useEffect(() => {
        const tzFrom = fromSelected === 'JP' ? 'Japan' : 'America/Los_Angeles';
        const tzTo = toSelected === 'JP' ? 'Japan' : 'America/Los_Angeles';
        fetch(`https://api.ipgeolocation.io/timezone?apiKey=${ApiKey}&location=${tzFrom}`)
            .then((res) => res.json())
            .then((res) => {
                fetch(
                    `https://api.ipgeolocation.io/timezone/convert?apiKey=${ApiKey}&tz_from=${tzFrom}&tz_to=${tzTo}&time=${res.date}%20${res.time_24}`,
                )
                    .then((data) => data.json())
                    .then((data) => {
                        let originalDate: string = data.original_time;
                        originalDate = originalDate.replace(' ', 'T').slice(0, -3);
                        let convertedDate: string = data.converted_time;
                        convertedDate = convertedDate.replace(' ', 'T').slice(0, -3);
                        setFromDate(originalDate);
                        setToDate(convertedDate);
                    });
            });
    }, []);

    useEffect(() => {
        async function updateDate(): Promise<void> {
            const tzFrom = fromSelected === 'JP' ? 'Japan' : 'America/Los_Angeles';
            const tzTo = toSelected === 'JP' ? 'Japan' : 'America/Los_Angeles';
            const dateArr = fromSelected.split('T');
            const date = dateArr[0];
            const time = dateArr[1];
            await fetch(
                `https://api.ipgeolocation.io/timezone/convert?apiKey=${ApiKey}&tz_from=${tzFrom}&tz_to=${tzTo}&time=${date}%20${time}`,
            )
                .then((res) => res.json())
                .then((res) => {
                    let originalDate: string = res.original_time;
                    originalDate = originalDate.replace(' ', 'T');
                    let convertedDate: string = res.converted_time;
                    convertedDate = convertedDate.replace(' ', 'T');
                    setFromDate(originalDate);
                    setToDate(convertedDate);
                });
        }
        updateDate();
    }, [fromSelected, toSelected]);

    async function handleFromDateChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): Promise<void> {
        const tzFrom = fromSelected === 'JP' ? 'Japan' : 'America/Los_Angeles';
        const tzTo = toSelected === 'JP' ? 'Japan' : 'America/Los_Angeles';
        const dateArr = e.target.value.split('T');
        const date = dateArr[0];
        const time = dateArr[1];
        await fetch(
            `https://api.ipgeolocation.io/timezone/convert?apiKey=${ApiKey}&tz_from=${tzFrom}&tz_to=${tzTo}&time=${date}%20${time}`,
        )
            .then((res) => res.json())
            .then((res) => {
                let originalDate: string = res.original_time;
                originalDate = originalDate.replace(' ', 'T');
                let convertedDate: string = res.converted_time;
                convertedDate = convertedDate.replace(' ', 'T');
                setFromDate(originalDate);
                setToDate(convertedDate);
            });
    }

    async function handleToDateChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): Promise<void> {
        const tzFrom = fromSelected === 'JP' ? 'Japan' : 'America/Los_Angeles';
        const tzTo = toSelected === 'JP' ? 'Japan' : 'America/Los_Angeles';
        const dateArr = e.target.value.split('T');
        const date = dateArr[0];
        const time = dateArr[1];
        await fetch(
            `https://api.ipgeolocation.io/timezone/convert?apiKey=${ApiKey}&tz_from=${tzTo}&tz_to=${tzFrom}&time=${date}%20${time}`,
        )
            .then((res) => res.json())
            .then((res) => {
                let originalDate: string = res.original_time;
                originalDate = originalDate.replace(' ', 'T');
                let convertedDate: string = res.converted_time;
                convertedDate = convertedDate.replace(' ', 'T');
                setFromDate(convertedDate);
                setToDate(originalDate);
            });
    }

    if (fromDate && toDate) {
        return (
            <>
                <GlobalStyle />
                <Header data-testid="header">Time Zone Covnerter</Header>
                <TimeZoneRow
                    selected={fromSelected}
                    setSelected={setFromSelected}
                    value={fromDate}
                    onChange={handleFromDateChange}
                />
                <TimeZoneRow
                    selected={toSelected}
                    setSelected={setToSelected}
                    value={toDate}
                    onChange={handleToDateChange}
                />
            </>
        );
    }
    return <> </>;
}

export default App;
