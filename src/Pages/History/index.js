import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { 
    createTheme,
    makeStyles,
    Paper,
    Typography,
    ThemeProvider
 } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@material-ui/lab' 
import { AppBar, Fab } from '../../Components';
import { UserService } from '../../Services';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
}));

const theme = createTheme({
    overrides: {
        MuiTimelineItem: {
          missingOppositeContent: {
            "&:before": {
              display: "none"
            }
          }
        }
      }
});

const History = () => {
    const [history, setHistory] = useState([])
    const classes = useStyles();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const { data } = await UserService.getHistory();
                console.log(data)
                setHistory(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchHistory();
    }, [])

    return (
        <div>
            <AppBar/>
            <div>
                <Timeline align="left">
                    {history.map(element => (
                        <ThemeProvider theme={theme}>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color={element. product_id ? "secondary" : "primary"}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper variant="outlined" elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h2">
                                            {element.client}
                                        </Typography>
                                        <Typography>{element.product}</Typography>
                                        <Typography variant="overline">{element.amount}</Typography>
                                    </Paper>
                                    <Typography variant="body2" color="textSecondary">
                                        {moment(element.create_at).format('DD/MM/YYYY - HH:MM')}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </ThemeProvider>
                    ))}
                </Timeline>
            </div>
            <Fab/>
        </div>
    )
}

export default History
