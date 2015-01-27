function drawTree(currentSeason){
	var treeDiv = $('.treeDiv');
	treeDiv.empty()
	if (currentSeason === 'tropical'){
		var palmTree = $('<img>').attr('src', 'assets/palm_tree.png')
														 .attr('id', 'palmTree');
		palmTree.appendTo(treeDiv);												 
	} else if (currentSeason === 'arctic'){
			return
	} else {
		var temperateTree = $('<img>').attr('src', 'assets/temperate_trees.png')
														 .attr('id', 'temperateTrees');
		temperateTree.appendTo(treeDiv);
	};		
}


function drawLeaves(currentSeason){
	var leavesDiv = $('#leaves');
	leavesDiv.empty();
	if (currentSeason === 'fall'){
		var temperateTreeLeaves = $('<img>').attr('src', 'assets/temperate_tree_leaves_fall.png')
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