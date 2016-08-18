var waterRightsFAQ = {
	questions:[
		{	number: 0,
			line: 'A water right is needed for most surface diversions in California.',
			selection: ['What is a surface diversion?', 'Do I already have a right?'],
			changeCounter: [1,8]
		},
		{	number: 1,
			line: 'A surface diversion means that you are taking water from a stream or river - ie where the \
			water has come to the surface of the land.',
			selection: ['What about springs?', 'How do I get a water right?'],
			changeCounter: [2,5]
		},
		{	number: 2,
			line: 'You may be exempt if the water from your spring would never run off your property, \
			even in the winter, were you not taking any water from it.',
			selection: ['The water from my spring never comes to the surface', 'I think I am exempt'],
			changeCounter: [3,4]
		},
		{	number: 3,
			line: 'If the water from your spring would not come to the surface even in the winter even if \
			you were not taking any water from it, then you are using groundwater. This is not a surface diversion.'
	
		},
		{	number: 4,
			line: 'If you believe that you are exempt from the water right requirement, please schedule an appointment with \
			State Water Board staff for verification.',
			email: true,
			selection: ['Put me in contact', 'How do I know if I already have a water right?'],
			changeCounter: [1000,5]
		},
		{	number: 5,
			line: 'If you are taking water from a stream that touches your property, you have a riparian water right but you \
			must claim this right before using the water.',
			selection: ['How do I claim a riparian right?', 'The stream does not touch my property'],
			changeCounter: [7,6]
		},
		{	number: 6,
			line: 'Rights for surface water that does not touch your property are called appropriative rights. \
			If you do not have one already, you will need to apply for one.',
			selection: ['Do I already have a right?', 'How do I apply for one?'],
			changeCounter: [8, 9]
		},
		{	number: 7,
			line: 'You can claim a riparian water right by filing a statement of use.',
			selection: ['Take me there', 'Why bother?'],
			changeCounter: [100, 10]
		},
		{	number: 8,
			line: 'If you already have an appropriative right you will have been reporting use to the \
			Water Board periodically and paying a water right fee. If your source is a stream that touches \
			your property, you likely already have a riparian right.',
			selection: ['I need to apply for an appropriative right', 'I need to claim a riparian right'],
			changeCounter: [100, 100]
		},
		{	number: 9,
			line: 'To apply for an appropriative right, you will need to know how much water you \
			propose using from the point of diversion. Please note that there are fees associated with \
			an appropriative right.',
			selection: ['Take me there', 'I don\'t use that much water. Is this necessary?'],
			changeCounter: [100, 11]
		},
		{	number: 10,
			line: 'Having your name on a water right protects your high-priority water uses from over-appropriation \
			in times of reduced supply. If we don\'t know that you rely on this surface water, we might over-allocate \
			water to upstream users. Also it\'s the law for surface diversions.',
			selection: ['Take me there', 'I don\'t use that much water. Is this necessary?'],
			changeCounter: [100, 11]
		},
		{	number: 11,
			line: 'If you use non-riparian water for small domestic, small irrigation, or livestock stockpond uses, \
			the Water Board has alternative types of registrations.',
			selection: ['Let\'s talk more', 'My source is riparian'],
			email: true,
			changeCounter: [1000, 100]
		}
	]
};

module.exports = waterRightsFAQ;