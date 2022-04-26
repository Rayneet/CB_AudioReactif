autowatch = 1;
inlets = 3;
outlets = 1;


edge0 = inlet[1];
edge1 = inlet[2];





function smoothstep(x) {
	
		
		y = new Array(55);
		
		for (var i = 0; i<x.length; i++){

		var w = x[i];
		
   		if (x[i] < edge0)
      		y[i] = 0;

   		if (x >= edge1)
      		y[i] = 1;

		else y[i] = w * w * (3 - 2 * w);
		
		}

   		

   outlet(0,y); 
}