function popitup(url)
{
	newwindow=window.open(url,'name','height=700px,width=620'); 
	if (window.focus) {newwindow.focus()}
	return false;
}