/**
 * 个人简历数据（润色版，内容真实）
 */
export interface WorkItem {
  company: string
  department: string
  title: string
  duties: string[]
  achievements: string[]
  /** 可选：折叠时显示的时间段，如 "2019–2021" */
  period?: string
}

export interface ProjectItem {
  name: string
  description: string
  role: string
  highlights?: string[]
  /** 可选：折叠时显示的时间段 */
  period?: string
}

export const resume = {
  basic: {
    name: 'novolife',
    gender: '男',
    age: 26,
    email: 'mahajana@foxmail.com',
    summary:
      '嵌入式软件工程师，擅长嵌入式系统软件开发与控制电路设计分析。熟悉 ARM Cortex-M、RISC-V 等 MCU 编程，具备医疗器械与消费电子等行业项目经验。',
    /** 首页展示：工作方向与能力标签（不用大段文字） */
    homeTags: [
      '嵌入式软件工程师',
      'C · RTOS',
      'ARM · RISC-V',
      '医疗器械',
      '电路设计',
    ],
  },
  skills: [
    'C / C++',
    'FreeRTOS、μC/OS-II 等实时操作系统',
    'I²C、SPI、USART 等外设通信',
    'ARM Cortex-M、RISC-V 架构 MCU 编程',
    '嵌入式软件设计',
    '电路设计与原理图审核',
    '英语 CET-6',
  ],
  works: [
    {
      company: '某医疗科技股份有限公司',
      department: '电气技术部',
      title: '嵌入式软件工程师',
      period: '2023.10 — 2026.05',
      duties: [
        '负责医疗器械产品的市场调研、软件开发及项目管理',
        '负责或参与多款医疗器械的市场调研与产品功能设计',
        '负责多款产品的软件组件设计、开发与调试，编制软件开发文档',
        '协助产品经理完成医疗器械的检验、注册与考核相关工作',
        '负责产品无线功能的设计、开发与调试，并在公司内部开展无线通信软件开发培训',
      ],
      achievements: [
        '完成电路设计及元件选型工作',
        '负责或参与的多款医疗器械产品软件开发顺利，功能运行正常，待后续检验及注册',
      ],
    },
    {
      company: '成都市/深圳市某科技有限公司',
      department: '软件一组',
      title: '组长',
      period: '2021.10 — 2023.10',
      duties: [
        '担任软件一组组长，负责项目分配、新产品与功能研发及新员工培养',
        '负责旧产品软件重构，将低内聚高耦合架构改写为高内聚低耦合架构',
        '协助硬件工程师完成项目选型与原理图审核',
        '在新硬件架构及新软件 SDK 方案上实现既有产品功能，降本增效，并负责新功能开发',
      ],
      achievements: [
        '完成多类软件项目，为产品新增十余种功能，获得同事与客户认可',
        '培养多名新员工及实习生，充实研发能力，在市场环境恶化情况下维持公司主要营收',
        '完成旧软件框架拆分，重构模式功能与 GUI 两个任务，降低新产品开发难度',
        '协助完成产品方案审定、功能框图编制、原理图审核等工作',
        '在新硬件平台应用新软件架构实现产品功能，新平台显示待机功耗下降约 80%，拓展市场',
      ],
    },
    {
      company: '成都市某实业集团有限公司',
      department: '',
      title: '电气工程师',
      period: '2021.07 — 2021.10',
      duties: [
        '设计动车组列车照明控制系统软件：根据列车控制系统经 TRDP 协议下发的控制信息及车外环境亮度，调节照明灯具亮度与色温',
        '设计动车组列车照明灯具光源板电路及 PCB',
        '设计动车组列车照明系统电气接线及接口定义',
      ],
      achievements: [
        '所设计控制器软件与光源板已应用于贵阳城际动车组及四川新筑磁悬浮列车',
      ],
    },
  ] as WorkItem[],
  projects: [
    {
      name: '便携式家用医疗器械',
      description:
        '便携式家用医疗器械，通过蓝牙实现参数配置。硬件以国产 32F4 系列为核心，采用国产驱动芯片达到进口芯片性能水平。主控软件基于 μC/OS-II，划分控制、采样、交互三任务，架构分为应用层、驱动层、BSP 层。蓝牙采用 Nordic nRF52 超小模组，经串口与主控通信，使用循环队列实现串口与蓝牙消息收发，采用前后台架构。',
      role: '负责除控制算法外的全部软件及硬件电路设计',
      highlights: ['国产 32F4 + 国产电机驱动芯片', 'μC/OS-II 三任务架构', 'nRF52 蓝牙模组 + 串口循环队列'],
    },
    {
      name: '便携式家用医疗器械',
      description:
        '便携式家用三类医疗器械，完全通过蓝牙控制。主控采用 Nordic nRF52 系列，运行 FreeRTOS，划分控制、通信、日志三任务，架构分为事务层、任务层、组件层、驱动层，实现高内聚低耦合。',
      role: '负责全部软件开发与软件文档编制，配合硬件选型与电路设计',
      highlights: ['nRF52 + FreeRTOS', '四层架构', '全蓝牙控制'],
    },
    {
      name: '多用途家庭音频中心',
      description:
        '基于 RISC-V 架构蓝牙音频芯片与 FreeRTOS。功能包括：SPI 控制数字广播芯片实现数字广播及文本播放；I²C 控制调频广播芯片并解码，用于时间同步或广播文本；通过 AVRCP、A2DP 等蓝牙规范连接设备并控制播放；USB/SD 播放本地音频；UART 与从模块通信；高精度 ADC 接收 FM、音频接口、CD Servo、磁带从机等音频并播放。',
      role: '负责多外设驱动开发、uGUI 框架设计与页面适配、驱动整合为 API 并应用于各模式，以及 API 层、GUI 层与操控层整合',
      highlights: [
        '多外设驱动（SPI/I²C/UART/ADC、蓝牙、USB/SD）',
        'uGUI 框架与页面转换',
        '国内同类市场份额前三',
        '迭代开发应急声光、应急广播接收等功能',
      ],
    },
  ] as ProjectItem[],
  education: {
    school: '电子科技大学',
    period: '2017 — 2021',
    college: '信息与软件工程学院',
    major: '软件工程（嵌入式系统）',
    /** 在校经历 */
    campusExperience: [
      '担任软件学院「综合性课程设计」项目《四轴无人飞行器系统设计》小组组长，负责硬件系统搭建、软件架构搭建及多个软件模块编写',
      '在校期间加入校嵌入式工作室，参与工作室「智能家居系统设计」项目',
    ],
  },
}

export type Resume = typeof resume
