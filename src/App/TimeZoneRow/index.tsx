import React from 'react';
import { TextField } from '@material-ui/core';
import ReactFlagsSelect from 'react-flags-select';
import Wrapper from './Wrapper';

export interface IProps {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => Promise<void>;
}

const TimeZoneRow: React.FC<IProps> = ({ selected, setSelected, value, onChange }) => (
    <Wrapper paddingTop={30}>
        <TextField id="datetime-local" type="datetime-local" value={value} onChange={onChange} />
        <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            countries={['JP', 'US']}
            customLabels={{ JP: 'JP', US: 'US' }}
        />
    </Wrapper>
);
export default TimeZoneRow;
