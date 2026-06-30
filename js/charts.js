window.addEventListener('DOMContentLoaded', () => {
    // === 新增：创建并加载图表专属背景图片 ===
    const chartBgImg = new Image();
    chartBgImg.src = '..images/图表背景.webp'; // 这里换成你自己的图片路径（比如纸张纹理、淡色水彩等）
    // ===================== 第一个图表配置（发病率） =====================
    const option1 = {
      backgroundColor: '图表背景.webp',
      title: {
        text: '共济失调核心发病率统计',
        left: 'center',
        textStyle: { color: '#ffffff', fontSize: 16, fontWeight: 600 }
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(212, 219, 235, 0.9)',
        borderColor: '#3b82f6',
        textStyle: { color: '#fff' }
      },
      grid: { containLabel: true, bottom: 20 },
      xAxis: {
        type: 'category',
        data: ['儿童共济失调总体', '遗传性小脑共济失调'],
        axisLine: { lineStyle: { color: '#3b82f6' } },
        axisLabel: { color: '#becae8', fontSize: 11 },
        axisTick: { show: false }
      },
      yAxis: {
        type: 'value',
        name: '发病率（/10万）',
        axisLine: { lineStyle: { color: '#3b82f6' } },
        axisLabel: { color: '#d1d8ea', fontSize: 11 },
        splitLine: { lineStyle: { color: '#e2e8f0', type: 'dashed' } }
      },
      series: [
        {
          name: '发病率',
          type: 'bar',
          data: [26, 3],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#3b82f6' },
              { offset: 1, color: '#1d4ed8' }
            ]),
            borderRadius: 6
          },
          label: {
            show: true,
            position: 'top',
            color: '#cdd6ea',
            fontSize: 11,
            formatter: '{c}/10万'
          }
        }
      ]
    };

    // ===================== 第二个图表配置（专科分布） =====================
    const option2 = {
      backgroundColor: '#000000',
      title: {
        text: '英德意三国共济失调患者SAC专科就诊分布',
        left: 'center',
        textStyle: { color: '#ffffff', fontSize: 15, fontWeight: 600 }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        backgroundColor: 'rgba(191, 202, 226, 0.9)',
        borderColor: '#3b82f6',
        textStyle: { color: '#fff' }
      },
      legend: {
        data: ['英国(n=248)', '德国(n=84)', '意大利(n=139)'],
        top: 30,
        textStyle: { color: '#d2d7e5', fontSize: 11 }
      },
      grid: { containLabel: true, top: 75, bottom: 10 },
      xAxis: {
        type: 'category',
        data: ['从未就诊SAC', '当前就诊SAC', '既往就诊停止'],
        axisLine: { lineStyle: { color: '#3b82f6' } },
        axisLabel: { color: '#c8d2e8', fontSize: 11 }
      },
      yAxis: {
        type: 'value',
        name: '患者占比（%）',
        max: 70,
        axisLine: { lineStyle: { color: '#3b82f6' } },
        splitLine: { lineStyle: { color: '#e2e8f0', type: 'dashed' } }
      },
      series: [
        {
          name: '英国(n=248)',
          type: 'bar',
          barGap: 0.2,
          data: [51.6, 29, 19.4],
          itemStyle: { color: '#3b82f6', borderRadius: 4 },
          label: { show: true, position: 'top', color: '#0f172a', fontSize: 10, formatter: '{c}%' }
        },
        {
          name: '德国(n=84)',
          type: 'bar',
          data: [23.4, 57.1, 15.5],
          itemStyle: { color: '#1d4ed8', borderRadius: 4 },
          label: { show: true, position: 'top', color: '#c0cdeb', fontSize: 10, formatter: '{c}%' }
        },
        {
          name: '意大利(n=139)',
          type: 'bar',
          data: [19.4, 59, 21.6],
          itemStyle: { color: '#0c4a6e', borderRadius: 4 },
          label: { show: true, position: 'top', color: '#c9d6f5', fontSize: 10, formatter: '{c}%' }
        }
      ]
    };

    // ===================== 第三个图表配置（修正嵌套死锁） =====================
    const option3 = {
      backgroundColor: '#000000',
      title: {
        text: '共济失调患者停止SAC专科就诊原因分布',
        left: 'center',
        textStyle: { color: '#ffffff', fontSize: 15, fontWeight: 600 }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        backgroundColor: 'rgba(204, 214, 236, 0.9)',
        borderColor: '#3b82f6',
        textStyle: { color: '#fff' }
      },
      legend: {
        data: ['英国', '德国', '意大利'],
        top: 30,
        textStyle: { color: '#d0dcf8', fontSize: 11 }
      },
      grid: { containLabel: true, top: 75, left: 10, bottom: 10 },
      yAxis: {
        type: 'category',
        data: ['交通困难', '无帮助', '无法转诊', '本地同等医疗', '其他原因', '不确定', '中心关闭'],
        axisLine: { lineStyle: { color: '#3b82f6' } },
        axisLabel: { color: '#ccdbfe', fontSize: 11 }
      },
      xAxis: {
        type: 'value',
        name: '占比（%）',
        max: 35,
        axisLine: { lineStyle: { color: '#3b82f6' } },
        splitLine: { lineStyle: { color: '#e2e8f0', type: 'dashed' } }
      },
      series: [
        {
          name: '英国',
          type: 'bar',
          barGap: 0.2,
          data: [25.5, 12.8, 14.9, 4.3, 10.6, 4.3, 25.5],
          itemStyle: { color: '#3b82f6', borderRadius: 4 },
          label: { show: true, position: 'right', color: '#b8cdff', fontSize: 9, formatter: '{c}%' }
        },
        {
          name: '德国',
          type: 'bar',
          data: [16.7, 3.3, 3.3, 13.3, 33.4, 30, 0],
          itemStyle: { color: '#1d4ed8', borderRadius: 4 },
          label: { show: true, position: 'right', color: '#b2c9ff', fontSize: 9, formatter: '{c}%' }
        },
        {
          name: '意大利',
          type: 'bar',
          data: [26.6, 17.8, 0, 17.8, 20, 17.8, 0],
          itemStyle: { color: '#0c4a6e', borderRadius: 4 },
          label: { show: true, position: 'right', color: '#bfd1fa', fontSize: 9, formatter: '{c}%' }
        }
      ]
    };
    // ===================== 第四个图表配置（医疗改进诉求） =====================
