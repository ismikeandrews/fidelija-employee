import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { 
    createTheme,
    makeStyles,
    Paper,
    Typography,
    ThemeProvider,
    Tab,
    Tabs,
    Divider
 } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@material-ui/lab' 
import { AppBar, Fab, Backdrop } from '../../Components';
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
    const [redeemHistory, setRedeemHistory] = useState([]);
    const [pointsHistory, setPointsHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [tabValue, setTabValue] = useState(0)
    const classes = useStyles();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const redeemRes = await UserService.getRedeemHistory();
                const pointsRes = await UserService.getPointsHistory();
                console.log("points", pointsRes.data)
                console.log("redeem", redeemRes.data)
                setRedeemHistory(redeemRes.data.data);
                setPointsHistory(pointsRes.data.data);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setIsLoading(false)
            }
        }
        fetchHistory();
    }, [])

    return (
        <div>
            <AppBar/>
            <Backdrop open={isLoading}/>
            <div>
                <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} centered>
                    <Tab label="Pontuações"/>
                    <Tab label="Resgates"/>
                </Tabs>
                <Divider/>
                <div role="tabpanel" hidden={tabValue !== 0} id={`full-width-tabpanel-${0}`}>
                    {tabValue === 0 && (
                        <Timeline align="left">
                            {pointsHistory.map(element => (
                                <ThemeProvider key={element.id} theme={theme}>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot color="primary"/>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper variant="outlined" elevation={3} className={classes.paper}>
                                                <Typography variant="h6" component="h2">
                                                    {element.client}
                                                </Typography>
                                                <Typography variant="body1" color="textSecondary">
                                                    <span style={{marginRight: '15px'}}>Pontos: {element.amount}</span>
                                                    <span>Ref: {element.transaction}</span>
                                                </Typography>
                                            </Paper>
                                            <Typography variant="body2" color="textSecondary">
                                                {moment(element.created_at).format('DD/MM/YYYY - HH:mm')}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </ThemeProvider>
                            ))}
                        </Timeline>
                    )}
                </div>
                <div role="tabpanel" hidden={tabValue !== 1} id={`full-width-tabpanel-${1}`}>
                    {tabValue === 1 && (
                        <Timeline align="left">
                            {redeemHistory.map(element => (
                                <ThemeProvider key={element.id} theme={theme}>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot color="secondary"/>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper variant="outlined" elevation={3} className={classes.paper}>
                                                <Typography variant="h6" component="h2">
                                                    {element.client}
                                                </Typography>
                                                <Typography>{element.product}</Typography>
                                                <Typography variant="body1" color="textSecondary">
                                                    Pontos: {element.amount}
                                                </Typography>
                                            </Paper>
                                            <Typography variant="body2" color="textSecondary">
                                                {moment(element.created_at).format('DD/MM/YYYY - HH:mm')}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </ThemeProvider>
                            ))}
                        </Timeline>
                    )}
                </div>
            </div>
            <Fab/>
        </div>
    )
}

export default History
