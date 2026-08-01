import { Play, RotateCw, DownloadCloud, FolderOpen, Puzzle, Terminal, Activity, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useGSAP';

export function ControlPanel() {
  useScrollReveal('.cp-reveal', '.cp-stagger');

  return (
    <section className="py-24 bg-[#0A0F24] cp-reveal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-violet/10 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="block text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">Platform</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Professional Grade Control Panel</h2>
          <p className="text-xl text-white/60 font-medium">Manage your entire infrastructure from a beautiful, responsive, and powerful dashboard built for power users.</p>
        </div>

        <div className="relative mx-auto max-w-5xl cp-stagger animate-float">
          {/* Browser Chrome */}
          <div className="glass-panel-dark rounded-t-2xl border-b border-white/10 p-4 flex items-center gap-4 bg-[#050A18]/90">
            <div className="flex gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto bg-white/5 rounded-md px-32 py-1.5 text-xs text-white/30 font-mono hidden md:block">
              panel.nexusforge.com/server/srv_8f92k1
            </div>
          </div>
          
          {/* Dashboard Body */}
          <div className="glass-panel-dark rounded-b-2xl border-t-0 p-6 md:p-8 bg-[#050A18]/80 backdrop-blur-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-black text-white">Survival Vanilla - US East</h3>
                  <span className="px-3 py-1 rounded font-bold text-xs bg-green-500/20 text-green-400 border border-green-500/30 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Running
                  </span>
                </div>
                <p className="text-sm text-white/50 font-mono font-medium">192.168.1.104:25565</p>
              </div>
              
              <div className="flex gap-3">
                <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 hover:border-white/20">
                  <Play className="w-5 h-5 fill-current" />
                </button>
                <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 hover:border-white/20">
                  <RotateCw className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-red-400 transition-colors border border-white/5 hover:border-red-500/30">
                  <Activity className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                <div className="text-xs text-white/50 font-bold mb-3 uppercase flex items-center gap-2"><CpuIcon className="w-4 h-4"/> CPU Usage</div>
                <div className="text-3xl font-black text-white">34.2%</div>
                <div className="mt-3 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-cyan w-[34%] shadow-[0_0_10px_rgba(0,184,224,0.5)]"></div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                <div className="text-xs text-white/50 font-bold mb-3 uppercase flex items-center gap-2"><RamIcon className="w-4 h-4"/> RAM Usage</div>
                <div className="text-3xl font-black text-white">6.2 <span className="text-base font-medium text-white/50">/ 12 GB</span></div>
                <div className="mt-3 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-violet w-[51%] shadow-[0_0_10px_rgba(107,79,255,0.5)]"></div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                <div className="text-xs text-white/50 font-bold mb-3 uppercase flex items-center gap-2"><Users className="w-4 h-4"/> Players</div>
                <div className="text-3xl font-black text-white">847 <span className="text-base font-medium text-white/50">/ ∞</span></div>
                <div className="mt-3 text-sm font-bold text-emerald-400">+12 in last hour</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                <div className="text-xs text-white/50 font-bold mb-3 uppercase flex items-center gap-2"><HardDriveIcon className="w-4 h-4"/> Storage</div>
                <div className="text-3xl font-black text-white">41.8 <span className="text-base font-medium text-white/50">/ 100 GB</span></div>
                <div className="mt-3 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[41%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-[#02040A] rounded-2xl border border-white/10 overflow-hidden flex flex-col h-72 shadow-inner">
                <div className="border-b border-white/10 p-4 flex items-center gap-3 bg-white/5">
                  <Terminal className="w-5 h-5 text-white/50" />
                  <span className="text-sm font-bold text-white/70 uppercase tracking-wider">Console</span>
                </div>
                <div className="p-5 font-mono text-xs leading-loose text-white/60 overflow-hidden relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] to-transparent z-10 h-12 bottom-0 top-auto"></div>
                  <div className="space-y-1 animate-float" style={{ animation: 'float 20s linear infinite', animationDirection: 'reverse' }}>
                    <div className="text-white/40">[14:32:01] INFO: Starting minecraft server version 1.20.4</div>
                    <div className="text-white/40">[14:32:01] INFO: Loading properties</div>
                    <div className="text-white/40">[14:32:01] INFO: Default game type: SURVIVAL</div>
                    <div className="text-white/40">[14:32:01] INFO: Generating keypair</div>
                    <div>[14:32:02] INFO: Starting Minecraft server on *:25565</div>
                    <div>[14:32:02] INFO: Using default channel type</div>
                    <div>[14:32:04] INFO: Preparing level "world"</div>
                    <div>[14:32:05] INFO: Preparing start region for dimension minecraft:overworld</div>
                    <div className="text-brand-cyan font-bold">[14:32:07] INFO: Time elapsed: 2451 ms</div>
                    <div className="text-emerald-400 font-bold">[14:32:07] INFO: Done (5.134s)! For help, type "help"</div>
                    <div>[14:34:12] INFO: Player_One joined the game</div>
                    <div>[14:35:44] INFO: ShadowNinja joined the game</div>
                    <div className="text-yellow-400 font-bold">[14:36:01] WARN: Can't keep up! Is the server overloaded?</div>
                    <div>[14:38:22] INFO: Player_One lost connection: Disconnected</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group hover:scale-[1.02] shadow-lg">
                  <div className="flex items-center gap-4 text-white font-bold text-lg">
                    <FolderOpen className="w-6 h-6 text-brand-cyan" /> File Manager
                  </div>
                  <span className="text-white/30 group-hover:text-white transition-colors group-hover:translate-x-1 transform">→</span>
                </button>
                <button className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group hover:scale-[1.02] shadow-lg">
                  <div className="flex items-center gap-4 text-white font-bold text-lg">
                    <Puzzle className="w-6 h-6 text-brand-violet" /> Mod Manager
                  </div>
                  <span className="text-white/30 group-hover:text-white transition-colors group-hover:translate-x-1 transform">→</span>
                </button>
                <button className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group hover:scale-[1.02] shadow-lg">
                  <div className="flex items-center gap-4 text-white font-bold text-lg">
                    <DownloadCloud className="w-6 h-6 text-emerald-400" /> Backups
                  </div>
                  <span className="text-white/30 group-hover:text-white transition-colors group-hover:translate-x-1 transform">→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function CpuIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
}

function RamIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path><path d="M14 2v20"></path><path d="M10 2v20"></path><path d="M2 14h20"></path><path d="M2 10h20"></path></svg>
}

function HardDriveIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg>
}

