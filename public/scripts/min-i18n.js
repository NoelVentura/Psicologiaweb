(function () {
	var TRANSLATIONS = null;

	function getDict(lang) {
		if (!TRANSLATIONS) {
			var node = document.getElementById('min-i18n-data');
			TRANSLATIONS = node ? JSON.parse(node.textContent) : { es: {}, en: {} };
		}
		return TRANSLATIONS[lang] || TRANSLATIONS.es;
	}

	function applyPageLanguage(lang) {
		var dict = getDict(lang);
		document.documentElement.lang = lang;
		localStorage.setItem('min-lang', lang);

		document.querySelectorAll('[data-i18n]').forEach(function (el) {
			var key = el.getAttribute('data-i18n');
			if (!key || !dict[key]) return;
			var tag = el.tagName;
			if (tag === 'INPUT' || tag === 'TEXTAREA') el.placeholder = dict[key];
			else el.textContent = dict[key];
		});

		document.querySelectorAll('[data-i18n-quote]').forEach(function (el) {
			var key = el.getAttribute('data-i18n-quote');
			if (key && dict[key]) el.textContent = '\u201c' + dict[key] + '\u201d';
		});

		document.querySelectorAll('.min-lang-btn[data-lang]').forEach(function (btn) {
			var active = btn.getAttribute('data-lang') === lang;
			btn.classList.toggle('is-active', active);
			btn.setAttribute('aria-pressed', String(active));
		});

		if (dict['meta.title'] && dict['site.name']) {
			document.title = dict['meta.title'] + ' | ' + dict['site.name'];
		}
	}

	function bindLangSwitcher() {
		var saved = localStorage.getItem('min-lang');
		var lang = saved === 'en' ? 'en' : 'es';
		applyPageLanguage(lang);

		document.querySelectorAll('.min-lang-btn[data-lang]').forEach(function (btn) {
			if (btn.dataset.langBound) return;
			btn.dataset.langBound = 'true';
			btn.addEventListener('click', function () {
				var next = btn.getAttribute('data-lang');
				if (next === 'es' || next === 'en') applyPageLanguage(next);
			});
		});
	}

	bindLangSwitcher();
	document.addEventListener('astro:page-load', bindLangSwitcher);
})();
