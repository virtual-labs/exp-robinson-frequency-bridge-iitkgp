
		$(document).ready(function(){
		   s1 = [0];
		   plot3 = $.jqplot('chart3',[s1],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -25,
					   max: 25,
					   intervals:[-12.5, 0, 12.5, 25],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter(){
		s1[0]=parseFloat(document.getElementById('A1').value);
		plot3 = $.jqplot('chart3',[s1],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -25,
					   max: 25,
					   intervals:[-12.5, 0, 12.5, 25],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}