const option4 = {
  backgroundColor: '#000000',
  title: {
    text: '共济失调患者医疗改进诉求占比',
    left: 'center',
    textStyle: { color: '#ffffff', fontSize: 18, fontWeight: 600 }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    backgroundColor: 'rgba(220, 224, 235, 0.9)',
    borderColor: '#3b82f6',
    textStyle: { color: '#fff' }
  },
  legend: {
    data: ['英国', '德国', '意大利'],
    top: 30,
    textStyle: { color: '#ffffff', fontSize: 12 },
    itemGap: 20
  },
  grid: { containLabel: true, top: 80, left: 140 },
  yAxis: {
    type: 'category',
    data: ['完善现有治疗方案科普', '获得自主管理疾病指导', '日常生活适配实操建议', '增加康复理疗可及性', '普及疾病相关科普信息', '优化症状对症管理方案', '更早获得明确分型诊断', '居家改造适配指导', '无法前往SAC时保障持续医疗'],
    axisLine: { lineStyle: { color: '#3b82f6' } },
    axisLabel: { color: '#d7dff0', fontSize: 11 },
    axisTick: { show: false }
  },
  xAxis: {
    type: 'value',
    name: '诉求占比（%）',
    max: 65,
    axisLine: { lineStyle: { color: '#3b82f6' } },
    axisLabel: { color: '#d6ddef', fontSize: 12 },
    splitLine: { lineStyle: { color: '#e2e8f0', type: 'dashed' } }
  },
  series: [
    {
      name: '英国',
      type: 'bar',
      barGap: 0.2,
      data: [61.71, 55.86, 51.35, 49.55, 40.54, 39.19, 30.63, 36.94, 21.17],
      itemStyle: { color: '#3b82f6', borderRadius: 4 },
      label: { show: true, position: 'right', color: '#cbdbff', fontSize: 10, formatter: '{c}%' },
      emphasis: { itemStyle: { color: '#60a5fa' } }
    },
    {
      name: '德国',
      type: 'bar',
      data: [0, 41.54, 44.62, 30.77, 38.46, 33.85, 21.54, 30.77, 23.08],
      itemStyle: { color: '#1d4ed8', borderRadius: 4 },
      label: { show: true, position: 'right', color: '#d6e2ff', fontSize: 10, formatter: '{c}%' },
      emphasis: { itemStyle: { color: '#3b82f6' } }
    },
    {
      name: '意大利',
      type: 'bar',
      data: [54.17, 53.33, 46.67, 52.50, 40, 34.17, 18.33, 16.67, 34.17],
      itemStyle: { color: '#0c4a6e', borderRadius: 4 },
      label: { show: true, position: 'right', color: '#d2e0ff', fontSize: 10, formatter: '{c}%' },
      emphasis: { itemStyle: { color: '#1e6091' } }
    }
  ]
};

