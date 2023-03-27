import { Album, Cancel, Delete, Home, ModeNightOutlined, Settings, Star } from '@mui/icons-material'
import { Autocomplete, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, TextField } from '@mui/material'
import React from 'react'

export const Sidebar = ({ mode, setMode}) => {
    const top100Films = [
        { title: 'Adele' },
        { title: 'Sam Smith' },
        { title: 'Beyoncé' },
        { title: 'Rihanna' },
        { title: 'Tom Flincher' },
        { title: "Tom Rosenthal" },
        { title: 'Todrick hall' }
        
      ];
  return (
    <Box
    flex={1.5}
    p={1}
    sx={{display:{xs:'none', sm:'block'}}} >
    <Box position='fixed'>
    
     <List>
     <ListItem disablePadding>
       <ListItemButton>
         <ListItemIcon>
            <Home/>
         </ListItemIcon>
         <ListItemText primary="Homepage" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton>
         <ListItemIcon>
           <Album/>
         </ListItemIcon>
         <ListItemText primary="My covers" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton>
         <ListItemIcon>
            <Star/>
         </ListItemIcon>
         <ListItemText primary="Favourites" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton>
         <ListItemIcon>
            <Settings/>
         </ListItemIcon>
         <ListItemText primary="Settings" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton>
         <ListItemIcon>
            <Delete/>
         </ListItemIcon>
         <ListItemText primary="Trash" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton>
         <ListItemIcon>
            <ModeNightOutlined/>
         </ListItemIcon>
         <Switch onChange={e=>setMode( mode ===  "light" ? "dark" : "light")} />
       </ListItemButton>
     </ListItem>
   </List>
   <br/>
   <Autocomplete
      multiple
      limitTags={1}
      id="multiple-limit-tags"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      defaultValue={[top100Films[1], top100Films[2], top100Films[3]]}
      renderInput={(params) => (
        <TextField {...params} label="Favourite Singer" placeholder="Favorites" />
      )}
      sx={{ width: '260px' }}
    />

</Box>
   </Box>
  )
}
