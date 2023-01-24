import { Box } from '@mui/system';
import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';


        
        const bull = (
            <Box
              component="span"
              sx={{ display: 'inline-block', mx: '2px' ,transform: 'scale(0.8)' }}
            >
              *
            </Box>
          );
          
          const card = (
            <React.Fragment>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  test
                </Typography>
                <Typography variant="h5" component="div">
                 test2
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 test3
                </Typography>
                <Typography variant="body2">
                 test4
                  <br />
                  
                </Typography>
              </CardContent>
              <CardActions>
                

                
              </CardActions>
            </React.Fragment>
          );
          
          export default function OutlinedCard() {
            return (
                 <Box sx={{ flexDirection: 'row' }}>
              <Box  minWidth={"100"} bgcolor={"yellow"}>
                <Card variant="outlined">{card}</Card>
              </Box>
              <Box  minWidth={"175"} bgcolor={"yellow"}>
              <Card variant="outlined">{card}</Card>
            </Box>
            </Box>


    );

}

