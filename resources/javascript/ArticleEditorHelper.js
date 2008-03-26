function initializeJavaScriptActionsForEditingAndCreatingArticles() {
	window.addEvent('resize', setDimensionsForArticleEditWindow);
	
	setDimensionsForArticleEditWindow();
	registerArticleLinksForMoodalBox();
}

function setDimensionsForArticleEditWindow() {
	var width = Math.round(window.getWidth() * 0.8);
	var height = Math.round(window.getHeight() * 0.8);
	
	try {
		MOOdalBox.init({resizeDuration: 0, evalScripts: true, animateCaption: false, defContentsWidth: width, defContentsHeight: height});
	} catch(e) {}
}

function registerArticleLinksForMoodalBox() {
	$$('a.edit').each(
		function(element) {
			checkArticleLinkAndRegisterIfItsCorrect(element);
		}
	);
	$$('a.create').each(
		function(element) {
			checkArticleLinkAndRegisterIfItsCorrect(element);
		}
	);
	$$('a.delete').each(
		function(element) {
			checkArticleLinkAndRegisterIfItsCorrect(element);
		}
	);
}

function checkArticleLinkAndRegisterIfItsCorrect(link) {
	if (link == null) {
		return false;
	}
	
	var relProperty = link.getProperty('rel');
	if (relProperty == null) {
		return false;
	}
	
	if (relProperty.indexOf('moodalbox') != -1) {
		MOOdalBox.register(link);
	}
}

function addActionAfterArticleIsSavedAndEditorClosed() {
	MOOdalBox.addEventToCloseAction(function() {
		reloadPage();
	});
}

function deleteSelectedArticle(resource) {
	ThemesEngine.deleteArticle(resource, {
		callback: function(result) {
			MOOdalBox.close();
			reloadPage();
		}
	});
}