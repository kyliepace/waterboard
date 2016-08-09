var infoOrderFAQ = {
	counter: 0,
	next: 1,
	questions:[
		{	number: 0,
			line: 'The Info Order requires individuals to provide \
			information related to their diversion and use of water.',
			selection: ['Does the Info Order apply to me?', 'How can it require people to do this?'],
			changeCounter: [1,5]
		},
		{	number: 1,
			line: 'If your property is within or touches the boundary of the selected watersheds, you must complete the Info Order form.',
			link: 'http://www.waterboards.ca.gov/waterrights/water_issues/programs/drought/docs/russian_river/',
			selection: ['My property is in a different watershed', 'What if I didn\'t get a letter'],
			changeCounter: [2,3]
		},
		{	number: 2,
			line: 'A watershed is simply the drainage area for a certain point.',
			selection: ['I need to complete the form', 'What if I don\'t do the form?'],
			changeCounter: [100,6]
		},
		{	number: 3,
			line: 'If you did not receive a letter but you know your property is within the affected watersheds, \
			you will still eventually need to complete the form. Please contact us at rr_tribs_\
			emergency_reg@waterboards.ca.gov',
			email: true,
			selection: ['Send email', 'What if I no longer own the property?'],
			changeCounter: [1000,4]
		},
		{	number: 4,
			line: 'Whoever owned the property when the Info Order took effect is responsible for completing the form. \
			',
			email: true,
			selection: ['I will provide you with evidence of the sale', 'I need to complete the form'],
			changeCounter: [1000,100]
		},
		{	number: 5,
			line: 'Governor Brown\'s Executive Order B-29-15 (aka the Drought Order) directs the State Water Board to collect \
			information from water users.',
			selection: ['But why?', 'Can I do this on a paper form?'],
			changeCounter: [8,6]
		},
		{	number: 6,
			line: 'Paper forms for non-surface diverters are available for people who do not have \
			access to the internet',
			email: true,
			selection: ['I would like to request a paper form', 'What if I have a surface diversion?'],
			changeCounter: [1000, 7]
		},
		{	number: 7,
			line: 'Surface diversions generally require a water right. Please read our water right section \
			to learn more about online reporting for water rights.',
			selection: ['Take me there', 'Fine I\'ll do the online form'],
			changeCounter: [2000, 100]
		},
		{	number: 8,
			line: 'In other words, the fish were dying in streams last summer and we don\'t have enough info about water use \
			to save them',
			selection: ['Fine, I\'ll do the form', 'Does the Info Order apply to me?'],
			changeCounter: [100, 1]
		},
	]
};

module.exports = infoOrderFAQ;