import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom'; // Using React Router
import { useAuth } from '../hooks/useAuth';

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');
  const { user, isAuthenticated } = useAuth(); // Replace NextAuth with your auth system
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Using React Router's navigate
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated) return;

      try {
        const res = await fetch(`/api/admin/analytics?period=${timeRange}`, {
          headers: {
            Authorization: `Bearer ${user.token}`, // Use your auth token
          },
        });

        if (!res.ok) throw new Error('Failed to fetch data');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Analytics fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeRange, isAuthenticated, user]);

  if (loading) return <div>Loading data...</div>;
  if (!isAuthenticated) return <div>Redirecting to login...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTimeRange('1d')}
          className={`px-4 py-2 rounded ${timeRange === '1d' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          24 Hours
        </button>
        <button
          onClick={() => setTimeRange('7d')}
          className={`px-4 py-2 rounded ${timeRange === '7d' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          7 Days
        </button>
        <button
          onClick={() => setTimeRange('30d')}
          className={`px-4 py-2 rounded ${timeRange === '30d' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          30 Days
        </button>
      </div>

      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Page Views</h2>
            <Chart
              options={{
                chart: { id: 'page-views' },
                xaxis: { categories: data.map((item) => item.path) },
              }}
              series={[{ name: 'Visits', data: data.map((item) => item.visits) }]}
              type="bar"
              height={300}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Page</th>
                  <th className="text-right py-2">Visits</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.path} className="border-b">
                    <td className="py-2">{item.path}</td>
                    <td className="text-right py-2">{item.visits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow">
          <p>No analytics data available for the selected period.</p>
        </div>
      )}
    </div>
  );
}
