import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Router, 
  Shield, 
  Network, 
  Cpu, 
  HardDrive, 
  Zap, 
  X,
  Activity,
  Database,
  Settings,
  ExternalLink
} from 'lucide-react';

export const Homelab = () => {
  const [selectedDevice, setSelectedDevice] = useState<any>(null);

  const equipment = [
    {
      id: 1,
      name: 'Cisco 1841 Router',
      type: 'Router',
      icon: Router,
      status: 'Online',
      uptime: '247 days',
      cpu: '12%',
      memory: '34%',
      specs: {
        'Model': 'Cisco 1841',
        'CPU': 'MIPS 32-bit @ 266MHz',
        'RAM': '256MB DDR2',
        'Flash': '64MB CompactFlash',
        'Interfaces': '2x FastEthernet, 2x Serial WIC',
        'IOS Version': '15.1(4)M12a',
        'Uptime': '247 days, 14 hours',
        'Last Restart': 'Apr 15, 2024'
      },
      description: 'Enterprise-grade router handling network segmentation and inter-VLAN routing for the homelab environment.',
      purpose: 'Network routing, OSPF, EIGRP protocol testing, and WAN simulation',
      connections: ['ASA-5525', 'SG200-24']
    },
    {
      id: 2,
      name: 'Cisco ASA 5525-X',
      type: 'Firewall',
      icon: Shield,
      status: 'Online',
      uptime: '180 days',
      cpu: '8%',
      memory: '45%',
      specs: {
        'Model': 'ASA 5525-X',
        'Firewall Throughput': '2 Gbps',
        'VPN Throughput': '250 Mbps',
        'Concurrent Sessions': '750,000',
        'VPN Tunnels': '750 IPSec',
        'Interfaces': '8x GigE Copper, 2x SFP+',
        'Software Version': '9.16(4)42',
        'Memory': '8GB RAM, 8GB Flash'
      },
      description: 'Next-generation firewall providing advanced threat protection and VPN capabilities.',
      purpose: 'Perimeter security, intrusion prevention, SSL/IPSec VPN, and threat analysis',
      connections: ['Router-1841', 'SG200-24', 'x3550-M5']
    },
    {
      id: 3,
      name: 'Cisco SG200-24',
      type: 'Switch',
      icon: Network,
      status: 'Online',
      uptime: '89 days',
      cpu: '3%',
      memory: '28%',
      specs: {
        'Model': 'SG200-24',
        'Ports': '24x Gigabit Ethernet + 2x SFP',
        'Switching Capacity': '52 Gbps',
        'MAC Address Table': '8,192 entries',
        'VLANs': '4,096 supported',
        'Firmware': '1.4.2.04',
        'PoE': 'No PoE support',
        'Management': 'Web-based, SNMP'
      },
      description: '24-port managed switch providing VLAN segmentation and Layer 2 switching.',
      purpose: 'VLAN configuration, STP testing, port mirroring, and network segmentation',
      connections: ['ASA-5525', 'x3550-M5', 'Router-1841']
    },
    {
      id: 4,
      name: 'Lenovo x3550 M5',
      type: 'Server',
      icon: Server,
      status: 'Online',
      uptime: '156 days',
      cpu: '67%',
      memory: '78%',
      specs: {
        'Model': 'ThinkServer x3550 M5',
        'CPU': '2x Intel Xeon E5-2650 v4 (24 cores)',
        'RAM': '128GB DDR4 ECC',
        'Storage': '4x 2TB SAS 7.2K + 2x 480GB SSD',
        'RAID': 'Hardware RAID 10',
        'Network': '4x 1GbE + 2x 10GbE SFP+',
        'Hypervisor': 'VMware ESXi 7.0 U3',
        'VMs Running': '12 active virtual machines'
      },
      description: 'High-performance server running virtualized security tools and isolated lab environments.',
      purpose: 'Virtualization platform, security tool hosting, isolated testing environments',
      connections: ['ASA-5525', 'SG200-24']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online': return 'text-green-400';
      case 'Warning': return 'text-yellow-400';
      case 'Offline': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'Online': return 'bg-green-400';
      case 'Warning': return 'bg-yellow-400';
      case 'Offline': return 'bg-red-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient similar to home page */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-red-900/20" />
      
      {/* Main content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white mb-6">
              Cybersecurity{' '}
              <span className="text-red-400">Homelab</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Interactive visualization of my enterprise-grade security infrastructure for hands-on learning and testing
            </p>
          </motion.div>

          {/* Server Rack Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 min-h-[700px] flex justify-center items-center">
              {/* Server Rack SVG */}
              <div className="relative">
                <svg width="400" height="600" viewBox="0 0 400 600" className="mx-auto">
                  {/* Rack Frame */}
                  <defs>
                    <linearGradient id="rackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#374151" />
                      <stop offset="50%" stopColor="#4b5563" />
                      <stop offset="100%" stopColor="#374151" />
                    </linearGradient>
                    <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1f2937" />
                      <stop offset="50%" stopColor="#374151" />
                      <stop offset="100%" stopColor="#1f2937" />
                    </linearGradient>
                  </defs>
                  
                  {/* Rack outline */}
                  <rect x="50" y="20" width="300" height="560" fill="url(#rackGradient)" stroke="#6b7280" strokeWidth="2" rx="8" />
                  
                  {/* Rack mounting holes */}
                  {[...Array(28)].map((_, i) => (
                    <g key={i}>
                      <circle cx="70" cy={50 + i * 20} r="2" fill="#9ca3af" />
                      <circle cx="330" cy={50 + i * 20} r="2" fill="#9ca3af" />
                    </g>
                  ))}
                  
                  {/* Device slots */}
                  {equipment.map((device, index) => {
                    const yPos = 60 + index * 120;
                    return (
                      <g key={device.id}>
                        {/* Device rectangle */}
                        <rect
                          x="80"
                          y={yPos}
                          width="240"
                          height="100"
                          fill="url(#deviceGradient)"
                          stroke={device.status === 'Online' ? '#10b981' : '#ef4444'}
                          strokeWidth="2"
                          rx="4"
                          className="cursor-pointer hover:stroke-red-400 transition-colors duration-200"
                          onClick={() => setSelectedDevice(device)}
                        />
                        
                        {/* Device icon */}
                        <foreignObject x="90" y={yPos + 10} width="40" height="40">
                          <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                            <device.icon className="w-6 h-6 text-red-400" />
                          </div>
                        </foreignObject>
                        
                        {/* Device name */}
                        <text x="140" y={yPos + 25} fill="#ffffff" fontSize="14" fontWeight="600">
                          {device.name}
                        </text>
                        
                        {/* Device type */}
                        <text x="140" y={yPos + 45} fill="#9ca3af" fontSize="12">
                          {device.type}
                        </text>
                        
                        {/* Status indicator */}
                        <circle 
                          cx="300" 
                          cy={yPos + 20} 
                          r="4" 
                          fill={device.status === 'Online' ? '#10b981' : '#ef4444'}
                          className="animate-pulse"
                        />
                        
                        {/* Status text */}
                        <text x="280" y={yPos + 40} fill={device.status === 'Online' ? '#10b981' : '#ef4444'} fontSize="10" textAnchor="middle">
                          {device.status}
                        </text>
                        
                        {/* CPU usage bar */}
                        <rect x="140" y={yPos + 55} width="100" height="8" fill="#374151" rx="4" />
                        <rect 
                          x="140" 
                          y={yPos + 55} 
                          width={parseInt(device.cpu)} 
                          height="8" 
                          fill="#f59e0b" 
                          rx="4"
                        />
                        <text x="140" y={yPos + 75} fill="#9ca3af" fontSize="10">
                          CPU: {device.cpu}
                        </text>
                        
                        {/* Memory usage bar */}
                        <rect x="140" y={yPos + 80} width="100" height="8" fill="#374151" rx="4" />
                        <rect 
                          x="140" 
                          y={yPos + 80} 
                          width={parseInt(device.memory)} 
                          height="8" 
                          fill="#8b5cf6" 
                          rx="4"
                        />
                        <text x="200" y={yPos + 75} fill="#9ca3af" fontSize="10">
                          RAM: {device.memory}
                        </text>
                        
                        {/* Power LED */}
                        <circle 
                          cx="310" 
                          cy={yPos + 80} 
                          r="3" 
                          fill="#10b981"
                          className="animate-pulse"
                        />
                      </g>
                    );
                  })}
                  
                  {/* Rack label */}
                  <text x="200" y="40" fill="#ffffff" fontSize="16" fontWeight="600" textAnchor="middle">
                    Server Rack
                  </text>
                </svg>
                
                {/* Rack info panel */}
                <div className="absolute -right-48 top-0 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-4 w-40">
                  <h3 className="text-white font-semibold text-sm mb-3">Rack Status</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Units Used:</span>
                      <span className="text-white">16U</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Power Draw:</span>
                      <span className="text-green-400">1.2kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Temperature:</span>
                      <span className="text-blue-400">24°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Devices:</span>
                      <span className="text-white">{equipment.length}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Instructions */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-gray-400 text-sm">Click on any device in the rack to view detailed information</p>
              </div>
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">4</div>
              <div className="text-gray-400 text-sm">Devices Online</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">12</div>
              <div className="text-gray-400 text-sm">VMs Running</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400 mb-1">99.8%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">2.1TB</div>
              <div className="text-gray-400 text-sm">Storage Used</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Device details drawer */}
      <AnimatePresence>
        {selectedDevice && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setSelectedDevice(null)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-gray-900 border-l border-gray-700 z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                      <selectedDevice.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedDevice.name}</h2>
                      <p className="text-gray-400">{selectedDevice.type}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDevice(null)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                {/* Status and metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${getStatusDot(selectedDevice.status)} rounded-full`}></div>
                      <span className={`font-semibold ${getStatusColor(selectedDevice.status)}`}>{selectedDevice.status}</span>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">Uptime</span>
                    </div>
                    <span className="font-semibold text-white">{selectedDevice.uptime}</span>
                  </div>
                </div>

                {/* Performance metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="w-4 h-4 text-orange-400" />
                      <span className="text-gray-300 text-sm">CPU Usage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: selectedDevice.cpu }}
                        ></div>
                      </div>
                      <span className="text-white font-semibold text-sm">{selectedDevice.cpu}</span>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300 text-sm">Memory Usage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: selectedDevice.memory }}
                        ></div>
                      </div>
                      <span className="text-white font-semibold text-sm">{selectedDevice.memory}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedDevice.description}</p>
                </div>

                {/* Purpose */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Lab Purpose</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedDevice.purpose}</p>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Technical Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedDevice.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start py-2 border-b border-gray-700/50">
                        <span className="text-gray-400 text-sm font-medium">{key}</span>
                        <span className="text-white text-sm text-right max-w-[60%]">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connections */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Network Connections</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDevice.connections.map((connection, index) => (
                      <div key={index} className="bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2">
                        <span className="text-gray-300 text-sm">{connection}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                    <Settings className="w-4 h-4" />
                    Configure
                  </button>
                  <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 border border-gray-600">
                    <ExternalLink className="w-4 h-4" />
                    Monitor
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};