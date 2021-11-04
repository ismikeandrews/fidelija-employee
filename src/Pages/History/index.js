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
    Divider,
    Container
 } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    Pagination
} from '@material-ui/lab' 
import { AppBar, Fab, Backdrop } from '../../Components';
import { UserService } from '../../Services';
import { VoidSvg } from '../../Assets';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px', 
        marginBottom: '80px'
    },
    notFound:{
        textAlign: 'center',
        margin: '70px'
    },
    notFoundMsg: {
        marginTop: '20px',
        marginBottom: '20px'
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
    const [redeemPage, setRedeemPage] = useState(1);
    const [redeemLastPage, setRedeemLastPage] = useState(null);
    const [pointsPage, setPointsPage] = useState(1);
    const [pointsLastPage, setPointsLastPage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [tabValue, setTabValue] = useState(0)
    const classes = useStyles();

    useEffect(() => {
        fetchRedeem(redeemPage)
        fetchPoints(pointsPage)
    }, [redeemPage, pointsPage])

    const fetchRedeem = async (currentPage) => {
        try {
            const { data } = await UserService.getRedeemHistory(currentPage);
            setRedeemHistory(data.data);
            setRedeemPage(data.current_page);
            setRedeemLastPage(data.last_page);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const fetchPoints = async (currentPage) => {
        try {
            const { data } = await UserService.getPointsHistory(currentPage);
            setPointsHistory(data.data);
            setPointsPage(data.current_page);
            setPointsLastPage(data.last_page);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

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
                {isLoading || (
                <div>
                    <div role="tabpanel" hidden={tabValue !== 0} id={`full-width-tabpanel-${0}`}>
                        {tabValue === 0 && (
                            <div>
                                {pointsHistory.length > 0 ? (
                                <div>
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
                                    <Pagination
                                    className={classes.pagination}
                                    page={pointsPage}
                                    count={pointsLastPage} 
                                    color="primary" 
                                    onChange={(e, page) => {
                                        fetchPoints(page)
                                    }}/>
                                </div>
                                ) : (
                                <div className={classes.notFound}>
                                    <Container maxWidth="lg">
                                        <img src={VoidSvg} width="250" alt="void"/>
                                        <Typography variant="h6" className={classes.notFoundMsg}>
                                            Sem registro de pontuação
                                        </Typography>               
                                    </Container>
                                </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div role="tabpanel" hidden={tabValue !== 1} id={`full-width-tabpanel-${1}`}>
                        {tabValue === 1 && (
                            <div>
                                {redeemHistory.length > 0 ? (
                                <div>
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
                                    <Pagination
                                    className={classes.pagination}
                                    page={redeemPage}
                                    count={redeemLastPage} 
                                    color="secondary" 
                                    onChange={(e, page) => {
                                        fetchRedeem(page)
                                    }}/>
                                </div>
                                ) : (
                                <div className={classes.notFound}>
                                    <Container maxWidth="lg">
                                        <img src={VoidSvg} width="250" alt="void"/>
                                        <Typography variant="h6" className={classes.notFoundMsg}>
                                            Sem registro de pontuação
                                        </Typography>               
                                    </Container>
                                </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                )}
            </div>
            <Fab/>
        </div>
    )
}

export default History
