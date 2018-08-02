(() => {
	const PATTERN_SHOW_WIKI = /^[/]wiki[/]([A-Z_0-9]+)[/]([^\\/]+)$/;
	const PATTERN_HR = /([-]{3,}|[_]{3,})([<]br[>])?$/gm;

	const main = () => {
		const isMarkdown = $("#loom > div").hasClass("markdown-body");
		if (location.pathname.match(PATTERN_SHOW_WIKI) == false 
		|| isMarkdown) {
			return;
		}
		$("#loom p").each((index, elm) => {
			const $p = $(elm);
			const html = $p.html();
			if (html.match(PATTERN_HR)) {
				$p.html(html.replace(PATTERN_HR, "<hr>"));
			}
		});
	}

    PowerUps.isEnabled("hr", (enabled) => {
		if (enabled) {
			main();
		}
	});
})();
