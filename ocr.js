var numbers={[],[],[],[],[],[],[],[],[],[]};
function checkCanvas(canvas,height,width){
	var cont = canvas.getContext("2d").getImageData(0,0,height,width);
	cont = rescale(cont,height,width);
}
/**
* downscales image first
*breaks image down into pieces so that multiple symbols can be read
*prototype of an algorithm will work in o(n^2) precisely o((n^2)*number of not connected figures *2)
**/
function rescale(cont,height,width){
	var downscale=new Array([]);
	var cont = canvas.getContext("2d").getImageData(0,0,height,width);
	var x1=null;//find offset of rectangle for part of the picture
	var y1=null;
	var x2=null;
	var y2=null;
	for(var y=0;y<height;++y){
		for(var x=0;x<width;++x){
			
		}
	}
	
}
