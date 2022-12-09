
var check=0;
var count= 0, dr1=0, dr2=0, dr3=0;
/*had to add it at top as page refresh does not remove input data
document.f1.A1.value = 0; check = 0; //$('#s1').attr('disabled', false);
document.f1.A2.value='';
document.f1.fc33.value= '';
document.f1.pc33.value= ''; */


function add(x,y)
{
	var z=[];
	z[0]=x[0] + y[0];
	z[1]=x[1] + y[1];
	return z;
}
function mult(x,y)
{
	var z=[];
	z[0]=(x[0] * y[0]) - (x[1] * y[1]);
	z[1]=(x[0] * y[1]) + (x[1] * y[0]);
	return z;
}
function div(x,y)
{
	var z=[]; var t=[];
	t[0]=(y[0]) / ((y[0] * y[0]) + (y[1] * y[1]));
	t[1]=(-1 * y[1]) / ((y[0] * y[0]) + (y[1] * y[1]));
	z=mult(x,t);
	return z;
}

/////////////////////////////// The code starts from here/////////////////////////////////////

function simulate_rc()
{
	//alert("yep it calls back");
	if(check==1)
	{
		var r=parseFloat(document.getElementById('r1').value);
		//alert(r);
		var c=parseFloat(document.getElementById('c1').value);
		//alert(c);
		document.f1.fc33.value = (1/(2 * 3.14 * r * c) * 1000000000).toPrecision(5);
		//alert (fc33);
		var fc=parseFloat(document.getElementById('fc33').value);
		var fd=parseFloat(document.getElementById('f1').value);
		document.f1.pc33.value = (100*(fd-fc)/fd).toPrecision(5);

	}
	else
	{
		alert("Please Switch on the supply to verify the milivoltmeter reading first.");
	}

}

function simulate_rc2()
{
	//alert("yep it calls back");
	if(check==1)
	{
		var vm=parseFloat(document.getElementById('A1').value);
		//alert(r);
		var fd=parseFloat(document.getElementById('f1').value);
		//alert(c);
		document.f1.pc22.value = ((vm - fd)/ fd * 100) ;
	}
	else
	{
		alert("Please Switch on the supply to verify the milivoltmeter reading first.");
	}

}

function printDiv(divName)
{
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}

function changeImage()
{

		var image = document.getElementById('myImage');
		var im1= document.getElementById('r1');
		var im2= document.getElementById('r2');
		var im3= document.getElementById('r3');
		var im4= document.getElementById('r4');
		var im5= document.getElementById('c1');
		var im6= document.getElementById('c2');
		var im7= document.getElementById('pr1');
		var im8= document.getElementById('pr2');
		var im9= document.getElementById('pr3');
		var im10= document.getElementById('pr4');
		var im11= document.getElementById('pc1');
		var im12= document.getElementById('pc2');
		var im13= document.getElementById('f1');
		if (image.src.match("s1")) {
			image.src = "./images/s2.png"; cf3=1;
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); im3.setAttribute('readonly', 'readonly');
			im4.setAttribute('readonly', 'readonly'); im5.setAttribute('readonly', 'readonly'); im6.setAttribute('readonly', 'readonly');
			im7.setAttribute('readonly', 'readonly'); im8.setAttribute('readonly', 'readonly'); im9.setAttribute('readonly', 'readonly');
			im10.setAttribute('readonly', 'readonly'); im11.setAttribute('readonly', 'readonly'); im12.setAttribute('readonly', 'readonly');
			im13.setAttribute('readonly', 'readonly');
			$('#s1').attr('disabled', true);
			check=1;
			execute_ckt();
		}
		else {
			image.src = "./images/s1.png"; cf3=0;
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); im3.removeAttribute('readonly');
			im4.removeAttribute('readonly'); im5.removeAttribute('readonly'); im6.removeAttribute('readonly');
			im7.removeAttribute('readonly'); im8.removeAttribute('readonly'); im9.removeAttribute('readonly');
			im10.removeAttribute('readonly'); im11.removeAttribute('readonly'); im12.removeAttribute('readonly');
			im13.removeAttribute('readonly');
			document.f1.A1.value = 0; check = 0; //$('#s1').attr('disabled', false);
			document.f1.A2.value='';
			document.f1.A2a.value='';
			document.f1.fc33.value= '';
			document.f1.pc33.value= '';
			document.f1.pc22.value= '';
			perform_meter();
			/*
			document.f1.A2.value='';
			document.f1.c333.value='';
			document.f1.r333.value='';
			document.f1.rd33.value='';
			*/
		}
}