// ===================== 第五个图表配置（ARSACS临床症状发生率） =====================
const option5 = {
  backgroundColor: '#000000',
  title: {
    text: 'ARSACS常染色体隐性共济失调临床症状发生率',
    left: 'center',
    textStyle: { color: '#ffffff', fontSize: 18, fontWeight: 600 }
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderColor: '#3b82f6',
    textStyle: { color: '#fff' }
  },
  grid: { containLabel: true, left: 120 },
  xAxis: {
    type: 'value',
    name: '症状发生率（%）',
    max: 100,
    axisLine: { lineStyle: { color: '#3b82f6' } },
    axisLabel: { color: '#0f172a', fontSize: 12 },
    splitLine: { lineStyle: { color: '#e2e8f0', type: 'dashed' } }
  },
  yAxis: {
    type: 'category',
    data: ['认知损害', '平衡障碍', '疲劳', '手部精细灵巧度下降', '工作能力受影响', '休闲社交受限', '行走困难/下肢僵硬', '肌肉萎缩无力', '构音障碍/吞咽困难', '情绪挫败感', '肌肉抽筋痉挛', '疼痛', '大小便功能异常', '抑郁', '焦虑'],
    axisLine: { lineStyle: { color: '#3b82f6' } },
    axisLabel: { color: '#ffffff', fontSize: 11 },
    axisTick: { show: false }
  },
  series: [
    {
      name: '症状发生率',
      type: 'bar',
      data: [83.3, 91.7, 83.3, 75, 100, 75, 58.3, 66.7, 41.7, 50, 41.7, 33.3, 33.3, 33.3, 16.7],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#3b82f6' },
          { offset: 1, color: '#1d4ed8' }
        ]),
        borderRadius: 4
      },
      label: {
        show: true,
        position: 'right',
        color: '#ffffff',
        fontSize: 10,
        formatter: '{c}%'
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#60a5fa' },
            { offset: 1, color: '#3b82f6' }
          ])
        }
      }
    }
  ]
};


// ===================== 第六个图表配置（共济失调遗传分型饼图） =====================
const option6 = {
  backgroundColor: '#000000',
  title: {
    text: '共济失调遗传分型与核心亚型分类',
    left: 'center',
    textStyle: { color: '#0f172a', fontSize: 18, fontWeight: 600 }
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderColor: '#3b82f6',
    textStyle: { color: '#ffffff' }
  },
  legend: {
    top: 30,
    textStyle: { color: '#ffffff', fontSize: 12 },
    itemGap: 15
  },
  series: [
    {
      name: '遗传分型',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 6,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'outside',
        color: '#ffffff',
        fontSize: 11,
        formatter: '{b}: {d}%'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
          fontWeight: 'bold',
          color: '#1d4ed8'
        }
      },
      data: [
        { value: 50, name: '常染色体显性遗传(AD)', itemStyle: { color: '#3b82f6' } },
        { value: 30, name: '常染色体隐性遗传(AR)', itemStyle: { color: '#1d4ed8' } },
        { value: 12, name: '线粒体遗传(母系)', itemStyle: { color: '#0c4a6e' } },
        { value: 8, name: 'X连锁遗传', itemStyle: { color: '#1e6091' } }
      ]
    }
  ]
};


