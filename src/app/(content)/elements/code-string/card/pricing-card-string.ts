export const cardPricingString = `import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export const PricingCard = () => {
    const features = [
        { name: '2 team members', available: true },
        { name: '20GB Cloud storage', available: true },
        { name: 'Integration help', available: true },
        { name: 'Sketch Files', available: false },
        { name: 'API Access', available: false },
        { name: 'Complete documentation', available: false },
        { name: '24×7 phone & email support', available: false },
    ];

    return (
        <Card
            sx={{
                width: 370,
                borderRadius: 2,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Typography
                    variant="h6"
                    component="h2"
                    color="text.secondary"
                    fontWeight="medium"
                    gutterBottom
                >
                    Standard plan
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 1, mb: 3 }}>
                    <Typography
                        variant="h2"
                        component="span"
                        fontWeight="bold"
                        sx={{ lineHeight: 1 }}
                    >
                        $49
                    </Typography>
                    <Typography
                        variant="body1"
                        component="span"
                        color="text.secondary"
                        sx={{ mb: 0.5, ml: 1 }}
                    >
                        /month
                    </Typography>
                </Box>

                <List sx={{ mt: 2, mb: 3 }}>
                    {features.map((feature, index) => (
                        <ListItem
                            key={index}
                            disableGutters
                            sx={{
                                py: 0.5,
                                px: 0
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                {feature.available ? (
                                    <CheckCircleIcon color="primary" fontSize="small" />
                                ) : (
                                    <RadioButtonUncheckedIcon color="disabled" fontSize="small" />
                                )}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            textDecoration: feature.available ? 'none' : 'line-through',
                                            color: feature.available ? 'text.primary' : 'text.disabled'
                                        }}
                                    >
                                        {feature.name}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>

                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                        mt: 2,
                        py: 1.5,
                        textTransform: 'none',
                        borderRadius: 1
                    }}
                >
                    Choose plan
                </Button>
            </CardContent>
        </Card>
    );
}`;
