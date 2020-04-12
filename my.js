function rundiff(mode) {

	var dmp = new diff_match_patch();

	var text1 = $('#one').val()
	var text2 = $('#two').val()

	dmp.Diff_Timeout = 1
	dmp.Diff_EditCost = 4

	var d = dmp.diff_main(text1, text2);
	if (mode === 1) {
		dmp.diff_cleanupSemantic(d);
	}
	if (mode === 2) {
		dmp.diff_cleanupEfficiency(d);
	}
	var ds = dmp.diff_prettyHtml(d);
	$('#diff').html(ds);


}