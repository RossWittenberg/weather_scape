function drawTree(currentSeason){
	var treeDiv = $('.treeDiv');
	treeDiv.empty();
	if (currentSeason === 'tropical'){
		var palmTree = $("<img>")
		.attr({ id: 'palmTree',
						src: 'assets/palm_tree-a823538f31f348009b2acdcd65ccd19f.png'
		});
		palmTree.appendTo(treeDiv);												 
	} else if (currentSeason === 'arctic'){
			return
	} else {
		var temperateTree = $('<img>').attr({
			src: 'assets/temperate_trees-2b597ef0210d7c18af7db0465303bd12.png',
			id: 'temperateTrees'
		});
		temperateTree.appendTo(treeDiv);
	};		
};
function drawLeaves(currentSeason){
	var leavesDiv = $('#leaves');
	leavesDiv.empty();
	if (currentSeason === 'fall'){
		var temperateTreeLeaves = $('<img>').attr({
			src: 'assets/temperate_tree_leaves_fall-cb7f9ff9fce84d763e7f253ab047e218.png',
			id: 'temperateTreeLeaves'
		});
		temperateTreeLeaves.appendTo(leavesDiv)	
	} else if ((currentSeason === 'spring') || (currentSeason === 'summer')) {
		var temperateTreeLeaves = $('<img>').attr({
			src: 'assets/temperate_tree_leaves_summer-885f9ef4ea4231518b2c28375ee9351f.png',
			id: 'temperateTreeLeaves'
		});
		temperateTreeLeaves.appendTo(leavesDiv)	
	} else{
		return;
	}		
}