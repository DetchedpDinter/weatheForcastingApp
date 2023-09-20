import React from 'react';
import {
    Button,
    Grid,
    TextField,
    Box,
    SvgIcon,
    Autocomplete,
} from '@mui/material/';
import axios from 'axios';
import { Link, Typography } from '@material-ui/core';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AirIcon from '@mui/icons-material/Air';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactComponent as IconNoData } from './icon/noData.svg';

const SearchBar = function (props) {
    return (
        <Grid
            item
            xl={12}
            container
            direction="row"
            justifyContent="center"
        >
            <Box display={'flex'} alignItems={'center'}>
                <Link
                    href="https://github.com/DetchedpDinter"
                    target="_blank"
                    underline="none"
                    sx={{ display: 'flex' }}
                >
                    <GitHubIcon
                        fontSize="large"
                        sx={{
                            color: 'black',
                            '&:hover': { color: '#2d95bd' },
                        }}
                    />
                </Link>
                <Autocomplete
                    options={props.options}
                    sx={{ width: 600 }}
                    autoComplete
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            onChange={props.onChange}
                            label="Search"
                        />
                    )}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.onClick}
                >
                    submit
                </Button>
            </Box>
        </Grid>
    );
};

const CurrentWeather = function (props) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Grid
                item
                xs={12}
                xl={12}
                alignItems="center"
                style={{
                    borderBottom: 'dotted',
                }}
            >
                <center>
                    <h3>Current Weather</h3>
                </center>
            </Grid>
            <Grid item justifyContent="center" alignItems="center">
                <Box>
                    <Typography>
                        {props.name},{props.country}
                    </Typography>
                </Box>
            </Grid>
            <Grid item justifyContent="center">
                <Box>
                    <Typography>
                        {props.temprature}
                        &nbsp;C&deg;
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box
                    component="img"
                    sx={{
                        width: {
                            xs: '50px',
                            sm: '55px',
                            md: '70px',
                        },
                        height: 'auto',
                    }}
                    alt="weather"
                    src={props.srcIconMethod(props.srcIcon)}
                />
            </Grid>
        </Grid>
    );
};

const AirCondition = function (props) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Grid
                item
                xl={12}
                xs={12}
                md={12}
                style={{
                    borderBottom: 'dotted',
                    marginBottom: '1em',
                }}
            >
                <center>
                    <h3>AIR CONDITION</h3>
                </center>
            </Grid>
            <Grid item direction={'column'}>
                <Grid
                    item
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <span>Feels Like</span>
                    <ThermostatIcon />
                </Grid>
                <Grid item>
                    <center>
                        {props.feels_like}
                        &nbsp;C&deg;
                    </center>
                </Grid>
            </Grid>
            <Grid item direction={'column'}>
                <Grid
                    item
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    Clouds&nbsp;
                    <FilterDramaIcon />
                </Grid>
                <Grid item>
                    <center>{props.cloud}%</center>
                </Grid>
            </Grid>
            <Grid item direction={'column'}>
                <Grid
                    item
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    Humidity
                    <InvertColorsIcon />
                </Grid>
                <Grid item>
                    <center>{props.humidity}%</center>
                </Grid>
            </Grid>
            <Grid item direction={'column'}>
                <Grid
                    item
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    Wind
                    <AirIcon />
                </Grid>
                <Grid item>
                    <center>{props.wind}&nbsp;m/s</center>
                </Grid>
            </Grid>
        </Grid>
    );
};

const HourlyData = function (props) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems={'center'}
            spacing={'1em'}
        >
            <Grid
                item
                xl={12}
                xs={12}
                md={12}
                style={{
                    paddingTop: '2rem',
                    borderBottom: 'dotted',
                    marginBottom: '1em',
                }}
            >
                <center>
                    <h3>HOURLY FORCAST</h3>
                </center>
            </Grid>
            {props.hourlyData.map((i) => {
                if (props.hourlyData[0].dateNum === i.dateNum) {
                    return (
                        <Grid
                            item
                            xs={4}
                            sm={2}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            sx={{
                                marginBottom: {
                                    xs: '1rem',
                                    sm: '0',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    padding: '0',
                                    width: '100%',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: '400',
                                        fontSize: {
                                            xs: '10px',
                                            sm: '12px',
                                        },
                                        color: 'rgba(255, 255, 255, .7)',
                                        lineHeight: 1,
                                        padding: '4px',
                                        fontFamily: 'Poppins',
                                    }}
                                >
                                    {i.time}:00
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '4px',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        sx={{
                                            width: {
                                                xs: '36px',
                                                sm: '42px',
                                            },
                                            height: 'auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                            margin: '0 auto',
                                        }}
                                        alt="weather"
                                        src={props.srcIconMethod(
                                            i.weather.icon,
                                        )}
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: {
                                            xs: '12px',
                                            sm: '14px',
                                        },
                                        marginBottom: {
                                            xs: '8px',
                                            md: '0',
                                        },
                                    }}
                                >
                                    {i.main.temp}
                                    &nbsp;&deg;C
                                </Typography>
                            </Box>
                        </Grid>
                    );
                }
            })}
        </Grid>
    );
};

