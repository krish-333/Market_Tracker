"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

import { overview, investors, ipos } from "@/data/market-data";

const COLORS = ["#2563EB", "#16A34A", "#DC2626", "#F59E0B"];

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          India Equity Market Intelligence Tracker
        </h1>

        <p className="text-gray-400 mt-2">
          Institutional Investor & IPO Analytics Dashboard
        </p>
      </div>

      {/* KPI SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="kpi-card">
          <p className="text-gray-400">Total IPOs</p>
          <h2 className="text-3xl font-bold mt-2">
            {overview.totalIPOs}
          </h2>
        </div>

        <div className="kpi-card">
          <p className="text-gray-400">Mainboard IPOs</p>
          <h2 className="text-3xl font-bold mt-2">
            {overview.mainboardIPOs}
          </h2>
        </div>

        <div className="kpi-card">
          <p className="text-gray-400">SME IPOs</p>
          <h2 className="text-3xl font-bold mt-2">
            {overview.smeIPOs}
          </h2>
        </div>

        <div className="kpi-card">
          <p className="text-gray-400">FII Net Inflows</p>
          <h2 className="text-3xl font-bold mt-2">
            ₹{overview.fiiNetInflowCr.toLocaleString()} Cr
          </h2>
        </div>
      </section>

      {/* IPO VOLUME CHART */}
      <section className="card mb-10">
        <h2 className="section-title">IPO Volume Trend</h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={overview.ipoVolume.labels.map((label, index) => ({
            year: label,
            volume: overview.ipoVolume.volumeCr[index],
          }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />
            <Bar dataKey="volume" fill="#2563EB" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* AUM TREND */}
      <section className="card mb-10">
        <h2 className="section-title">Institutional AUM Trend</h2>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={overview.aumTrend.labels.map((label, index) => ({
              year: label,
              DomesticMF: overview.aumTrend.domesticMF[index],
              FII: overview.aumTrend.fiiHoldings[index],
              Insurance: overview.aumTrend.insurance[index],
            }))}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />

            <Line type="monotone" dataKey="DomesticMF" stroke="#2563EB" />
            <Line type="monotone" dataKey="FII" stroke="#16A34A" />
            <Line type="monotone" dataKey="Insurance" stroke="#F59E0B" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* TOP INVESTORS */}
      <section className="card mb-10">
        <h2 className="section-title">
          Top Institutional Investors
        </h2>

        <div className="table-container">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3">Rank</th>
                <th>Name</th>
                <th>Type</th>
                <th>Deals</th>
                <th>IPO Anchors</th>
                <th>AUM (₹ Cr)</th>
              </tr>
            </thead>

            <tbody>
              {investors.slice(0, 10).map((investor) => (
                <tr
                  key={investor.rank}
                  className="border-b border-gray-800 hover:bg-slate-800"
                >
                  <td className="py-4">{investor.rank}</td>
                  <td>{investor.name}</td>
                  <td>{investor.type}</td>
                  <td>{investor.dealCount3yr}</td>
                  <td>{investor.ipoAnchors}</td>
                  <td>
                    ₹{investor.equityAumCr.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* IPO CATEGORY PIE CHART */}
      <section className="card mb-10">
        <h2 className="section-title">
          IPO Category Distribution
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={[
                {
                  name: "Mainboard",
                  value: overview.mainboardIPOs,
                },
                {
                  name: "SME",
                  value: overview.smeIPOs,
                },
              ]}
              dataKey="value"
              outerRadius={120}
              label
            >
              {COLORS.map((color, index) => (
                <Cell key={index} fill={color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* TOP IPO TABLE */}
      <section className="card">
        <h2 className="section-title">
          Top IPO Performers
        </h2>

        <div className="table-container">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3">Company</th>
                <th>Sector</th>
                <th>Listing Gain</th>
                <th>QIB Subs.</th>
                <th>Current Return</th>
              </tr>
            </thead>

            <tbody>
              {ipos.slice(0, 10).map((ipo, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-slate-800"
                >
                  <td className="py-4">{ipo.company}</td>
                  <td>{ipo.sector}</td>
                  <td>{ipo.listingGainPct}%</td>
                  <td>{ipo.qibSubscriptionX}x</td>
                  <td>{ipo.currentReturnPct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
