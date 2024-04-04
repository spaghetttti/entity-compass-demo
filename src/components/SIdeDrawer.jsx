export default function SideDrawer() {
    return (
      <div className={`fixed inset-y-0 right-0 w-64 bg-gray-900 z-50 ${isOpen ? 'block' : 'hidden'}`}>
        {/* Sidebar content */}
        <div className="p-4">
          <h2 className="text-white text-lg font-semibold">Sidebar Content</h2>
          {/* Add your sidebar content here */}
          <button
            onClick={onClose}
            className="mt-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
          >
            Close Sidebar
          </button>
        </div>
      </div>
    );
  };