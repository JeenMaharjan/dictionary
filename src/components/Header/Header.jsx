import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import './Header.css'
import Catagories from '../../data/catagories'
const Header = ({setCatagory,catagory,word,setWord,lightMode}) => {
    const darkTheme = createTheme({
    palette: {
        primary:{
        main: lightMode ? '#000' : '#fff'
        },
    mode: lightMode ? 'light' : 'dark',
    },
});
const fullWord= (wordd) => {
    setWord(wordd)
}
const handleChange = (data) => { 
    setCatagory(data)
    setWord("")
}

    return (
    <div className='header'>
        <span className='title'>{word? word :"word Hunt"}</span>
        <div className='input'>
            <ThemeProvider theme={darkTheme}>
            <TextField className='search' label="Search a word" variant="standard" value={word} onChange={(e)=>fullWord(e.target.value)} />
            <TextField
            className='select'
            select
            label="Language"
            value={catagory}
            onChange={(e)=> handleChange(e.target.value)}
            helperText="Please select your currency"
        >
        
        {
            Catagories.map((option)=>(
                <MenuItem key={option.label} value={option.label}>
                    {option.value}
                    </MenuItem>
            )
                    
            )
        }
            
        
        </TextField>
            </ThemeProvider>
            
        </div>
    </div>
)
}

export default Header