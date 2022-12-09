
		$(document).ready(function(){
		   s2 = [0];
		   plot2 = $.jqplot('chart2',[s2],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -60,
					   max: 60,
					   intervals:[-60,-30, 0, 30, 60],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666','#66cc66','#93b75f']
				   }
			   }
		   });
		});
		function perform_meter2(){
		s2[0]=parseFloat(document.getElementById('VC').value);
		plot2 = $.jqplot('chart2',[s2],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -60,
					   max: 60,
					   intervals:[-60,-30, 0, 30, 60],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666','#66cc66','#93b75f']
				   }
			   }
		   });
		}