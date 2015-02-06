function drawTree(currentSeason){
	var treeDiv = $('.treeDiv');
	treeDiv.empty()
	if (currentSeason === 'tropical'){
		var palmTree = $('<img>').attr('src', 'assets/palm_tree-a823538f31f348009b2acdcd65ccd19f.png')
														 .attr('id', 'palmTree');
		palmTree.appendTo(treeDiv);												 
	} else if (currentSeason === 'arctic'){
			return
	} else {
		var temperateTree = $('<img>').attr('src', 'assets/temperate_trees-ddc857aa92a49a9ad3ca286497b3821d.png')
														 .attr('id', 'temperateTrees');
		temperateTree.appendTo(treeDiv);
	};		
}


function drawLeaves(currentSeason){
	var leavesDiv = $('#leaves');
	leavesDiv.empty();
	if (currentSeason === 'fall'){
		var temperateTreeLeaves = $('<img>').attr('src', 'assets/temperate_tree_leaves_fall-cb7f9ff9fce84d763e7f253ab047e218.png')
														 .attr('id', 'temperateTreeLeaves');
		temperateTreeLeaves.appendTo(leavesDiv)	
	} else if ((currentSeason === 'spring') || (currentSeason === 'summer')) {
		var temperateTreeLeaves = $('<img>').attr('src', 'assets/temperate_tree_leaves_summer.png')
														 .attr('id', 'temperateTreeLeaves');
		temperateTreeLeaves.appendTo(leavesDiv)	
	} else{
		return;
	}		
}