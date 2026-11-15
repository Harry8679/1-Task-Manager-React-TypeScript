const MyTasks = () => {
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2>My Tasks</h2>
          <p>You have 0 tasks</p>
        </div>

        <button type="button" className="text-white bg-blue-600 p-3 rounded-2xl">
          Add Task
        </button>
      </div>
    </section>
  );
};

export default MyTasks;