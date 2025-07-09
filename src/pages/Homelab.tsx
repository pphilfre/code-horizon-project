import { useState } from 'react';
import { motion } from 'framer-motion';
import { CleanCard } from '@/components/ui/clean-card';
import { CleanButton } from '@/components/ui/clean-button';
import { Badge } from '@/components/ui/badge';
import { 
  Server, 
  Router, 
  Shield, 
  Network, 
  Cpu, 
  HardDrive, 
  Zap, 
  Thermometer,
  Info
} from 'lucide-react';

export const Homelab = () => {
  const equipment = [
    {
      id: 1,
      name: 'Cisco 1841 Router',
      type: 'Router',
      icon: Router,
      specs: {
        'CPU': 'MIPS 32-bit @ 266MHz',
        'RAM': '256MB',
        'Flash': '64MB',
        'Interfaces': '2x FastEthernet, 2x Serial',
        'Status': 'Online'
      },
      description: 'Enterprise-grade router for network segmentation and routing protocols',
      position: { x: 20, y: 30 }
    },
    {
      id: 2,
      name: 'Cisco ASA 5525-X',
      type: 'Firewall',
      icon: Shield,
      specs: {
        'Throughput': '2 Gbps',
        'Concurrent Sessions': '750K',
        'VPN Tunnels': '750',
        'Interfaces': '8x GigE, 2x SFP+',
        'Status': 'Online'
      },
      description: 'Next-generation firewall with advanced threat protection',
      position: { x: 50, y: 20 }
    },
    {
      id: 3,
      name: 'Cisco SG200-24',
      type: 'Switch',
      icon: Network,
      specs: {
        'Ports': '24x GigE + 2x SFP',
        'Switching Capacity': '52 Gbps',
        'MAC Table': '8K',
        'VLANs': '4K',
        'Status': 'Online'
      },
      description: '24-port managed switch with VLAN and QoS capabilities',
      position: { x: 80, y: 40 }
    },
    {
      id: 4,
      name: 'Lenovo x3550 M5',
      type: 'Server',
      icon: Server,
      specs: {
        'CPU': '2x Intel Xeon E5-2650 v4',
        'RAM': '128GB DDR4',
        'Storage': '4x 2TB SAS',
        'Network': '4x 1GbE',
        'Status': 'Online'
      },
      description: 'High-performance server for virtualization and security labs',
      position: { x: 40, y: 60 }
    }
  ];

  const [selectedDevice, setSelectedDevice] = useState(null);

  const connections = [
    { from: 1, to: 2, type: 'ethernet' },
    { from: 2, to: 3, type: 'ethernet' },
    { from: 3, to: 4, type: 'ethernet' },
    { from: 1, to: 4, type: 'management' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Homelab</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive visualization of my cybersecurity lab infrastructure
          </p>
        </motion.div>

        {/* Network Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <CleanCard className="p-8 min-h-[500px] relative overflow-hidden">
            <div className="absolute inset-0 tech-grid opacity-10" />
            
            {/* Connection Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              {connections.map((conn, idx) => {
                const fromDevice = equipment.find(e => e.id === conn.from);
                const toDevice = equipment.find(e => e.id === conn.to);
                if (!fromDevice || !toDevice) return null;
                
                const x1 = `${fromDevice.position.x}%`;
                const y1 = `${fromDevice.position.y}%`;
                const x2 = `${toDevice.position.x}%`;
                const y2 = `${toDevice.position.y}%`;
                
                return (
                  <line
                    key={idx}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={conn.type === 'ethernet' ? '#00d4ff' : '#9d4edd'}
                    strokeWidth="2"
                    strokeDasharray={conn.type === 'management' ? '5,5' : '0'}
                    className="animate-pulse"
                  />
                );
              })}
            </svg>

            {/* Equipment Nodes */}
            {equipment.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="absolute cursor-pointer"
                style={{
                  left: `${device.position.x}%`,
                  top: `${device.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10
                }}
                onClick={() => setSelectedDevice(device)}
              >
                <div className="group relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow hover:shadow-accent transition-all duration-300 transform hover:scale-110">
                    <device.icon className="w-8 h-8 text-background" />
                  </div>
                  
                  {/* Device Label */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-subtle">
                      <p className="font-medium text-sm">{device.name}</p>
                      <p className="text-xs text-muted-foreground">{device.type}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-primary" />
                <span className="text-sm text-muted-foreground">Ethernet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-accent" style={{ background: 'repeating-linear-gradient(to right, #9d4edd 0, #9d4edd 5px, transparent 5px, transparent 10px)' }} />
                <span className="text-sm text-muted-foreground">Management</span>
              </div>
            </div>
          </CleanCard>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {equipment.map((device, index) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <CleanCard className="p-6 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <device.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{device.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{device.type}</Badge>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm text-primary font-medium">Online</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{device.description}</p>
                  </div>
                </div>

                {/* Specifications */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm mb-2">Specifications</h4>
                  {Object.entries(device.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">{key}:</span>
                      <span className="text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                  <CleanButton size="sm" variant="outline" className="flex-1">
                    <Info className="w-4 h-4 mr-2" />
                    Details
                  </CleanButton>
                  <CleanButton size="sm" className="flex-1">
                    <Zap className="w-4 h-4 mr-2" />
                    Monitor
                  </CleanButton>
                </div>
              </CleanCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Lab Purpose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <CleanCard className="p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Lab Purpose & Learning</h2>
              <p className="text-muted-foreground mb-8">
                This homelab serves as a comprehensive learning environment for cybersecurity concepts, 
                network administration, and enterprise security implementations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Network Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Implementing and testing network security policies, VLANs, and access controls
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Threat Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    Practicing incident response and monitoring for security threats
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Virtualization</h3>
                  <p className="text-sm text-muted-foreground">
                    Running security tools and isolated environments for testing
                  </p>
                </div>
              </div>
            </div>
          </CleanCard>
        </motion.div>
      </div>
    </div>
  );
};