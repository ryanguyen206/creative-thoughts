export default function Message({ children, username, description, avatar }) {
    return (
      <div className="rounded-2xl shadow-cyan-900 shadow-sm p-4 mt-7">
        <div className="flex items-center gap-2">
          <img className='w-10 rounded-full 'src={avatar}/>
          <h2 className="uppercase font-medium">{username}</h2>
        </div>
        <div className="py-4">
          <p>{description}</p>
        </div>
        {children}
      </div>
    );
  }