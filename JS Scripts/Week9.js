console.log("sad")

let word1=["READING","WAS","I","DIDN'T","GET","DUMB","FEEL","ALRIGHT","NOTHING","MADE","SENSE","NEW","IDEAS"];
let word2=["WAS","I","DIDN'T","GET","NOTHING","I","DUMB","NOTHING","MADE","DEAD","NEW","IDEAS","FEEL"];
let word3=["ALRIGHT","DUMB","GET","IDEAS","NEW","FEEL","ALRIGHT","NEW","SENSE","END","IDEAS","NOTHING","SMART"];
var count=0;

function button2() {
 if(count=0){ //reading was alright
	count=1;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=1){ //was i dumb
	count=2;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=2){ //i didnt get
	count=3;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=3){ //didnt get ideas
	count=4;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=4){ //get nothing new
	count=8;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=5){ //dumb i feel
	count=2;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=6){ //feel dumb alright
	count=5;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=7){ //alright nothing new
	count=8;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=8){ //nothing made sense
	count=9;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=9){ //made dead end
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=10){ //sense new ideas
	count=11;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=11){ //new ideas nothing
	count=12;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
 else if(count=12){ //ideas feel smart
	count=6;
	document.getElementById("W9Div1").innerHTML = word1[count];
	document.getElementById("W9Div2").innerHTML = word2[count];
	document.getElementById("W9Div3").innerHTML = word3[count];
 }
}

function button3() {
	if(count=0){ //reading was alright
	   count=7;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=1){ //was i dumb
	   count=5;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=2){ //i didnt get
	   count=4;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=3){ //didnt get ideas
	   count=12;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=4){ //get nothing new
	   count=11;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=5){ //dumb i feel
	   count=6;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=6){ //feel dumb alright
	   count=7;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=7){ //alright nothing new
	   count=11;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=8){ //nothing made sense
	   count=10;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=9){ //made dead end
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=10){ //sense new ideas
	   count=12;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=11){ //new ideas nothing
	   count=8;
	   document.getElementById("W9Div1").innerHTML = word1[count];
	   document.getElementById("W9Div2").innerHTML = word2[count];
	   document.getElementById("W9Div3").innerHTML = word3[count];
	}
	if(count=12){ //ideas feel smart
	   document.getElementById("W9Div1").innerHTML = "GO";
	   document.getElementById("W9Div2").innerHTML = "AWAY";
	   document.getElementById("W9Div3").innerHTML = "PLZ";
	}
   }