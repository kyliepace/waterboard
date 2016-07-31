var infoOrderState = {

	questions: [
             {
                line: '',
                input: ['APN/Id Code', 'Password'],
                popover: ['This is printed on the letter you should have received in the mail. \
                For most people, this is the same as your property\'s Accessor\'s Parcel Number',
                ,'This is also included in your letter. Capitalization does matter.'],
                changeCounter: [1]
             },
          
            
             {
                line: 'Is this parcel connected to a water source?',
                answer: null,
                disabled: true,
                popover: 'Examples of water sources include water utilities, a river or\
                 stream, wells, springs, or even a neighbor\'s pond. Rain is not considered a water source for the purposes of this form.',
                selection: ['Yes', 'No'],
                selected: [false, false],
                changeCounter: [1, 100]
                }
            ,
               {
                line: 'How many sources supply water to this parcel?',
                input: ['Number'],
       			
                popover: ['Examples of water sources include water companies, rivers or streams, \
                wells, springs, ponds...'],
                changeCounter: [1]
                }
            ,
            {
                line: 'Let\s talk about this water source. Is it groundwater (i.e. from a well), \
                a water supplier (e.g. you pay a water company), surface water (i.e. from a river or stream), or \
                are you a water supplier yourself?',
                dropdown: ["Groundwater", "Water Supplier", "Surface Water", "Contract"],
              	selected: [false, false],
                popover: 'Select the type of water source from the drop-down list. A spring \
                is usually either a surface diversion or a well, depending on whether the \
                water comes all the way to the surface',
                changeCounter: [1, 2, 4]
            }
            ,
           {
                line: 'You reported that this property is served by groundwater. \
                Please describe the details of your well',
                input: [
                	'Please find the <a href="#"> coordinates </a> of the well\'s location',
                	'In what year was the well dug?',
                	'How many feet deep is the well?',
                	'Who owned the property when the well was dug?'
                ], 
                popover: ['Please provide as much of the following information as you know',
	                'Follow the link to use the mapping tool',
	                'Enter the approximate year of construction',
	                'Enter the approximate depth, in feet, of your well',
                ],
                changeCounter: [8]
           },
              
            {
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
            {
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
                
            {
                line: 'You reported that the property\'s water source is surface water. \
	                Because surface water requires a water right, let\'s figure out if you already \
	                have a water right or if you need to apply for one. </br> Have you already \
	                applied for or claimed a water right?',
              
                selection: ['Yes', 'No'],
                selected: [false, false],
                disabled: true,
                popover: 'If you have a water right, you should have an application number \
                that you use to report your water use annually',
                changeCounter: [1,2]
            },
               
           
            {
                line: 'You have already reported your use! Awesome! What\'s your application number?',
                input: ['App Id'],
                popover: ['The application number usually starts with a letter and looks like \
                A111111 or S111111, for example'],
                changeCounter: [100] //go to confirmation
            }
            ,
            {	
                line: 'No worries if you haven\'t been through this yet. Is your parcel adjacent \
                to the river or stream from which it takes water?',
                selection: ['Yes', 'No'],
                selected: [false, false],
                disabled: true,
                popover: 'Adjacent as in the property touches the stream.',
                changeCounter: [1,2]
            }
            ,
            {
                line: 'It looks like you have a riparian water right. To claim this right, you need \
                to file a statement of use.',
                selection: ['File statement now', 'Understood. Let\'s finish my other sources before I file this statement', 
                'This source is a spring that would never run off my property'],
                selected: [false, false],
                disabled: true,
                popover: ['Filing the statement of use is free and is required if you are using \
                surface water from an adjacent stream. Claiming this water right will protect your \
                water source from over-allocation.', '', 'Springs are only exempt from surface water requirements if the water \
                does not flow off the property, even in the winter, even if you were diverting none of it.'],
                changeCounter: [200, -100 , 2] //confirm and go to water rights, go back to new source, or go to water use
            }
            ,
            {	
                line: 'If you\'re using water from a stream that doesn\'t touch your property, \
                you need to apply for a water right.',
                selection: ['File statement now', 'Understood. Let\'s finish my other sources before I file this statement',
                'But this is only for a small, domestic property'],
                selected: [false, false],
                disabled: true,
                popover: 'If you have questions, which you probably do, please call the \
                Division of Water Rights Help Line at (916) 341-5300',
                changeCounter: [200, -100, 200]
            }
            ,
            {	
            	line: 'We\'re almost done! Let\s figure out your water use',
            	input: ['number of people each month']
            },
            {	
            	line: 'How is water from this source used on the property?',
            	dropdown: ['Domestic', 'Agriculture', 'Stockwatering', 'Wildlife & Fish Preservation', 'Swimming'],
            	answer: null,
            	mult: true,
            	popover: 'Domestic use means the water use is used for the home - drinking, bathing, personal gardening, etc. \
            	Agricultural use applies if you sell any food products raised on your property',
            	changeCounter: [1]
            }
        ],
		counter: 0,
};

module.exports = infoOrderState;