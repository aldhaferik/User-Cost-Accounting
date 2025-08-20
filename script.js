(function(){
  // DataTables
  if (window.jQuery) {
    if (document.getElementById('scorecard-table')) {
      jQuery('#scorecard-table').DataTable();
    }
    if (document.getElementById('dual-table')) {
      jQuery('#dual-table').DataTable();
    }
    if (document.getElementById('carbon-table')) {
      jQuery('#carbon-table').DataTable();
    }
  }

  // Charts (Chart.js)
  if (window.Chart) {
    const elSwacc = document.getElementById('swaccChart');
    if (elSwacc) {
      const ctx = elSwacc.getContext('2d');
      const lambdas = Array.from({length: 11}, (_, i) => i/10);
      const rCorp = 0.10; // 10%
      const rSocial = 0.02; // 2%
      const rEff = lambdas.map(l => (1-l)*rCorp + l*rSocial);
      new Chart(ctx, {
        type: 'line',
        data: { labels: lambdas, datasets: [{ label: 'r_eff vs λ', data: rEff }] },
        options: { responsive: true, scales: { y: { ticks: { callback: v => (v*100).toFixed(0)+'%' } }, x: { title: { display:true, text:'λ' } } } }
      });
    }

    const elIncome = document.getElementById('incomeChart');
    if (elIncome) {
      const ctx = elIncome.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Operating Profit (EBIT)', 'Pre‑tax Income', 'Net Income'],
          datasets: [
            { label: 'Traditional', data: [6225, 6006, 3751] },
            { label: 'Sustainable', data: [5228, 5010, 3121] }
          ]
        },
        options: { responsive: true }
      });
    }

    const elCarbon = document.getElementById('carbonChart');
    if (elCarbon) {
      const ctx = elCarbon.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2020','2021','2022','2023','2024','2025','2030','2040'],
          datasets: [
            { label: 'Emissions (Mt CO₂)', data: [4.5,4.4,4.0,3.6,3.3,3.0,2.0,0.0] },
            { label: 'Budget Remaining (Mt)', data: [50.0,45.6,41.6,38.0,34.7,31.7,20.0,0.0] }
          ]
        },
        options: { responsive: true }
      });
    }
  }
})();
