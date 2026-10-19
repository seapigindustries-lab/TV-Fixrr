// Sample content — menu paths/values are plausible starting points to verify against real sets.
// verified: false = not yet checked against a real set. Flip per family when checked.
const SITE_DATA = {
  walkthroughs: [
    {
      brand: 'LG', family: 'C3 OLED', year: 2023, verified: false,
      models: ['OLED42C3', 'OLED48C3', 'OLED55C3', 'OLED65C3', 'OLED77C3', 'OLED83C3'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation (soap-opera effect)', menu: 'Settings → All Settings → Picture → Advanced Settings → Clarity', setting: 'TruMotion', value: 'Off' },
        { symptom: 'black frame insertion', title: 'Turn off OLED Motion Pro if you dislike flicker', menu: 'Settings → All Settings → Picture → Advanced Settings → Clarity', setting: 'OLED Motion Pro', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → All Settings → Picture → Energy Saving', setting: 'Energy Saving Step', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → All Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker (SDR), Cinema (HDR)' },
      ],
    },
    {
      brand: 'LG', family: 'G3 OLED', year: 2024, verified: false,
      models: ['OLED55G3', 'OLED65G3', 'OLED77G3', 'OLED83G3'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Advanced Settings → Clarity', setting: 'TruMotion', value: 'Off' },
        { symptom: 'black frame insertion', title: 'Turn off OLED Motion Pro if you dislike flicker', menu: 'Settings → All Settings → Picture → Advanced Settings → Clarity', setting: 'OLED Motion Pro', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → All Settings → Picture → Energy Saving', setting: 'Energy Saving Step', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → All Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker (SDR), Cinema (HDR)' },
      ],
    },
    {
      brand: 'Samsung', family: 'QN90C Neo QLED', year: 2023, verified: false,
      models: ['QN55QN90C', 'QN65QN90C', 'QN75QN90C', 'QN85QN90C'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Clarity', setting: 'Auto Motion Plus', value: 'Custom — De-Judder 0, De-Blur 0' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving solution', menu: 'Settings → General → Eco Solution', setting: 'Energy Saving Solution', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Samsung', family: 'S95C QD-OLED', year: 2023, verified: false,
      models: ['QD55S95C', 'QD65S95C', 'QD77S95C'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Clarity', setting: 'Auto Motion Plus', value: 'Custom — De-Judder 0, De-Blur 0' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving solution', menu: 'Settings → General → Eco Solution', setting: 'Energy Saving Solution', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Sony', family: 'X90L', year: 2023, verified: false,
      models: ['XR-55X90L', 'XR-65X90L', 'XR-75X90L', 'XR-85X90L'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion → Motionflow', setting: 'Motionflow', value: 'Off (or True Cinema)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor', menu: 'Settings → System → Power & Energy', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom (SDR), Filmmaker (HDR)' },
      ],
    },
    {
      brand: 'Sony', family: 'X95L', year: 2023, verified: false,
      models: ['XR-65X95L', 'XR-75X95L', 'XR-85X95L'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion → Motionflow', setting: 'Motionflow', value: 'Off (or True Cinema)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor', menu: 'Settings → System → Power & Energy', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom (SDR), Filmmaker (HDR)' },
      ],
    },
    {
      brand: 'Vizio', family: 'M-Series Quantum X', year: 2023, verified: false,
      models: ['M55QXM-K01', 'M65QXM-K01', 'M75QXM-K01', 'M85QXM-K01'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion reduction', menu: 'Menu → Picture → Motion Control', setting: 'Motion Reduction', value: 'Off (Judder Reduction 0)' },
        { symptom: 'dynamic contrast', title: 'Set local dimming to your preference', menu: 'Menu → Picture → Active Full Array', setting: 'Active Full Array', value: 'Medium or High (not Off)' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Menu → System', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Menu → Audio', setting: 'Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Calibrated / Calibrated Dark mode as the starting point', menu: 'Menu → Picture → Picture Mode', setting: 'Picture Mode', value: 'Calibrated Dark (SDR)' },
      ],
    },
    {
      brand: 'TCL', family: 'QM8', year: 2023, verified: false,
      models: ['55QM8', '65QM8', '75QM8', '85QM8', '98QM8'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion smoothing', menu: 'Settings → Display & Sound → Picture → Advanced → Motion', setting: 'Motion Smoothing', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Display & Sound → Picture → Advanced', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → System → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Settings → Display & Sound → Sound → Advanced', setting: 'Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie (SDR), Filmmaker (HDR)' },
      ],
    },
  ],
  modelFinders: {
    LG: [
      'Settings (gear) → All Settings → Support → TV Information',
      'Or: sticker on the back of the TV, the box, or your receipt',
    ],
    Samsung: [
      'Settings → Support → About This TV → Model Code',
      'Or: sticker on the back of the TV or the box',
    ],
    Sony: [
      'Settings → System → About → Model name (Google TV)',
      'Older sets: Settings → Help → About',
    ],
    Vizio: [
      'Menu → System → System Information → Model Name',
      'Or: sticker on the back of the TV',
    ],
  },
};