function execute_ckt()
{
	if(check==1)
		{
			document.f1.A1.value=0;
			var r1=[], r2=[], r3=[], r4=[], v1=[], c1=[], c2=[], f1;
			var z2=[], z1=[], z3=[], z4=[], i2=[], i1=[], dv=[], dvv;
			f1 = parseFloat(document.getElementById('f1').value);
			w = 2*3.141*f1;
			r1[0] = parseFloat(document.getElementById('r1').value); r1[1]=0;
			r2[0] = parseFloat(document.getElementById('r2').value); r2[1]=0;
			r3[0] = parseFloat(document.getElementById('r3').value); r3[1]=0;
			r4[0] = parseFloat(document.getElementById('r4').value); r4[1]=0;
			/* the data from capacitors are actually in nF so multiply with 10^(-9) */
			c1[1]=(-1 / ((w * parseFloat(document.getElementById('c1').value)) * 0.000000001)); c1[0]=0;
			c2[1]=(-1 / ((w * parseFloat(document.getElementById('c2').value)) * 0.000000001)); c2[0]=0;
			v1[0]=parseFloat(document.getElementById('v1').value); v1[1]=0;
			z1=div(mult(c1,r1),add(c1,r1));
			z2=add(c2,r2);
			z3=r3;
			z4=r4;
			i1= div(v1, add(z1,z2));
			i2= div(v1, add(z3,z4));
			dv=add(mult(i1,z2),(mult([-1,0], mult(i2,z4))));
			dvv=(Math.sqrt((dv[0] * dv[0]) + (dv[1] * dv[1]))) *1000 ;
			/*alert(dv[0]); alert(dv[1]); alert(dvv);

			z1=add(add(l1,r1),add(r3,c3));
			z2=r4;
			z=add(m1,div(mult(z1,z2),add(z1,z2)));
			//i=div(v1,z); alert(i);
			i1=div(mult(div(v1,z),z2), add(z1,z2));
			i2=div(mult(div(v1,z),z1), add(z1,z2));
			dv=add(mult(i1,add(r3,c3)),(mult([-1,0], mult(i2,r4))));

			dvv=(Math.sqrt((dv[0] * dv[0]) + (dv[1] * dv[1])))*1000 ; */
			document.f1.A1.value= dvv.toPrecision(3);
			document.f1.A2a.value= dvv.toPrecision(3);
			document.f1.A2.value= dvv.toPrecision(3);
			perform_meter();
		}
}

function tbl_insert()
{ 
	//alert("yep it calls back");
	dr1=0; dr2=0; dr3=0;

	if (check==1) {
		
		dr1=document.f1.f1.value; dr2=document.f1.A1.value; dr3=document.f1.pc22.value;
		count=count+1;

		if(count==1){
			document.f1.t1a.value=dr1; document.f1.t1b.value=dr2; document.f1.t1c.value=dr3;
		}
		else if (count==2) {
			document.f1.t2a.value=dr1; document.f1.t2b.value=dr2; document.f1.t2c.value=dr3;
		}
		else if (count==3) {
			document.f1.t3a.value=dr1; document.f1.t3b.value=dr2; document.f1.t3c.value=dr3;
		}
		else if (count==4) {
			document.f1.t4a.value=dr1; document.f1.t4b.value=dr2; document.f1.t4c.value=dr3;
		}
		else if (count==5) {
			document.f1.t5a.value=dr1; document.f1.t5b.value=dr2; document.f1.t5c.value=dr3;
		}
		else {
			alert ("The observation table is full. Refresh the page to continue.");
		}

	}
	
	else {
		alert("Calculate the required variables first!");
	}
}
