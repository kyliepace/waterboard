var waterRightsState = {
  questions: [
   { number: 0,
      labels: ['name of primary owner', 'phone number', 'email address'],
      input: ['name', '###-###-####', 'email'],
      next: 1
    },
    { number: 1,
      line: 'What is the address of the property where the diversion is located?',
      labels: ['Street', 'Street 2','City', 'County', 'Zip'],
      input: ['', 'optional', 'city', 'county', 'zip'],
      disabled: true,
      next: 2
    },
    { number: 2,
      selection: ['Apply for an appropriative right', 'Claim a riparian right'],
      selected: [false, false],
      disabled: true,
      popover: 'If you are using water from a stream that touches your property, you are probably claiming a riparian right.',
      changeCounter: [3, 9] //continue with appropriative questions or skip to water use 
    },
    
    { number: 3,
      line: 'Does your project include storage of water in a pond?',
      selection: ['yes', 'no'],
      selected: [false, false],
      disabled: true,
      changeCounter: [4,5]
    },
    { number: 4,
      line: 'Is this pond on-stream?',
      popover: 'Is the stream dammed or altered such that the stored water is part of the stream?',
      selection: ['yes', 'no'],
      selected: [false, false],
      disabled: true,
      changeCounter: [5, 5]
    },
    { number: 5,
      line: 'Provide a detailed description of the project.',
      popover: ' including but not limited to method of water diversion, type of construction activity, area to be graded or excavated, \
      and a general overview of how you will operate the project.',
      attachDoc: true,
      disabled: true,
      next: 6
    },
    { number: 6,
      line: 'What is the timeline of this project's construction?',
      labels: ['Year to begin construction', 'Year to complete construction'],
      inputs: ['YYYY', 'YYYY'],
      popover: ['In what year will the construction begin? Enter past year if already begun.', 'In what year is construction expected to be complete?'],
      disabled: true,
      next: 7
    },
    { number: 7,
      line: 'When will you begin and stop diverting water each year?',
      labels: ['Beginning date', 'Ending date'],
      inputs: ['MM/DD', 'MM/DD'],
      popover: ['Enter the month and day you expect to begin diverting water each year from this project',
        'Enter the month and day you expect to cease diverting water each year from this project'],
      next: 8
    },
    { number: 8,
      line: 'Attach a topographic or aerial map that shows the point of diversion and the place of use for this project's water',
      attachDoc: true,
      disabled: true,
      next: 10
    },
    { number: 9,
      line: 'Does your project include storage of water in a pond?',
      selection: ['yes', 'no'],
      selected: [false, false],
      disabled: true,
      changeCounter: [400,12] //if includes storage, alert that the riparian right does not apply and redirect them to /waterRights/0
    },
    {	number: 10,
            	line: 'How much water will you divert and immediately use?',
            	labels: ['total use January (gallons)', 
            		'direct use May (gallons)', 
            		'direct use June (gallons)', 
            		'direct use July (gallons)', 
            		'direct use August (gallons)',
            		'direct use September (gallons)',  
            		'direct use October (gallons)', 
            		'direct use November (gallons)', 
            	],
                input: ['gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons'],
                disabled: true,
                validate: ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'],
                error: [],
            	popover: ['Tally the number of gallons of water diverted and immediately used in January. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in May.',
            	'Tally the number of gallons of water diverted and immediately used in June. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in July. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in August. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in September. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in October. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in November. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.'
            	],
            	next: 11
    },
    { number: 11,
            	line: 'How much water will you divert into storage?',
            	labels: ['diversion to storage January (gallons)', 
            		'diversion to storage May (gallons)', 
            		'diversion to storage June (gallons)', 
            		'diversion to storage July (gallons)', 
            		'diversion to storage August (gallons)',
            		'diversion to storage September (gallons)',  
            		'diversion to storage October (gallons)', 
            		'diversion to storage November (gallons)', 
            	],
                input: ['gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons'],
                disabled: true,
                validate: ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'],
                error: [],
            	popover: ['Tally the number of gallons of water diverted into storage in January. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted into storage in May.',
            	'Tally the number of gallons of water diverted into storage in June. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted into storage in July5. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted into storage in August. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted into storage in September. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted into storage in October. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted into storage in November. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.'
            	],
      next: 13
    },
    //use for riparian claim
    {	number: 12,
            	line: 'How much riparian water do you expect to use in each month?',
            	labels: ['total use January (gallons)', 
            		'direct use May (gallons)', 
            		'direct use June (gallons)', 
            		'direct use July (gallons)', 
            		'direct use August (gallons)',
            		'direct use September (gallons)',  
            		'direct use October (gallons)', 
            		'direct use November (gallons)', 
            	],
                input: ['gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons'],
                disabled: true,
                validate: ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'],
                error: [],
            	popover: ['Tally the number of gallons of water diverted and immediately used in January. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in May.',
            	'Tally the number of gallons of water diverted and immediately used in June. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in July. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in August. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in September. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in October. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water diverted and immediately used in November. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.'
            	],
            	next: 13
    },
    {	number: 13, 
      line: 'How will this water be used?',
      selection: ['Domestic', 'Agriculture', 'Stockwatering', 'Wildlife & Fish Preservation', 'Beer Brewing'],
      selected: [false, false, false, false, false],
      disabled: true,
      popover: 'Domestic use means the water use is used for the home - drinking, bathing, personal gardening, etc. \
            	Agricultural use applies if you sell any food products raised on your property',
      changeCounter: [14, 15, 16, 100, 100]
    },
    { number: 14,
      line: 'Please describe the domestic usage',
      labels: ['number of people served', 'area of irrigated personal garden and lawn (square feet)'],
      input: ['number', 'square feet'],
      disabled: true,
      popover: ['How many people are living on the property using this water for domestic needs?', 'What is the surface area of all the lawns and gardens receiving this water?'],
      next: 100
    },
    { number: 15,
      line: 'Please describe the agricultural usage',
      labels: ['crop', 'acres', 'method of irrigation', 'water use (gallons/year'],
      input: ['crop', 'acres', 'method', 'gallons/year'],
      validation: ['string', 'number', 'string', 'number'],
      error: [],
      disabled: true,
      popover: ['What crop are you irrigating?', 'How many acres are being irrigated?', 'What method of irrigation will be used?', 
      'What is the total estimated water use (in gallons per year) for this crop?'],
      next: 100
    },
    { number: 16,
      line: "Please describe the stockwatering demands",
      labels: ['Kind of stock', 'Number of stock'],
      input: ['', 'number'],
      validation: ['string', 'number'],
      error: [],
      disabled: true,
      popover: ['What kind of animal will be using this water?', 'How many animals will be using this water?'],
      next: 100 //go to confirmation
    }
    
  ],
};

module.exports = waterRightsState;
