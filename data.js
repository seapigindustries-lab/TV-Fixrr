// Content phase 1: top-10 brands, current (2025-2026) families + menu layouts researched
// from manufacturer docs, RTINGS calibration pages, and support articles.
// verified: false = researched but not checked against a real set. Flip per family when verified.
const SITE_DATA = {
  walkthroughs: [
    // ---------- LG (webOS — menu layout stable across 2023-2025) ----------
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
      brand: 'LG', family: 'C5 OLED evo', year: 2025, verified: false,
      models: ['OLED48C5', 'OLED55C5', 'OLED65C5', 'OLED77C5', 'OLED83C5'],
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
      brand: 'LG', family: 'G5 OLED evo', year: 2025, verified: false,
      models: ['OLED55G5', 'OLED65G5', 'OLED77G5', 'OLED83G5', 'OLED97G5'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Advanced Settings → Clarity', setting: 'TruMotion', value: 'Off' },
        { symptom: 'black frame insertion', title: 'Turn off OLED Motion Pro if you dislike flicker', menu: 'Settings → All Settings → Picture → Advanced Settings → Clarity', setting: 'OLED Motion Pro', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → All Settings → Picture → Energy Saving', setting: 'Energy Saving Step', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → All Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker (SDR), Cinema (HDR)' },
      ],
    },
    // ---------- Samsung (Tizen — menu layout stable across 2023-2025) ----------
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
      brand: 'Samsung', family: 'QN90F Neo QLED', year: 2025, verified: false,
      models: ['QN55QN90F', 'QN65QN90F', 'QN75QN90F', 'QN85QN90F', 'QN98QN90F'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Picture Clarity Settings', setting: 'Auto Motion Plus', value: 'Custom — Judder Reduction 0, Blur Reduction 0' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving solution', menu: 'Settings → General → Eco Solution', setting: 'Energy Saving Solution', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Samsung', family: 'S95F QD-OLED', year: 2025, verified: false,
      models: ['QD55S95F', 'QD65S95F', 'QD77S95F'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Picture Clarity Settings', setting: 'Auto Motion Plus', value: 'Custom — Judder Reduction 0, Blur Reduction 0' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving solution', menu: 'Settings → General → Eco Solution', setting: 'Energy Saving Solution', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    // ---------- Sony (Google TV) ----------
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
      brand: 'Sony', family: 'BRAVIA 9 II', year: 2025, verified: false,
      models: ['K-65XR90M2', 'K-75XR90M2', 'K-85XR90M2'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion → Motionflow', setting: 'Motionflow', value: 'Off (or True Cinema)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor', menu: 'Settings → System → Power & Energy', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom (SDR), Filmmaker (HDR)' },
      ],
    },
    {
      brand: 'Sony', family: 'BRAVIA 8 II QD-OLED', year: 2025, verified: false,
      models: ['K-55XR80M2', 'K-65XR80M2', 'K-77XR80M2'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion → Motionflow', setting: 'Motionflow', value: 'Off (or True Cinema)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor', menu: 'Settings → System → Power & Energy', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom (SDR), Filmmaker (HDR)' },
      ],
    },
    // ---------- TCL (Google TV) ----------
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
    {
      brand: 'TCL', family: 'QM7K QD-Mini LED', year: 2025, verified: false,
      models: ['55QM7K', '65QM7K', '75QM7K', '85QM7K', '98QM7K'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion smoothing', menu: 'Settings → Display & Sound → Picture → Advanced → Motion', setting: 'Motion Smoothing', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Display & Sound → Picture → Advanced', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → System → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Settings → Display & Sound → Sound → Advanced', setting: 'Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie (SDR), Filmmaker (HDR)' },
      ],
    },
    {
      brand: 'TCL', family: 'QM8K QD-Mini LED', year: 2025, verified: false,
      models: ['55QM8K', '65QM8K', '75QM8K', '85QM8K', '98QM8K'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion smoothing', menu: 'Settings → Display & Sound → Picture → Advanced → Motion', setting: 'Motion Smoothing', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Display & Sound → Picture → Advanced', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → System → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Settings → Display & Sound → Sound → Advanced', setting: 'Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie (SDR), Filmmaker (HDR)' },
      ],
    },
    // ---------- Hisense (Google TV) ----------
    {
      brand: 'Hisense', family: 'U7QG ULED Mini-LED', year: 2025, verified: false,
      models: ['55U7QG', '65U7QG', '75U7QG', '85U7QG', '100U7QG'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Advanced Picture Settings → Motion', setting: 'Motion Enhancement', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Display & Sound → Picture → Advanced Picture Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → System → Energy Saving', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound → Advanced', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Hisense', family: 'U8QG ULED Mini-LED Pro', year: 2025, verified: false,
      models: ['55U8QG', '65U8QG', '75U8QG', '85U8QG', '100U8QG'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Advanced Picture Settings → Motion', setting: 'Motion Enhancement', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Display & Sound → Picture → Advanced Picture Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → System → Energy Saving', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound → Advanced', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    // ---------- Vizio (SmartCast) ----------
    {
      brand: 'Vizio', family: 'M-Series Quantum X', year: 2023, verified: false,
      models: ['M50Q7-J01', 'M55Q7-J01', 'M65Q7-J01', 'M75Q7-J01', 'M85Q7-J01'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion reduction', menu: 'Menu → Picture → Motion Control', setting: 'Motion Reduction', value: 'Off (Judder Reduction 0)' },
        { symptom: 'dynamic contrast', title: 'Set local dimming to your preference', menu: 'Menu → Picture → Active Full Array', setting: 'Active Full Array', value: 'Medium or High (not Off)' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Menu → System', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Menu → Audio', setting: 'Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Calibrated / Calibrated Dark mode as the starting point', menu: 'Menu → Picture → Picture Mode', setting: 'Picture Mode', value: 'Calibrated Dark (SDR)' },
      ],
    },
    {
      brand: 'Vizio', family: 'M-Series Quantum X (2025)', year: 2025, verified: false,
      models: ['M55QXM', 'M65QXM', 'M75QXM', 'M85QXM'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion reduction', menu: 'Menu → Picture → Motion Control', setting: 'Motion Reduction', value: 'Off (Judder Reduction 0)' },
        { symptom: 'dynamic contrast', title: 'Set local dimming to your preference', menu: 'Menu → Picture → Active Full Array', setting: 'Active Full Array', value: 'Medium or High (not Off)' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Menu → System', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Menu → Audio', setting: 'Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Calibrated / Calibrated Dark mode as the starting point', menu: 'Menu → Picture → Picture Mode', setting: 'Picture Mode', value: 'Calibrated Dark (SDR)' },
      ],
    },
    // ---------- Panasonic (Fire TV, 2025 lineup) ----------
    {
      brand: 'Panasonic', family: 'Z95B OLED', year: 2025, verified: false,
      models: ['TV-55Z95B', 'TV-65Z95B', 'TV-75Z95B', 'TV-85Z95B'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Motion', setting: 'Intelligent Frame Creation', value: 'Off' },
        { symptom: 'motion smoothing', title: 'Turn off motion smoother', menu: 'Settings → Picture → Motion', setting: 'Motion Smoother', value: 'Off' },
        { symptom: 'black frame insertion', title: 'Turn off clear motion if flicker bothers you', menu: 'Settings → Picture → Motion', setting: 'Clear Motion', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Picture', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → System → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Audio', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker / Cinema' },
      ],
    },
    {
      brand: 'Panasonic', family: 'W95B Mini-LED', year: 2025, verified: false,
      models: ['TV-55W95B', 'TV-65W95B', 'TV-75W95B', 'TV-85W95B'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Motion', setting: 'Intelligent Frame Creation', value: 'Off' },
        { symptom: 'motion smoothing', title: 'Turn off motion smoother', menu: 'Settings → Picture → Motion', setting: 'Motion Smoother', value: 'Off' },
        { symptom: 'black frame insertion', title: 'Turn off clear motion if flicker bothers you', menu: 'Settings → Picture → Motion', setting: 'Clear Motion', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Picture', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → System → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Audio', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker / Cinema' },
      ],
    },
    // ---------- Philips (Google TV) ----------
    {
      brand: 'Philips', family: 'OLED950', year: 2025, verified: false,
      models: ['55OLED950', '65OLED950', '75OLED950'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion', setting: 'Motion Styles', value: 'Off (Smoothness 0)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → System → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound → Advanced Settings', setting: 'Auto Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Movie mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker / Movie' },
      ],
    },
    {
      brand: 'Philips', family: 'OLED809', year: 2025, verified: false,
      models: ['55OLED809', '65OLED809', '75OLED809', '55OLED819', '65OLED849', '65OLED859', '75OLED889'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion', setting: 'Motion Styles', value: 'Off (Smoothness 0)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → System → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound → Advanced Settings', setting: 'Auto Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Movie mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker / Movie' },
      ],
    },
    // ---------- Toshiba (Fire TV) ----------
    {
      brand: 'Toshiba', family: 'C350 Series', year: 2025, verified: false,
      models: ['43C350NU', '50C350NU', '55C350NU', '65C350NU', '75C350NU', '85C350NU'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion processing (note: known bug — re-enables after restart)', menu: 'Settings → Picture → Advanced Options → Advanced Picture Settings', setting: 'Motion Processing', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Picture → Advanced Options → Advanced Picture Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie / Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie' },
      ],
    },
    {
      brand: 'Toshiba', family: 'Z670 Mini-LED', year: 2025, verified: false,
      models: ['75Z670', '85Z670', '100Z670'],
      steps: [
        { symptom: 'motion smoothing', title: 'Bypass motion smoothing', menu: 'Settings → Picture → Advanced Options', setting: 'Motion Smoothing', value: 'Bypass' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Picture → Advanced Options', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie / Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie' },
      ],
    },
    // ---------- Sharp (Xumo TV, 2025 lineup) ----------
    {
      brand: 'Sharp', family: 'AQUOS QLED (Xumo)', year: 2025, verified: false,
      models: ['55" AQUOS QLED Xumo', '65" AQUOS QLED Xumo', '75" AQUOS QLED Xumo', '85" AQUOS QLED Xumo'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion enhancement', menu: 'Settings → Picture → Advanced', setting: 'Motion Enhancement', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Picture → Advanced', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → System → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Custom mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker / Custom' },
      ],
    },
    // ---------- Samsung (Tizen, 2020-2022) ----------
    {
      brand: 'Samsung', family: 'Q90T QLED', year: 2020, verified: false,
      models: ['QN55Q90T', 'QN65Q90T', 'QN75Q90T', 'QN85Q90T'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Auto Motion Plus Settings', setting: 'Auto Motion Plus', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point (Filmmaker mode arrived in 2021)', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie' },
      ],
    },
    {
      brand: 'Samsung', family: 'TU8000 Crystal UHD', year: 2020, verified: false,
      models: ['TU43TU8000', 'TU50TU8000', 'TU55TU8000', 'TU65TU8000', 'TU75TU8000', 'TU85TU8000'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Auto Motion Plus Settings', setting: 'Auto Motion Plus', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie' },
      ],
    },
    {
      brand: 'Samsung', family: 'QN90A Neo QLED', year: 2021, verified: false,
      models: ['QN55QN90A', 'QN65QN90A', 'QN75QN90A', 'QN85QN90A'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Auto Motion Plus Settings', setting: 'Auto Motion Plus', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving solution', menu: 'Settings → General → Eco Solution', setting: 'Energy Saving Solution', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Samsung', family: 'AU8000 Crystal UHD', year: 2021, verified: false,
      models: ['50AU8000', '55AU8000', '65AU8000', '75AU8000', '85AU8000'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Auto Motion Plus Settings', setting: 'Auto Motion Plus', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Samsung', family: 'S95B QD-OLED', year: 2022, verified: false,
      models: ['QD55S95B', 'QD65S95B', 'QD77S95B'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Auto Motion Plus Settings', setting: 'Auto Motion Plus', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Samsung', family: 'QN90B Neo QLED', year: 2022, verified: false,
      models: ['QN55QN90B', 'QN65QN90B', 'QN75QN90B', 'QN85QN90B'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Expert Settings → Auto Motion Plus Settings', setting: 'Auto Motion Plus', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off contrast enhancer', menu: 'Settings → Picture → Expert Settings', setting: 'Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable ambient light detection', menu: 'Settings → General → Eco Solution', setting: 'Ambient Light Detection', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving solution', menu: 'Settings → General → Eco Solution', setting: 'Energy Saving Solution', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Sound → Expert Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    // ---------- LG (webOS 5/6, 2020-2022) ----------
    {
      brand: 'LG', family: 'CX OLED', year: 2020, verified: false,
      models: ['OLED55CX', 'OLED65CX', 'OLED77CX'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Picture Mode Settings → Picture Option', setting: 'TruMotion', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Mode Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving', menu: 'Settings → All Settings → General → Energy Saving', setting: 'Energy Saving Step', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → All Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker (SDR), Cinema (HDR)' },
      ],
    },
    {
      brand: 'LG', family: 'SM9000 NanoCell', year: 2020, verified: false,
      models: ['55SM9000', '65SM9000', '75SM9000', '86SM9000'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Picture Mode Settings → Picture Option', setting: 'TruMotion', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Mode Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving', menu: 'Settings → All Settings → General → Energy Saving', setting: 'Energy Saving Step', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → All Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker (SDR), Cinema (HDR)' },
      ],
    },
    {
      brand: 'LG', family: 'C1 OLED', year: 2021, verified: false,
      models: ['OLED55C1', 'OLED65C1', 'OLED77C1', 'OLED83C1'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Advanced Settings → Clarity', setting: 'TruMotion', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving', menu: 'Settings → All Settings → General → Energy Saving', setting: 'Energy Saving Step', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → All Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker (SDR), Cinema (HDR)' },
      ],
    },
    {
      brand: 'LG', family: 'QNED90', year: 2021, verified: false,
      models: ['55QNED90', '65QNED90', '75QNED90', '85QNED90'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Advanced Settings → Clarity', setting: 'TruMotion', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving', menu: 'Settings → All Settings → General → Energy Saving', setting: 'Energy Saving Step', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → All Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker (SDR), Cinema (HDR)' },
      ],
    },
    {
      brand: 'LG', family: 'C2 OLED', year: 2022, verified: false,
      models: ['OLED48C2', 'OLED55C2', 'OLED65C2', 'OLED77C2', 'OLED83C2'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Advanced Settings → Clarity', setting: 'TruMotion', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving', menu: 'Settings → All Settings → General → Energy Saving', setting: 'Energy Saving Step', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Cinema mode as the starting point', menu: 'Settings → All Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker (SDR), Cinema (HDR)' },
      ],
    },
    // ---------- Sony (Android TV 9 / Google TV, 2020-2022) ----------
    {
      brand: 'Sony', family: 'X900H', year: 2020, verified: false,
      models: ['XBR-55X900H', 'XBR-65X900H', 'XBR-75X900H'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Advanced Settings → Motion', setting: 'Motionflow', value: 'Off (or Custom)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor (if available)', menu: 'Settings → Device Preferences → Display & Sound', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom mode as the starting point (Filmmaker mode arrived in 2021)', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom' },
      ],
    },
    {
      brand: 'Sony', family: 'A8H OLED', year: 2020, verified: false,
      models: ['XBR-55A8H', 'XBR-65A8H'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Advanced Settings → Motion', setting: 'Motionflow', value: 'Off (or Custom)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor (if available)', menu: 'Settings → Device Preferences → Display & Sound', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom' },
      ],
    },
    {
      brand: 'Sony', family: 'X90J', year: 2021, verified: false,
      models: ['XR-55X90J', 'XR-65X90J', 'XR-75X90J', 'XR-85X90J'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion', setting: 'Motionflow', value: 'Off (or Custom)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor', menu: 'Settings → System → Power', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom, Filmmaker' },
      ],
    },
    {
      brand: 'Sony', family: 'A90J OLED', year: 2021, verified: false,
      models: ['XR-55A90J', 'XR-65A90J', 'XR-77A90J'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion', setting: 'Motionflow', value: 'Off (or Custom)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor', menu: 'Settings → System → Power', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom, Filmmaker' },
      ],
    },
    {
      brand: 'Sony', family: 'X90K', year: 2022, verified: false,
      models: ['XR-55X90K', 'XR-65X90K', 'XR-75X90K', 'XR-85X90K'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion', setting: 'Motionflow', value: 'Off (or Custom)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor', menu: 'Settings → System → Power', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom, Filmmaker' },
      ],
    },
    {
      brand: 'Sony', family: 'A80K OLED', year: 2022, verified: false,
      models: ['XR-55A80K', 'XR-65A80K', 'XR-77A80K'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Motion', setting: 'Motionflow', value: 'Off (or Custom)' },
        { symptom: 'dynamic contrast', title: 'Turn off advanced contrast enhancer', menu: 'Settings → Display & Sound → Picture → Advanced Settings', setting: 'Advanced Contrast Enhancer', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the light sensor', menu: 'Settings → System → Power', setting: 'Light Sensor', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → Display & Sound → Sound', setting: 'Auto Volume', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom, Filmmaker' },
      ],
    },
    // ---------- TCL (Roku TV, 2020-2022) ----------
    {
      brand: 'TCL', family: '6-Series R635', year: 2020, verified: false,
      models: ['55R635', '65R635', '75R635'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off action smoothing', menu: 'While playing content: ✱ (Star) → Picture settings → Advanced picture settings', setting: 'Action Smoothing', value: 'Off or Low (6-Series only)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'While playing content: ✱ (Star) → Picture settings → Advanced picture settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Settings → Audio → Volume modes', setting: 'Leveling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'While playing content: ✱ (Star) → Picture settings → Picture mode', setting: 'Picture mode', value: 'Movie' },
      ],
    },
    {
      brand: 'TCL', family: '6-Series R646', year: 2021, verified: false,
      models: ['55R646', '65R646', '75R646'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off action smoothing', menu: 'While playing content: ✱ (Star) → Picture settings → Advanced picture settings', setting: 'Action Smoothing', value: 'Off or Low (6-Series only)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'While playing content: ✱ (Star) → Picture settings → Advanced picture settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Settings → Audio → Volume modes', setting: 'Leveling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'While playing content: ✱ (Star) → Picture settings → Picture mode', setting: 'Picture mode', value: 'Movie' },
      ],
    },
    {
      brand: 'TCL', family: '6-Series R655', year: 2022, verified: false,
      models: ['55R655', '65R655', '75R655'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off action smoothing', menu: 'While playing content: ✱ (Star) → Picture settings → Advanced picture settings', setting: 'Action Smoothing', value: 'Off or Low (6-Series only)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'While playing content: ✱ (Star) → Picture settings → Advanced picture settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Settings → Audio → Volume modes', setting: 'Leveling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'While playing content: ✱ (Star) → Picture settings → Picture mode', setting: 'Picture mode', value: 'Movie' },
      ],
    },
    // ---------- Hisense (Android TV 9 / Google TV, 2020-2022) ----------
    {
      brand: 'Hisense', family: 'H9G Quantum', year: 2020, verified: false,
      models: ['55H9G', '65H9G'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Motion Enhancement', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → Device Preferences → Power', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point (Filmmaker mode arrived in 2021)', menu: 'Settings → Device Preferences → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie' },
      ],
    },
    {
      brand: 'Hisense', family: 'H8G Quantum', year: 2020, verified: false,
      models: ['43H8G', '50H8G', '55H8G', '65H8G', '75H8G'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Motion Enhancement', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → Device Preferences → Power', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'Settings → Device Preferences → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie' },
      ],
    },
    {
      brand: 'Hisense', family: 'U8G ULED', year: 2021, verified: false,
      models: ['55U8G', '65U8G'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Motion Enhancement', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → Device Preferences → Power', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Device Preferences → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Hisense', family: 'U7G ULED', year: 2021, verified: false,
      models: ['55U7G', '65U7G', '75U7G'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Motion Enhancement', value: 'Custom — Judder Reduction 0, Blur Reduction 0 (or Off)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → Device Preferences → Power', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Device Preferences → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Hisense', family: 'U8H ULED', year: 2022, verified: false,
      models: ['55U8H', '65U8H', '75U8H'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Advanced Picture Settings → Motion', setting: 'Motion Enhancement', value: 'Off (or Custom — Judder 0, Blur 0)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Display & Sound → Picture → Advanced Picture Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → System → Energy Saving', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    {
      brand: 'Hisense', family: 'U7H ULED', year: 2022, verified: false,
      models: ['55U7H', '65U7H', '75U7H'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Display & Sound → Picture → Advanced Picture Settings → Motion', setting: 'Motion Enhancement', value: 'Off (or Custom — Judder 0, Blur 0)' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Display & Sound → Picture → Advanced Picture Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving / auto brightness', menu: 'Settings → System → Energy Saving', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker mode as the starting point', menu: 'Settings → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Filmmaker' },
      ],
    },
    // ---------- Vizio (SmartCast, 2020-2022) ----------
    {
      brand: 'Vizio', family: 'P-Series Quantum X', year: 2020, verified: false,
      models: ['P65QX-H1', 'P75QX-H1'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off judder and motion blur reduction', menu: 'Menu → Picture → Motion Control', setting: 'Judder Reduction / Motion Blur Reduction', value: '0 / Off' },
        { symptom: 'black frame insertion', title: 'Turn off clear action (dims the picture)', menu: 'Menu → Picture → Motion Control', setting: 'Clear Action', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Set local dimming to your preference', menu: 'Menu → Picture', setting: 'Active Full Array', value: 'Medium or High (not Off)' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Menu → System', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Menu → Audio', setting: 'Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Calibrated Dark mode (enable Film Mode)', menu: 'Menu → Picture → Picture Mode', setting: 'Picture Mode / Film Mode', value: 'Calibrated Dark / Film Mode On' },
      ],
    },
    {
      brand: 'Vizio', family: 'M-Series Quantum X (2021)', year: 2021, verified: false,
      models: ['M50Q8-J01', 'M55Q8-J01', 'M65Q8-J01', 'M75Q8-J01', 'M85Q8-J01'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off judder and motion blur reduction', menu: 'Menu → Picture → Motion Control', setting: 'Judder Reduction / Motion Blur Reduction', value: '0 / Off' },
        { symptom: 'black frame insertion', title: 'Turn off clear action (dims the picture)', menu: 'Menu → Picture → Motion Control', setting: 'Clear Action', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Set local dimming to your preference', menu: 'Menu → Picture', setting: 'Active Full Array', value: 'Medium or High (not Off)' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Menu → System', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Menu → Audio', setting: 'Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Calibrated Dark mode (enable Film Mode)', menu: 'Menu → Picture → Picture Mode', setting: 'Picture Mode / Film Mode', value: 'Calibrated Dark / Film Mode On' },
      ],
    },
    {
      brand: 'Vizio', family: 'M-Series Quantum X (2022)', year: 2022, verified: false,
      models: ['M50Q7-J01', 'M55Q7-J01', 'M65Q7-J01', 'M75Q7-J01', 'M85Q7-J01'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off judder and motion blur reduction', menu: 'Menu → Picture → Motion Control', setting: 'Judder Reduction / Motion Blur Reduction', value: '0 / Off' },
        { symptom: 'black frame insertion', title: 'Turn off clear action (dims the picture)', menu: 'Menu → Picture → Motion Control', setting: 'Clear Action', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Set local dimming to your preference', menu: 'Menu → Picture', setting: 'Active Full Array', value: 'Medium or High (not Off)' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Menu → System', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off volume levelling', menu: 'Menu → Audio', setting: 'Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Calibrated Dark mode (enable Film Mode)', menu: 'Menu → Picture → Picture Mode', setting: 'Picture Mode / Film Mode', value: 'Calibrated Dark / Film Mode On' },
      ],
    },
    // ---------- Panasonic (2020-2022) ----------
    {
      brand: 'Panasonic', family: 'HX940', year: 2020, verified: false,
      models: ['TX-55HX940', 'TX-65HX940', 'TX-75HX940'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Motion', setting: 'Intelligent Frame Creation', value: 'Off (or Custom — Blur Reduction 0, Film Smoothing 0)' },
        { symptom: 'black frame insertion', title: 'Turn off clear motion', menu: 'Settings → Picture → Motion', setting: 'Clear Motion', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the ambient sensor (auto brightness / white balance)', menu: 'Settings → Picture → Ambient Sensor', setting: 'Auto Brightness / Auto White Balance', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Cinema mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom / Cinema' },
      ],
    },
    {
      brand: 'Panasonic', family: 'FZ1000 OLED', year: 2021, verified: false,
      models: ['TX-55FZ1000', 'TX-65FZ1000'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Motion', setting: 'Intelligent Frame Creation', value: 'Off (or Custom — Blur Reduction 0, Film Smoothing 0)' },
        { symptom: 'black frame insertion', title: 'Turn off clear motion', menu: 'Settings → Picture → Motion', setting: 'Clear Motion', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the ambient sensor (auto brightness / white balance)', menu: 'Settings → Picture → Ambient Sensor', setting: 'Auto Brightness / Auto White Balance', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Cinema mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom / Cinema' },
      ],
    },
    {
      brand: 'Panasonic', family: 'W95A Mini-LED', year: 2022, verified: false,
      models: ['TX-55W95A', 'TX-65W95A', 'TX-75W95A', 'TX-85W95A'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → Picture → Motion', setting: 'Intelligent Frame Creation', value: 'Off (or Custom — Blur Reduction 0, Film Smoothing 0)' },
        { symptom: 'black frame insertion', title: 'Turn off clear motion', menu: 'Settings → Picture → Motion', setting: 'Clear Motion', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable the ambient sensor (auto brightness / white balance)', menu: 'Settings → Picture → Ambient Sensor', setting: 'Auto Brightness / Auto White Balance', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom / Cinema mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom / Cinema' },
      ],
    },
    // ---------- Philips (Android TV 9/10/11, 2020-2022) ----------
    {
      brand: 'Philips', family: 'OLED805', year: 2020, verified: false,
      models: ['55OLED805', '65OLED805'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Expert Mode Settings → Motion', setting: 'Motion Styles', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → All Settings → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'Settings → All Settings → Picture → Picture', setting: 'Picture Style', value: 'Movie' },
      ],
    },
    {
      brand: 'Philips', family: 'OLED806', year: 2021, verified: false,
      models: ['55OLED806', '65OLED806'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Expert Mode Settings → Motion', setting: 'Motion Styles', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → All Settings → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'Settings → All Settings → Picture → Picture', setting: 'Picture Style', value: 'Movie' },
      ],
    },
    {
      brand: 'Philips', family: 'OLED807', year: 2022, verified: false,
      models: ['55OLED807', '65OLED807', '77OLED807'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion interpolation', menu: 'Settings → All Settings → Picture → Expert Mode Settings → Motion', setting: 'Motion Styles', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → All Settings → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable eco mode', menu: 'Settings → All Settings → Power', setting: 'Eco Mode', value: 'Off' },
        { symptom: 'audio ducking', title: 'Turn off auto volume levelling', menu: 'Settings → All Settings → Sound → Advanced Settings', setting: 'Auto Volume Levelling', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Filmmaker / Movie mode as the starting point', menu: 'Settings → All Settings → Picture → Picture', setting: 'Picture Style', value: 'Filmmaker / Movie' },
      ],
    },
    // ---------- Toshiba (Fire TV, 2020-2022) ----------
    {
      brand: 'Toshiba', family: 'Fire TV (LF621)', year: 2020, verified: false,
      models: ['43LF621U21', '50LF621U21', '55LF621U21'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion processing', menu: 'Settings → Picture → Advanced Options → Advanced Picture Settings', setting: 'Motion Processing', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Picture → Advanced Options → Advanced Picture Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie' },
      ],
    },
    {
      brand: 'Toshiba', family: 'C350 Series', year: 2021, verified: false,
      models: ['43C350KU', '50C350KU', '55C350KU', '65C350KU'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion processing (note: known bug — re-enables after restart)', menu: 'Settings → Picture → Advanced Options → Advanced Picture Settings', setting: 'Motion Processing', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Picture → Advanced Options → Advanced Picture Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie' },
      ],
    },
    {
      brand: 'Toshiba', family: 'M550 Mini-LED', year: 2022, verified: false,
      models: ['65M550KU', '75M550KU'],
      steps: [
        { symptom: 'motion smoothing', title: 'Bypass motion smoothing', menu: 'Settings → Picture → Advanced Options', setting: 'Motion Smoothing', value: 'Bypass' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Picture → Advanced Options', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Movie mode as the starting point', menu: 'Settings → Picture → Picture Mode', setting: 'Picture Mode', value: 'Movie' },
      ],
    },
    // ---------- Sharp (Android TV, 2020-2022) ----------
    {
      brand: 'Sharp', family: 'AQUOS 4K Android TV', year: 2020, verified: false,
      models: ['50" AQUOS Android TV', '55" AQUOS Android TV', '60" AQUOS Android TV', '65" AQUOS Android TV', '70" AQUOS Android TV'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion enhancement', menu: 'MENU → Picture → Advanced Settings', setting: 'Motion Enhancement', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'MENU → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving', menu: 'Settings → Device Preferences → Power', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom mode as the starting point', menu: 'MENU → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom' },
      ],
    },
    {
      brand: 'Sharp', family: 'AQUOS 4K Android TV (2022 refresh)', year: 2022, verified: false,
      models: ['55" AQUOS Android 11 TV', '65" AQUOS Android 11 TV', '75" AQUOS Android 11 TV'],
      steps: [
        { symptom: 'motion smoothing', title: 'Turn off motion enhancement', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Motion Enhancement', value: 'Off' },
        { symptom: 'dynamic contrast', title: 'Turn off dynamic contrast', menu: 'Settings → Device Preferences → Display & Sound → Picture → Advanced Settings', setting: 'Dynamic Contrast', value: 'Off' },
        { symptom: 'energy saving', title: 'Disable energy saving', menu: 'Settings → Device Preferences → Power', setting: 'Energy Saving', value: 'Off' },
        { symptom: 'picture baseline', title: 'Use Custom mode as the starting point', menu: 'Settings → Device Preferences → Display & Sound → Picture → Picture Mode', setting: 'Picture Mode', value: 'Custom' },
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
    TCL: [
      'Settings → System → About → Model name (Google TV)',
      'Or: sticker on the back of the TV or the box',
    ],
    Hisense: [
      'Settings → System → About → Model name (Google TV)',
      'Or: sticker on the back of the TV',
    ],
    Panasonic: [
      'Settings → My Fire TV → About → Model (2025 Fire TV models)',
      'Older Android TV: Settings → Help → System Information',
    ],
    Philips: [
      'Settings → System → About → Model name (Google TV)',
      'Or: sticker on the back of the TV',
    ],
    Toshiba: [
      'Settings → My Fire TV → About → Model (Fire TV models)',
      'Or: sticker on the back of the TV',
    ],
    Sharp: [
      'Settings → System → About → Model name (Xumo TV)',
      'Or: sticker on the back of the TV',
    ],
  },
};