const WeeklyForcast = (props) => {
    return (
        <Grid
            xs={8}
            sm={8}
            md={4}
            xl={4}
            item
            container
            direction="column"
            sx={{ paddingLeft: '1em' }}
            gap="4px"
        >
            <Grid
                item
                xl={12}
                xs={12}
                md={12}
                style={{
                    borderBottom: 'dotted',
                }}
            >
                <center>
                    <h3>WEEKLY FORCAST</h3>
                </center>
            </Grid>
            {props.weeklyData(props.hourlyData).map((i) => {
                return (
                    <Grid
                        item
                        display="flex"
                        alignItems="center"
                        sx={{
                            padding: '2px 0 5px',
                            borderLeft: 1,
                            borderBottom: 1,
                            borderRight: 1,
                            borderRadius: '16px',
                        }}
                    >
                        <Grid
                            container
                            display={'flex'}
                            direction={'column'}
                            alignItems={'flex-start'}
                            sx={{
                                paddingLeft: {
                                    xs: '12px',
                                    sm: '20px',
                                    md: '32px',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    height: '31px',
                                    alignItems: 'center',
                                    display: 'flex',
                                }}
                            >
                                {i.dayName}
                            </Typography>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                sx={{
                                    height: '31px',
                                }}
                            >
                                <Box
                                    component="img"
                                    sx={{
                                        width: {
                                            xs: '24px',
                                            sm: '28px',
                                            md: '31px',
                                        },
                                        height: 'auto',
                                        marginRight: '4px',
                                    }}
                                    alt="weather"
                                    src={props.srcIconMethod(
                                        i.weather.icon,
                                    )}
                                />
                                <Typography
                                    sx={{
                                        fontSize: {
                                            lineHeight: 1,
                                            xs: '12px',
                                            md: '14px',
                                        },
                                        lineHeight: 1,
                                    }}
                                >
                                    {i.weather.description}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            container
                            item
                            display="flex"
                            direction={'column'}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Grid
                                item
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <ThermostatIcon />
                                {i.main.temp}
                                &nbsp;C&deg;
                            </Grid>
                            <Grid
                                item
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <AirIcon />
                                {i.wind.speed}
                                &nbsp;m/s
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            alignItems={'center'}
                            direction={'column'}
                            display={'flex'}
                            justifyContent={'center'}
                        >
                            <Grid
                                item
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <FilterDramaIcon />
                                &nbsp;
                                {i.wind.speed}
                                &nbsp;m/s
                            </Grid>
                            <Grid
                                item
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <InvertColorsIcon />
                                &nbsp;
                                {i.main.humidity}
                                &nbsp;%
                            </Grid>
                        </Grid>
                    </Grid>
                );
            })}
        </Grid>
    );
};

const CurrentForcast = (props) => {
    return (
        <Grid xs={8} md={4} xl={4} item container direction="column">
            <CurrentWeather
                name={props.name}
                country={props.country}
                temprature={props.temprature}
                srcIcon={props.srcIcon}
                srcIconMethod={props.srcIconMethod}
            />
            <AirCondition
                feels_like={props.feels_like}
                cloud={props.cloud}
                wind={props.wind}
                humidity={props.humidity}
            />
            <HourlyData
                hourlyData={props.hourlyData}
                srcIconMethod={props.srcIconMethod}
            />
        </Grid>
    );
};

class App extends React.Component {
    state = {
        isSearched: false,
        options: [],
        name: null,
        country: null,
        temp: '',
        result: null,
        lat: null,
        lon: null,
        error: null,
        cloud: null,
        feels_like: null,
        temprature: null,
        humidity: null,
        srcIcon: null,
        wind: null,
        hourlyData: [],
    };
    onSearch = (e) => {
        this.setState({ temp: e.target.value }, () =>
            axios(
                `http://api.openweathermap.org/geo/1.0/direct?q=${this.state.temp}&appid=3294bea8b726314ddf3f0ddbe30b52a0`,
            )
                .then((result) => this.setOptions(result.data))
                .catch((error) => this.setState({ error })),
        );
    };
    setOptions = (res) => {
        this.setState({
            options: [`${res[0].name},${res[0].country}`],
            lat: res[0].lat,
            lon: res[0].lon,
        });
    };
    currentWeather = () => {
        axios(
            ` https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=3294bea8b726314ddf3f0ddbe30b52a0`,
        )
            .then((result) => this.setCurrentWeatherData(result.data))
            .catch((error) => console.log({ error }));
    };
    setCurrentWeatherData = (res) => {
        this.setState(
            {
                isSearched: true,
                cloud: res.clouds.all,
                feels_like: res.main.feels_like,
                humidity: res.main.humidity,
                temprature: res.main.temp,
                name: res.name,
                country: res.sys.country,
                timezone: res.timezone,
                srcIcon: res.weather[0].icon,
                wind: res.wind.speed,
            },
            () =>
                axios(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=3294bea8b726314ddf3f0ddbe30b52a0`,
                )
                    .then((result) =>
                        this.addHourlyTime(result.data.list),
                    )
                    .catch((error) => console.log({ error })),
        );
    };
    addHourlyTime = (res) => {
        const arr = [];
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];

        res.map((i) => {
            let objData;
            const date = i.dt_txt.split(' ')[0];
            const d = new Date(date);
            const dayName = days[d.getDay()];
            const dateNum = i.dt_txt.split(/[\s-]+/)[2];
            const time = i.dt_txt.split(/[\s-]+/)[3].split(':')[0];
            objData = Object.assign(
                {},
                {
                    dateNum,
                    dayName,
                    time,
                    main: {
                        temp: i.main.temp,
                        humidity: i.main.humidity,
                    },
                    weather: {
                        description: i.weather[0].description,
                        icon: i.weather[0].icon,
                        main: i.weather[0].main,
                    },
                    wind: { speed: i.wind.speed },

                    category: i.sys.pod,
                },
            );
            arr.push(objData);
        });
        this.setState({ hourlyData: arr });
    };
    srcIcon = (props) => {
        return `https://openweathermap.org/img/wn/${props}@2x.png`;
    };
    weeklyData = (data) => {
        const x = [];
        for (let i = 7; i <= data.length - 1; i += 8) {
            x.push(data[i]);
        }
        return x;
    };
    render() {
        return (
            <Grid
                container
                style={{ marginTop: '3em' }}
                justifyContent="center"
                alignItems="flex-start"
            >
                <SearchBar
                    options={this.state.options}
                    value={this.state.temp}
                    onChange={this.onSearch}
                    onClick={this.currentWeather}
                />
                {!this.state.isSearched ? (
                    <Box
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            width: '100%',
                            minHeight: '400px',
                        }}
                    >
                        <SvgIcon
                            component={IconNoData}
                            inheritViewBox
                            sx={{
                                fontSize: {
                                    xs: '100px',
                                    sm: '120px',
                                    md: '140px',
                                },
                            }}
                        />
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{
                                fontSize: { xs: '12px', sm: '14px' },
                                textAlign: 'center',
                                margin: '2rem 0',
                                maxWidth: '80%',
                                lineHeight: '22px',
                            }}
                        >
                            Search Weather Data using this App
                        </Typography>
                    </Box>
                ) : null}
                {this.state.isSearched ? (
                    <CurrentForcast
                        name={this.state.name}
                        country={this.state.country}
                        temprature={this.state.temprature}
                        srcIcon={this.state.srcIcon}
                        feels_like={this.state.feels_like}
                        clouds={this.state.cloud}
                        wind={this.state.wind}
                        humidity={this.state.humidity}
                        hourlyData={this.state.hourlyData}
                        srcIconMethod={this.srcIcon}
                    />
                ) : null}
                {this.state.isSearched ? (
                    <WeeklyForcast
                        hourlyData={this.state.hourlyData}
                        srcIconMethod={this.srcIcon}
                        weeklyData={this.weeklyData}
                    />
                ) : null}
            </Grid>
        );
    }
}

export default App;
