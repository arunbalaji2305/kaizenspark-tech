"use client";

import { motion } from "framer-motion";
import KpiTile from "@/components/sections/KpiTile";
import { useMemo } from "react";

type Kpi = {
	id: string;
	label: string;
	value: string;
	sublabel: string;
	aux?: string;
	delta?: string;
	trend: number[];
};

const KPIS: Kpi[] = [
	{ id: "value", label: "Value Delivered", value: "$8.2M", sublabel: "last 90 days", delta: "+12%", trend: [20, 24, 28, 36, 40, 44, 48, 56, 60, 66, 72, 78] },
	{ id: "deploy", label: "Deployment Frequency", value: "2.3 min", sublabel: "avg to ship", delta: "faster", trend: [70, 62, 60, 55, 50, 48, 46, 44, 43, 42, 40, 38] },
	{ id: "quality", label: "Quality & Reliability", value: "98/100", sublabel: "release quality · MTTR 2.1h", trend: [86, 88, 90, 91, 92, 94, 95, 96, 96, 97, 98, 98] },
	{ id: "outcomes", label: "Client Outcomes", value: "350%", sublabel: "avg ROI · Satisfaction 98%", trend: [40, 42, 45, 48, 50, 55, 58, 62, 68, 74, 80, 85] },
];

const delivered = [22, 28, 35, 40, 46, 52, 58, 66, 72, 78, 83, 88];
const target =    [28, 32, 40, 46, 52, 58, 64, 70, 76, 82, 86, 90];

function toPath(values: number[], w: number, h: number) {
	const step = w / (values.length - 1);
	return values.map((v, i) => {
		const x = i * step;
		const y = h - (v / 100) * h;
		return `${i === 0 ? "M" : "L"} ${x} ${y}`;
	}).join(" ");
}

export default function HeroDashboard() {
	const w = 720;
	const h = 220;
	const pathDelivered = useMemo(() => toPath(delivered, w, h), []);
	const pathTarget = useMemo(() => toPath(target, w, h), []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
			className="relative w-full max-w-[880px] mx-auto"
			role="region"
			aria-label="Hero analytics dashboard"
		>
			{/* radial glow backdrop */}
			<div className="pointer-events-none absolute -inset-8 -z-10">
				<div
					className="w-full h-full rounded-[36px]"
					style={{
						background: "radial-gradient(ellipse at center, rgba(99,102,241,0.15), transparent 60%)",
						filter: "blur(40px)"
					}}
				/>
			</div>

			<div className="rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
				{/* KPI grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{KPIS.map((k, i) => (
						<KpiTile key={k.id} index={i} label={k.label} value={k.value} sublabel={k.sublabel} aux={k.aux} delta={k.delta} trend={k.trend} />
					))}
				</div>

				{/* Chart */}
				<div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
					<div className="flex items-center justify-between">
						<p className="text-gray-900 font-semibold">Value delivered vs. target (last 12 sprints)</p>
						<span className="text-xs text-gray-600">Updated 2 min ago</span>
					</div>
					<div className="mt-3 overflow-hidden">
						<svg
							width="100%"
							height={h}
							viewBox={`0 0 ${w} ${h}`}
							role="img"
							aria-label="Delivered value vs target"
						>
							<defs>
								<linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
									<stop offset="0%" stopColor="#4F46E5" />
									<stop offset="100%" stopColor="#06B6D4" />
								</linearGradient>
								<linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
									<stop stopColor="#6366F1" stopOpacity="0.25" />
									<stop offset="1" stopColor="transparent" />
								</linearGradient>
							</defs>
							{/* Fill under delivered */}
							<path d={`${pathDelivered} L ${w} ${h} L 0 ${h} Z`} fill="url(#chartFill)" />
							{/* Target dashed */}
							<path d={pathTarget} stroke="rgba(0,0,0,0.3)" strokeWidth={2} strokeDasharray="6 6" fill="none" />
							{/* Delivered gradient stroke */}
							<motion.path
								d={pathDelivered}
								stroke="url(#strokeGrad)"
								strokeWidth={3}
								fill="none"
								initial={{ pathLength: 0 }}
								whileInView={{ pathLength: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 1.2, ease: "easeInOut" }}
							/>
							{/* Small dots */}
							{delivered.map((v, i) => {
								const x = (i / (delivered.length - 1)) * w;
								const y = h - (v / 100) * h;
								return <circle key={i} cx={x} cy={y} r={3} fill="#06B6D4" stroke="white" strokeWidth={1.5} />;
							})}
						</svg>
					</div>
				</div>
			</div>
		</motion.div>
	);
}


