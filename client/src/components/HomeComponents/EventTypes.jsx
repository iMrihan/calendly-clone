import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import Link from '@mui/material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useState, useEffect} from "react"
import axios from 'axios'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

//  console.log(data)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const BasicTabs =() =>{
  const [value, setValue] = React.useState(0);
  const token = localStorage.getItem('userToken') || null ;
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    getData();
  };
  const [data,setData] = useState([]);

  // useEffect(() => {
    
  //       getData();
  // },[])
  
  function getData() {
       axios.get("http://localhost:8080/events").then(({data}) =>{
         setData([...data]);
       })
    
  }

  return (
    <Box sx={{ width: '100%'}} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  sx={{ boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}>
          <Tab sx={{fontSize: '12px'}} label="Event Types" {...a11yProps(0)} style={{paddingLeft: '0px', paddingRight: '0px',marginRight: '15px'}}/>
          <Tab sx={{fontSize: '12px'}} label="Scheduled Events" {...a11yProps(1)} style={{paddingLeft: '0px', paddingRight: '0px',marginRight: '15px'}}/>
          <Tab sx={{fontSize: '12px'}} label="Workflows" {...a11yProps(2)} style={{paddingLeft: '0px'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{display:'flex',justifyContent: 'left', paddingTop:'0px'}}>
          <img src="https://img.icons8.com/small/20/000000/search--v1.png"/>
          <input type="text" placeholder="Filter" style={{border : 'none',outlineColor: 'white',paddingLeft:'8px',lineHeight: '5px'}}/>
         </Box>
         <Box  sx={{display: 'flex', paddingTop:'30px',justifyContent: 'space-between'}}>
         <Card sx={{marginTop:'10px',borderTop:'4px solid yellow'}} hover={true}>
              <CardContent >
                <Box sx={{display: 'flex',justifyContent: 'space-between',marginBottom: '10px',width:'200px'}}>
                   <CheckBoxOutlineBlankRoundedIcon style={{ color: "grey" }} />
                  <SettingsApplicationsRoundedIcon style={{ color: "blue" }} />
                </Box>
                <Typography variant="subtitle1" >15 Minute Meeting</Typography>
                <Typography variant="p" style={{ color: "grey", fontSize:'12px'}}>15 min, one-on-one</Typography>
                <br />
                <Link style={{ textDecoration: 'none', fontSize:'12px', cursor: 'pointer' }}>View Booking Page</Link>
                <br />
                <br />
                <Box sx={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                  <Typography variant="span">
                  <ContentCopyIcon sx={{width:'15px'}} /><Link style={{ textDecoration: 'none', fontSize:'12px', cursor: 'pointer' }}>Copy Link</Link>
                  </Typography>
                  <Button variant= "outlined" style={{ borderRadius: 50, width: '45px', fontSize: '10px', border: '1px solid' }}  >Share</Button>
                </Box>
              </CardContent>
           </Card>
           <Card sx={{marginTop:'10px',borderTop:'4px solid yellow'}}>
              <CardContent >
                <Box sx={{display: 'flex',justifyContent: 'space-between',marginBottom: '10px',width:'200px'}}>
                   <CheckBoxOutlineBlankRoundedIcon style={{ color: "grey" }} />
                  <SettingsApplicationsRoundedIcon style={{ color: "blue" }} />
                </Box>
                <Typography variant="subtitle1" >15 Minute Meeting</Typography>
                <Typography variant="p" style={{ color: "grey", fontSize:'12px'}}>15 min, one-on-one</Typography>
                <br />
                <Link style={{ textDecoration: 'none', fontSize:'12px', cursor: 'pointer' }}>View Booking Page</Link>
                <br />
                <br />
                <Box sx={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                  <Typography variant="span">
                  <ContentCopyIcon sx={{width:'15px'}} /><Link style={{ textDecoration: 'none', fontSize:'12px', cursor: 'pointer' }}>Copy Link</Link>
                  </Typography>
                  <Button variant= "outlined" style={{ borderRadius: 50, width: '45px', fontSize: '10px', border: '1px solid' }}  >Share</Button>
                </Box>
              </CardContent>
           </Card>
           <Card sx={{marginTop:'10px',borderTop:'4px solid yellow'}}>
              <CardContent >
                <Box sx={{display: 'flex',justifyContent: 'space-between',marginBottom: '10px',width:'200px'}}>
                   <CheckBoxOutlineBlankRoundedIcon style={{ color: "grey" }} />
                  <SettingsApplicationsRoundedIcon style={{ color: "blue" }} />
                </Box>
                <Typography variant="subtitle1" >15 Minute Meeting</Typography>
                <Typography variant="p" style={{ color: "grey", fontSize:'12px'}}>15 min, one-on-one</Typography>
                <br />
                <Link style={{ textDecoration: 'none', fontSize:'12px', cursor: 'pointer' }}>View Booking Page</Link>
                <br />
                <br />
                <Box sx={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                  <Typography variant="span">
                  <ContentCopyIcon sx={{width:'15px'}} /><Link style={{ textDecoration: 'none', fontSize:'12px', cursor: 'pointer' }}>Copy Link</Link>
                  </Typography>
                  <Button variant= "outlined" style={{ borderRadius: 50, width: '45px', fontSize: '10px', border: '1px solid' }}  >Share</Button>
                </Box>
              </CardContent>
           </Card>
         </Box>
     

      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{ display:'grid',gridTemplateColumns: 'repeat(3,25%)', gridGap: '10px'}}>
            {data.map(({summary,description,location,startDateTime,endDateTime,id}) =>{
              return (
                <div key={id}>
                 <p>{summary}</p> 
                 <p>{description}</p> 
                 <p>{location}</p> 
                 <p>{startDateTime}</p> 
                 <p>{endDateTime}</p> 
                </div>
              )
            })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Workflows
      </TabPanel>
    </Box>
  );
}
