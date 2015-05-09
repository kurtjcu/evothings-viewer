// Application code for the Evothings Studio App.

// Debug logging used when developing the app in Evothings Studio.
if (window.hyper && window.hyper.log) { console.log = hyper.log; console.error = hyper.log }

// Application object.
var app = {}

// Constants.
var SERVER_ADDRESS = 'http://evothings.com:8080'

app.initialize = function()
{
	$(function()
	{
		FastClick.attach(document.body)
	})
}

app.connect = function()
{
	// Get contents of url text field.
	var key = document.getElementById("hyper-key").value

	// Set URL.
	var url
	if (0 == key.indexOf('http://'))
	{
		// This looks like a URL, launch it.
		url = key
	}
	else
	{
		// Create server URL.
		url = SERVER_ADDRESS + '/hyper/' + key + '/'
	}

	// Open URL.
	window.location.assign(url)
}

// App main entry point.
app.initialize()

app.openBrowser = function(url)
{
	window.open(url, '_system', 'location=yes')
}

app.showArticle = function(event)
{
	var articlePage = $('article#' + event.data.articleId)

	$('main').toggle()
	articlePage.toggle()

	if (articlePage.is(":visible"))
		$(this).text('Scan for Workbench')
	else
		$(this).text('Info')
}

app.showMain = function()
{
	$('main').show()
	$('article').hide()
	$('#info_button').text('Info')
	$('header button.back').hide()
}

// App main entry point.
app.initialize()

