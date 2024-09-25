
export default function PersonalCard({ title, onEdit}) {
  return (
    <div className="personal-card">
      <span className="personal-card-title">{title}</span>
      <div className="personal-card-actions">
        <button className="personal-card-action edit" onClick={onEdit}>
          <i className="ti-pencil"></i>
        </button>
      </div>
    </div>
  );
}