// ===================== 第七个图表配置（孤儿药获批清单散点图） =====================
const option7 = {
  backgroundColor:"#000000", // 自动适配你在 charts.js 顶部引入的图片背景
  title: {
    text: '欧美地区共济失调孤儿药获批清单',
    left: 'center',
    textStyle: { color: '#ffffff', fontSize: 18, fontWeight: 600 }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderColor: '#3b82f6',
    textStyle: { color: '#fff' }
  },
  legend: {
    data: ['欧盟获批', '美国获批'],
    top: 30,
    textStyle: { color: '#ffffff', fontSize: 12 },
    itemGap: 20
  },
  grid: { 
    containLabel: true, 
    top: 80, 
    left: 120,
    show: true,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // 为散点图绘图区加一层50%透明保护，防止干扰读数
    borderWidth: 0
  },
  yAxis: {
    type: 'category',
    data: ['Befiradol fumarate', 'Rovatirelin', 'Troriluzole hydrochloride', 'Acetylleucine', 'Trans-resveratrol', 'Ceftriaxone', '4-aminopyridine', 'RNA核苷酸类药物'],
    axisLine: { lineStyle: { color: '#3b82f6' } },
    axisLabel: { color: '#e1e7f7', fontSize: 11 },
    axisTick: { show: false }
  },
  xAxis: {
    type: 'value',
    name: '获批年份',
    min: 2015,
    max: 2025,
    axisLine: { lineStyle: { color: '#3b82f6' } },
    axisLabel: { color: '#d2daed', fontSize: 12 },
    splitLine: { lineStyle: { color: '#e2e8f0', type: 'dashed' } }
  },
  series: [
    {
      name: '欧盟获批',
      type: 'scatter',
      symbolSize: 12,
      data: [
        [2024, 'Befiradol fumarate'],
        [2022, 'Rovatirelin'],
        [2021, 'Troriluzole hydrochloride'],
        [2018, 'Acetylleucine'],
        [2017, 'Trans-resveratrol'],
        [2015, 'Ceftriaxone']
      ],
      itemStyle: { color: '#86a8de', borderColor: '#fff', borderWidth: 2 },
      emphasis: { symbolSize: 16, itemStyle: { color: '#60a5fa' } }
    },
    {
      name: '美国获批',
      type: 'scatter',
      symbolSize: 12,
      data: [
        [2025, 'Befiradol fumarate'],
        [2025, 'RNA核苷酸类药物'],
        [2024, '4-aminopyridine'],
        [2022, 'Rovatirelin']
      ],
      itemStyle: { color: '#1d4ed8', borderColor: '#fff', borderWidth: 2 },
      emphasis: { symbolSize: 16, itemStyle: { color: '#3b82f6' } }
    }
  ]
};

