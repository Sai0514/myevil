$.getJSON('/myevil/data/evil-test.json', function(data) {
    var chart = new G2.Chart({
        container: 'evil-chart',
        forceFit: true,
        width: window.innerWidth,
        height: 880,
        // padding: [40, 80, 40, 20],
    });
    chart.source(data);
    chart.tooltip({
        crosshairs: {
            type: 'cross'
        }
    });

    chart.legend({
        position: 'left-top',
        offsetX: 100,
        reversed: true // 图例项逆序显示
    });
    // y轴坐标文本不显示
    chart.axis('Score', {
        grid: null,
        label: false
    });
    // x轴的栅格线居中
    chart.axis('Class', {
        tickLine: null,
        subTickCount: 1, // 次刻度线个数
        subTickLine: {
            lineWidth: 1,
            stroke: '#BFBFBF',
            length: 4
        },
        grid: {
            align: 'center', // 网格顶点从两个刻度中间开始
            lineStyle: {
                stroke: '#8C8C8C',
                lineWidth: 1,
                lineDash: [3, 3]
            }
        }
    });
    chart.point().position('Class*Score').color('Grade').adjust('jitter').shape('circle').opacity(0.65).size(3);
    chart.render();
});