import { Brain, TrendingUp } from 'lucide-react'

export default function ThreatInsights() {
  const insights = [
    {
      title: 'LockBit 3.0 Campaign',
      confidence: 87,
      description: 'Active ransomware targeting financial sector. 12 attacks in 48h.',
      indicators: ['Lateral movement', 'Data exfiltration'],
    },
  ]

  return (
    <div className="bg-white rounded-md border border-gray-200 p-4">
      <div className="flex items-center space-x-2 mb-3">
        <Brain className="w-4 h-4 text-primary" />
        <h3 className="text-base font-semibold text-gray-900">Threat Intelligence</h3>
      </div>
      <div className="space-y-2">
        {insights.map((insight, index) => (
          <div key={index} className="border border-gray-200 rounded-md p-3 hover:border-primary transition-colors">
            <div className="flex items-start justify-between mb-1">
              <h4 className="text-xs font-semibold text-gray-900">{insight.title}</h4>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-3 h-3 text-success" />
                <span className="text-xs font-semibold text-success">{insight.confidence}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-2">{insight.description}</p>
            <div className="flex flex-wrap gap-1">
              {insight.indicators.map((indicator, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded"
                >
                  {indicator}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
