const router = require('express').Router();
const {google} = require('googleapis');

const GOOGLE_CLIENT_ID = '1035784602329-ominopakcd5e4kqijcgt1bopsfg3ci13.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'http://localhost:3000'
)


const REFRESH_TOKEN =  (localStorage.getItem('ref_token'))

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create-tokens', async (req,res, next) =>{
  try {
    const { code } = req.body;
   
    const { tokens } = await oauth2Client.getToken(code);

    res.send(tokens);
  } catch (error) {
    next(error);
  }
})

router.post('/create-event', async (req, res, next) => {
  try {
    const {
      summary,
      description,
      location,
      startDateTime,
      endDateTime
    } = req.body;
    oauth2Client.setCredentials({ refresh_token : REFRESH_TOKEN });
    const calendar = google.calendar('v3')
    const response = await calendar.events.insert({       
      auth : oauth2Client,
      calendarId : 'primary',
      requestBody : {
      summary : summary,
      description : description,
      location : location,
      colorId : '7',
      start: {
        dateTime : new Date(startDateTime)
      },
      end: {
        dateTime : new Date(endDateTime)
      }      
      },
    })
    res.send(response);
  } catch (error) {
    next(error);
    
  }
})

module.exports = router;





// colors ID 
// 1 blue
// 2 green
// 3 purple
// 4 red
// 5 yellow
// 6 orange
// 7 turqoise
// 8 gray
// 9 bold blue
// 10 bold green
// 11 bold red

