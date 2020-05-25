/**
 *
 * FloorDetail
 *
 */

import React, { memo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import './style.scss';
import { Row, Col } from 'reactstrap';
import Room from '../Room/Loadable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    alignItems: 'center',
  },
}));

function FloorDetail(props) {
  const { floors = [] } = props;

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="floor-detail-wrapper">
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appbar}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {floors.map((item, index) => (
              <Tab key={item._id} label={item.name} {...a11yProps(index)} />
            ))}
          </Tabs>
        </AppBar>
        {floors.map((item, index) => (
          <TabPanel key={item._id} value={value} index={index}>
            <div className="room-list">
              <Row>
                {item.rooms &&
                  item.rooms.map((item, index) => (
                    <Col xs={6} key={index}>
                      <Room item={item} status={props.status} />
                    </Col>
                  ))}
              </Row>
            </div>
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

FloorDetail.propTypes = {};

export default memo(FloorDetail);