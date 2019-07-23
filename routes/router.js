const express = require('express');
const router = express.Router();

/* ----- Pages ----- */
router.get('/', (req, res) => {
	res.render('index', { 
		title: 'Home',
		header: 'Index Page',
		description: 'This is your root URL page.'
	});
});

router.get('/about', (req, res) => {
	res.render('about', { 
		title: 'About Page',
		header: 'About Page',
		description: 'This is the About page description.'
	});
});

/* ----- Express-Handlebars Reference Page ----- */
router.get('/helpers', (req, res) => {
	res.render('helpers', { 
		title: 'Helpers Page',
		header: 'Helpers Page',
		description: 'This is a reference page for Express-Handlebars Helpers.',
		ifval: true,
		unlessval: false,
		eacharray: [
			"Array Item One",
			"Array Item Two",
			"Array Item Three"
		],
		eachobject: {
			keyone: "Value 1",
			keytwo: "Value 2",
			keythree: "Value 3"
		},
		arrayofobjects: [
			{
				fruits: ['Mango', 'Peach', 'Banana']
			},
			{
				fruits: ['Apple', 'Orange', 'Strawberry']
			}
		],
		lookuparray: [
			"Lookup array [0]",
			"Lookup array [1]",
			"Lookup array [2]"
		],
		withobject: {
			levelone: "Level 1",
			nestedone: {
				leveltwo: "Level 2",
				nestedtwo: {
					levelthree: "Level 3"
				}
			}
		},
		brackets: '<h5>Content</h5>'
	});
});
/* ----- 404 Error ----- */
router.get('*', (req, res) => {
	res.render('404', { 
		title: 'Page Not Found',
		header: 'Error 404',
		description: 'Page not found.'
	});
});

/* ----- Export ----- */
module.exports = router;