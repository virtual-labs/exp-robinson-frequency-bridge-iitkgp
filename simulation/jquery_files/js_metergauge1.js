
		$(document).ready(function(){
		   s1 = [0];
		   plot1 = $.jqplot('chart1',[s1],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 20,
					   intervals:[0,5, 10, 15, 20],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666','#66cc66','#93b75f']
				   }
			   }
		   });
		});
		function perform_meter1(){
		s1[0]=parseFloat(document.getElementById('VSH').value);
		plot1 = $.jqplot('chart1',[s1],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -0,
					   max: 20,
					   intervals:[0,5, 10, 15, 20],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666','#66cc66','#93b75f']
				   }
			   }
		   });
		}
