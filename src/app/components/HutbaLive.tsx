import { Plus, Eye, Play, Settings2, Archive, Copy } from "lucide-react";
import { Link } from "react-router";
import { MinaretIcon } from "./icons/MosqueIcon";

export function HutbaLive() {
  const sessions = [
    {
      id: "1",
      title: "Friday Jumu'ah - Main Hall",
      organization: "Downtown Masjid",
      source: "Arabic",
      targets: ["English", "Urdu", "French"],
      status: "Live",
      started: "10:30 AM",
      duration: "00:42:15",
      viewers: 342,
      quality: 94,
    },
    {
      id: "2",
      title: "Taraweeh Night 15",
      organization: "Community Center",
      source: "Arabic",
      targets: ["English", "Spanish"],
      status: "Live",
      started: "9:45 PM",
      duration: "00:18:32",
      viewers: 128,
      quality: 91,
    },
    {
      id: "3",
      title: "Sunday Youth Lecture",
      organization: "Youth Institute",
      source: "English",
      targets: ["Arabic", "Somali"],
      status: "Scheduled",
      started: "Tomorrow 2:00 PM",
      duration: "--:--:--",
      viewers: 0,
      quality: null,
    },
    {
      id: "4",
      title: "Eid Khutbah 2026",
      organization: "Downtown Masjid",
      source: "Arabic",
      targets: ["English", "Urdu", "Bengali", "Turkish"],
      status: "Ended",
      started: "March 30, 8:00 AM",
      duration: "00:52:18",
      viewers: 1247,
      quality: 96,
    },
    {
      id: "5",
      title: "Weekly Tafsir Session",
      organization: "Islamic Center",
      source: "Arabic",
      targets: ["English"],
      status: "Ended",
      started: "Yesterday 7:00 PM",
      duration: "01:15:45",
      viewers: 89,
      quality: 88,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">HutbaLive</h1>
          <p className="text-sm text-[#475569] mt-1">
            Real-time khutbah translation and live session management
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#D4AF37] text-white text-sm font-semibold rounded-lg hover:bg-[#C49B2F] transition-colors shadow-sm">
          <Plus size={18} />
          Start Session
        </button>
      </div>

      {/* Tabs and Filters */}
      <div className="bg-white border border-[#CBD5E1] rounded-lg">
        <div className="border-b border-[#CBD5E1] px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="px-3 py-2 text-sm font-medium text-[#0F766E] border-b-2 border-[#0F766E]">
                Active
              </button>
              <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A]">
                Archive
              </button>
              <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A]">
                Templates
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#475569]">
                2 live sessions • 470 total viewers
              </span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Session
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Languages
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Started / Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Viewers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Quality
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#CBD5E1]">
              {sessions.map((session) => (
                <tr key={session.id} className="hover:bg-[#F8FAFC]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {session.status === "Live" && (
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                      )}
                      <div>
                        <Link
                          to={`/hutba-live/${session.id}`}
                          className="text-sm font-medium text-[#0F172A] hover:text-[#0F766E]"
                        >
                          {session.title}
                        </Link>
                        {session.status === "Live" && (
                          <p className="text-xs text-[#475569] mt-0.5">
                            Duration: {session.duration}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#475569]">
                    {session.organization}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-xs text-[#475569] mb-1">
                        From: <span className="font-medium text-[#0F172A]">{session.source}</span>
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {session.targets.map((lang, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-[#F0FDFA] text-[#0F766E] text-xs rounded"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs font-semibold rounded-full ${
                        session.status === "Live"
                          ? "bg-red-100 text-red-700"
                          : session.status === "Scheduled"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-[#CBD5E1] text-[#475569]"
                      }`}
                    >
                      {session.status === "Live" && <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>}
                      {session.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#475569]">
                    {session.started}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#475569]">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span className="font-medium text-[#0F172A]">{session.viewers}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {session.quality ? (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-[60px] h-1.5 bg-[#CBD5E1] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              session.quality >= 90 ? "bg-green-500" : "bg-yellow-500"
                            }`}
                            style={{ width: `${session.quality}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-[#475569] font-medium">
                          {session.quality}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-[#CBD5E1]">--</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {session.status === "Live" && (
                        <>
                          <Link
                            to={`/hutba-live/${session.id}`}
                            className="p-2 hover:bg-[#F0FDFA] rounded"
                            title="View Live"
                          >
                            <Play size={16} className="text-[#0F766E]" />
                          </Link>
                          <button className="p-2 hover:bg-[#F0FDFA] rounded" title="Settings">
                            <Settings2 size={16} className="text-[#475569]" />
                          </button>
                        </>
                      )}
                      {session.status === "Ended" && (
                        <>
                          <button className="p-2 hover:bg-[#F0FDFA] rounded" title="Copy URL">
                            <Copy size={16} className="text-[#475569]" />
                          </button>
                          <button className="p-2 hover:bg-[#F0FDFA] rounded" title="Archive">
                            <Archive size={16} className="text-[#475569]" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-4">
          <p className="text-xs text-[#475569] uppercase tracking-wide mb-1">
            This Week
          </p>
          <p className="text-2xl font-semibold text-[#0F172A]">12</p>
          <p className="text-xs text-[#475569] mt-1">Total sessions</p>
        </div>
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-4">
          <p className="text-xs text-[#475569] uppercase tracking-wide mb-1">
            Avg Duration
          </p>
          <p className="text-2xl font-semibold text-[#0F172A]">48m</p>
          <p className="text-xs text-[#475569] mt-1">Per session</p>
        </div>
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-4">
          <p className="text-xs text-[#475569] uppercase tracking-wide mb-1">
            Total Viewers
          </p>
          <p className="text-2xl font-semibold text-[#0F172A]">3.2K</p>
          <p className="text-xs text-green-600 mt-1">+18% from last week</p>
        </div>
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-4">
          <p className="text-xs text-[#475569] uppercase tracking-wide mb-1">
            Avg Quality
          </p>
          <p className="text-2xl font-semibold text-[#0F172A]">92%</p>
          <p className="text-xs text-[#475569] mt-1">Across all languages</p>
        </div>
      </div>
    </div>
  );
}