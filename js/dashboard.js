// Get the canvas element
const canvas = document.getElementById('bar-chart');
const ctx = canvas.getContext('2d');

// Define the data for the chart
const data = [
  { label: 'january', value: 40 },
  { label: 'feburary', value: 60 },
  { label: 'march', value: 40 },
  { label: 'april', value: 100 },
];

// Define the colors for the chart
const colors = ['#ff69b4', '#33cc33', '#ffff66', '#6666ff'];

// Define the chart options
const options = {
  width: canvas.width,
  height: canvas.height,
  margin: 30,
  barWidth: 30,
  barSpacing: 10,
};

// Function to draw the chart
function drawChart() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the bars
  data.forEach((item, index) => {
    const x = options.margin + (index * (options.barWidth + options.barSpacing));
    const y = canvas.height - (item.value * (canvas.height - options.margin * 2)) / 100;
    const height = (item.value * (canvas.height - options.margin * 2)) / 100;

    ctx.fillStyle = colors[index];
    ctx.fillRect(x, y, options.barWidth, height);

    // Draw the label
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(item.label, x + options.barWidth / 2, y - 10);
  });
}

// Draw the chart
drawChart();