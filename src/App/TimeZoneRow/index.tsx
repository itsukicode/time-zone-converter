import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import ReactFlagsSelect from 'react-flags-select';
import Wrapper from './Wrapper';

const TimeZoneRow: React.FC = () => {
    const [selected, setSelected] = useState('');
    return (
        <Wrapper paddingTop={30}>
            <TextField id="datetime-local" type="datetime-local" defaultValue="2021-07-01T16:30" />
            <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                countries={['JP', 'US']}
                // selectedSize={18}
            />
        </Wrapper>
    );
};

export default TimeZoneRow;
