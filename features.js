map.on('load', function () {
	// Add a layer showing the places.
	map.addLayer({
		"id": "places",
		"type": "symbol",
		"source": {
			"type": "geojson",
			"data": {
				"type": "FeatureCollection",
				"features": [{
					"type": "Feature",
					"properties": {
						"description": "<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m. coordinates: [27.98785, 86.925026]</p>",
						"icon": "theatre"
					},
					"geometry": {
						"type": "Point",
						"coordinates": [27.98785, 86.925026]
					}
                }, {
					"type": "Feature",
					"properties": {
						"description": "<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href=\"http://madmens5finale.eventbrite.com/\" target=\"_blank\" title=\"Opens in a new window\">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar. coordinates: [10.1499916, 56.1142216] </p>",
						"icon": "theatre"
					},
					"geometry": {
						"type": "Point",
						"coordinates": [10.1499916, 56.1142216]
					}
                }, {
					"type": "Feature",
					"properties": {
						"description": "<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href=\"http://tallulaeatbar.ticketleap.com/2012beachblanket/\" target=\"_blank\" title=\"Opens in a new window\">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs. coordinates: [10.1499026, 56.6172226]</p>",
						"icon": "bar"
					},
					"geometry": {
						"type": "Point",
						"coordinates": [10.1499026, 56.6172226]
					}
                }, {
					"type": "Feature",
					"properties": {
						"description": "<strong>Ballston Arts & Crafts Market</strong><p>The <a href=\"http://ballstonarts-craftsmarket.blogspot.com/\" target=\"_blank\" title=\"Opens in a new window\">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m. coordinates: [10.149096, 56.1172296]</p>",
						"icon": "art-gallery"
					},
					"geometry": {
						"type": "Point",
						"coordinates": [10.149096, 56.1172296]
					}
                }, {
					"type": "Feature",
					"properties": {
						"description": "<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year's <a href=\"http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/\" target=\"_blank\" title=\"Opens in a new window\">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m. coordinates: [55.711311, 9.536354]</p>",
						"icon": "bicycle"
					},
					"geometry": {
						"type": "Point",
						"coordinates": [55.711311, 9.536354]
					}
                }, {
					"type": "Feature",
					"properties": {
						"description": "<strong>Capital Pride Parade</strong><p>The annual <a href=\"http://www.capitalpride.org/parade\" target=\"_blank\" title=\"Opens in a new window\">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free. coordinates: [10.149096, 56.1172296]</p>",
						"icon": "star"
					},
					"geometry": {
						"type": "Point",
						"coordinates": [10.149096, 56.1172296]
					}
                }, {
					"type": "Feature",
					"properties": {
						"description": "<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href=\"http://www.muhsinah.com\" target=\"_blank\" title=\"Opens in a new window\">Muhsinah</a> plays the <a href=\"http://www.blackcatdc.com\">Black Cat</a> (1811 14th Street NW) tonight with <a href=\"http://www.exitclov.com\" target=\"_blank\" title=\"Opens in a new window\">Exit Clov</a> and <a href=\"http://godsilla.bandcamp.com\" target=\"_blank\" title=\"Opens in a new window\">Gods’illa</a>. 9:00 p.m. $12. coordinates: [55.85813, 9.847588]</p>",
						"icon": "music"
					},
					"geometry": {
						"type": "Point",
						"coordinates": [55.85813, 9.847588]
					}
                }, {
					"type": "Feature",
					"properties": {
						"description": "<strong>A Little Night Music</strong><p>The Arlington Players' production of Stephen Sondheim's  <a href=\"http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show\" target=\"_blank\" title=\"Opens in a new window\"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m. coordinates: [10.1299006, 56.1072206]</p>",
						"icon": "music"
					},
					"geometry": {
						"type": "Point",
						"coordinates": [10.1299006, 56.1072206]
					}
                }, {
					"type": "Feature",
					"properties": {
						"description": "<strong>Truckeroo</strong><p><a href=\"http://www.truckeroodc.com/www/\" target=\"_blank\">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m. coordinates: [10.149091, 56.1172291]</p>",
						"icon": "music"
					},
					"geometry": {
						"type": "Point",
						"coordinates": [10.149091, 56.1172291]
					}
                }]
			}
		},
		"layout": {
			"icon-image": "{icon}-15",
			"icon-allow-overlap": true
		}
	});

	// When a click event occurs on a feature in the places layer, open a popup at the
	// location of the feature, with description HTML from its properties.
	map.on('click', 'places', function (e) {
		var coordinates = e.features[0].geometry.coordinates.slice();
		var description = e.features[0].properties.description;

		// Ensure that if the map is zoomed out such that multiple
		// copies of the feature are visible, the popup appears
		// over the copy being pointed to.
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		new mapboxgl.Popup()
			.setLngLat(coordinates)
			.setHTML(description)
			.addTo(map);
	});

	// Change the cursor to a pointer when the mouse is over the places layer.
	map.on('mouseenter', 'places', function () {
		map.getCanvas().style.cursor = 'pointer';
	});

	// Change it back to a pointer when it leaves.
	map.on('mouseleave', 'places', function () {
		map.getCanvas().style.cursor = '';
	});
});
