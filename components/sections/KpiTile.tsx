"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export type KpiTileProps = {
	label: string;
	value: string;
	sublabel?: string;
	aux?: string;
	delta?: string;
	trend: number[]; // 0..100
	className?: string;
	index?: number;
};

function toPath(values: number[], width = 120, height = 32) {
	const n = Math.max(values.length, 2);
	const step = width / (n - 1);
	return values
		.map((v, i) => {
			const x = i * step;
			const y = height - (Math.max(0, Math.min(100, v)) / 100) * height;
			return `${i === 0 ? "M" : "L"} ${x} ${y}`;
		})
		.join(" ");
}

export default function KpiTile({
	label,
	value,
	sublabel,
	aux,
	delta,
	trend,
	className,
	index = 0,
}: KpiTileProps) {
	const w = 120;
	const h = 32;
	const d = toPath(trend, w, h);

	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
			whileHover={{ scale: 1.02 }}
			className={clsx(
				"frosted-card rounded-2xl border border-gray-200 bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl",
				"p-5 transition-all duration-200 hover:shadow-[0_12px_28px_rgba(99,102,241,0.25)]",
				className
			)}
		>
			<div className="flex items-start justify-between">
				<p className="text-sm font-medium text-gray-700">{label}</p>
				{delta && (
					<span className="text-xs text-indigo-700 border border-indigo-200 rounded-full px-2 py-0.5 bg-indigo-50">
						{delta}
					</span>
				)}
			</div>
			<div className="mt-1">
				<div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
					{value}
				</div>
				<div className="text-sm text-gray-600">
					{sublabel}
					{aux ? ` · ${aux}` : ""}
				</div>
			</div>

			<svg
				className="mt-3"
				width={w}
				height={h}
				viewBox={`0 0 ${w} ${h}`}
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stopColor="#4F46E5" />
						<stop offset="100%" stopColor="#06B6D4" />
					</linearGradient>
				</defs>
				<path d={d} stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
				<path d={d} stroke="url(#spark)" strokeWidth="2" fill="none" />
			</svg>
		</motion.div>
	);
}


