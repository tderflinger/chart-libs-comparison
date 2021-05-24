import {LitElement, html, css} from 'lit';

/**
 * Doctor density in Munich as an ECharts bar chart.
 */
export class DoctorsECharts extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
      }
    `;
  }

  async firstUpdated() {
    var chartDom = this.renderRoot.querySelector('#chart-id');
    var myChart = window.echarts.init(chartDom);
    var option;
    
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Inhabitants per doctor'],
            top: 'bottom',
        },
        color: ['#4b965e'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['01 Altstadt - Lehel',
            '02 Ludwigsvorstadt - Isarvorstadt',
            '03 Maxvorstadt',
            '04 Schwabing - West',
            '05 Au - Haidhausen',
            '06 Sendling',
            '07 Sendling - Westpark',
            '08 Schwanthalerhöhe',
            '09 Neuhausen - Nymphenburg',
            '10 Moosach',
            '11 Milbertshofen - Am Hart',
            '12 Schwabing - Freimann',
            '13 Bogenhausen',
            '14 Berg am Laim',
            '15 Trudering - Riem',
            '16 Ramersdorf - Perlach',
            '17 Obergiesing - Fasangarten',
            '18 Untergiesing - Harlaching',
            '19 Thalkirchen - Obersendling - Forstenried - Fürstenried - Solln',
            '20 Hadern',
            '21 Pasing - Obermenzing',
            '22 Aubing - Lochhausen - Langwied',
            '23 Allach - Untermenzing',
            '24 Feldmoching - Hasenbergl',
            '25 Laim']
        },
        series: [
            {
                name: 'Inhabitants per doctor',
                type: 'bar',
                data: [34.5,
                  172.5,
                  192.7,
                  410.3,
                  362.7,
                  458.4,
                  903,
                  580.6,
                  295.6,
                  677.4,
                  1472.3,
                  327.7,
                  334.7,
                  1382.4,
                  825.6,
                  824.6,
                  461.9,
                  416,
                  488.5,
                  771.8,
                  283.8,
                  1066.8,
                  1105.7,
                  1410.7,
                  576.9]
            },
        ]
    };
    
    option && myChart.setOption(option);
  }

  render() {
    return html`
      <div style="display: flex; justify-content: center">
        <div>
          <h1 style="text-align: center; font-family: sans-serif">
            Doctor Density in Munich's Districts 2019
          </h1>
          <div id="chart-id" style="width: 900px; height: 800px"></div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('doctors-echarts', DoctorsECharts);
