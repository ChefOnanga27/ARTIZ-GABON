export default function StatCard({ title, value, icon }) {
    return (
      <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    );
  }
  