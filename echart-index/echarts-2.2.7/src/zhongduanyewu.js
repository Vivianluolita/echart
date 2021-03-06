var myChart1 = echarts.init(document.getElementById('bussiness-echart'));
option1 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: '20',
        orient: 'horizontal',
        textStyle: {
            color: '#fff',
        },
        data: ['单位网上经办', '网厅服务', '微信服务', '自助一体机', 'APP服务']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
            { value: 4852, name: '单位网上经办' },
            { value: 2410, name: '网厅服务' },
            { value: 1414, name: '微信服务' },
            { value: 412, name: '自助一体机' },
            { value: 1542, name: 'APP服务' }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
myChart1.setOption(option1);
/* var myChart2 = echarts.init(document.getElementById('bussiness-echart'));
    option2 = {
    title : {
        
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['APP服务','自助一体机','微信服务','网厅服务','单位网上经办']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:25, name:'APP服务'},
                {value:15, name:'自助一体机'},
                {value:10, name:'微信服务'},
                {value:30, name:'网厅服务'},
                {value:20, name:'单位网上经办'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:25, name:'APP服务'},
                {value:15, name:'自助一体机'},
                {value:10, name:'微信服务'},
                {value:30, name:'网厅服务'},
                {value:20, name:'单位网上经办'}
            ]
        }
    ]
};
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);*/