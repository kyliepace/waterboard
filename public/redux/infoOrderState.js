var infoOrderState = {

	questions: [
             {	number: 1,
                line: 'Please log in',
                input: ['APN/ID Code', 'Password'],
                disabled: true,
                popover: ['This is printed on the letter you should have received in the mail. \
	                For most people, this is the same as your property\'s Accessor\'s Parcel Number',
	                ,'This is also included in your letter. Capitalization does matter.'
	            ],
                changeCounter: [1]
             }, 
             {	number: 2,
                line: 'Is this parcel connected to a water source?',
                disabled: true,
                popover: 'Examples of water sources include water utilities, a river or\
                	stream, wells, springs, or even a neighbor\'s pond. Rain is not considered a water source for the purposes of this form.',
                selection: ['Yes', 'No'],
                selected: [false, false],
                changeCounter: [1, 100]
            },
            {	number: 3,
                line: 'How many sources supply water to this parcel?',
                input: ['Number'],
                popover: ['Examples of water sources include water companies, rivers or streams, \
                	wells, springs, ponds...'
               	],
                changeCounter: [1]
            },
            {	number: 4,
                line: 'Let\s talk about this water source. Is it groundwater (i.e. from a well), \
                a water supplier (e.g. you pay a water company), or surface water (i.e. from a river or stream)?',
                dropdown: ["Groundwater", "Water Supplier", "Surface Water", "Contract"],
              	disabled: true,
                popover: 'Select the type of water source from the drop-down list. A spring \
	                is usually either a surface diversion or a well, depending on whether the \
	                water comes all the way to the surface',
                changeCounter: [1, 2, 4]
            },
           	{	number: 5,
                line: 'You reported that this property is served by groundwater. \
                Please describe the details of your well.',
                input: [
                	'Please find the coordinates of the well\'s location',
                	'In what year was the well dug?',
                	'How many feet deep is the well?',
                	'Who owned the property when the well was dug?'
                ], 
                popover: [
	                'Please use the linked mapping tool to find the coordinates',
	                'Enter the approximate year of construction',
	                'Enter the approximate depth, in feet, of your well',
	                'Even just a last name will help us locate the record, if one exists.'
                ],
                link: "http://www.mapcoordinates.net/en",
                changeCounter: [8]
           },
              
            {	number: 6,
                line: 'You reported that this property is served by a water supplier. \
                Who is that water supplier?',
                dropdown: ["California Larkfield-American", "City of Sebastopol","myself", "a neighbor"],
               	selected: [false, false],
                popover: 'Select the type of water source from the drop-down list. A spring \
	                is usually either a surface diversion or a well, depending on whether the \
	                water comes all the way to the surface',
                changeCounter: [7,7,1,1] //go to water use or continue to more supplier info
            }
            ,
            {	number: 7,
                line: 'You reported that the water supplier is an individual. \
                Please describe as much as you know.',
                input: [
                	'What is the individual water supplier\'s name?',
                	'What is the Accessor\'s Parcel Number of the parcel that supplies your water?',
                ],
                popover: ['If you don\'t know some details, that\'s ok.',
                	'The APN is also the 12-digit ID Code used to log into this form'
                ],
                changeCounter: [6] //go to water use
             },
                
            {	number: 8,
                line: 'You reported that the property\'s water source is surface water. \
	                Because surface water requires a water right, let\'s figure out if you already \
	                have a water right or if you need to apply for one. Have you already \
	                applied for or claimed a water right?',
              
                selection: ['Yes', 'No'],
                selected: [false, false],
                disabled: true,
                popover: 'If you have a water right, you should have an application number \
                	that you use to report your water use annually',
                changeCounter: [1,2]
            },
               
           
            {	number: 9,
                line: 'You have already reported your use! Awesome! What\'s your application number?',
                input: ['App Id'],
                popover: ['The application number usually starts with a letter and looks like \
                	A111111 or S111111, for example'
                ],
                changeCounter: [100] //go to confirmation
            },
            {	number: 10,
                line: 'No worries if you haven\'t been through this yet. Is your parcel adjacent \
                to the river or stream from which it takes water?',
                selection: ['Yes', 'No'],
                selected: [false, false],
                disabled: true,
                popover: 'Adjacent as in the property touches the stream.',
                changeCounter: [1,2]
            },
            {	number: 11,
                line: 'It looks like you have a riparian water right. To claim this right, you need \
                	to file a statement of use.',
                selection: ['File statement now', 'Understood. Let\'s finish my other sources before I file this statement', 
                	'This source is a spring that would never run off my property'
                ],
                selected: [false, false],
                disabled: true,
                popover: ['Filing the statement of use is free and is required if you are using \
	                surface water from an adjacent stream. Claiming this water right will protect your \
	                water source from over-allocation.', '', 'Springs are only exempt from surface water requirements if the water \
	                does not flow off the property, even in the winter, even if you were diverting none of it.'
	            ],
                changeCounter: [200, -100 , 2] //confirm and go to water rights, go back to new source, or go to water use
            },
            {	number: 12,
                line: 'If you\'re using water from a stream that doesn\'t touch your property, \
                you need to apply for a water right.',
                selection: ['File statement now', 'Understood. Let\'s finish my other sources before I file this statement',
                'But this is only for a small, domestic property'],
                selected: [false, false],
                disabled: true,
                popover: 'If you have questions, which you probably do, please call the \
                	Division of Water Rights Help Line at (916) 341-5300',
                changeCounter: [200, -100, 200]
            },
            {	number: 13, 
            	line: 'How is water from this source used on the property?',
            	dropdown: ['Domestic', 'Agriculture', 'Stockwatering', 'Wildlife & Fish Preservation', 'Swimming'],
            	mult: true,
            	disabled: true,
            	popover: 'Domestic use means the water use is used for the home - drinking, bathing, personal gardening, etc. \
            		Agricultural use applies if you sell any food products raised on your property',
            	changeCounter: [2, 1, 1, 1, 1]
            },
            {	number: 14,
            	line: 'We\'re almost done! Let\s figure out your water use',
            	input: ['total use January 2015 (gallons)', 
            		'total use May 2015 (gallons)', 
            		'total use June 2015 (gallons)', 
            		'total use July 2015 (gallons)', 
            		'total use August 2015 (gallons)',
            		'total use September 2015 (gallons)',  
            		'total use October 2015 (gallons)', 
            		'total use November 2015 (gallons)', 
            	],
            	popover: ['Tally the number of gallons of water used from this water source in January of 2015. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water used from this water source in May of 2015.',
            	'Tally the number of gallons of water used from this water source in June of 2015. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water used from this water source in July of 2015. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water used from this water source in August of 2015. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water used from this water source in September of 2015. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water used from this water source in October of 2015. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.',
            	'Tally the number of gallons of water used from this water source in November of 2015. You may \
            	need to consult online calculator tools and measure the output of your source. Pro-tip: a bucket and a stopwatch \
            	are useful tools.'
            	],
            	changeCounter: [3]

            },
            {	number: 15,
            	line: 'If this water source\'s only use is domestic use, we can estimate the total use by the number of people who \
            	reside on the property',
            	disabled: true,
            	popover: 'Domestic use means the water is only used for normal life needs: e.g. drinking, showering, a personal garden',
            	selection: ['Sounds great!', 'Cool, but I can estimate the usage'],
            	selected: [false, false],
            	changeCounter: [1,2]
            },
            {	number: 16,
            	line: 'Please enter the number of people who were living on the property for each \
            	of the indicated months',
            	disabled: true,
            	input: ['January 2015', 
            		'May 2015', 
            		'June 2015', 
            		'July 2015', 
            		'August 2015',
            		'September 2015',  
            		'October 2015', 
            		'November 2015'
            	],
            	popover: ['If a person was only living there for 1/2 the month, add them as 0.5',
            	'We know they are a full person',
            	'but we will multiply the estimated water use per person per month by 0.5',
            	'The estimates were calculated from measured water use in part of Sonoma County',
            	'If you think you use less water but you don\'t know exactly how much, now\'s a good time to get your calculator out.',
            	'Thanks',
            	'Hope that wasn\'t so bad',
            	'Learn how much water you use each month!'
            	],
            	changeCounter: [1]
            },
            {	number: 17,
            	line: 'I confirm that the information I\'ve entered is true to the best of my knowledge',
            	disabled: true,
            	selection: ['Yes', 'Let me save the form and get back to it later'],
            	selected: [false, false],
            	popover: ['If you save the form, be sure to log back in soon.'],
            	changeCounter: [100, 1000]
            }
        ],
		counter: 0, //count the question index
		prevQuestion: [0],
		clicks: 0,
		sourceCounter: 0, //count which water source being answered for
		answers:{ 
			0:{
				0: []
			}
		} 
};

module.exports = infoOrderState;