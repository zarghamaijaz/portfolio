"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Wrench, Code2, Database, Braces, FileCode, Boxes, Cpu, Globe } from 'lucide-react';

const PhysicsIcons = () => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const tools = [
    { name: 'React', icon: Braces, color: '#61DAFB' },
    { name: 'TypeScript', icon: FileCode, color: '#3178C6' },
    { name: 'Next.js', icon: Code2, color: '#000000' },
    { name: 'Node.js', icon: Cpu, color: '#339933' },
    { name: 'PostgreSQL', icon: Database, color: '#4169E1' },
    { name: 'Tailwind', icon: Wrench, color: '#06B6D4' },
    { name: 'API', icon: Globe, color: '#FF6B6B' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    // Dynamic import for Matter.js (client-side only)
    import('matter-js').then((Matter) => {
      const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint, Events } = Matter;

      // Create engine
      const engine = Engine.create({
        gravity: { x: 0, y: 0.5 }
      });
      engineRef.current = engine;

      const canvas = canvasRef.current;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      // Create renderer
      const render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
          width: width,
          height: height,
          wireframes: false,
          background: 'transparent'
        }
      });
      renderRef.current = render;

      // Create boundaries (walls)
      const wallThickness = 50;
      const walls = [
        Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { 
          isStatic: true,
          render: { fillStyle: 'transparent' }
        }), // bottom
        Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { 
          isStatic: true,
          render: { fillStyle: 'transparent' }
        }), // top
        Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { 
          isStatic: true,
          render: { fillStyle: 'transparent' }
        }), // left
        Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { 
          isStatic: true,
          render: { fillStyle: 'transparent' }
        }) // right
      ];

      // Create icon bodies
      const iconSize = 60;
      const bodies = tools.map((tool, i) => {
        const x = (width / (tools.length + 1)) * (i + 1);
        const y = Math.random() * (height / 2) + 50;
        
        return Bodies.circle(x, y, iconSize / 2, {
          restitution: 0.6,
          friction: 0.05,
          density: 0.04,
          render: {
            fillStyle: tool.color,
            strokeStyle: '#ffffff',
            lineWidth: 2
          },
          plugin: {
            toolData: tool
          }
        });
      });

      // Add mouse control
      const mouse = Mouse.create(canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false }
        }
      });

      // Add all bodies to the world
      World.add(engine.world, [...walls, ...bodies, mouseConstraint]);

      // Run the engine and renderer
      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      // Custom rendering for icons
      Events.on(render, 'afterRender', () => {
        const context = render.context;
        
        bodies.forEach((body) => {
          const pos = body.position;
          const angle = body.angle;
          const tool = body.plugin.toolData;
          
          context.save();
          context.translate(pos.x, pos.y);
          context.rotate(angle);
          
          // Draw icon background circle
          context.beginPath();
          context.arc(0, 0, iconSize / 2, 0, Math.PI * 2);
          context.fillStyle = tool.color + '20';
          context.fill();
          context.strokeStyle = tool.color;
          context.lineWidth = 2;
          context.stroke();
          
          // Draw tool name
          context.fillStyle = '#ffffff';
          context.font = 'bold 12px sans-serif';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(tool.name, 0, 0);
          
          context.restore();
        });
      });

      // Cleanup
      return () => {
        Render.stop(render);
        Runner.stop(runner);
        World.clear(engine.world, false);
        Engine.clear(engine);
        render.canvas.remove();
        render.textures = {};
      };
    });
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center">
        <div className="text-slate-400">Loading physics engine...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full h-96 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          width={1200}
          height={400}
        />
      </div>
      
      <div className="mt-12 flex flex-wrap gap-3 justify-center">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700"
          >
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: tool.color }}
            />
            <span className="text-slate-300 text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhysicsIcons;