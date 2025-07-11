export const drawerShoppingCartString = `import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

const cartItems = [
    { id: 1, name: 'Wireless Headphones', price: '$99', image: '/images/headphones.jpg' },
    { id: 2, name: 'Smartwatch', price: '$199', image: '/images/smartwatch.jpg' },
];

export const DrawerShoppingCart = () => {
    const [open, setOpen] = React.useState(false);
    const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);

    const onClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <Drawer anchor="right" open={open} onClose={onClose}>
                <Box sx={{ width: 350, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Header */}
                    <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6">Your Cart</Typography>
                        <IconButton onClick={onClose}><CloseIcon /></IconButton>
                    </Box>
                    <Divider sx={{ borderColor: 'divider' }} />

                    {/* Cart Items */}
                    <Box sx={{ flex: 1, overflowY: 'auto', p: 2, pt: 0 }}>
                        <List>
                            {cartItems.map((item, index) => (
                                 <Box key={item.id}>
                                    <ListItem key={item.id} secondaryAction={<IconButton><DeleteIcon color="error" /></IconButton>}>
                                        <ListItemAvatar>
                                            <Avatar src={item.image} variant="rounded" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={item.price}
                                        />
                                    </ListItem>
                                    {index < cartItems.length - 1 && <Divider sx={{ borderColor: 'divider' }} component="li" />}
                                </Box>
                            ))}
                        </List>
                    </Box>
                    <Divider sx={{ borderColor: 'divider' }} />

                    {/* Footer */}
                    <Box sx={{ p: 2 }}>
                        <Typography variant="subtitle1">Subtotal: \${subtotal.toFixed(2)}</Typography>
                        <Button fullWidth variant="contained" sx={{ mt: 2 }}>Proceed to Checkout</Button>
                        <Button fullWidth variant="outlined" sx={{ mt: 1 }} onClick={onClose}>Continue Shopping</Button>
                    </Box>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
`;
