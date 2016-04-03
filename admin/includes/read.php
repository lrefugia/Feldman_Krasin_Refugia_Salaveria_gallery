<?php
// This file will read information from the database.
	
	function getAll($tbl) {
		require_once('connect.php');
		$queryAll = "SELECT * FROM {$tbl}";
		$runAll = mysqli_query($link, $queryAll);
		
		if($runAll) {
			return $runAll;
		}else{
			$error = "There was an error accessing this information.  Please try again later.";
			return $error;
		}	
	}
	
	function getSingle($tbl,$col,$id) {
		require_once('connect.php');
		$querySingle = "SELECT * FROM {$tbl} WHERE {$col} = {$id}";
		//echo $querySingle;
		$runSingle = mysqli_query($link, $querySingle);
		if($runSingle) {
			return $runSingle;
		}else{
			$error = "There was an error accessing this information.  Please try again later.";
			return $error;
		}
	}

	function filterType($tbl1, $tbl2, $tbl3, $col1, $col2, $col3, $filter) {
		require_once('connect.php');
		$queryFilter = "SELECT * FROM {$tbl1}, {$tbl2}, {$tbl3} WHERE {$tbl1}.{$col1} = {$tbl3}.{$col1} AND {$tbl2}.{$col2} = {$tbl3}.{$col2} AND {$tbl2}.{$col3} = '{$filter}'";
		$runFilter = mysqli_query($link, $queryFilter);
		//echo "wtf";
		if($runFilter){
			return $runFilter;
		}else{
			$error = "These are not the movies you were looking for...";
			return $error;
		}
	}

?>