// ===================== 第八个图表配置（SCA疾病进展与亚型SARA评分预测） =====================
const option8 = {
  backgroundColor: chartBgImg, // 自动适配你在 charts.js 顶部引入的图片背景
  title: {
    text: 'SCA不同亚型随发病年限的SARA评分进展预测',
    left: 'center',
    textStyle: { color: '#ffffff', fontSize: 18, fontWeight: 600 },
    subtext: '纵向区域对应疾病三期划分：代偿期(SARA<6) ➔ 失代偿期 ➔ 功能衰竭期',
    subtextStyle: { color: '#ccd7e6', fontSize: 12 }
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderColor: '#3b82f6',
    textStyle: { color: '#fff' }
  },
  legend: {
    data: ['SCA1型 (年均+2.11分)', 'SCA3型 (年均+1.56分)', 'SCA2型 (年均+1.40分)', 'SCA6型 (年均+0.60分)'],
    top: 55,
    textStyle: { color: '#dae0ef', fontSize: 11 },
    itemGap: 15
  },
  grid: { 
    containLabel: true, 
    top: 110, 
    bottom: 20,
    left: 40,
    right: 40,
    show: true,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // 绘图区半透明保护
    borderWidth: 0
  },
  xAxis: {
    type: 'category',
    name: '发病年限',
    nameLocation: 'end',
    data: ['发病初期', '第2年', '第4年', '第6年', '第8年', '第10年', '第12年'],
    axisLine: { lineStyle: { color: '#3b82f6' } },
    axisLabel: { color: '#c9d2e7', fontSize: 11 }
  },
  yAxis: {
    type: 'value',
    name: 'SARA量表评分 (分)',
    min: 0,
    max: 30,
    axisLine: { lineStyle: { color: '#3b82f6' } },
    splitLine: { lineStyle: { color: '#e2e8f0', type: 'dashed' } },
    // 运用辅助区（markArea）将医学上的“三期”完美融于图表背景中
    markArea: {
      silent: true,
      data: [
        [
          { name: '早期 (代偿期)\nSARA < 6分\n生活自理', yAxis: 0, itemStyle: { color: 'rgba(206, 225, 235, 0.08)' } },
          { yAxis: 6 }
        ],
        [
          { name: '中期 (失代偿期)\n依赖助行器/呛咳\n丧失独立外出能力', yAxis: 6, itemStyle: { color: 'rgba(193, 200, 222, 0.05)' } },
          { yAxis: 18 }
        ],
        [
          { name: '晚期 (功能衰竭期)\n依赖轮椅或卧床\n眼球操控/呼吸机', yAxis: 18, itemStyle: { color: 'rgba(227, 237, 243, 0.08)' } },
          { yAxis: 30 }
        ]
      ],
      label: {
        position: 'right',
        color: '#cfd8e4',
        fontSize: 11,
        fontStyle: 'italic',
        lineHeight: 16
      }
    }
  },
  series: [
    {
      name: 'SCA1型 (年均+2.11分)',
      type: 'line',
      symbolSize: 8,
      smooth: true,
      data: [2.0, 6.22, 10.44, 14.66, 18.88, 23.1, 27.32], // 模拟基础分2分后的年均递增轨迹
      itemStyle: { color: '#ef4444' }, // 快速进展型用警示红
      lineStyle: { width: 3 }
    },
    {
      name: 'SCA3型 (年均+1.56分)',
      type: 'line',
      symbolSize: 8,
      smooth: true,
      data: [2.0, 5.12, 8.24, 11.36, 14.48, 17.6, 20.72], // 我国主流亚型进展轨迹
      itemStyle: { color: '#3b82f6' },
      lineStyle: { width: 3 }
    },
    {
      name: 'SCA2型 (年均+1.40分)',
      type: 'line',
      symbolSize: 6,
      smooth: true,
      data: [2.0, 4.8, 7.6, 10.4, 13.2, 16.0, 18.8],
      itemStyle: { color: '#1d4ed8' },
      lineStyle: { width: 2, type: 'dashed' } // 用虚线做区分
    },
    {
      name: 'SCA6型 (年均+0.60分)',
      type: 'line',
      symbolSize: 8,
      smooth: true,
      data: [2.0, 3.2, 4.4, 5.6, 6.8, 8.0, 9.2], // 晚发缓慢型进展轨迹
      itemStyle: { color: '#10b981' }, // 缓慢型用温和绿
      lineStyle: { width: 3 }
    }
  ]
};

    // ===================== 初始化渲染 =====================
    const myChart1 = echarts.init(document.getElementById('chart1'));
    myChart1.setOption(option1);

    const myChart2 = echarts.init(document.getElementById('chart2'));
    myChart2.setOption(option2);

    const myChart3 = echarts.init(document.getElementById('chart3')); // 纠正容器ID绑定
    myChart3.setOption(option3);

    // 全局自适应缩放
    window.addEventListener('resize', () => {
      myChart1.resize();
      myChart2.resize();
      myChart3.resize();
    });

    // ===================== 第九个图表配置（2025医保罕见病药入选与覆盖） =====================
