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
