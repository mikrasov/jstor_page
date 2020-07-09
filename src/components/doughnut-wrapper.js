import React from 'react';
import {Chart, Doughnut} from 'react-chartjs-2';


var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function() {
        originalDoughnutDraw.apply(this, arguments);

        var chart = this.chart.chart;
        var ctx = chart.ctx;
        var width = chart.width;
        var height = chart.height;

        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em Verdana";
        ctx.textBaseline = "middle";

        var text = chart.config.data.text?chart.config.data.text:"",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
    }
});



export default function(props) {
    return <div className={"doughnut-chart"}>
        <Doughnut data={props.data} options={{maintainAspectRatio: true, legend: {display: false,},}} width={50} height={50}/>
    </div>
}




