var infoOrderState = {

	questions: [
             [  {id: 0,
                line: 'APN',
                input: true,
                show: false, 
                target: "",
                popover: 'This is printed on the letter you should have received in the mail. \
                For most people, this is the same as your property\'s Accessor\'s Parcel Number'
                }, 
                {id: 1,
                line: 'password', 
                input: true,
                show: false,
                target: "",
                popover: 'This is also included in your letter. Capitalization does matter.'
                }
            ],
            
            [   {id:0,
                line: 'Is this parcel connected to a water source?',
                input: true,
                target:"",
                show: false,
                popover: 'Examples of water sources include water companies that you pay monthly, a river or\
                 stream, wells, springs, or even a neighbor\'s pond. Rain is not considered a water source.',
                selection: ['Yes', 'No']
                }
            ],
            [   {id:0,
                line: 'How many sources supply water to this parcel?',
                input: true,
                target: "",
                show: false,
                popover: 'Examples of water sources include water companies, rivers or streams, \
                wells, springs, ponds...'
                }
            ],
             [   {id:0,
                line: 'Let\s talk about this water source. Is it groundwater (i.e. from a well), \
                a water supplier (e.g. you pay a water company), surface water (i.e. from a river or stream), or \
                are you a water supplier yourself?',
                dropdown: ["Groundwater", "Water Supplier", "Surface Water", "Contract"],
                target: "",
                show: false,
                popover: 'Select the type of water source from the drop-down list. A spring \
                is usually either a surface diversion or a well, depending on whether the \
                water comes all the way to the surface'
                }
            ],
            [   {id:0,
                line: 'You reported that this property is served by groundwater. \
                Please describe the details of your well',
                input: true,
                target: "",
                show: false,
                popover: 'Please provide as much of the following information as you know'
                },
                {id:1,
                line: 'Please find the <a href="#"> coordinates </a> of the well\'s location',
                input: true,
                target: "",
                show: false,
                popover: ''
                },
                {id:2,
                line: 'In what year was the well dug?',
                input: true,
                target: "",
                show: false,
                required: false,
                popover: 'Enter the approximate year of construction'
                },
                {id:3,
                line: 'How many feet deep is the well?',
                input: true,
                target: "",
                show: false,
                required: false,
                popover: 'Enter the approximate depth, in feet, of your well'
                },
                {id:4,
                line: 'Who owned the property when the well was dug?',
                input: true,
                target: "",
                show: false,
                required: false,
                popover: 'Enter the approximate depth, in feet, of your well'
                }
            ],
            [   {id:0,
                line: 'You reported that this property is served by a water supplier. \
                Who is that water supplier?',
                dropdown: ["California Larkfield-American", "City of Sebastopol","myself", "a neighbor"],
                target: "",
                show: false,
                popover: 'Select the type of water source from the drop-down list. A spring \
                is usually either a surface diversion or a well, depending on whether the \
                water comes all the way to the surface'
                }
            ],
            [   {id:0,
                line: 'You reported that the water supplier is an individual. \
                Please describe as much as you know.',
                target: "",
                show: false,
                popover: 'If you don\'t know some details, that\'s ok.'
                },
                {id:01,
                line: 'What is the individual water supplier\'s name?',
                input: true,
                target: "",
                show: false,
                popover: 'We will look for this person\'s record in our system'
                },
                {id:2,
                line: 'What is the Accessor\'s Parcel Number of the parcel that supplies your water?',
                target: "",
                input: true,
                show: false,
                popover: 'The APN is also the 12-digit ID Code used to log into this form'
                }
            ],
            [   {id:0,
                line: 'You reported that the property\'s water source is surface water. \
                Because surface water requires a water right, let\'s figure out if you already \
                have a water right or if you need to apply for one.',
                target: "",
                show: false,
                popover: 'The system of water rights is confusing, but it helps make sure that \
                high-priority uses like domestic use get enough water. We don\'t want anyone\
                to be thirsty!'
                },
                {id:01,
                line: 'Have you already applied for or claimed a water right?',
                selection: ['Yes', 'No'],
                target: "",
                show: false,
                popover: 'If you have a water right, you should have an application number \
                that you use to report your water use annually'
                }
            ],
            [   {id:0,
                line: 'You have already reported your use! Awesome! What\'s your application number?',
                input: true,
                target: "",
                show: false,
                popover: 'The application number usually starts with a letter and looks like \
                A111111 or S111111, for example'
                }
            ],
            [   {id:0,
                line: 'No worries if you haven\'t been through this yet. Is your parcel adjacent \
                to the river or stream from which it takes water?',
                selection: ['Yes', 'No'],
                target: "",
                show: false,
                popover: 'Adjacent as in the property touches the stream.'
                }
            ],
            [   {id:0,
                line: 'It looks like you have a riparian water right. To claim this right, you need \
                to file a statement of use.',
                selection: ['File statement now', 'Understood. Let\'s finish my other sources before I file this statement', 
                'This source is a spring that would never run off my property'],
                target: "",
                show: false,
                popover: 'Filing the statement of use is free and is required if you are using \
                surface water from an adjacent stream. Claiming this water right will protect your \
                water source from over-allocation.'
                }
            ],
            [   {id:0,
                line: 'If you\'re using water from a stream that doesn\'t touch your property, \
                you need to apply for a water right.',
                selection: ['File statement now', 'Understood. Let\'s finish my other sources before I file this statement',
                'But this is only for a small, domestic property'],
                target: "",
                show: false,
                popover: 'If you have questions, which you probably do, please call the \
                Division of Water Rights Help Line at (916) 341-5300'
                }
            ],
        ],
		counter: 0
};

module.exports = infoOrderState;
