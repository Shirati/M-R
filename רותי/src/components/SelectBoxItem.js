import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SelectBoxItem = ({ value, onChange, onDelete }) => {
    const [editingValue, setEditingValue] = useState(value);
    
    const handleInputChange = (e) => {
        setEditingValue(e.target.value);
        onChange(e.target.value);
    };
    
    return (
        <Box display="flex" alignItems="center" marginBottom={1}>
            <TextField
                value={editingValue}
                onChange={handleInputChange}
                label="Value"
            />
            <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
        </Box>
    );
};

export default SelectBoxItem;
