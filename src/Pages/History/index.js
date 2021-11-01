import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { 
    makeStyles,
    Paper,
    Typography
 } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@material-ui/lab'
import { Add, Remove } from '@material-ui/icons';
import { AppBar, Fab } from '../../Components';
import { UserService } from '../../Services';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
}));

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
                console(error);
            }
        }
        fetchHistory();
    }, [])

    return (
        <div>
            <AppBar/>
            <div>
                <Timeline align="alternate">
                    {history.map(element => (
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    {moment(element.create_at).format('DD/MM/YYYY - HH:MM')}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={element. product_id ? "secondary" : "primary"}>
                                    {element.product_id ? <Remove/> : <Add />}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h2">
                                        {element.client}
                                    </Typography>
                                    <Typography>{element.product}</Typography>
                                    <Typography>{element.amount}</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
            <Fab/>
        </div>
    )
}

export default History
