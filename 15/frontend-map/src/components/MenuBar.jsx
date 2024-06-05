import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Create, Map } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const MenuBar = () => {
    const MenuOptions = [
        { name: 'Registrar Vehiculo', icon: Create, path: '/create' },
        { name: 'Agregar en mapa', icon: Map, path: '/edit' }
    ];

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Map sx={{ display: { md: 'flex' }, mr: 1 }} />
                <Typography variant="h5" sx={{ mr: 2 }}>Mapa App</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { md: 'flex' } }}>
                    {MenuOptions.map(({ name, icon: IconComponent, path }) => (
                        <Button
                            key={name}
                            component={Link}
                            to={path}
                            sx={{ my: 2, color: 'white' }}
                        >
                            <IconComponent sx={{ display: { md: 'flex', display:'block' }, mr: 1 }} />
                            {name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