const option9 = {
  backgroundColor: ImageTrackList, // 自动适配你在 charts.js 顶部引入的图片背景
  title: {
    text: '2025年中国国家医保目录罕见病药品调整与覆盖成果',
    left: 'center',
    textStyle: { color: '#ffffff', fontSize: 18, fontWeight: 600 },
    subtext: '截至2025年底：医保累计罕见病药达136个 | 覆盖官方目录69个病种',
    subtextStyle: { color: '#d8e1ee', fontSize: 12 }
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderColor: '#3b82f6',
    textStyle: { color: '#fff' },
    formatter: '{a} <br/>{b}: {c}个 ({d}%)'
  },
  legend: [
    {
      data: ['新增罕见病用药', '新增其他用药'],
      left: '15%',
      top: 50,
      textStyle: { color: '#f2f5fd', fontSize: 11 }
    },
    {
      data: ['医保已覆盖病种', '尚未覆盖病种'],
      right: '15%',
      top: 50,
      textStyle: { color: '#eef2fc', fontSize: 11 }
    }
  ],
  grid: {
    show: true,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // 绘图区半透明保护
    borderWidth: 0
  },
  series: [
    {
      name: '2025当年新增药品结构(共114个)',
      type: 'pie',
      radius: ['35%', '60%'],
      center: ['28%', '60%'], // 放在左侧
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 6, borderColor: '#fff', borderWidth: 2 },
      label: {
        show: true,
        position: 'outside',
        formatter: '{b}\n{c}个 ({d}%)',
        color: '#dde3f2',
        fontSize: 11
      },
      data: [
        { value: 10, name: '新增罕见病用药', itemStyle: { color: '#3b82f6' } },
        { value: 104, name: '新增其他用药', itemStyle: { color: '#e2e8f0' } }
      ]
    },
    {
      name: '官方罕见病目录病种覆盖率',
      type: 'pie',
      radius: ['35%', '60%'],
      center: ['72%', '60%'], // 放在右侧
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 6, borderColor: '#fff', borderWidth: 2 },
      label: {
        show: true,
        position: 'outside',
        formatter: '{b}\n{c}个',
        color: '#dde3f1',
        fontSize: 11
      },
      data: [
        { value: 69, name: '医保已覆盖病种', itemStyle: { color: '#1d4ed8' } },
        // 提示：此处假定一二批官方目录总计病种数，数据如需绝对精确可随官方最新公布调整，这里主要凸显已覆盖的69种
        { value: 138, name: '尚未覆盖病种', itemStyle: { color: 'rgba(15, 23, 42, 0.1)' } }
      ]
    }
  ]
};

// ===================== 第十个图表配置（罕见病万分之一概率视觉化矩阵） =====================
// 生成一个 20x50 的矩阵数据（共 1000 个点，用来模拟 1/10000 的高精缩略感）
const matrixData = [];
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 50; j++) {
    // 故意在矩阵的某些偏僻角落留下 1 两个高亮色块，其余全是暗淡色块，模拟“分散在角落、彼此孤立”
    if ((i === 4 && j === 12) || (i === 15 && j === 38)) {
      matrixData.push([j, i, 1]); // 罕见病患者
    } else {
      matrixData.push([j, i, 0]); // 普通人群
    }
  }
}

