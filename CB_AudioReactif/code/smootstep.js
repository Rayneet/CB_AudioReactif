autowatch = 1;
inlets = 1;
outlets = 1;


//post("hi");



function smoothstep(edge0,edge1,x) {
	


   		if (x < edge0)
      		outlet(0,0);

   		if (x >= edge1)
      		outlet(0,1);


   		y = x * x * (3 - 2 * x);

   outlet(0,y); 
}