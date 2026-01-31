import { TrendingUp, DollarSign, Shield, FileText, CheckCircle } from 'lucide-react'

export default function ExecutiveView() {
  const businessMetrics = [
    { label: 'Business Risk Score', value: '7.8/10', trend: '+0.5', icon: Shield, color: 'text-critical' },
    { label: 'Financial Exposure', value: '$8.2M', trend: '+12%', icon: DollarSign, color: 'text-warning' },
    { label: 'Compliance Status', value: '94%', trend: '+2%', icon: CheckCircle, color: 'text-success' },
    { label: 'Risk Trend', value: 'Rising', trend: '↑', icon: TrendingUp, color: 'text-critical' },
  ]

  const complianceFrameworks = [
    { name: 'SOC 2 Type II', status: 98, color: 'bg-success' },
    { name: 'ISO 27001', status: 96, color: 'bg-success' },
    { name: 'GDPR', status: 92, color: 'bg-success' },
    { name: 'HIPAA', status: 88, color: 'bg-warning' },
    { name: 'PCI DSS', status: 85, color: 'bg-warning' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Executive Risk Dashboard</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
          <FileText className="w-4 h-4" />
          <span className="text-sm font-medium">Generate Board Report</span>
        </button>
      </div>

      {/* Business Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {businessMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="bg-white rounded-md border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <Icon className={`w-6 h-6 ${metric.color}`} />
                <span className="text-xs font-semibold text-gray-500">{metric.trend}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-xs text-gray-600 font-medium">{metric.label}</div>
            </div>
          )
        })}
      </div>

      {/* Financial Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-md border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Impact Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-700">Potential Data Breach Cost</span>
              <span className="text-lg font-bold text-critical">$4.5M</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-700">Ransomware Impact</span>
              <span className="text-lg font-bold text-critical">$2.8M</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-700">Regulatory Fines Risk</span>
              <span className="text-lg font-bold text-warning">$900K</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 font-semibold">Total Exposure</span>
              <span className="text-xl font-bold text-gray-900">$8.2M</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Status</h3>
          <div className="space-y-3">
            {complianceFrameworks.map((framework, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 font-medium">{framework.name}</span>
                  <span className="text-gray-900 font-semibold">{framework.status}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${framework.color} h-2 rounded-full transition-all`}
                    style={{ width: `${framework.status}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Trends */}
      <div className="bg-white rounded-md border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quarterly Risk Trends</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-md">
            <div className="text-2xl font-bold text-gray-900">Q1 2024</div>
            <div className="text-sm text-gray-600 mt-1">Risk Score: 6.8</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-md">
            <div className="text-2xl font-bold text-gray-900">Q2 2024</div>
            <div className="text-sm text-gray-600 mt-1">Risk Score: 7.2</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-md">
            <div className="text-2xl font-bold text-gray-900">Q3 2024</div>
            <div className="text-sm text-gray-600 mt-1">Risk Score: 7.5</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-md border-2 border-primary">
            <div className="text-2xl font-bold text-primary">Q4 2024</div>
            <div className="text-sm text-gray-600 mt-1">Risk Score: 7.8</div>
          </div>
        </div>
      </div>
    </div>
  )
}
