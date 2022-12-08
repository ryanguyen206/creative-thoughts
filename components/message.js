export default function Message({ children, username, description }) {
    return (
      <div className="bg-white p-8 rounded-lg">
        <div className="flex items-center gap-2">
   
          <h2>{username}</h2>
        </div>
        <div className="py-4">
          <p>{description}</p>
        </div>
        {children}
      </div>
    );
  }