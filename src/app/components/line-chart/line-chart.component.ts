import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: "Product Performance"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "Visa Payment Gateway"
      }
    },
    series: [{
      data: [1000, 4899, 4755, 5555, 6999, 7200, 7000, 9000, 8500, 7500, 6500, 9100],
      type: 'line'
    }]
  }

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart() {

  }

}
