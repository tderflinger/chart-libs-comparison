import {LitElement, html, css} from 'lit';
import {Chart} from 'chart.js';

import {registerables} from 'chart.js';

/**
 * Doctor density in Munich as a Chart.js bar chart.
 */
export class DoctorChartJs extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
      }
    `;
  }

  async firstUpdated() {
    Chart.register(...registerables);

    const ctx = this.renderRoot.querySelector('#chart-id');
    const data = {
      labels: [
        '01 Altstadt - Lehel',
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
        '25 Laim',
      ],
      datasets: [
        {
          label: 'Inhabitants per doctor',
          data: [
            34.5,
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
            576.9,
          ],
          backgroundColor: '#4b965e',
        },
      ],
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
          },
          xAxes: [
            {
              gridLines: {
                drawBorder: true,
                lineWidth: 0,
              },
            },
          ],
        },
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    };

    new Chart(ctx, config);
  }

  render() {
    return html`
      <div style="display: flex; justify-content: center">
        <div>
          <h1 style="text-align: center; font-family: sans-serif">
            Doctor Density in Munich's Districts 2019
          </h1>
          <canvas id="chart-id" style="width: 800px; height: 800px"></canvas>
        </div>
      </div>
    `;
  }
}

window.customElements.define('doctors-chartjs', DoctorChartJs);
