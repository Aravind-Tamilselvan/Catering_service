import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../../style/style.css';
import { appetizers,maincourse,dessert} from '../../../Data/data.js'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    className='panel'
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Define the Menu component outside of BasicTabs
function Appetizers() {
  return (
    <div className='menu'>
      {appetizers.map((item, index) => (
        <div className='content-wrapper' key={index}>
          <div className='image-wrapper'>
            <img className='menuimage' src={item.imageSrc} alt="image" />
          </div>
          <div className='content-container'>
            <div className='content1'>
            <h3>{item.title} </h3><span>{item.price}</span>
            
            </div><p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
function MainCourse() {
    return (
      <div className='menu'>
        {maincourse.map((item, index) => (
          <div className='content-wrapper' key={index}>
            <div className='image-wrapper'>
              <img className='menuimage' src={item.imageSrc} alt="image" />
            </div>
            <div className='content-container'>
            <div className='content1'>
              <h3>{item.title} </h3><span>{item.price}</span>
              
            </div><p>{item.description}</p>
          </div></div>
        ))}
      </div>
    );
  }
  function Dessert() {
    return (
      <div className='menu'>
        {dessert.map((item, index) => (
          <div className='content-wrapper' key={index}>
            <div className='image-wrapper'>
              <img className='menuimage' src={item.imageSrc} alt="image" />
            </div>
            <div className='content-container'>
            <div className='content1'>
              <h3>{item.title}</h3> <span>{item.price}</span>
              
            </div><p>{item.description}</p>
          </div></div>
        ))}
      </div>
    );
  }

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '75%', background: 'white' }}>
      <Box className='title' sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex' }}>
        <Tabs
  value={value}
  onChange={handleChange}
  aria-label="basic tabs example"
  className="tabs-header" // Add a class for styling
>
  <Tab
    label="Appetizers"
    {...a11yProps(0)}
    className="custom-tab" // Add a class for styling
  />
  <Tab
    label="Main Course"
    {...a11yProps(1)}
    className="custom-tab" // Add a class for styling
  />
  <Tab
    label="Dessert"
    {...a11yProps(2)}
    className="custom-tab" // Add a class for styling
  />
</Tabs>

      </Box>
      <CustomTabPanel value={value} index={0}>
        <Appetizers/> {/* Render the Menu component here */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MainCourse/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Dessert />
      </CustomTabPanel>
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
