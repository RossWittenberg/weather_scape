function drawTree(currentSeason){
	var treeDiv = $('.treeDiv');
	treeDiv.empty()
	if (currentSeason === 'tropical'){
		var palmTree = $('<div>').css('background-image', "image-url('palm_tree.png')" )
														 .attr('id', 'palmTree');
		palmTree.appendTo(treeDiv);												 
	} else if (currentSeason === 'arctic'){
			return
	} else {
		var temperateTree = $('<div>').css('background-image', "image-url('temperate_trees.png')")

														 .attr('id', 'temperateTrees');
		temperateTree.appendTo(treeDiv);
	};		
}

function drawLeaves(currentSeason){
	var leavesDiv = $('#leaves');
	leavesDiv.empty();
	if (currentSeason === 'fall'){
		var temperateTreeLeaves = $('<div>').css('background-image', "image-url('temperate_tree_leaves_fall.png')")
														 .attr('id', 'temperateTreeLeaves');
		temperateTreeLeaves.appendTo(leavesDiv)	
	} else if ((currentSeason === 'spring') || (currentSeason === 'summer')) {
		var temperateTreeLeaves = $('<div>').css('background-image', "image-url('temperate_tree_leaves_summer.png')")
														 .attr('id', 'temperateTreeLeaves');
		temperateTreeLeaves.appendTo(leavesDiv)	
	} else{
		return;
	}		
}
