// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('word-echart'));
        function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}
// 指定图表的配置项和数据
        option = {
            title: {
                text: 'Google Trends',
                link: 'http://www.google.com/trends/hottrends'
            },
            tooltip: {
                show: true
            },
            series: [{
                name: 'Google Trends',
                type: 'wordCloud',
                size: ['80%', '80%'],
                textRotation : [0, 45, 90, -45],
                textPadding: 0,
                autoSize: {
                    enable: true,
                    minSize: 14
                },
                data: [
                    {
                        name: "专业技术人员管理",
                        value: 10000,
                        itemStyle: {
                            normal: {
                                color: 'black'
                            }
                        }
                    },
                    {
                        name: "工商保险",
                        value: 6181,
                        itemStyle: createRandomItemStyle()
                    },
                    {
                        name: "劳务报销",
                        value: 4386,
                        itemStyle: createRandomItemStyle()
                    },
                    {
                        name: "公积金",
                        value: 4055,
                        itemStyle: createRandomItemStyle()
                    },
                    {
                        name: "社保综合",
                        value: 2467,
                        itemStyle: createRandomItemStyle()
                    },
                    {
                        name: "医疗保险",
                        value: 2244,
                        itemStyle: createRandomItemStyle()
                    },
                    {
                        name: "人力资源",
                        value: 1898,
                        itemStyle: createRandomItemStyle()
                    },
                    {
                        name: "劳动关系",
                        value: 1484,
                        itemStyle: createRandomItemStyle()
                    },
                    {
                        name: "养老保险",
                        value: 1112,
                        itemStyle: createRandomItemStyle()
                    },
                    {
                        name: "人事考试",
                        value: 965,
                        itemStyle: createRandomItemStyle()
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        /*******************************************/
       
