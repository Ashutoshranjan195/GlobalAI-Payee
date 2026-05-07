import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  WalletIcon, 
  BanknotesIcon 
} from '@heroicons/react/24/solid';

const stats = [
  { name: 'Total Balance', value: '$12,450.00', icon: WalletIcon, color: 'bg-blue-500', trend: '+2.5%' },
  { name: 'Income', value: '$3,200.00', icon: ArrowUpIcon, color: 'bg-green-500', trend: '+12%' },
  { name: 'Expenses', value: '$1,850.00', icon: ArrowDownIcon, color: 'bg-red-500', trend: '-5%' },
  { name: 'Savings', value: '$2,400.00', icon: BanknotesIcon, color: 'bg-purple-500', trend: '+8%' },
];

const recentTransactions = [
  { id: 1, name: 'Amazon Shopping', category: 'Shopping', amount: '-$120.00', date: '2023-12-01', status: 'Completed' },
  { id: 2, name: 'Salary Deposit', category: 'Income', amount: '+$3,200.00', date: '2023-11-30', status: 'Completed' },
  { id: 3, name: 'Starbucks Coffee', category: 'Food & Drink', amount: '-$12.50', date: '2023-11-29', status: 'Completed' },
  { id: 4, name: 'Rent Payment', category: 'Housing', amount: '-$1,200.00', date: '2023-11-28', status: 'Pending' },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.color} text-white`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.name}</p>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h4>
                <p className="text-xs font-medium text-green-600 mt-1">{stat.trend} <span className="text-gray-400 font-normal">than last month</span></p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Transactions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle>Recent Transactions</CardTitle>
              <button className="text-primary-600 text-sm font-medium">View All</button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <th className="pb-3 font-semibold text-sm text-gray-500">Transaction</th>
                      <th className="pb-3 font-semibold text-sm text-gray-500">Category</th>
                      <th className="pb-3 font-semibold text-sm text-gray-500">Amount</th>
                      <th className="pb-3 font-semibold text-sm text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
                    {recentTransactions.map((tx) => (
                      <tr key={tx.id}>
                        <td className="py-4 font-medium text-gray-900 dark:text-white">{tx.name}</td>
                        <td className="py-4 text-sm text-gray-500">{tx.category}</td>
                        <td className={`py-4 font-bold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900 dark:text-white'}`}>
                          {tx.amount}
                        </td>
                        <td className="py-4 text-sm text-gray-500">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${tx.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Financial Insight */}
        <div>
          <Card className="bg-primary-600 text-white">
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                </div>
                <h4 className="font-bold">AI Financial Insight</h4>
              </div>
              <p className="text-primary-50 text-sm leading-relaxed mb-4">
                "Bhai, aapne pichle hafte coffee par 15% zyada kharch kiya hai. Agar aap ye bacha paate toh mahine ke end mein ₹2,500 extra bachte!"
              </p>
              <button className="w-full py-2 bg-white text-primary-600 rounded-lg font-bold text-sm">Ask AI Advisor</button>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Category Budget</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Shopping</span>
                  <span className="font-medium">₹5,000 / ₹8,000</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[62.5%] h-full bg-blue-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Food & Drink</span>
                  <span className="font-medium text-red-600">₹4,200 / ₹4,000</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
