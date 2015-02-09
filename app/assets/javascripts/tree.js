function drawTree(currentSeason){
	var treeDiv = $('.treeDiv');
	treeDiv.empty();
	if (currentSeason === 'tropical'){
		var palmTree = $("<img>")
		.attr({ id: 'palmTree',
						src: 'assets/images/palm_tree.png'
		});
		palmTree.appendTo(treeDiv);												 
	} else if (currentSeason === 'arctic'){
			var igloo = $("<img>")
			.attr({ id: 'igloo',
						  src: 'assets/images/igloo.png'
		});
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
			src: 'assets/images/temperate_tree_leaves_fall.png',
			id: 'temperateTreeLeaves'
		});
		temperateTreeLeaves.appendTo(leavesDiv)	
	} else if ((currentSeason === 'spring') || (currentSeason === 'summer')) {
		var temperateTreeLeaves = $('<img>').attr({
			src: 'assets/images/temperate_tree_leaves_summer.png',
			id: 'temperateTreeLeaves'
		});
		temperateTreeLeaves.appendTo(leavesDiv)	
	} else{
		return;
	}		
}