import React, { useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel, Input } from '@mui/material';

const SelectBoxes = ({ label, list, itemKey, itemValue, onUpdate, onDelete, onAdd }) => {
    const [items, setItems] = useState(list);
    const [selectedItem, setSelectedItem] = useState(list[0][itemValue]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedValue, setEditedValue] = useState('');
    const [newItemValue, setNewItemValue] = useState('');

    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedValue(items[index][itemValue]);
    };

    const handleSaveEdit = (index) => {
        const updatedItems = [...items];
        updatedItems[index] = editedValue;
        setItems(updatedItems);
        setEditIndex(null);

        if (onUpdate)
            onUpdate(items[index]);

    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        setEditIndex(null);

        if (onDelete)
            onDelete(items[index][itemKey]);
    };

    const handleAddItem = async () => {
        if (newItemValue.trim() !== '') {
            if (onAdd) {
                const newItem = await onAdd(newItemValue);
                setItems([...items, newItem]);
                setNewItemValue('');
            }
        }
    };

    return (
        <div>
            <FormControl>
                <InputLabel id="select-label">{label ?? 'Select an Item'}</InputLabel>
                <Select
                    labelId="select-label"
                    value={selectedItem}
                    onChange={handleChange}
                >
                    {items.map((item, index) => (
                        <MenuItem key={item[itemKey]} value={item[itemValue]}>
                            {editIndex === index ? (
                                <>
                                    <Input
                                        value={editedValue}
                                        onChange={(e) => setEditedValue(e.target.value)}
                                    />
                                    <Button onClick={() => handleSaveEdit(index)}>Save</Button>
                                </>
                            ) : (
                                <>
                                    {item[itemValue]}
                                    <Button onClick={() => handleEdit(index)}>Edit</Button>
                                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                                </>
                            )}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Input
                value={newItemValue}
                onChange={(e) => setNewItemValue(e.target.value)}
            />
            <Button onClick={handleAddItem}>Add New Item</Button>
            {/* <Button variant="contained" color="primary" onClick={() => setSelectedItem('Item 1')}>Reset Selection</Button> */}
        </div>
    );
};

export default SelectBoxes;
