import React from 'react';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import BigInfo from './BigInfo';
import Customers from './Customers';
import CalendlyFree from './CalendlyFree';
import CustomersCard from './CustomersCard';

const Teams = () => {
	return (
		<>
			<BigInfo />
			<LeftImage
				imgLink="https://images.ctfassets.net/k0lk9kiuza3o/577P5zlqHsW5qhrEjxiPVC/d827d3e4255e9052c4f0bbff7c83e0a7/Companies01_BG_a.svg"
				pTag="AUTOMATED ASSIGNMENT"
				heading="Control how your team gets booked"
				desc="With Calendly, you can offer sessions that are a few minutes or a
						few hours, for one invitee or a group. Automated round-robin,
						first-available, or geography-based assignments let you easily divvy
						up meetings in any way that works for your team members."
			/>
			<RightImage
				imgLink="https://images.ctfassets.net/k0lk9kiuza3o/1bAP9k5tYJTo85LdpqT58g/d19dc0224ce568507502453ac069c952/Companies02_BG_a.svg"
				pTag="PROCESS IMPROVEMENTS"
				heading="Standardize your scheduling process"
				desc="Templates let admins create standardized types 
                of meetings for team members, streamlining the process 
                while adding uniformity and control. Template changes 
                like shifting all in-person meetings to web calls – 
                can be pushed out in bulk."
			/>
			<LeftImage
				imgLink="https://images.ctfassets.net/k0lk9kiuza3o/577P5zlqHsW5qhrEjxiPVC/d827d3e4255e9052c4f0bbff7c83e0a7/Companies01_BG_a.svg"
				pTag="Managements"
				heading="Manage customer relations like a pro"
				desc="Calendly integrates with your team’s favorite tools 
                to automate and optimize more aspects of your client relationships, 
                and its plug-and-play ease is one less headache in your day."
			/>
			<RightImage
				imgLink="https://images.ctfassets.net/k0lk9kiuza3o/1bAP9k5tYJTo85LdpqT58g/d19dc0224ce568507502453ac069c952/Companies02_BG_a.svg"
				pTag="TEAM VISIBILITY"
				heading="Get a bird's-eye look at team activity"
				desc="By understanding how your team works, you can help them 
                work better and smarter. At the team level, know the types of 
                meetings that are happening and what they're for. At the individual 
                level, know who's maxed out and who can pick up the slack."
			/>
			<LeftImage
				imgLink="https://images.ctfassets.net/k0lk9kiuza3o/577P5zlqHsW5qhrEjxiPVC/d827d3e4255e9052c4f0bbff7c83e0a7/Companies01_BG_a.svg"
				pTag="A PERSONAL APPROACH"
				heading="Strengthen relationships outside the meeting"
				desc="Create personalized reminders, check-ins, and follow-ups 
                for invitees that Calendly sends automatically. Start building 
                connections with people on your schedule before you meet, and 
                keep them going afterward."
			/>
			{/* <div className="infoButtons" style={{ width: '100%' }}></div> */}
			<Customers></Customers>
			<CalendlyFree />
		</>
	);
};
export default Teams;

/* primary color - #006BFF sky blue
                        secondary text color - #1D344B gray
                        p tag text color - #BFC9D2
                 */