const option10 = {
  backgroundColor: chartBgImg, // 自动适配你的图片背景
  title: {
    text: '“万分之一”的具象化：个体孤立与集体沉重',
    left: 'center',
    textStyle: { color: '#ffffff', fontSize: 18, fontWeight: 600 },
    subtext: '在一万人的社交矩阵里，他们可能只是分散在角落、彼此无法相见的一两个像素点',
    subtextStyle: { color: '#b2c6e1', fontSize: 12 }
  },
  tooltip: {
    formatter: function (params) {
      return params.value[2] === 1 
        ? '<span style="color:#4ac7ff;font-weight:bold;">罕见病患者</span>：个体发病率 < 1/10000，彼此孤立' 
        : '普通健康人群';
    },
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderColor: '#3b82f6',
    textStyle: { color: '#fff' }
  },
  visualMap: {
    show: false,
    min: 0,
    max: 1,
    inRange: {
      // 0 代表普通大众（接近背景的极其低调的灰色），1 代表罕见病（极其刺眼的发光蓝/警示红）
      color: ['rgba(72, 120, 188, 0.15)', '#ef4444'] 
    }
  },
  grid: {
    top: 80,
    bottom: 20,
    left: 30,
    right: 30,
    containLabel: false
  },
  xAxis: { type: 'value', show: false, min: 0, max: 50 },
  yAxis: { type: 'value', show: false, min: 0, max: 20 },
  series: [
    {
      name: '人群矩阵',
      type: 'heatmap', // 散点热力矩阵，用于完美的华夫饼效果
      data: matrixData,
      label: { show: false },
      itemStyle: {
        borderColor: 'rgba(255,255,255,0.5)', // 格子微小的白色边框，形成像素风
        borderWidth: 1
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

    // ===================== Pyodide 数据处理运算驱动 =====================
    window.illData = option1.series[0].data;
    window.illName = option1.xAxis.data;

    async function runPyTask() {
      try {
        const pyodide = await loadPyodide();
        pyodide.globals.set("data_list", window.illData);
        pyodide.globals.set("name_list", window.illName);

        const pyResult = pyodide.runPython(`
import statistics
avg_val = statistics.mean(data_list)
max_val = max(data_list)
min_val = min(data_list)
[avg_val, max_val, min_val]
        `);

        const [avg, maxRate, minRate] = pyResult.toJs();
        option1.title.text = `共济失调核心发病率统计 | 平均发病率：${avg.toFixed(2)}/10万`;
        myChart1.setOption(option1);
      } catch (err) {
        console.error("Pyodide 引擎初始化或代码计算发生异常: ", err);
      }
    }
        // 初始化第四个图表并绑定
        const myChart4 = echarts.init(document.getElementById('chart4'));
        myChart4.setOption(option4);

        // 在 window 的 resize 事件监听器里面加上它，保证缩放不变形：
        window.addEventListener('resize', () => {
        // 之前原有的 myChart1, 2, 3 的 resize()...
      myChart4.resize();
     });

     // 初始化第五个图表并绑定
    const myChart5 = echarts.init(document.getElementById('chart5'));
    myChart5.setOption(option5);

    // 在已有的 window 缩放监听器 (resize) 里面加上它：
    window.addEventListener('resize', () => {
      // 之前原有的 myChart1, 2, 3, 4 的 resize()...
      myChart5.resize();
    });


    // 初始化第六个图表并绑定
    const myChart6 = echarts.init(document.getElementById('chart6'));
    myChart6.setOption(option6);

    // 在已有的 window 缩放监听器 (resize) 里面加上它：
    window.addEventListener('resize', () => {
      // 之前原有的 myChart1, 2, 3, 4, 5 的 resize()...
      myChart6.resize();
    });

    // 初始化第七个图表并绑定
    const myChart7 = echarts.init(document.getElementById('chart7'));
    myChart7.setOption(option7);

    // 在已有的 window 缩放监听器 (resize) 里面加上它：
    window.addEventListener('resize', () => {
      // 之前原有的 myChart1, 2, 3, 4, 5, 6 的 resize()...
      myChart7.resize();
    });


    // 初始化第八个图表并绑定
    const myChart8 = echarts.init(document.getElementById('chart8'));
    myChart8.setOption(option8);

    // 在已有的 window 缩放监听器 (resize) 里面加上它，确保拉伸浏览器时不变形：
    window.addEventListener('resize', () => {
      // 之前原有的 myChart1 到 7 的 resize()...
      myChart8.resize();
    });

    // 初始化第九个图表并绑定
    const myChart9 = echarts.init(document.getElementById('chart9'));
    myChart9.setOption(option9);

    // 在已有的 window 缩放监听器 (resize) 里面加上它：
    window.addEventListener('resize', () => {
      // 之前原有的 myChart1 到 8 的 resize()...
      myChart9.resize();
    });

    // 初始化第十个图表并绑定
    const myChart10 = echarts.init(document.getElementById('chart10'));
    myChart10.setOption(option10);

    // 在已有的 window 缩放监听器 (resize) 里面加上它：
    window.addEventListener('resize', () => {
      // 之前原有的 myChart1 到 9 的 resize()...
      myChart10.resize();
    });

    runPyTask();
});