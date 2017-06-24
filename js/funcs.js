function loadPage(page) {

	$.ajax({url: 'pages/page' + page + '.html'}).
		done(function(pageHtml) {
			$('.flipbook .p' + page).html(pageHtml.replace('', ''));
		});

}

function addPage(page, book) {

	var id, pages = book.turn('pages');

	if (!book.turn('hasPage', page)) {

		var element = $('<div />',
			{'class': 'own-size',
				css: {width: 460, height: 582}
			}).
			html('<div class="loader"></div>');

		if (book.turn('addPage', element, page)) {
			loadPage(page);
		}

	}
}

function updateDepth(book, newPage) {

	var page = book.turn('page'),
		pages = book.turn('pages'),
		depthWidth = 16*Math.min(1, page*2/pages);

		newPage = newPage || page;

	if (newPage>3)
		$('.flipbook .p2 .depth').css({
			width: depthWidth,
			left: 20 - depthWidth
		});
	else
		$('.flipbook .p2 .depth').css({width: 0});

		depthWidth = 16*Math.min(1, (pages-page)*2/pages);

	if (newPage<pages-3)
		$('.flipbook .pPenultimo .depth').css({
			width: depthWidth,
			right: 20 - depthWidth
		});
	else
		$('.flipbook .pPenultimo .depth').css({width: 0});

}
