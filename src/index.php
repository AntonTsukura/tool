<!DOCTYPE html>
<html lang="en">
<head>
	<script src="https://cdn.jsdelivr.net/npm/@simonwep/selection-js/lib/selection.min.js"></script>
	<script src="js/bundle.js"></script>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/main.css">
	<title>Forum</title>
</head>
<body>
	<header class="header">
		<div class="container">
			<div class="topbar">
				<div class="logo">Searchtool</div>
				<div class="search-field-block">
					<input type="text" name="tag_name" id="search_input" class="search-field" placeholder="Create element">
					<i class="fa fa-search search-field-icon" aria-hidden="true"></i>
					<br>
					<div class="typing" id="typing_id">
						 <span class="typing__bullet"></span>
						 <span class="typing__bullet"></span>
						 <span class="typing__bullet"></span>
					</div>
				</div>
				<div class="control-block">
					<a class="btn btn-login" href="#">Login</a>
					<a class="btn btn-register" href="#">Register</a>
				</div>
			</div>
		</div>
	</header>
	<div id="result_search_waiting"></div>
	<div class="search_and_tags">
		<div id="items_container" class="items_container">
			<?php include("php/list_items.php"); ?>
		</div>
		<div class="tag_container">
			<?php  include("php/tag_list.php"); ?>
		</div>
	</div>
</body>
</html>
