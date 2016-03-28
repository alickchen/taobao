window.onload=function()
{
	var searchBox=document.getElementById("searchBox");
	var tabList=document.getElementById("tabList").getElementsByTagName("li");
	var	search_text=searchBox.getElementsByTagName("input")[0];
	var search_btn=searchBox.getElementsByTagName("input")[1];
	var code2d=document.getElementById("code2d");
	var code2d_i=code2d.getElementsByTagName("span")[0];
	var hotList=searchBox.getElementsByTagName("ul");
	tabList[0].onclick=function(){
		tabList[0].className="tabList_active";
		tabList[1].className="tabList_unactive_1";
		tabList[2].className="tabList_unactive";
		search_text.style.borderColor="#FF4400";
		search_btn.style.backgroundColor="#FF4400";
		search_text.placeholder="完美肌肤爱不释手";
		hotList[1].className="";
		hotList[2].className="hidden";
	}
	tabList[1].onclick=function(){
		tabList[0].className="tabList_unactive";
		tabList[1].className="tabList_active_1";
		tabList[2].className="tabList_unactive";
		search_text.style.borderColor="#C40000";
		search_btn.style.backgroundColor="#C40000";
		search_text.placeholder="开学季 新年换新季";
		hotList[1].className="hidden";
		hotList[2].className="";
	}
	tabList[2].onclick=function(){
		tabList[0].className="tabList_unactive";
		tabList[1].className="tabList_unactive_1";
		tabList[2].className="tabList_active";
		search_text.style.borderColor="#FF4400";
		search_btn.style.backgroundColor="#FF4400";
		search_text.placeholder="开学必须准备好";
		hotList[1].className="";
		hotList[2].className="hidden";
	}
	code2d_i.onclick=function(){
		code2d.style.display="none";
	}
	//图片轮播效果1
     var picList1=document.getElementById("picList1");
     var prev1=document.getElementById("prev1");
     var next1=document.getElementById("next1");
     var buttons1=document.getElementById("buttons1").getElementsByTagName("span");
     var index1=1;
     var leftShifted=false;
     prev1.onclick=function()  {
   	     if(!leftShifted){
   	     index1--;
   	     if (index1==0) {
   	     	index1=5;
   	     };
   	     showBtn1(index1);
         leftShift(picList1,5,520);  }
   }
   next1.onclick=function ()  {
         if(!leftShifted){
         	index1++;
         if (index1==6) {
   	     	index1=1;
   	     };
   	     showBtn1(index1);
         leftShift(picList1,5,-520);}
   }
for (var i = buttons1.length - 1; i >= 0; i--) {
	buttons1[i].onclick=function(){
       if (index1!=this.getAttribute("index")) {
       	index1=this.getAttribute("index");
        showBtn1(index1);
		var	newleft=-520*index1;
        var offset=newleft-parseInt(picList1.style.left);
        leftShift(picList1,5,offset);
           }
	}
}

//图片轮播效果2
     var picList2=document.getElementById("picList2");
     var prev2=document.getElementById("prev2");
     var next2=document.getElementById("next2");
     var buttons2=document.getElementById("buttons2").getElementsByTagName("span");
     var index2=1;
     prev2.onclick=function()  {
   	     if(!leftShifted){index2--;
   	     if (index2==0) {
   	     	index2=6;
   	     };
   	     showBtn2(index2);
         leftShift(picList2,6,520);  }
   }
   next2.onclick=function ()  {
         if(!leftShifted){
         	index2++;
         if (index2==7) {
   	     	index2=1;
   	     };
   	     showBtn2(index2);
         leftShift(picList2,6,-520);}
   }
   for (var i = buttons2.length - 1; i >= 0; i--) {
	buttons2[i].onclick=function(){
       if (index2!=this.getAttribute("index")) {
       	index2=this.getAttribute("index");
        showBtn2(index2);
		var	newleft=-520*index2;
        var offset=newleft-parseInt(picList2.style.left);
        leftShift(picList2,6,offset);
           }
	}
}

function leftShift(element,picNum,offset) {
    	var offset=offset||520;
    	var speed= offset/20;
    	var lastLeft=-520*picNum;
    	var newleft= parseInt(element.style.left)+offset;
    	    leftShifted=true;
    	function go(){ 
    		var left=parseInt(element.style.left);
             if ((left>newleft&&offset<0)||(left<newleft&&offset>0)) {
             	
    			element.style.left=(parseInt(element.style.left)+speed)+"px";
    			setTimeout(go,20);
    			}
    			else{
    			leftShifted=false;
    			element.style.left=newleft+"px";
    			if (newleft>=0) {
    				element.style.left=lastLeft+"px";
    			}
    			if (newleft<=(lastLeft-520)) {
    				element.style.left="-520px";
    			}	
    			
    			}
    	};	
    	go();
    };
   function showBtn1(num){
		for (var i = buttons1.length - 1; i >= 0; i--) {
			buttons1[i].className="";
		}
		buttons1[num-1].className="btn_on";
	   };
   function showBtn2(num){
		for (var i = buttons2.length - 1; i >= 0; i--) {
			buttons2[i].className="";
		}
		buttons2[num-1].className="btn_on";
	   };




	/*var picList1=document.getElementById("picList1");
	var picList2=document.getElementById("picList2");
	var	prev1=document.getElementById("prev1");
	var prev2=document.getElementById("prev2");
	var	next1=document.getElementById("next1");
	var next2=document.getElementById("next2");
    var buttons1=document.getElementById("buttons1").getElementsByTagName("span");
    var buttons2=document.getElementById("buttons2").getElementsByTagName("span");
    var	index1=1;
    var	index2=1;


   function leftShift(element,picNum,offset) {
    	var offset=offset||520;
    	var speed= offset/20;
    	var lastLeft=-520*picNum;
    	var newleft= parseInt(element.style.left)+offset;
    	var leftShifted=false;
    	function go(){ 
    		var left=parseInt(element.style.left);
             if ((left>newleft&&offset<0)||(left<newleft&&offset>0)) {
             	
    			element.style.left=(parseInt(element.style.left)+speed)+"px";
    			setTimeout(go,20);
    			}
    			else{
    			element.style.left=newleft+"px";
    			if (newleft>=0) {
    				element.style.left=lastLeft+"px";
    			}
    			if (newleft<=(lastLeft-520)) {
    				element.style.left="-520px";
    			}	
    			
    			}
    	};	
    	go();
    };
   prev1.onclick=function()  {
   	     index1++;
   	     showBtn1(index1);
         leftShift(picList1,5);  
   }
   next1.onclick=function()  {
         index1--;
   	     showBtn1(index1);
         leftShift(picList1,5,-520);
   }
   prev2.onclick=function()  {
         leftShift(picList2,6);  
   }
   next2.onclick=function()  {
         leftShift(picList2,6,-520);
   }
for (var i = buttons1.length - 1; i >= 0; i--) {
	buttons1[i].onclick=function(){
        var myIndex=this.getAttribute("index");
        showBtn1(myIndex);
		var	newleft=-520*myIndex;
        var offset=newleft-parseInt(picList1.style.left);
        leftShift(picList1,5,offset);
    

	}
}
function showBtn1(index){
		for (var i = buttons1.length - 1; i >= 0; i--) {
			buttons1[i].className="";
		}
		buttons1[index-1].className="btn_on";
	   }*/
}




