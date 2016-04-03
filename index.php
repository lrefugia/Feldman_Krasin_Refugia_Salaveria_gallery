<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Welcome to the Finest Selection of Blu-rays on the internets!</title>
    <link rel="stylesheet" href="css/foundation.css" />
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	
	<!--header-->
	<div class="column text-center" id="header">
		<h2 class="hide">Movie Database</h2>
		<?php include('includes/nav.html'); ?>
	</div>

	<form>
	    <input id="srch" type="text" size="30" placeholder="SEARCH...">
	    <div id="livesrch"></div>
	</form>

	<br>
	
	<div class="row">
		<div class="details"></div>
	</div>	
	<!--<div class="row">-->
		<div class="movies row"></div>
	<!--</div>-->

	<?php include('includes/footer.html'); ?>

	<script src="js/utility.js"></script>
    <script src="js/vendor/jquery.min.js"></script>
    <script src="js/vendor/what-input.min.js"></script>
    <script src="js/foundation.min.js"></script>
    <script src="js/app.js"></script>
</body>
</html>