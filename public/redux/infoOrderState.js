var infoOrderState = {
    moreSources: true,
	questions: [
             {	number: 0,
                line: 'Please log in',
                labels: ['APN/ID Code', 'Password'],
                input: ['#', '#'],
                disabled: true,
                validate: ['number', 'number'],
                length: [1,1],
                error: [],
                popover: '1',
                next: 1
             	
             }, 
             {  number: 1,
                //the log-in page will be shown when counter === 1
                selected: [false], 
                disabled: false,
                next: 2
                
             },
             {	number: 2,
                line: 'Is this parcel connected to a water source?',
                disabled: true,
                popover: 'Examples of water sources include water utilities, a river or\
                	stream, wells, springs, or even a neighbor\'s pond. Rain is not considered a water source for the purposes of this form.',
                selection: ['Yes', 'No'],
                selected: [false, false],
                changeCounter: [3, 100]
             
            },
            {	number: 3,
                line: 'How many sources supply water to this parcel?',
                input: ['Number'],
                disabled: true,
                validate: ['number'],
                error: [],
                popover: 'Examples of water sources include water companies, rivers or streams, \
                	wells, springs, ponds...',
                next: 4
         
            },
            {	number: 4,
                //changeSourceCounter: true,
                line: 'Let\s take this one water source at a time. Is it groundwater (i.e. from a well), \
                a water supplier (e.g. you pay a water company), or surface water (i.e. from a river or stream)?',
                selection: ["Groundwater", "Water Supplier", "Surface Water", "Contract"],
                selected: [false, false, false, false],
              	disabled: true,
                popover: 'Select the type of water source from the drop-down list. A spring \
	                is usually either a surface diversion or a well, depending on whether the \
	                water comes all the way to the surface',
                changeCounter: [5, 6, 8, 6]
            },
           	{	number: 5,
                line: 'You reported that this property is served by groundwater. \
                Please describe the details of your well.',
                labels: [
                	'Please find the coordinates of the well\'s location',
                	'In what year was the well dug?',
                	'How many feet deep is the well?',
                	'Who owned the property when the well was dug?'
                ], 
                input: ['##.#####, -###.#####','YYYY', 'feet', 'name'],
                disabled: true,
                length: [8, 10, 4],
                validate: ['number', 'number', 'number', 'string'],
                error: ["","","",""],
                popover:  'Please use the linked mapping tool to find the coordinates, and enter well information to the extent of your knowledge',
                link: ["http://www.mapcoordinates.net/en"],
                next: 13//go to water use
           },
              
            {	number: 6,
                line: 'You reported that this property is served by a water supplier. \
                Who is that water supplier?',
                selection: ["California Larkfield-American", "City of Sebastopol","myself", "a neighbor"],
               	selected: [false, false],
                disabled: true,
                popover: 'Select the name of your water supplier. If your water comes from another property that you own, select self. If your water comes from someone else\'s property, select neighbor',
                changeCounter: [100,100,7,7] //go to confirmation or continue to more supplier info
            }
            ,
            {	number: 7,
                line: 'You reported that the water supplier is an individual. \
                Please describe as much as you know.',
                labels: [
                	'What is the individual water supplier\'s name?',
                	'What is the Accessor\'s Parcel Number of the parcel that supplies your water?',
                ],
                input: ['name', 'APN/ID Code'],
                disabled: true,
                validate: ['string', 'number'],
                error: [],
                popover: 'If you don\'t know some details, that\'s ok.',
                next: 13 //go to water use
             },
                
            {	number: 8,
                line: 'Because surface water requires a water right, let\'s figure out if you already \
	                have a water right. Have you already \
	                applied for or claimed a water right?',
              
                selection: ['Yes', 'No'],
                selected: [false, false],
                disabled: true,
                popover: 'If you have a water right, you should have an application number \
                	that you use to report your water use annually',
                changeCounter: [9,10]
            },
               
           
            {	number: 9,
                line: 'What\'s your application number?',
                input: ['App Id'],
                length: [6],
                disabled: true,
                validate: ['string'],
                error: [],
                popover: 'The application number usually starts with a letter and looks like \
                	A111111 or S111111, for example',
                next: 100 //go to confirmation
            },
            {	number: 10,
                line: 'No worries if you haven\'t been through this yet. Is your parcel adjacent \
                to the river or stream from which it takes water?',
                selection: ['Yes', 'No'],
                selected: [false, false],
                disabled: true,
                popover: 'Adjacent as in the property touches the stream.',
                changeCounter: [11,12]
            },
            {	number: 11,
                line: 'It looks like you have a riparian water right. To claim this right, you need \
                	to file a statement of use.',
                selection: ['I will do that', 
                	'This source is a spring that would never run off my property'
                ],
                selected: [false, false],
                disabled: true,
                popover: 'Filing the statement of use is free and is required if you are using \
	                surface water from an adjacent stream. Springs are only exempt from surface water requirements if the water \
	                does not flow off the property, even in the winter, even if you were diverting none of it.',
                changeCounter: [100, 100] //confirm and go to water rights, go back to new source, or go to water use
            },
            {	number: 12,
                line: 'If you\'re using water from a stream that doesn\'t touch your property, \
                you likely need to apply for a water right.',
                selection: ['I will do that',
                'But this is only for a small, domestic property'],
                selected: [false, false],
                disabled: true,
                popover: 'If you have questions, which you probably do, please call the \
                	Division of Water Rights Help Line at (916) 341-5300',
                changeCounter: [1, 1]
            },
            {	number: 13, 
            	line: 'How is water from this source used on the property?',
            	selection: ['Domestic', 'Agriculture', 'Stockwatering', 'Wildlife & Fish Preservation', 'Beer Brewing'],
            	mult: true,
                selected: [false, false, false, false, false],
            	disabled: true,
            	popover: 'Domestic use means the water use is used for the home - drinking, bathing, personal gardening, etc. \
            		Agricultural use applies if you sell any food products raised on your property',
            	changeCounter: [15, 14, 14, 14, 14]
            },
            {	number: 14,
            	line: 'We\'re almost done! Let\'s figure out your water use',
            	labels: ['total use January 2015 (gallons)', 
            		'total use May 2015 (gallons)', 
            		'total use June 2015 (gallons)', 
            		'total use July 2015 (gallons)', 
            		'total use August 2015 (gallons)',
            		'total use September 2015 (gallons)',  
            		'total use October 2015 (gallons)', 
            		'total use November 2015 (gallons)', 
            	],
                input: ['gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons', 'gallons'],
                disabled: true,
                validate: ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'],
                error: [],
            	popover: 'Tally the number of gallons of water used from this water source for each indicated month of 2015. You may \
            	may need to measure the output from your well using a bucket and stopwatch, or consult online tools to estimate volume from lifestyle',
            	next: 100

            },
            {	number: 15,
            	line: 'We can estimate the total use by the number of people who \
            	reside on the property',
            	disabled: true,
            	popover: 'Domestic use means the water is only used for normal life needs: e.g. drinking, showering, a personal garden',
            	selection: ['Sounds great!', 'That\'s ok, I can estimate the usage another way'],
            	selected: [false, false],
            	changeCounter: [16,14]
            },
            {	number: 16,
            	line: 'Please enter the number of people who were living on the property for each \
            	of the indicated months',
            	disabled: true,
            	labels: ['January 2015', 
            		'May 2015', 
            		'June 2015', 
            		'July 2015', 
            		'August 2015',
            		'September 2015',  
            		'October 2015', 
            		'November 2015'
            	],
                input: ['number', 'number', 'number', 'number', 'number', 'number', 'number'],
                disabled: true,
                validate: ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'],
                error: [],
            	popover: 'If a person was only living there for 1/2 the month, add them as 0.5',
            	next: 100
            }
        ],
		sourceCounter: 0, //count which water source being answered for
		answers:{ 
			0:{
				0: []
			}
		} 
};

module.exports = infoOrderState;
