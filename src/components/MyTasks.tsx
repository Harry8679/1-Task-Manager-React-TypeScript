const MyTasks = () => {
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
      <div>
        <div>
          <h2>My Tasks</h2>
          <p>You have 0 tasks</p>
        </div>

        <button type="button">
          Add Task
        </button>
      </div>
    </section>
  );
};

export default MyTasks;