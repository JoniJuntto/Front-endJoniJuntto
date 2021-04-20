import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, Button, Menu, MenuList, MenuItem, ListItemIcon, ListItemText} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import HistoryIcon from '@material-ui/icons/History';
import { Link } from 'react-router-dom';


function MenuComponent() {
    const [anchorMenu, setMenuOpen] = useState(null);
    const handleMenu = (event) => {setMenuOpen(event.currentTarget);}
    const handleClose = () => {
        setMenuOpen(null)

    }
    
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Button onClick={ handleMenu } color='default'><AddIcon/> </Button>
                    <Typography variant='h5' style={{ flexGrow:1, textAlign:'center'}}>Menu</Typography>
                </Toolbar>
            </AppBar>
            <MenuList>
                <Menu
                anchorEl = {anchorMenu}
                open={Boolean(anchorMenu)}
                anchorOrigin={{vertical:'bottom', horizontal:'left'}}
                getContentAnchorEl = {null}
                onClose={handleClose}>
                    <MenuItem component={ Link } to='/' onClick={handleClose}>
                        <ListItemIcon><HistoryIcon/></ListItemIcon>
                        <ListItemText primary='Etusivu'/>
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={ Link } to='/lista' >
                        <ListItemIcon><HistoryIcon/></ListItemIcon>
                        <ListItemText primary='Edelliset haut'/>
                    </MenuItem>
                </Menu>
            </MenuList>

        </div>
    );
}
export default MenuComponent;